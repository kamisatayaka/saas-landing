import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import Landing from './components/Landing'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import './App.css'

function getHash() {
  return window.location.hash.replace(/^#/, '') || ''
}

function App() {
  const [view, setView] = useState(() => {
    // Restore an initial view from the URL hash.
    const h = getHash()
    if (h === 'auth') return 'auth'
    if (h === 'app') return 'app'
    return 'landing'
  })
  const [session, setSession] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  // Restore session on load + subscribe to auth changes.
  useEffect(() => {
    let mounted = true

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return
      setSession(data.session)
      setAuthChecked(true)
    })

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setAuthChecked(true)
    })

    return () => {
      mounted = false
      sub.subscription.unsubscribe()
    }
  }, [])

  // Keep the hash in sync with the current view (so refresh/back works).
  const navigate = (next) => {
    setView(next)
    const target = next === 'landing' ? '' : next
    if (window.location.hash.replace(/^#/, '') !== target) {
      window.location.hash = target
    }
  }

  // Handle popstate/back navigation.
  useEffect(() => {
    const onHash = () => {
      const h = getHash()
      if (h === 'auth') setView('auth')
      else if (h === 'app') setView('app')
      else setView('landing')
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Route guard: if we're on #app but not logged in, send to auth.
  useEffect(() => {
    if (authChecked && view === 'app' && !session) {
      navigate('auth')
    }
  }, [view, session, authChecked])

  const goAuth = () => navigate('auth')
  const goApp = () => navigate('app')
  const goHome = () => navigate('landing')

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('landing')
  }

  if (!authChecked) {
    return (
      <div className="app-loading">
        <span className="spinner" />
        <p>Loading…</p>
      </div>
    )
  }

  if (view === 'auth') {
    return <Auth onDone={goApp} onBack={goHome} />
  }

  if (view === 'app') {
    if (!session) return null // guard will redirect to auth
    return <Dashboard user={session.user} onLogout={handleLogout} />
  }

  return <Landing onLogin={goAuth} onStart={goAuth} />
}

export default App
