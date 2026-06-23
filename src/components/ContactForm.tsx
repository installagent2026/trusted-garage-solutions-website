"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { success: false };

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-charcoal min-h-[44px]";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="mt-8 text-center py-16">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-accent">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-serif font-semibold text-charcoal">Thank You!</h3>
        <p className="mt-2 text-text-muted">
          We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="mt-8 space-y-6">
      {state.error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3" role="alert">
          {state.error}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
            Name *
          </label>
          <input type="text" id="name" name="name" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
            Phone *
          </label>
          <input type="tel" id="phone" name="phone" required className={inputClass} placeholder="(615) 555-1234" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
          Email *
        </label>
        <input type="email" id="email" name="email" required className={inputClass} placeholder="you@email.com" />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-charcoal mb-2">
          Service Needed
        </label>
        <select id="service" name="service" className={`${inputClass} bg-white cursor-pointer`}>
          <option value="">Select a service...</option>
          <option value="installation">New Door Installation</option>
          <option value="spring">Broken Spring Repair</option>
          <option value="motor">Motor / Opener Replacement</option>
          <option value="off-track">Off-Track Repair</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="What can we help you with?"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full gold-button font-bold py-4 rounded-xl text-lg disabled:opacity-50 cursor-pointer focus-ring min-h-[44px]"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
