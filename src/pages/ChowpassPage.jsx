import { AppStoreIcon, GooglePlayIcon } from '../components/ui/Icons'
import Newsletter from '../components/sections/Newsletter'

const benefits = [
  {
    title: 'Free\nDelivery',
    desc: 'Free delivery on all orders above ₦3,000 from any Chowpass vendor within your delivery radius',
  },
  {
    title: 'Reduced\nService Fees',
    desc: 'Pay as low as 3% in service fees vs the standard 10%',
  },
  {
    title: 'No Surge\nFees',
    desc: 'Skip surge fees, no matter the time or weather',
  },
  {
    title: 'Zero Third\nParty Ads',
    desc: 'Enjoy a clean experience with no ads from external brands',
  },
  {
    title: 'Top Notch\nSupport',
    desc: 'Enjoy timely assistance from our stellar team',
  },
]

const plans = [
  { name: 'Monthly', price: '₦3,500', badge: 'Popular' },
  { name: 'Quarterly', price: '₦10,000', badge: 'Save ₦500' },
  { name: 'Bi-Annually', price: '₦18,000', badge: 'Save ₦3,000' },
]

function BenefitIcon({ index }) {
  const icons = [
    <svg key="0" width="50" height="50" viewBox="0 0 50 50" fill="none"><rect width="50" height="50" rx="12" fill="#F3F1FD"/><path d="M15 18h20v18a2 2 0 01-2 2H17a2 2 0 01-2-2V18z" stroke="#271386" strokeWidth="2"/><path d="M20 18v-4a5 5 0 0110 0v4" stroke="#271386" strokeWidth="2"/></svg>,
    <svg key="1" width="50" height="50" viewBox="0 0 50 50" fill="none"><rect width="50" height="50" rx="12" fill="#F3F1FD"/><rect x="12" y="12" width="26" height="26" rx="3" stroke="#271386" strokeWidth="2"/><path d="M18 30h14M18 24h10" stroke="#271386" strokeWidth="2" strokeLinecap="round"/></svg>,
    <svg key="2" width="50" height="50" viewBox="0 0 50 50" fill="none"><rect width="50" height="50" rx="12" fill="#F3F1FD"/><path d="M25 12l3 8h8l-6.5 5 2.5 8L25 28l-7 5 2.5-8L14 20h8l3-8z" stroke="#271386" strokeWidth="2" strokeLinejoin="round"/><line x1="25" y1="33" x2="25" y2="38" stroke="#271386" strokeWidth="2" strokeLinecap="round"/><line x1="22" y1="38" x2="28" y2="38" stroke="#271386" strokeWidth="2" strokeLinecap="round"/></svg>,
    <svg key="3" width="50" height="50" viewBox="0 0 50 50" fill="none"><rect width="50" height="50" rx="12" fill="#F3F1FD"/><rect x="10" y="15" width="30" height="20" rx="2" stroke="#271386" strokeWidth="2"/><path d="M10 22h30" stroke="#271386" strokeWidth="2"/><circle cx="35" cy="35" r="6" fill="#F3F1FD" stroke="#271386" strokeWidth="2"/><path d="M33 35l2 2 3-3" stroke="#271386" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    <svg key="4" width="50" height="50" viewBox="0 0 50 50" fill="none"><rect width="50" height="50" rx="12" fill="#F3F1FD"/><path d="M16 20c0-5 4-9 9-9s9 4 9 9v4c0 2-1 4-3 5l-1 1v3h-10v-3l-1-1c-2-1-3-3-3-5v-4z" stroke="#271386" strokeWidth="2"/><path d="M20 36h10" stroke="#271386" strokeWidth="2" strokeLinecap="round"/><circle cx="25" cy="20" r="2" fill="#271386"/></svg>,
  ]
  return icons[index] || null
}

function ChowpassHero() {
  return (
    <section className="bg-[#D1C9F7] pt-40 lg:pt-44 pb-8">
      <div className="container text-center">
        <h1 className="text-6xl lg:text-[80px] font-bold text-[#271386] lg:w-[986px] mx-auto leading-tight" data-aos="fade-up">
          Unlock Free Deliveries and Reduced Fees!
        </h1>
        <p className="text-[#333333] px-10 my-7 lg:text-lg" data-aos="fade" data-aos-delay="200">
          For just ₦3,500, you can enjoy savings on orders with Chowpass
        </p>
        <a
          className="inline-flex items-center justify-center h-[56px] bg-[#271386] rounded-lg text-center font-medium text-white px-10 transition-transform hover:scale-105"
          href="https://chowdeck.onelink.me/lHwx/pqcqh9t4"
          data-aos="fade-up" data-aos-delay="300"
        >
          Subscribe now
        </a>
      </div>
    </section>
  )
}

function BenefitsSection() {
  return (
    <section className="bg-[#D1C9F7] pb-8">
      <div className="container">
        <span className="flex items-center">
          <span className="border-t border-[#2613861b] block flex-1" />
          <span className="text-[#271386] font-extrabold text-sm leading-[3px] block px-5">ALL BENEFITS</span>
          <span className="border-t border-[#2613861b] block flex-1" />
        </span>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="mt-10 flex gap-4 w-min">
            {benefits.map((b, i) => (
              <span key={i} className="bg-white rounded-xl p-6 h-[246px] flex flex-col w-[242px] shrink-0">
                <span className="flex items-center space-x-5">
                  <BenefitIcon index={i} />
                  <span className="text-xl font-medium text-[#271386] leading-none whitespace-pre-line">{b.title}</span>
                </span>
                <span className="text-[#271386] text-sm mt-auto">{b.desc}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PlansHeading() {
  return (
    <section className="bg-[#E8E4FB] py-[200px] -translate-y-[100px]">
      <div className="container text-center">
        <span className="text-sm mb-6 font-bold tracking-widest block text-[#271386]">CHOWPASS PLANS</span>
        <span className="px-10 block text-[40px] lg:text-[80px] leading-[40px] lg:leading-[80px] lg:w-[820px] mx-auto font-semibold text-[#271386]">
          Become a member with a plan curated just for you
        </span>
      </div>
    </section>
  )
}

function PricingCards() {
  return (
    <section className="-translate-y-[100px]">
      <div className="bg-[#8C77EC] lg:bg-[#271386]">
        <div className="lg:bg-[#8C77EC]">
          <div className="container relative grid lg:grid-cols-3 gap-8 lg:px-10 -translate-y-20 py-10">
            {plans.map((plan, i) => (
              <span key={i} className="flex flex-col items-center rounded-[20px] bg-white p-6 lg:h-[400px]">
                <span className="flex w-full items-center">
                  <span className="border-t border-[#2613861b] block flex-1" />
                  <span className="flex items-center space-x-2 text-[#271386] font-medium text-sm lg:text-xl leading-[3px] px-5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#8C77EC"/>
                      <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{plan.name}</span>
                  </span>
                  <span className="border-t border-[#2613861b] block flex-1" />
                </span>
                <span className="block text-5xl text-[#271386] py-5 font-bold">{plan.price}</span>
                <span className="block bg-[#F3F1FD] rounded-full py-1 px-4 text-sm font-medium text-[#8C77EC]">{plan.badge}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ChowpassCTA() {
  return (
    <section className="bg-[#271386] -mt-10">
      <div className="container py-20 flex flex-col items-center">
        <h3 className="max-w-[450px] text-[40px] lg:text-[60px] font-medium leading-[40px] lg:leading-[60px] text-center text-white">
          Start enjoying benefits now!
        </h3>
        <span className="flex items-center space-x-2 mt-6">
          <svg width="16" height="20" viewBox="0 0 172 170" fill="none" className="text-white">
            <path d="M147.088 74.442a55.722 55.722 0 0 1-2.791 17.472 73.102 73.102 0 0 1-26.43 39.198h-.015L73.823 168l-48.089-40.248C12.806 114.703 1.991 97.022 1 76.475a72.934 72.934 0 0 1 144.595-16.647c.078.427.04.868-.111 1.275a55.929 55.929 0 0 1 1.605 13.34Z" fill="currentColor"/>
          </svg>
          <span className="text-xs tracking-[3px] font-bold text-white uppercase">Live exclusively in Lagos & Abuja</span>
        </span>
        <a
          className="inline-flex items-center justify-center h-[56px] bg-[#8C77EC] rounded-lg text-center font-medium text-white px-10 mt-6 transition-transform hover:scale-105"
          href="https://chowdeck.onelink.me/lHwx/pqcqh9t4"
        >
          Join now
        </a>
      </div>
    </section>
  )
}

function ChowpassBottom() {
  return (
    <div className="container md:grid md:grid-cols-2 gap-6 lg:h-[800px] mt-20">
      <div className="flex flex-col p-5 h-[400px] md:h-full lg:p-10 rounded-lg lg:rounded-xl mb-5 lg:mb-0 relative bg-[#D1C9F7]" data-aos="fade-up">
        <p className="text-[32px] lg:text-6xl text-[#271386] font-bold leading-9 lg:leading-[1.2] mb-4 lg:mb-8 tracking-tighter">
          Unlock Exclusive Perks with Chowpass
        </p>
        <span className="block mb-4 lg:hidden">
          <a className="inline-flex items-center justify-center bg-white mr-2 rounded-full w-12 h-12 active:scale-95 transition-transform" target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.chowdeck.com">
            <GooglePlayIcon />
          </a>
          <a className="inline-flex items-center justify-center bg-white rounded-full w-12 h-12 active:scale-95 transition-transform" target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/chowdeck/id1530676376">
            <AppStoreIcon className="text-chow-green" />
          </a>
        </span>
        <span className="hidden lg:block mb-8 space-y-4">
          <a className="inline-flex items-center justify-center py-3 font-medium px-6 rounded-lg bg-white text-chow-green transition-colors hover:bg-chow-yellow hover:text-black hover:scale-105" target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.chowdeck.com">
            <GooglePlayIcon className="mr-2" /> Download on Google Play
          </a>
          <br />
          <a className="inline-flex items-center justify-center py-3 font-medium px-6 rounded-lg bg-white text-chow-green transition-colors hover:bg-chow-yellow hover:text-black hover:scale-105" target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/chowdeck/id1530676376">
            <AppStoreIcon className="mr-2" /> Download on App Store
          </a>
        </span>
      </div>
      <div className="relative h-[400px] lg:h-full rounded-lg overflow-hidden bg-cover bg-center" data-aos="fade-up" data-aos-delay="120">
        <img src="/images/Red.png" alt="chowdeck rating screen" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </div>
    </div>
  )
}

function FaqSection() {
  return (
    <div className="container">
      <div className="relative bg-slate-100 border-4 border-black p-8 rounded-2xl flex flex-col">
        <h3 className="text-chow-green section-title flex items-center justify-between">FAQs.</h3>
        <div className="mt-4 grid lg:grid-cols-2 gap-8">
          <div>
            {[
              'What is Chowpass?',
              'How do I subscribe?',
              'Which areas does Chowpass cover?',
              'Can I cancel my subscription?',
              'What benefits do I get?',
              'How do I use my promo codes?',
            ].map((q, i) => (
              <div key={i} className="py-4 border-b-2 border-black/10">
                <p className="font-bold text-base tracking-tight">{q}</p>
              </div>
            ))}
          </div>
          <div className="p-6 bg-[#F3F1FD] rounded-2xl">
            <p className="text-base leading-relaxed text-[#271386]">
              Chowpass is Chowdeck&apos;s premium membership plan that gives you free deliveries, reduced service fees, no surge fees, and a cleaner ad-free experience. Subscribe for just ₦3,500/month and start saving on every order.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChowpassPage() {
  return (
    <>
      <ChowpassHero />
      <BenefitsSection />
      <PlansHeading />
      <PricingCards />
      <ChowpassCTA />
      <div className="bottom-band relative">
        <div className="relative z-10 pb-24 lg:pb-10">
          <div className="container mt-16 lg:mt-20">
            <ChowpassBottom />
          </div>
          <FaqSection />
          <Newsletter />
        </div>
      </div>
    </>
  )
}

export default ChowpassPage
