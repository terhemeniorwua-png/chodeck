import { AppStoreIcon, GooglePlayIcon } from '../components/ui/Icons'
import Newsletter from '../components/sections/Newsletter'

const audiences = [
  {
    title: 'Vendors',
    subtitle: '9,000+ active on Chowdeck',
    desc: 'You already have a store on Chowdeck. Now boost your visibility with featured listings, banners, and more — all from your dashboard.',
    items: [
      'Self-serve from your vendor dashboard',
      'Featured & Explore listings from ₦85k/week',
      'Top & mid-page banners with CPM pricing',
      '₦30k bonus credit on first ₦100k+ top-up',
    ],
    cta: 'Get started',
    href: 'https://app.chowdeck.com/register',
    delay: 0,
  },
  {
    title: 'External Brands',
    subtitle: 'FMCG • Fintech • Telco',
    desc: 'Reach 300K+ high-intent users in purchase mode. Run pop-ups, push notifications, and sponsored placements across the Chowdeck ecosystem.',
    items: [
      'Managed campaigns with dedicated support',
      'Push notifications to re-engage users',
      'In-app pop-ups and corner placements',
      '50% CPM discount for your first 30 days',
    ],
    cta: 'Get started',
    href: 'https://grow.chowdeck.com/sign-up',
    delay: 120,
  },
]

const features = [
  {
    title: 'Self-Serve Ad Wallet',
    desc: 'Top up your wallet and launch campaigns instantly — no sales calls needed. Perfect for vendors.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
  {
    title: 'Location Targeting',
    desc: 'Target users by city and zone. Show ads only to customers in Victoria Island, Lekki, or any delivery area.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    title: 'Real-Time Analytics',
    desc: 'Track impressions, clicks, and conversions live. See exactly how your campaigns perform.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    title: '24hr Campaign Review',
    desc: 'Every campaign is reviewed and approved within 24 hours. No delays, no bottlenecks.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: 'High-Intent Audience',
    desc: '300K+ MAUs open Chowdeck to spend money. This is purchase-mode attention, not passive scrolling.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'CPM & Flat Rate Pricing',
    desc: 'Pay per impression with CPM pricing, or choose flat-rate options for predictable budgeting.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
  },
]

const steps = [
  {
    num: 1,
    title: 'Create your ad account',
    desc: 'Sign up and fund your ad wallet. Vendors can get started with as little as ₦100k — and get ₦30k bonus credit on your first top-up.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFC501">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    num: 2,
    title: 'Build your campaign',
    desc: 'Choose your placement, upload your creative, set your audience by location, customer and zone, and set your budget.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-kiwi">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    num: 3,
    title: 'Go live in 24 hours',
    desc: 'Every campaign is reviewed within 24 hours. After approval, your ad goes live and you can track performance in real time.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-onion">
        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

function AdsHero() {
  return (
    <section className="relative overflow-hidden bg-ads-sky">
      <div className="container pt-32 pb-2 md:pt-56 md:pb-4 text-center relative z-10" data-aos="fade-up">
        <h1 className="mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight md:text-6xl lg:text-8xl text-ads-navy">
          Grow your reach with Chowdeck Ads
        </h1>
        <p className="mb-10 mx-auto max-w-xl text-base leading-relaxed text-ads-navy opacity-70">
          Reach 300,000+ monthly active users on Chowdeck. Self-serve for vendors. Managed campaigns for brands.
        </p>
        <a
          className="inline-flex items-center justify-center bg-ads-blue text-white font-semibold text-base py-3 h-16 px-8 rounded-lg transition-opacity hover:opacity-90"
          href="https://grow.chowdeck.com/sign-up"
        >
          Start advertising
        </a>
      </div>
      <div className="relative w-full overflow-hidden">
        <svg viewBox="0 0 1440 400" className="w-full h-auto block" preserveAspectRatio="xMidYMax slice">
          <rect y="120" width="1440" height="280" fill="#004699" opacity="0.1"/>
          <rect x="80" y="160" width="60" height="240" rx="4" fill="#004699" opacity="0.15"/>
          <rect x="160" y="120" width="80" height="280" rx="4" fill="#004699" opacity="0.2"/>
          <rect x="260" y="180" width="50" height="220" rx="4" fill="#004699" opacity="0.12"/>
          <rect x="340" y="100" width="70" height="300" rx="4" fill="#004699" opacity="0.18"/>
          <rect x="440" y="140" width="90" height="260" rx="4" fill="#004699" opacity="0.22"/>
          <rect x="560" y="170" width="55" height="230" rx="4" fill="#004699" opacity="0.14"/>
          <rect x="640" y="110" width="75" height="290" rx="4" fill="#004699" opacity="0.2"/>
          <rect x="740" y="150" width="65" height="250" rx="4" fill="#004699" opacity="0.16"/>
          <rect x="830" y="130" width="85" height="270" rx="4" fill="#004699" opacity="0.19"/>
          <rect x="940" y="160" width="50" height="240" rx="4" fill="#004699" opacity="0.13"/>
          <rect x="1010" y="100" width="95" height="300" rx="4" fill="#004699" opacity="0.21"/>
          <rect x="1130" y="145" width="60" height="255" rx="4" fill="#004699" opacity="0.15"/>
          <rect x="1210" y="175" width="70" height="225" rx="4" fill="#004699" opacity="0.17"/>
          <rect x="1300" y="120" width="80" height="280" rx="4" fill="#004699" opacity="0.2"/>
          <rect x="1400" y="155" width="40" height="245" rx="4" fill="#004699" opacity="0.12"/>
          {[120, 200, 280, 360, 440, 520, 600, 680, 760, 840, 920, 1000, 1080, 1160, 1240, 1320, 1400].map((x, i) => (
            <g key={i}>
              <rect x={x} y={180 + (i % 3) * 30} width="8" height="8" rx="1" fill="white" opacity="0.4"/>
              <rect x={x + 15} y={190 + (i % 3) * 30} width="8" height="8" rx="1" fill="white" opacity="0.3"/>
              <rect x={x} y={210 + (i % 3) * 30} width="8" height="8" rx="1" fill="white" opacity="0.35"/>
              <rect x={x + 15} y={220 + (i % 3) * 30} width="8" height="8" rx="1" fill="white" opacity="0.25"/>
            </g>
          ))}
        </svg>
      </div>
    </section>
  )
}

function AudiencesSection() {
  return (
    <section id="audiences" className="relative -mt-2 pt-6 pb-24 overflow-hidden bg-ads-blue">
      <div className="container">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-wider text-white/60">WHY CHOWDECK ADS?</span>
        <h2 className="text-4xl font-bold md:text-5xl lg:text-[4rem] leading-tight text-white lg:max-w-[50%]">
          Our platform is built for two audiences
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {audiences.map((a, i) => (
            <div key={i} className="rounded-2xl border border-white/20 bg-white p-8 md:p-10" data-aos="fade-up" data-aos-delay={a.delay}>
              <h3 className="mb-1 text-2xl font-semibold text-ads-navy">{a.title}</h3>
              <p className="mb-5 text-sm font-medium text-ads-blue">{a.subtitle}</p>
              <p className="mb-6 text-sm text-ads-navy/70 leading-relaxed">{a.desc}</p>
              <ul className="space-y-3 mb-8">
                {a.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ads-blue/10">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#004699" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span className="font-medium text-ads-navy">{item}</span>
                  </li>
                ))}
              </ul>
              <a className="inline-flex items-center justify-center bg-ads-blue text-white h-12 px-8 rounded-lg font-medium w-full lg:w-auto transition-transform hover:scale-105" href={a.href}>
                {a.cta} <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section id="features" className="relative pt-10 pb-24 overflow-hidden bg-ads-navy">
      <div className="container flex items-center justify-center">
        <p className="section-title text-white text-center">All you need to start your campaigns</p>
      </div>
      <div className="pt-20">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex overflow-x-auto will-change-transform scrollbar-hide pb-6">
            <div className={`flex gap-6 px-6 ${row % 2 === 0 ? 'animate-marquee-normal' : 'animate-marquee-normal'}`} style={{ animationDirection: row % 2 === 0 ? 'normal' : 'reverse' }}>
              {[...features, ...features].map((f, i) => (
                <div key={`${row}-${i}`} className="min-w-[320px] h-full rounded-2xl border border-white/10 bg-white/5 p-6 shrink-0">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    {f.icon}
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function StepsSection() {
  return (
    <section id="how-it-works" className="relative pt-48 pb-56 text-white overflow-hidden bg-ads-navy bg-[url('/illustrations/Paper-Texture.svg')] bg-cover bg-center bg-no-repeat">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-white" />
      <div className="container relative z-10">
        <h2 className="mb-3 text-4xl text-black font-bold md:text-5xl lg:text-[4rem]">Go live in 3 simple steps</h2>
        <p className="mx-auto max-w-xl text-sm font-medium uppercase tracking-wider text-black/60">
          From signup to your first impression — no sales calls required.
        </p>
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="border-4 border-black rounded-2xl overflow-hidden bg-white" data-aos="fade-up" data-aos-delay={i * 120}>
              <div className="p-6 min-h-[200px] flex flex-col">
                <span className="mb-4 h-8 flex items-center">{step.icon}</span>
                <p className="font-bold text-xl mb-5 lg:text-[28px] -tracking-[1px] text-black">{step.title}</p>
                <p className="text-black text-sm leading-relaxed">{step.desc}</p>
              </div>
              <div className="-mb-2 bg-ads-navy w-[calc(100%+4px)] -ml-0.5 overflow-hidden flex items-center justify-center h-32">
                <svg viewBox="0 0 200 100" className="w-3/4 h-auto opacity-30">
                  <rect x="20" y="20" width="160" height="60" rx="8" fill="white" opacity="0.2"/>
                  <circle cx="60" cy="50" r="15" fill="white" opacity="0.3"/>
                  <rect x="90" y="35" width="60" height="8" rx="4" fill="white" opacity="0.25"/>
                  <rect x="90" y="50" width="40" height="6" rx="3" fill="white" opacity="0.2"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AdsFaqSection() {
  return (
    <div className="container">
      <div className="relative bg-slate-100 border-4 border-black p-8 rounded-2xl flex flex-col">
        <h3 className="text-chow-green section-title flex items-center justify-between">FAQs.</h3>
        <div className="mt-4 grid lg:grid-cols-2 gap-8">
          <div>
            {[
              'What is Chowdeck Ads?',
              'Who can advertise on Chowdeck?',
              'How much does it cost?',
              'How do I get started?',
              'What ad formats are available?',
              'How are campaigns reviewed?',
            ].map((q, i) => (
              <div key={i} className="py-4 border-b-2 border-black/10">
                <p className="font-bold text-base tracking-tight">{q}</p>
              </div>
            ))}
          </div>
          <div className="p-6 bg-ads-sky rounded-2xl">
            <p className="text-base leading-relaxed text-ads-navy">
              Chowdeck Ads is a self-serve advertising platform that lets vendors and brands reach 300,000+ monthly active users. Boost your visibility with featured listings, banners, push notifications, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AdsCTASection() {
  return (
    <section className="py-24 bg-black">
      <div className="container">
        <div className="grid gap-4 lg:grid-cols-2 lg:h-[800px] items-stretch">
          <div className="relative flex flex-col justify-between overflow-hidden p-10 pb-0 w-full rounded-[24px] bg-ads-navy" data-aos="fade-up">
            <h2 className="mb-8 text-4xl font-semibold text-white md:text-5xl lg:text-[3.5rem] leading-tight">
              Start advertising <br /> on Chowdeck now
            </h2>
            <a className="inline-flex items-center justify-center bg-white text-ads-navy rounded-lg px-8 h-16 text-sm font-semibold w-fit transition-transform hover:scale-105" href="https://grow.chowdeck.com/sign-up">
              Get started
            </a>
            <div className="mt-8 -mx-10 -mb-0">
              <svg viewBox="0 0 600 200" className="w-[calc(100%+5rem)] max-w-none" fill="none">
                <rect x="20" y="40" width="120" height="140" rx="8" fill="#004699" opacity="0.3"/>
                <rect x="160" y="20" width="140" height="160" rx="8" fill="#004699" opacity="0.4"/>
                <rect x="320" y="50" width="110" height="130" rx="8" fill="#004699" opacity="0.3"/>
                <rect x="450" y="30" width="130" height="150" rx="8" fill="#004699" opacity="0.35"/>
              </svg>
            </div>
          </div>
          <div className="relative rounded-[24px] bg-ads-blue overflow-hidden" data-aos="fade-up" data-aos-delay="120">
            <div className="flex items-center justify-center h-full">
              <svg viewBox="0 0 200 400" className="w-[200px] h-[350px]" fill="none">
                <rect x="10" y="10" width="180" height="380" rx="24" fill="white" opacity="0.1"/>
                <rect x="20" y="40" width="160" height="320" rx="4" fill="white" opacity="0.05"/>
                <circle cx="100" cy="380" r="12" fill="white" opacity="0.1"/>
                <rect x="40" y="80" width="120" height="20" rx="4" fill="white" opacity="0.15"/>
                <rect x="40" y="110" width="80" height="12" rx="4" fill="white" opacity="0.1"/>
                <rect x="40" y="140" width="120" height="60" rx="8" fill="white" opacity="0.08"/>
                <rect x="40" y="220" width="120" height="20" rx="4" fill="white" opacity="0.15"/>
                <rect x="40" y="250" width="100" height="12" rx="4" fill="white" opacity="0.1"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AdsPage() {
  return (
    <>
      <AdsHero />
      <AudiencesSection />
      <FeaturesSection />
      <StepsSection />
      <div className="bottom-band relative">
        <div className="relative z-10 pb-24 lg:pb-10">
          <div className="mt-16 lg:mt-20" />
          <AdsFaqSection />
          <AdsCTASection />
          <Newsletter />
        </div>
      </div>
    </>
  )
}

export default AdsPage
