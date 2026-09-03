// Vercel Serverless Function: /api/generate
// Receives a brief + tone from the frontend and uses DeepSeek to write copy.
// The DeepSeek API key lives in the DEEPSEEK_API_KEY env var (never exposed to the client).

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed. Use POST.' })
    return
  }

  try {
    const { brief, tone, format } = req.body || {}

    if (!brief) {
      res.status(400).json({ error: 'A "brief" is required.' })
      return
    }

    const apiKey = process.env.DEEPSEEK_API_KEY
    if (!apiKey) {
      res.status(500).json({ error: 'DEEPSEEK_API_KEY is not configured.' })
      return
    }

    const safeTone = tone || 'Friendly'

    // Build a prompt that yields structured marketing copy.
    const system =
      'You are an expert marketing copywriter. Given a product brief and a tone, ' +
      'write short, high-converting marketing copy. Respond ONLY with valid JSON in this exact shape: ' +
      '{"headline": "...", "subhead": "...", "bullet1": "...", "bullet2": "...", "cta": "..."}. ' +
      'Keep each field concise (headline under 10 words, bullet paragraphs 1-2 sentences). ' +
      'Match the requested tone. Do not wrap the JSON in code fences or add extra text.'

    const user = `Brief: ${brief}\nTone: ${safeTone}\n\nWrite the marketing copy now.`

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-v4-flash',
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user },
        ],
        temperature: 0.8,
        max_tokens: 500,
        // Ask for JSON output. DeepSeek supports JSON mode via response_format.
        response_format: { type: 'json_object' },
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('DeepSeek error:', data)
      res.status(502).json({ error: data?.error?.message || 'AI generation failed.' })
      return
    }

    const content = data?.choices?.[0]?.message?.content
    if (!content) {
      res.status(502).json({ error: 'AI returned an empty response.' })
      return
    }

    // Try to parse JSON; fall back to a plain-text copy if parsing fails.
    let copy
    try {
      copy = JSON.parse(content)
    } catch {
      copy = {
        headline: content.split('\n')[0] || '',
        subhead: content,
        bullet1: '',
        bullet2: '',
        cta: '',
      }
    }

    res.status(200).json({
      headline: copy.headline || '',
      subhead: copy.subhead || '',
      bullet1: copy.bullet1 || '',
      bullet2: copy.bullet2 || '',
      cta: copy.cta || '',
    })
  } catch (err) {
    console.error('generate error:', err)
    res.status(500).json({ error: 'Something went wrong generating copy.' })
  }
}
