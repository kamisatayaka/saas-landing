import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { Logo } from './Landing'

const MODES = {
  login: 'login',
  signup: 'signup',
  forgot: 'forgot',
}

const initialFields = { email: '', password: '', confirm: '' }

export default function Auth({ onDone, onBack }) {
  const [mode, setMode] = useState(MODES.login)
  const [fields, setFields] = useState(initialFields)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null) // {type:'error'|'success', text}

  const set = (key) => (e) => setFields({ ...fields, [key]: e.target.value })
  const clearMessage = () => setMessage(null)

  const switchMode = (m) => {
    setMode(m)
    setFields(initialFields)
    clearMessage()
  }

  const validate = () => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
    if (!emailOk) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' })
      return false
    }
    if (mode === MODES.login) return true
    if (fields.password.length < 8) {
      setMessage({ type: 'error', text: 'Password must be at least 8 characters.' })
      return false
    }
    if (mode === MODES.signup && fields.password !== fields.confirm) {
      setMessage({ type: 'error', text: 'Passwords do not match.' })
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    clearMessage()
    if (!validate()) return
    setLoading(true)

    try {
      if (mode === MODES.login) {
        const { error } = await supabase.auth.signInWithPassword({
          email: fields.email,
          password: fields.password,
        })
        if (error) throw error
        onDone()
      } else if (mode === MODES.signup) {
        const { error } = await supabase.auth.signUp({
          email: fields.email,
          password: fields.password,
          options: { emailRedirectTo: window.location.origin },
        })
        if (error) throw error

        // Standard SaaS flow: email confirmation is required (supabase default).
        // Prompt the user to check their inbox, then switch to login.
        setMessage({
          type: 'success',
          text: 'Account created! Check your email to confirm, then log in.',
        })
        setMode(MODES.login)
      } else if (mode === MODES.forgot) {
        const { error } = await supabase.auth.resetPasswordForEmail(fields.email, {
          redirectTo: window.location.origin,
        })
        if (error) throw error
        setMessage({
          type: 'success',
          text: 'If that email exists, a reset link has been sent. Check your inbox.',
        })
      }
    } catch (err) {
      const text =
        err?.message === 'Invalid login credentials'
          ? 'Incorrect email or password.'
          : err?.message || 'Something went wrong. Please try again.'
      setMessage({ type: 'error', text })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <button onClick={onBack} className="btn btn-ghost auth-back">← Back to home</button>
        <div className="auth-brand">
          <Logo />
        </div>

        <div className="auth-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={mode === MODES.login}
            className={mode === MODES.login ? 'active' : ''}
            onClick={() => switchMode(MODES.login)}
          >
            Log in
          </button>
          <button
            role="tab"
            aria-selected={mode === MODES.signup}
            className={mode === MODES.signup ? 'active' : ''}
            onClick={() => switchMode(MODES.signup)}
          >
            Sign up
          </button>
        </div>

        {mode === MODES.forgot ? (
          <p className="auth-forgot-title">Reset your password</p>
        ) : (
          <p className="auth-title">
            {mode === MODES.login ? 'Welcome back' : 'Create your account'}
          </p>
        )}

        {message && (
          <div className={`auth-message ${message.type}`} role="alert">
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <label className="auth-field">
            <span>Email</span>
            <input
              type="email"
              required
              value={fields.email}
              onChange={set('email')}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>

          {mode !== MODES.forgot && (
            <label className="auth-field">
              <span>Password</span>
              <input
                type="password"
                required={mode !== MODES.forgot}
                value={fields.password}
                onChange={set('password')}
                placeholder="••••••••"
                autoComplete={mode === MODES.login ? 'current-password' : 'new-password'}
              />
            </label>
          )}

          {mode === MODES.signup && (
            <label className="auth-field">
              <span>Confirm password</span>
              <input
                type="password"
                required
                value={fields.confirm}
                onChange={set('confirm')}
                placeholder="••••••••"
                autoComplete="new-password"
              />
            </label>
          )}

          {mode === MODES.login && (
            <div className="auth-forgot-row">
              <button
                type="button"
                className="auth-link"
                onClick={() => switchMode(MODES.forgot)}
              >
                Forgot password?
              </button>
            </div>
          )}

          <button className="btn btn-primary auth-submit" disabled={loading}>
            {loading
              ? 'Please wait…'
              : mode === MODES.login
                ? 'Log in'
                : mode === MODES.signup
                  ? 'Create account'
                  : 'Send reset link'}
          </button>
        </form>

        {mode === MODES.forgot && (
          <button className="auth-link" onClick={() => switchMode(MODES.login)}>
            ← Back to log in
          </button>
        )}

        <p className="auth-legal">
          By continuing you agree to our <span>Terms</span> &amp; <span>Privacy Policy</span>.
        </p>
      </div>
    </div>
  )
}
