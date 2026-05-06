'use client'

import { useActionState } from 'react'

type FormState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const initialState: FormState = { status: 'idle', message: '' }

async function submitToFormspree(prevState: FormState, formData: FormData): Promise<FormState> {
  const res = await fetch('https://formspree.io/f/mjgjnqnw', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      message: formData.get('message'),
    }),
  })

  if (res.ok) {
    return { status: 'success', message: "Thanks — I'll follow up within one business day." }
  }

  return { status: 'error', message: 'Something went wrong. Please try again or email nathan@nnstudio.com directly.' }
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitToFormspree, initialState)

  if (state.status === 'success') {
    return (
      <>
        <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-6">
          Sent
        </div>
        <p className="font-serif text-[24px] md:text-[28px] font-normal leading-[1.2] text-ink tracking-[-0.01em] mb-4">
          Message received.
        </p>
        <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light" style={{ color: '#6B6A63' }}>
          {state.message}
        </p>
      </>
    )
  }

  return (
    <>
      <div className="font-sans text-[12px] tracking-[0.18em] uppercase text-amber mb-2">
        Send a note
      </div>
      <p className="font-sans text-[15px] font-light mb-8 md:mb-10" style={{ color: '#6B6A63' }}>
        Prefer to share context first before getting on a call.
      </p>
      <form action={formAction} className="space-y-6">
      <div>
        <label className="block font-sans text-[12px] tracking-[0.14em] uppercase text-muted mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full bg-transparent border border-faint px-4 py-3 font-sans text-[15px] text-ink placeholder-muted focus:outline-none focus:border-muted transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block font-sans text-[12px] tracking-[0.14em] uppercase text-muted mb-2">
          Company
        </label>
        <input
          type="text"
          name="company"
          className="w-full bg-transparent border border-faint px-4 py-3 font-sans text-[15px] text-ink placeholder-muted focus:outline-none focus:border-muted transition-colors"
          placeholder="Company or organization"
        />
      </div>

      <div>
        <label className="block font-sans text-[12px] tracking-[0.14em] uppercase text-muted mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full bg-transparent border border-faint px-4 py-3 font-sans text-[15px] text-ink placeholder-muted focus:outline-none focus:border-muted transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block font-sans text-[12px] tracking-[0.14em] uppercase text-muted mb-2">
          What are you working on?
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border border-faint px-4 py-3 font-sans text-[15px] text-ink placeholder-muted focus:outline-none focus:border-muted transition-colors resize-none"
          placeholder="Describe the project, timeline, and what you need."
        />
      </div>

      {state.status === 'error' && (
        <p className="font-sans text-[13px]" style={{ color: '#C0392B' }}>
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="font-sans text-[14px] tracking-[0.04em] border border-faint text-muted px-9 py-4 hover:text-ink hover:border-ink transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? 'Sending…' : 'Send it →'}
      </button>
    </form>
    </>
  )
}
