export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Payment Scheduling
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Auto-schedule invoice payments to{' '}
          <span className="text-[#58a6ff]">optimize cash flow</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect QuickBooks or Xero and let AI pick the perfect payment date — capturing early-pay discounts, avoiding cash crunches, and eliminating late fees.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Saving — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial · Cancel anytime</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ['2–4%', 'avg. early-pay discount captured'],
            ['$0', 'late fees after first month'],
            ['5 min', 'setup with QuickBooks or Xero'],
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$12</div>
          <div className="text-sm text-[#8b949e] mb-6">per month · billed monthly</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 text-left mb-8">
            {[
              'Unlimited invoice scheduling',
              'QuickBooks & Xero integration',
              'AI cash flow forecasting',
              'Early-pay discount detection',
              'Email & Slack payment alerts',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              'How does the AI decide when to pay?',
              'It analyzes your historical cash flow, upcoming receivables, invoice due dates, and any early-pay discount windows to pick the date that maximizes savings without risking a cash shortfall.',
            ],
            [
              'Is my accounting data secure?',
              'Yes. We use OAuth 2.0 to connect to QuickBooks and Xero — we never store your credentials. All data is encrypted in transit and at rest.',
            ],
            [
              'Can I override a scheduled payment?',
              'Absolutely. Every scheduled payment shows up in your dashboard before it executes. You can reschedule, cancel, or pay immediately with one click.',
            ],
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-10">
        © {new Date().getFullYear()} Invoice AutoPay Scheduler. All rights reserved.
      </footer>
    </main>
  )
}
