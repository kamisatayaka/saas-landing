import { useEffect, useState } from 'react'
import { Logo } from './Landing'

const toneOptions = ['Friendly', 'Premium', 'Technical', 'Bold', 'Witty']

const productExamples = [
  'A task-management app for remote teams.',
  'A meal-prep delivery service for busy parents.',
  'A bookkeeping tool for freelancers.',
  'A language-learning app for travelers.',
  'A workout program for busy professionals.',
]

export default function Dashboard({ user, onLogout }) {
  const [brief, setBrief] = useState(productExamples[0])
  const [tone, setTone] = useState('Friendly')
  const [generating, setGenerating] = useState(false)
  const [copy, setCopy] = useState(null)
  const [error, setError] = useState(null)

  const email = user?.email || 'you@example.com'
  const initial = (email[0] || 'U').toUpperCase()

  // Call the Vercel serverless function (/api/generate) which uses DeepSeek.
  const handleGenerate = async () => {
    if (!brief.trim()) return
    setGenerating(true)
    setCopy(null)
    setError(null)
    try {
      const resp = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brief, tone }),
      })
      const data = await resp.json()
      if (!resp.ok) throw new Error(data?.error || 'Generation failed.')
      setCopy(data)
    } catch (e) {
      console.error(e)
      setError(e?.message || 'Could not generate copy. Please try again.')
    } finally {
      setGenerating(false)
    }
  }

  useEffect(() => {
    // Reset copy when brief/tone changes.
    setCopy(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="dash">
      {/* ===== Top bar ===== */}
      <header className="dash-top">
        <div className="dash-top-inner">
          <Logo />
          <nav className="dash-nav">
            <a href="#app" className="active">Generate</a>
            <a href="#app">Library</a>
            <a href="#app">Brand voice</a>
          </nav>
          <div className="dash-user">
            <span className="dash-avatar">{initial}</span>
            <span className="dash-email">{email}</span>
            <button onClick={onLogout} className="btn btn-ghost">Log out</button>
          </div>
        </div>
      </header>

      {/* ===== Content ===== */}
      <main className="dash-main">
        <div className="dash-heading">
          <h1>Generate on-brand copy</h1>
          <p>Pick a brief, choose a tone, and let CopyCraft draft it for you.</p>
        </div>

        <div className="dash-layout">
          {/* ===== Left: brief ===== */}
          <section className="dash-panel">
            <h2>Your brief</h2>

            <label className="auth-field">
              <span>What is it about?</span>
              <textarea
                rows="3"
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                placeholder="Describe your product in one or two sentences…"
              />
            </label>

            <div className="dash-chips">
              {productExamples.map((p) => (
                <button
                  key={p}
                  className={`chip ${brief === p ? 'active' : ''}`}
                  onClick={() => setBrief(p)}
                >
                  {p.replace(/[.]$/, '').slice(0, 24)}…
                </button>
              ))}
            </div>

            <p className="dash-field-label">Tone</p>
            <div className="dash-tones">
              {toneOptions.map((t) => (
                <button
                  key={t}
                  className={`chip ${tone === t ? 'active' : ''}`}
                  onClick={() => setTone(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <button
              onClick={handleGenerate}
              className="btn btn-primary dash-generate"
              disabled={generating || !brief.trim()}
            >
              {generating ? 'Generating…' : 'Generate copy'}
            </button>
          </section>

          {/* ===== Right: output ===== */}
          <section className="dash-panel dash-output">
            <h2>Output</h2>

            {generating ? (
              <div className="dash-loading">
                <span className="spinner" aria-hidden="true" />
                <p>Drafting your copy…</p>
              </div>
            ) : error ? (
              <div className="dash-empty">
                <p className="dash-error">{error}</p>
                <p className="dash-empty-hint">Check the connection and try again.</p>
              </div>
            ) : copy ? (
              <div className="dash-copy">
                <div className="dash-copy-block">
                  <span className="dash-copy-label">Headline</span>
                  <p className="dash-copy-headline">{copy.headline}</p>
                </div>
                <div className="dash-copy-block">
                  <span className="dash-copy-label">Subhead</span>
                  <p>{copy.subhead}</p>
                </div>
                <div className="dash-copy-block">
                  <span className="dash-copy-label">Body</span>
                  <p>{copy.bullet1}</p>
                  <p>{copy.bullet2}</p>
                </div>
                <div className="dash-copy-block">
                  <span className="dash-copy-label">CTA</span>
                  <p className="dash-copy-cta">{copy.cta}</p>
                </div>
                <div className="dash-copy-actions">
                  <button
                    className="btn btn-outline"
                    onClick={() => navigator.clipboard?.writeText(
                      `${copy.headline}\n\n${copy.subhead}\n\n${copy.bullet1}\n${copy.bullet2}\n\n${copy.cta}`,
                    )}
                  >
                    Copy all
                  </button>
                  <button className="btn btn-outline" onClick={handleGenerate}>
                    Regenerate
                  </button>
                </div>
              </div>
            ) : (
              <div className="dash-empty">
                <p>Your generated copy will appear here.</p>
                <p className="dash-empty-hint">Click “Generate copy” to start.</p>
              </div>
            )}
          </section>
        </div>
      </main>

      <footer className="dash-footer">
        <span>© 2025 CopyCraft AI. Demo workspace — content is generated locally.</span>
      </footer>
    </div>
  )
}
