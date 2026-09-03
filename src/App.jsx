import './App.css'

// ---------- Small presentational helpers ----------
const Logo = () => (
  <div className="logo">
    <span className="logo-mark" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l2.4 6.8H21l-5.3 4 2.1 6.9L12 15.4 6.2 19.7l2.1-6.9-5.3-4h6.6L12 2z"
          fill="currentColor"
        />
      </svg>
    </span>
    <span className="logo-text">CopyCraft</span>
  </div>
)

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M13 5l7 7-7 7M20 12H4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// ---------- Icons for features ----------
const features = [
  {
    title: 'AI Landing Page Copy',
    text: 'Turn a few bullet points into a complete page: headline, subhead, and persuasive sections that convert.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 9l2 2-2 2M12 13h5" strokeLinecap="round" />
        <path d="M9 20h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Ad & Social Posts',
    text: 'Write 20 on-brand variations from a single brief. Perfect for A/B testing headlines and hooks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <circle cx="12" cy="11" r="3.2" />
        <path d="M8.5 17.5l1.5-3M15.5 14.5L17 17.5M9 8.5h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Brand Voice Cloning',
    text: 'Teach CopyCraft your tone once. Every output sounds like you — not like a generic robot.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12h3l2-6 4 12 2-6h5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'SEO-Friendly Output',
    text: 'Built-in keyword hints and structure that help your pages rank, without stuffing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '70+ Templates',
    text: 'Landing pages, emails, product descriptions, press releases — start from a proven structure.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 3h6l4 4v14H5V3z" />
        <path d="M9 3v4h6" strokeLinejoin="round" />
        <path d="M8 12h8M8 16h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'One-Click Export',
    text: 'Push copy straight to Notion, Google Docs, or your CMS. Edit in the tools you already use.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" />
      </svg>
    ),
  },
]

const steps = [
  { n: '01', title: 'Brief it', text: 'Paste a few bullet points, your product, and your audience.' },
  { n: '02', title: 'Generate', text: 'CopyCraft drafts on-brand copy in under 10 seconds.' },
  { n: '03', title: 'Refine & publish', text: 'Tweak tone, compare variations, and export anywhere.' },
]

const testimonials = [
  {
    quote:
      'We rebuilt our entire launch page in an afternoon. Conversion rate is up 34% since switching.',
    name: 'Maya Lin',
    role: 'Founder, Loomfile',
  },
  {
    quote:
      'The brand voice cloning is unreal. Every email finally sounds like us instead of a template.',
    name: 'Diego Santos',
    role: 'Head of Growth, Northbeam',
  },
  {
    quote:
      'I cancelled three writing tools. CopyCraft does landing pages, ads, and emails in one place.',
    name: 'Priya Nair',
    role: 'Marketing Lead, Shelfly',
  },
]

const plans = [
  {
    name: 'Starter',
    price: '$19',
    period: '/month',
    tagline: 'For solo founders testing ideas.',
    features: ['20,000 words / month', '50+ templates', '1 brand voice', 'Community support'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    tagline: 'For growing teams shipping every day.',
    features: ['Unlimited words', 'All 70+ templates', 'Unlimited brand voices', 'SEO analysis', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Team',
    price: '$129',
    period: '/month',
    tagline: 'For marketing teams that collaborate.',
    features: ['Everything in Pro', '5 seats included', 'Shared workspaces', 'Approvals & roles', 'API access'],
    highlight: false,
  },
]

const faqs = [
  {
    q: 'Will the copy sound like a robot?',
    a: 'No. Every output respects your brand voice, which you define once. You can also pick from tones like “friendly”, “premium”, or “technical” per project.',
  },
  {
    q: 'How does brand voice cloning work?',
    a: 'Paste 3–5 examples of your best writing and CopyCraft learns your tone, vocabulary, and sentence rhythm. It improves the more you use it.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Plans are month-to-month with no lock-in. Cancel in two clicks and keep everything you’ve generated.',
  },
  {
    q: 'Is my content safe?',
    a: 'Absolutely. Your copy and brand data are encrypted at rest and never used to train public models.',
  },
]

function App() {
  return (
    <div className="page">
      {/* ================= NAV ================= */}
      <header className="nav">
        <div className="container nav-inner">
          <Logo />
          <nav className="nav-links" aria-label="Main">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav-actions">
            <a href="#pricing" className="btn btn-ghost">Log in</a>
            <a href="#pricing" className="btn btn-primary">Start free</a>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-badge">
            <span className="dot" /> New: Brand Voice Cloning
          </div>
          <h1 className="hero-title">
            Marketing copy that <span className="grad">writes itself.</span>
          </h1>
          <p className="hero-sub">
            CopyCraft turns your product brief into landing pages, emails, ads, and social posts —
            in a tone that sounds like you. Launch campaigns in minutes, not days.
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary btn-lg">
              Start free <Arrow />
            </a>
            <a href="#how" className="btn btn-ghost btn-lg">See how it works</a>
          </div>
          <p className="hero-note">Free 7-day trial · No credit card required</p>

          <div className="hero-shot" aria-hidden="true">
            <div className="shot-bar">
              <span /><span /><span />
              <div className="shot-url">app.copycraft.ai/landing</div>
            </div>
            <div className="shot-body">
              <div className="shot-side">
                <div className="shot-label">Brief</div>
                <div className="shot-input" />
                <div className="shot-input short" />
                <div className="shot-btn">Generate copy</div>
              </div>
              <div className="shot-main">
                <div className="shot-label">Output</div>
                <div className="shot-headline">Ship your idea. Copy that sells.</div>
                <p className="shot-text" />
                <p className="shot-text" />
                <p className="shot-text short" />
                <div className="shot-row">
                  <span className="chip">Rewind</span>
                  <span className="chip">Tone: friendly</span>
                  <span className="chip">Export</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <section className="logos">
        <div className="container">
          <p className="logos-label">Trusted by marketing teams at</p>
          <div className="logos-row">
            <span>Northbeam</span>
            <span>Loomfile</span>
            <span>Shellary</span>
            <span>Pixelpress</span>
            <span>Bloomly</span>
            <span>Grapho</span>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="section">
        <div className="container">
          <p className="eyebrow">Features</p>
          <h2 className="section-title">Everything you need to sound like you — on every channel.</h2>
          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how" className="section alt">
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">From brief to published in three steps.</h2>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div className="step" key={s.n}>
                <span className="step-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {i < steps.length - 1 && <div className="step-line" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Loved by teams</p>
          <h2 className="section-title">Teams ship faster with CopyCraft.</h2>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <figure className="testimonial" key={t.name}>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>
                  <span className="avatar">{t.name.charAt(0)}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="section alt">
        <div className="container">
          <p className="eyebrow">Pricing</p>
          <h2 className="section-title">Simple pricing that scales with you.</h2>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <div className={`plan ${plan.highlight ? 'plan-hot' : ''}`} key={plan.name}>
                {plan.highlight && <span className="plan-badge">Most popular</span>}
                <h3>{plan.name}</h3>
                <p className="plan-tagline">{plan.tagline}</p>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feat) => (
                    <li key={feat}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a href="#faq" className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}>
                  {plan.highlight ? 'Start free trial' : 'Choose ' + plan.name}
                </a>
              </div>
            ))}
          </div>
          <p className="pricing-note">All plans include a 7-day free trial · Cancel anytime.</p>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="section">
        <div className="container narrow">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Questions, answered.</h2>
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="cta">
        <div className="container cta-inner">
          <h2>Sound like you. Sell like crazy.</h2>
          <p>Join 12,000+ marketers creating on-brand copy in minutes.</p>
          <a href="#pricing" className="btn btn-light btn-lg">
            Start free <Arrow />
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container footer-inner">
          <Logo />
          <nav className="footer-links" aria-label="Footer">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <span>Privacy</span>
            <span>Terms</span>
          </nav>
        </div>
        <div className="container footer-bottom">
          <span>© 2025 CopyCraft AI. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
