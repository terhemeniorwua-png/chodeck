import { useState } from 'react'
import { AppStoreIcon, GooglePlayIcon } from '../components/ui/Icons'
import Newsletter from '../components/sections/Newsletter'
import Stories from '../components/sections/Stories'

const businessFeatures = [
  {
    title: 'Operational',
    desc: "This isn't a marketplace listing. It's delivery-as-a-service that plugs into your existing operations.",
  },
  {
    title: 'Reliable',
    desc: "Built on the same infrastructure that powers millions of Chowdeck deliveries every month.",
  },
  {
    title: 'Visible',
    desc: 'Real-time tracking, delivery analytics, and performance metrics — all in your dashboard.',
  },
  {
    title: 'Withdraw easily',
    desc: 'Pay per delivery. No subscriptions, hidden fees, or minimum volumes. You only pay when you ship.',
  },
]

const whyChooseRelay = [
  {
    title: 'Fast local fulfillment',
    desc: 'Same-day delivery across Lagos, powered by riders already in your area. Your customers get their orders fast.',
  },
  {
    title: 'No rider management stress',
    desc: "Skip hiring, training, and managing riders. Chowdeck's vetted network handles it all.",
  },
  {
    title: 'Reliable delivery experience',
    desc: '99.2% delivery success rate with real-time tracking your customers can follow.',
  },
  {
    title: 'Flexible business setup',
    desc: 'Works with your workflow — use our dashboard for quick setup or our API for full automation.',
  },
  {
    title: 'Built for scale',
    desc: 'From 10 deliveries a day to 10,000. The same infrastructure that powers Chowdeck grows with you.',
  },
  {
    title: 'Dedicated support',
    desc: "Got an issue with a delivery? Our support team is available to resolve it quickly.",
  },
]

const steps = [
  { num: '01', text: 'Download the Chowdeck app and tap', bg: '#FFF0F5', accent: '#990038' },
  { num: '02', text: 'Make sure you insure your package', bg: '#990038', accent: '#FFF0F5', textLight: true },
  { num: '03', text: 'Prepare your package for pickup', bg: '#FFD1E2', accent: '#990038' },
  { num: '04', text: 'Hand your package to your rider', bg: '#990038', accent: '#FFD1E2', textLight: true },
  { num: '05', text: 'Rider picks up your package', bg: '#FFF0F5', accent: '#990038' },
  { num: '06', text: 'Rider heads to the drop-off location', bg: '#990038', accent: '#FFF0F5', textLight: true },
  { num: '07', text: 'Rider delivers your package', bg: '#FFF0F5', accent: '#990038' },
  { num: '08', text: 'Rate your rider & the delivery experience', bg: '#990038', accent: '#FFF0F5', textLight: true },
]

function RelayHero() {
  return (
    <section className="bg-[#FFB3CE] flex flex-col mb-16">
      <div className="pt-32 lg:mt-12 text-center container">
        <h1 className="text-5xl md:text-6xl lg:text-[112px] font-bold text-center mb-6 tracking-tighter lg:leading-[144px]" data-aos="fade-up">
          Move packages <br /> easily with Relay
        </h1>
        <h2 className="lg:text-xl mb-10 lg:w-[50%] mx-auto" data-aos="fade" data-aos-delay="300">
          Send anything across town in minutes. Relay connects you to Chowdeck&apos;s rider network for fast, tracked, door-to-door delivery.
        </h2>
        <div className="max-w-[300px] md:max-w-[600px] mx-auto md:w-full flex justify-center gap-4 flex-col md:flex-row" data-aos="fade-up" data-aos-delay="400">
          <a className="inline-flex items-center justify-center text-white py-3 font-medium px-6 rounded-lg lg:py-5 bg-relay-main w-full" href="https://play.google.com/store/apps/details?id=com.chowdeck.com">
            Download the app
          </a>
          <a className="inline-flex items-center justify-center text-white py-3 font-medium px-6 rounded-lg lg:py-5 bg-relay-main w-full" href="#business">
            Explore Relay for Business
          </a>
        </div>
      </div>
      <span className="flex flex-col items-center text-center mt-10">
        <svg viewBox="0 0 400 300" className="w-[80%] lg:w-1/2" fill="none">
          <rect x="120" y="80" width="160" height="120" rx="8" fill="#990038" opacity="0.15"/>
          <rect x="130" y="90" width="140" height="100" rx="6" fill="white" stroke="#990038" strokeWidth="2"/>
          <rect x="150" y="105" width="40" height="30" rx="2" fill="#FFB3CE"/>
          <rect x="200" y="105" width="40" height="30" rx="2" fill="#FFD1E2"/>
          <rect x="150" y="145" width="90" height="20" rx="2" fill="#FFB3CE"/>
          <text x="200" y="230" textAnchor="middle" fill="#990038" fontSize="14" fontWeight="bold">Chowdeck Relay</text>
        </svg>
      </span>
    </section>
  )
}

function ExploreRelayTabs({ activeTab, setActiveTab }) {
  return (
    <div className="container mt-6">
      <div className="flex justify-center bg-white rounded-full border border-slate-200 p-1 w-fit mx-auto">
        <button
          onClick={() => setActiveTab('individual')}
          className={`py-3 px-8 rounded-full font-semibold transition-all ${
            activeTab === 'individual' ? 'bg-relay-main text-white' : 'text-black hover:bg-slate-50'
          }`}
        >
          Relay For Individuals
        </button>
        <button
          onClick={() => setActiveTab('business')}
          className={`py-3 px-8 rounded-full font-semibold transition-all ${
            activeTab === 'business' ? 'bg-relay-main text-white' : 'text-black hover:bg-slate-50'
          }`}
        >
          Relay For Businesses
        </button>
      </div>
    </div>
  )
}

function IndividualContent() {
  return (
    <section className="mt-6 text-center overflow-hidden">
      <h2 className="text-[32px] lg:text-[64px] font-bold tracking-tighter mb-4">
        Send packages across town
      </h2>
      <p className="lg:text-xl max-w-3xl mx-auto mb-10 px-4">
        Book a pickup in seconds, track your rider in real time, and get your package delivered fast — no calls, no stress, no guesswork.
      </p>
      <div className="flex items-center justify-center gap-4 mb-12">
        <a className="inline-flex items-center justify-center bg-relay-main !rounded-full w-14 h-14 text-white transition-transform hover:scale-105" href="https://play.google.com/store/apps/details?id=com.chowdeck.com">
          <GooglePlayIcon />
        </a>
        <a className="inline-flex items-center justify-center bg-relay-main !rounded-full w-14 h-14 text-white transition-transform hover:scale-105" href="https://apps.apple.com/us/app/chowdeck/id1530676376">
          <AppStoreIcon color="white" />
        </a>
      </div>
      <div className="flex flex-col items-center pt-2 lg:pt-10">
        <span className="block relative w-[200px] h-[400px] lg:w-[400px] lg:h-[800px]">
          <img alt="Relay app screen" src="/images/Red.png" className="absolute inset-0 w-full h-full object-cover rounded-[2rem]" loading="lazy" />
        </span>
      </div>
    </section>
  )
}

function BusinessContent() {
  return (
    <section id="business" className="mt-10">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[32px] lg:text-[48px] font-bold tracking-tighter mb-4">Send orders quickly</h2>
          <p className="lg:text-xl max-w-3xl mx-auto mb-8 px-4">
            Stop managing riders. Start managing your business. Relay gives you Chowdeck&apos;s entire logistics network on demand.
          </p>
          <a className="inline-flex items-center justify-center text-white py-3 font-medium px-6 rounded-lg lg:py-6 lg:px-8 bg-relay-main transition-transform hover:scale-105" href="https://play.google.com/store/apps/details?id=com.chowdeck.com">
            Explore Relay for Business
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {businessFeatures.map((f, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay={i * 100}>
              <h3 className="text-xl lg:text-2xl font-bold mb-3">{f.title}</h3>
              <p className="text-sm lg:text-base leading-relaxed text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mb-20">
        <h2 className="text-[32px] lg:text-[48px] font-bold tracking-tighter text-center mb-12">
          Choose how your business <br className="hidden lg:block" /> uses Relay
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-10" data-aos="fade-up">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-8">
              <circle cx="32" cy="32" r="32" fill="#FFB3CE"/>
              <path d="M24 20h16v24H24z" fill="#990038" opacity="0.3"/>
              <path d="M28 28h8v8h-8z" fill="#990038"/>
            </svg>
            <h3 className="text-xl lg:text-2xl font-bold mb-4">Use Relay through Chowdeck</h3>
            <p className="text-sm lg:text-base text-gray-600 mb-6">Create and manage deliveries from your Chowdeck vendor dashboard. No code required.</p>
            <ul className="space-y-3 mb-10">
              {['Create deliveries in a few clicks', 'Real-time rider tracking', 'Manage all orders in one dashboard', 'No technical setup needed'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10" fill="#FFB3CE"/>
                    <path d="M8 12l3 3 5-5" stroke="#990038" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a className="inline-flex items-center justify-center text-white py-3 font-medium px-6 rounded-lg bg-relay-main w-full transition-transform hover:scale-105" href="https://play.google.com/store/apps/details?id=com.chowdeck.com">
              Get Started
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-10" data-aos="fade-up" data-aos-delay="120">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-8">
              <circle cx="32" cy="32" r="32" fill="#F3F1FD"/>
              <path d="M32 16l4 8h8l-6 5 2 8-8-5-8 5 2-8-6-5h8l4-8z" fill="#8C77EC"/>
            </svg>
            <h3 className="text-xl lg:text-2xl font-bold mb-4">Integrate Relay via the Chowdeck API</h3>
            <p className="text-sm lg:text-base text-gray-600 mb-6">Embed Relay deliveries directly into your platform, app, or website. Full control, full automation.</p>
            <ul className="space-y-3 mb-10">
              {['RESTful API with webhooks', 'Automated delivery creation', 'Custom tracking experiences', 'Sandbox environment for testing'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10" fill="#F3F1FD"/>
                    <path d="M8 12l3 3 5-5" stroke="#8C77EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a className="inline-flex items-center justify-center text-white py-3 font-medium px-6 rounded-lg bg-relay-main w-full transition-transform hover:scale-105" href="https://chowdeck.readme.io/reference/getting-started-with-relay">
              View API Docs
            </a>
          </div>
        </div>
      </div>

      <div className="container mb-20">
        <h2 className="text-[32px] lg:text-[48px] font-bold tracking-tighter mb-12">
          Why chose Relay ↓
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseRelay.map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay={i * 80}>
              <h3 className="text-xl lg:text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm lg:text-base leading-relaxed text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-6">Trusted by growing businesses</p>
          <div className="flex items-center gap-8 opacity-60">
            {['Chicken Republic', 'Bumpa', 'The Place', 'Zippie'].map((brand) => (
              <span key={brand} className="text-lg font-bold text-gray-400">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HowRelayWorks() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="pb-20">
      <div className="container flex items-end space-x-2 pt-14 pb-8 lg:pt-[100px] lg:pb-24">
        <h3 className="section-title">
          How Relay works
          <span className="text-lg text-[#EA0B8D] tracking-normal font-medium pl-2">Easy like 1-2-3</span>
        </h3>
      </div>

      <div className="container">
        <div className="relative rounded-[20px] overflow-hidden" style={{ backgroundColor: steps[currentStep].bg }}>
          <div className="grid lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
            <div className="flex flex-col p-10 lg:p-[60px]">
              <button
                className="w-16 h-16 rounded-full border-4 flex items-center justify-center font-bold text-xl shrink-0"
                style={{ borderColor: steps[currentStep].accent, backgroundColor: steps[currentStep].accent, color: steps[currentStep].textLight ? steps[currentStep].bg : 'white' }}
              >
                {steps[currentStep].num}
              </button>
              <p className="font-medium text-2xl lg:text-[40px] mt-10 lg:mt-auto leading-[2.9rem]" style={{ color: steps[currentStep].textLight ? 'white' : '#222' }}>
                {steps[currentStep].text}
              </p>
            </div>
            <div className="hidden lg:flex items-center justify-center p-10">
              <div className="w-48 h-48 rounded-full" style={{ backgroundColor: steps[currentStep].accent, opacity: 0.2 }} />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentStep(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === currentStep ? 'bg-relay-main w-8' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          <a className="inline-flex items-center justify-center text-white py-3 font-medium px-6 rounded-lg bg-relay-main transition-transform hover:scale-105" href="https://play.google.com/store/apps/details?id=com.chowdeck.com">
            Try it now
          </a>
        </div>
      </div>
    </div>
  )
}

function RelayBottomCTA() {
  return (
    <div className="bg-relay-main pt-16">
      <div className="container text-center">
        <h3 className="section-title text-white pt-24">
          <span className="text-candy">You need it?</span><br />
          We&apos;ll bring it!
        </h3>

        <div className="relative z-30 flex flex-col justify-center items-center mb-5 lg:mb-[50px] my-[50px] min-h-[200px] lg:min-h-[500px]">
          <span className="block w-[160px] lg:w-[280px] rotate-[8deg] mb-[-40px] lg:mb-[-80px]">
            <svg viewBox="0 0 280 200" className="w-full" fill="none">
              <rect width="280" height="200" rx="16" fill="#FFB3CE" opacity="0.5"/>
              <circle cx="140" cy="80" r="30" fill="white" opacity="0.6"/>
              <rect x="100" y="130" width="80" height="40" rx="8" fill="white" opacity="0.4"/>
            </svg>
          </span>
          <span className="block w-[160px] lg:w-[280px] -rotate-[8deg] mb-[-40px] lg:mb-[-80px]">
            <svg viewBox="0 0 280 200" className="w-full" fill="none">
              <rect width="280" height="200" rx="16" fill="#FFD1E2" opacity="0.5"/>
              <circle cx="140" cy="80" r="30" fill="white" opacity="0.6"/>
              <rect x="100" y="130" width="80" height="40" rx="8" fill="white" opacity="0.4"/>
            </svg>
          </span>
          <span className="block w-[160px] lg:w-[280px]">
            <svg viewBox="0 0 280 200" className="w-full" fill="none">
              <rect width="280" height="200" rx="16" fill="white" opacity="0.3"/>
              <circle cx="140" cy="80" r="30" fill="white" opacity="0.6"/>
              <rect x="100" y="130" width="80" height="40" rx="8" fill="white" opacity="0.4"/>
            </svg>
          </span>
        </div>

        <div className="relative z-50 flex space-x-2 justify-center items-center">
          <a className="flex h-[44px] w-[44px] lg:h-[56px] lg:w-[56px] items-center justify-center rounded-full bg-white/20 text-white transition-transform hover:scale-105" href="https://play.google.com/store/apps/details?id=com.chowdeck.com">
            <GooglePlayIcon />
          </a>
          <a className="flex h-[44px] w-[44px] lg:h-[56px] lg:w-[56px] items-center justify-center rounded-full bg-white/20 text-white transition-transform hover:scale-105" href="https://apps.apple.com/us/app/chowdeck/id1530676376">
            <AppStoreIcon color="white" />
          </a>
        </div>
      </div>

      <div className="text-white mt-16 lg:grid lg:grid-cols-2 lg:gap-32 container pb-10">
        <div className="flex items-center relative">
          <span className="section-title relative z-10">
            Chowdeck has <br /> you covered
          </span>
        </div>
        <p className="text-sm md:text-lg lg:text-2xl tracking-normal mt-4">
          Say goodbye to stressful deliveries and hello to fast, tracked shipping. Download the app and send your first package today.
        </p>
      </div>

      <div className="flex overflow-hidden will-change-transform mt-10">
        <div className="flex whitespace-nowrap animate-marquee">
          {['Quick and easy onboarding', 'Live updates on deliveries', 'Highly rated and vetted riders', '24/7 support for customers'].map((tip, i) => (
            <span key={i} className="inline-flex items-center text-white text-sm font-medium px-8 py-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2 shrink-0">
                <path d="M8 0s-.5 5.394-8 7c0 0 5.872.19 8 7 0 0 .678-6.21 8-7 0 0-6.758-1.514-8-7Z" fill="white"/>
              </svg>
              {tip}
            </span>
          ))}
        </div>
        <div className="flex whitespace-nowrap animate-marquee" aria-hidden="true">
          {['Quick and easy onboarding', 'Live updates on deliveries', 'Highly rated and vetted riders', '24/7 support for customers'].map((tip, i) => (
            <span key={i} className="inline-flex items-center text-white text-sm font-medium px-8 py-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2 shrink-0">
                <path d="M8 0s-.5 5.394-8 7c0 0 5.872.19 8 7 0 0 .678-6.21 8-7 0 0-6.758-1.514-8-7Z" fill="white"/>
              </svg>
              {tip}
            </span>
          ))}
        </div>
      </div>

      <div className="flex overflow-x-auto will-change-transform scrollbar-hide pb-16 mt-8">
        <div className="flex gap-4 px-4">
          {['accept-order', 'pickup', 'order-transit', 'order-arrived'].map((img) => (
            <div key={img} className="shrink-0 w-[200px] h-[350px] rounded-2xl overflow-hidden bg-white/10">
              <img src={`/images/app-steps/${img}.png`} alt={img.replace(/-/g, ' ')} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function RelayFaqSection() {
  return (
    <div className="container">
      <div className="relative bg-slate-100 border-4 border-black p-8 rounded-2xl flex flex-col">
        <h3 className="text-chow-green section-title flex items-center justify-between">FAQs.</h3>
        <div className="mt-4 grid lg:grid-cols-2 gap-8">
          <div>
            {[
              'What is Relay?',
              'How do I send a package?',
              'What can I send with Relay?',
              'How much does Relay cost?',
              'How do I track my package?',
              'Is my package insured?',
            ].map((q, i) => (
              <div key={i} className="py-4 border-b-2 border-black/10">
                <p className="font-bold text-base tracking-tight">{q}</p>
              </div>
            ))}
          </div>
          <div className="p-6 bg-[#FFF0F5] rounded-2xl">
            <p className="text-base leading-relaxed">
              Relay is Chowdeck&apos;s package delivery service. Send anything across town in minutes using Chowdeck&apos;s rider network. Book a pickup, track in real time, and get fast door-to-door delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function RelayPromoSection() {
  return (
    <div className="container md:grid md:grid-cols-2 gap-6 lg:h-[800px] mt-20">
      <div className="flex flex-col bg-relay-main p-5 h-full lg:p-10 rounded-lg lg:rounded-xl mb-5 lg:mb-0 relative overflow-hidden" data-aos="fade-up">
        <p className="text-[32px] lg:text-6xl text-white font-bold leading-9 lg:leading-[1.2] mb-4 lg:mb-8 tracking-tighter">
          <span className="block text-candy">Send <span className="text-white">and</span></span>
          <span className="block text-candy">Receive</span>
          <span className="block">in minutes</span>
        </p>
        <span className="block mb-4 lg:hidden">
          <a className="inline-flex items-center justify-center bg-white mr-2 rounded-full w-12 h-12 active:scale-95 transition-transform" target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.chowdeck.com">
            <GooglePlayIcon />
          </a>
          <a className="inline-flex items-center justify-center bg-white rounded-full w-12 h-12 active:scale-95 transition-transform" target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/chowdeck/id1530676376">
            <AppStoreIcon className="text-chow-green" />
          </a>
        </span>
        <span className="hidden lg:block mb-4 space-y-4">
          <a className="inline-flex items-center justify-center py-3 font-medium px-6 rounded-lg bg-white text-chow-green transition-colors hover:bg-chow-yellow hover:text-black hover:scale-105" target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.chowdeck.com">
            <GooglePlayIcon className="mr-2" /> Download on Google Play
          </a>
          <br />
          <a className="inline-flex items-center justify-center py-3 font-medium px-6 rounded-lg bg-white text-chow-green transition-colors hover:bg-chow-yellow hover:text-black hover:scale-105" target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/chowdeck/id1530676376">
            <AppStoreIcon className="mr-2" /> Download on App Store
          </a>
        </span>
        <div className="mt-auto">
          <p className="text-2xl font-bold text-white mb-2">USERELAY</p>
          <p className="text-white w-3/4 lg:w-1/2 pr-4">
            Get <span className="text-chow-yellow-100 font-bold">₦500 off</span> your first relay when you use this promo code!
          </p>
        </div>
      </div>
      <div className="relative h-[400px] lg:h-full rounded-lg overflow-hidden bg-cover bg-center" data-aos="fade-up" data-aos-delay="120">
        <img src="/images/Red.png" alt="Relay promo" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </div>
    </div>
  )
}

function RelayPage() {
  const [activeTab, setActiveTab] = useState('individual')

  return (
    <>
      <RelayHero />
      <ExploreRelayTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'individual' ? <IndividualContent /> : <BusinessContent />}
      <HowRelayWorks />
      <RelayBottomCTA />
      <div className="mb-36 mt-20 lg:mt-32">
        <div className="container flex items-center justify-between mb-8">
          <p className="section-title flex items-center">
            Stories
            <svg className="ml-2 w-12 lg:w-16" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="28" fill="#FFB3CE" opacity="0.3"/>
              <path d="M20 30c0-6 4-10 10-10s10 4 10 10-4 10-10 10-10-4-10-10z" fill="#FFB3CE"/>
            </svg>
          </p>
        </div>
        <div className="container">
          <p className="flex flex-col items-center justify-center pt-20 text-4xl text-gray-400 font-medium">
            <span className="relative h-72 w-72 block">
              <img src="/illustrations/no-item.png" alt="" loading="lazy" />
            </span>
            No stories at the moment, check again later!
          </p>
        </div>
      </div>
      <div className="bottom-band relative">
        <div className="relative z-10 pb-24 lg:pb-10">
          <div className="mt-16 lg:mt-20" />
          <RelayFaqSection />
          <RelayPromoSection />
          <Newsletter />
        </div>
      </div>
    </>
  )
}

export default RelayPage
