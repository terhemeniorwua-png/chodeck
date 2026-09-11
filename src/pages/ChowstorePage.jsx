import { AppStoreIcon, GooglePlayIcon } from '../components/ui/Icons'
import Newsletter from '../components/sections/Newsletter'

function ChowstoreHero() {
  return (
    <section className="bg-chow-pepper-100 relative pt-40 lg:pt-44 min-h-[80vh] flex flex-col items-center">
      <div className="relative z-30 mx-[3%] md:mx-[20%] lg:mx-0 text-center container">
        <h1 className="text-3xl md:text-6xl lg:text-[112px] text-white font-bold text-center mb-6 tracking-[-2px]" data-aos="fade-up">
          <span className="text-chow-yellow-100 italic font-medium">Better Prices,</span>
          <br />
          Delivered to You!
        </h1>
        <span className="block md:text-xl text-base text-white" data-aos="fade" data-aos-delay="200">
          Groceries cheaper than Supermarkets and we&apos;ll bring it to you!
        </span>
        <div className="relative w-full mx-auto max-w-3xl mt-8" data-aos="fade-up" data-aos-delay="300">
          <div className="w-full text-left my-8 rounded-full">
            <div className="relative flex items-center px-3 h-[64px] rounded-full bg-white mx-auto focus-within:border-black focus-within:ring-2 focus-within:ring-black">
              <svg width="20" height="25" viewBox="0 0 20 25" fill="none" className="shrink-0 ml-2">
                <path d="M20 10.74c0 .783-.128 1.56-.382 2.303a9.629 9.629 0 0 1-3.616 5.166H16l-6.024 4.862-6.58-5.304c-1.769-1.72-3.249-4.05-3.384-6.759-.123-2.437.72-4.827 2.36-6.687C4.01 2.46 6.321 1.27 8.837.99a10.261 10.261 0 0 1 7.082 1.827c2.035 1.453 3.42 3.596 3.876 5.996a.31.31 0 0 1-.015.168c.146.576.22 1.166.219 1.758Z" fill="#05AA70" fillRule="evenodd"/>
                <circle cx="9.993" cy="9.679" r="3.214" fill="#fff"/>
              </svg>
              <input
                type="text"
                placeholder="Enter a delivery address"
                className="flex-1 border-0 h-full bg-transparent outline-none text-gray-800 ml-3"
              />
              <button className="bg-cucumber rounded-full text-white text-sm lg:px-6 px-2 lg:py-3 py-2 font-medium hover:bg-[#68B99D] transition cursor-pointer">
                <span className="hidden lg:inline">Order something nice</span>
                <span className="lg:hidden">Order now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FreeDeliverySection() {
  return (
    <section className="md:-mt-[8rem] -mt-8 mb-[114px] text-center overflow-hidden">
      <div className="relative bg-white lg:rounded-t-[150px] rounded-t-3xl md:pt-20 pt-8 z-[19] md:mx-[52px]">
        <h2 className="text-[20px] md:text-4xl lg:text-[64px] font-bold tracking-tighter" data-aos="fade-up">
          <span className="text-chow-pepper-100">FREE</span> Delivery for 30 Days!
        </h2>
        <p className="lg:text-xl max-w-3xl mx-auto mb-10 md:mt-8 mt-6 px-4" data-aos="fade" data-aos-delay="200">
          Save on every order & enjoy FREE home delivery!{' '}
          <a className="underline" href="/terms">T&Cs Apply</a>
        </p>
        <div className="flex items-center justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="300">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0 w-fit">
            <a
              className="inline-flex items-center justify-center font-medium px-6 py-4 rounded-lg bg-chow-pepper-100 text-white transition-transform hover:scale-105"
              href="https://play.google.com/store/apps/details?id=com.chowdeck.com"
            >
              <GooglePlayIcon className="mr-2" />
              Download on Google Play
            </a>
            <a
              className="inline-flex items-center justify-center font-medium px-6 py-4 rounded-lg bg-chow-pepper-100 text-white transition-transform hover:scale-105"
              href="https://apps.apple.com/us/app/chowdeck/id1530676376"
            >
              <AppStoreIcon className="mr-2" color="white" />
              Download on App Store
            </a>
          </div>
        </div>
        <div className="relative flex justify-center items-center pt-2 lg:pt-10 w-full h-[400px] lg:h-[1000px]" data-aos="fade-in">
          <span className="block relative w-[200px] lg:h-full lg:w-[400px] h-[350px] z-10">
            <div className="w-full h-full bg-gray-100 rounded-[2rem] border-4 border-gray-200 flex items-center justify-center">
              <svg viewBox="0 0 200 350" className="w-[150px] h-[280px]" fill="none">
                <rect width="200" height="350" rx="20" fill="#f8f8f8"/>
                <rect x="10" y="40" width="180" height="270" rx="4" fill="white"/>
                <circle cx="100" cy="330" r="8" fill="#ddd"/>
                <rect x="20" y="60" width="160" height="15" rx="4" fill="#e80b2e" opacity="0.2"/>
                <rect x="20" y="90" width="80" height="10" rx="4" fill="#eee"/>
                <rect x="20" y="115" width="160" height="80" rx="8" fill="#f0f0f0"/>
                <rect x="20" y="210" width="160" height="15" rx="4" fill="#e80b2e" opacity="0.2"/>
                <rect x="20" y="240" width="120" height="10" rx="4" fill="#eee"/>
                <rect x="20" y="265" width="160" height="40" rx="8" fill="#038B5C" opacity="0.2"/>
              </svg>
            </div>
          </span>
          <span className="absolute left-1/2 -translate-x-1/2 top-0 w-full lg:w-[700px] h-full z-0 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 700 800" className="w-full h-full object-contain opacity-20">
              <ellipse cx="350" cy="200" rx="150" ry="300" fill="#e80b2e" opacity="0.1"/>
              <ellipse cx="250" cy="300" rx="80" ry="200" fill="#038B5C" opacity="0.08"/>
              <ellipse cx="450" cy="250" rx="100" ry="250" fill="#FFC501" opacity="0.08"/>
            </svg>
          </span>
        </div>
      </div>
    </section>
  )
}

function ChowstoreFaqSection() {
  return (
    <div className="container">
      <div className="relative bg-slate-100 border-4 border-black p-8 rounded-2xl flex flex-col">
        <h3 className="text-chow-green section-title flex items-center justify-between">FAQs.</h3>
        <div className="mt-4 grid lg:grid-cols-2 gap-8">
          <div>
            {[
              'What is Chowstore?',
              'How do I order groceries?',
              'How much does delivery cost?',
              'What areas do you deliver to?',
              'Can I schedule a delivery?',
              'What payment methods are accepted?',
            ].map((q, i) => (
              <div key={i} className="py-4 border-b-2 border-black/10">
                <p className="font-bold text-base tracking-tight">{q}</p>
              </div>
            ))}
          </div>
          <div className="p-6 bg-red-50 rounded-2xl">
            <p className="text-base leading-relaxed text-chow-pepper-100">
              Chowstore is Chowdeck&apos;s grocery delivery service. Get groceries cheaper than supermarkets delivered right to your door. Enjoy free delivery for 30 days when you sign up!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChowstorePromoSection() {
  return (
    <div className="container md:grid md:grid-cols-2 gap-6 lg:h-[800px] mt-20">
      <div className="flex flex-col h-[400px] md:h-full lg:pt-[100px] lg:pl-[62px] pl-[50px] pt-[30px] rounded-lg lg:rounded-[20px] mb-5 lg:mb-0 relative bg-chow-pepper-100 overflow-hidden" data-aos="fade-up" data-aos-delay="120">
        <p className="text-[32px] lg:text-6xl italic text-white font-bold leading-9 lg:leading-[1.2] mb-3 lg:mb-8 tracking-tighter relative z-10">
          The Cheapest<br />Groceries,
          <br />
          <span className="text-chow-yellow-100 not-italic font-normal">Delivered To You.</span>
        </p>
        <span className="block mb-4 lg:hidden relative z-10">
          <a className="inline-flex items-center justify-center bg-white mr-2 rounded-full w-12 h-12 active:scale-95 transition-transform" target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.chowdeck.com">
            <GooglePlayIcon />
          </a>
          <a className="inline-flex items-center justify-center bg-white rounded-full w-12 h-12 active:scale-95 transition-transform" target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/chowdeck/id1530676376">
            <AppStoreIcon className="text-chow-green" />
          </a>
        </span>
        <span className="hidden lg:block mb-4 space-y-4 relative z-10">
          <a className="inline-flex items-center justify-center font-medium px-6 rounded-lg bg-white text-black py-2.5 transition-transform hover:scale-105" target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.chowdeck.com">
            <GooglePlayIcon className="mr-2" /> Download on Google Play
          </a>
          <br />
          <a className="inline-flex items-center justify-center font-medium px-6 rounded-lg bg-white text-black py-2.5 transition-transform hover:scale-105" target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/chowdeck/id1530676376">
            <AppStoreIcon className="mr-2 text-black" /> Download on App Store
          </a>
        </span>
        <p className="block md:text-[26px] text-base text-white md:py-6 py-0 leading-tight relative z-10">
          Save on every order and<br />Enjoy FREE home delivery!
        </p>
      </div>
      <div className="relative h-[400px] lg:h-full rounded-lg overflow-hidden bg-cover bg-center" data-aos="fade-up" data-aos-delay="120">
        <img src="/images/Red.png" alt="Chowdeck app chowstore" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </div>
    </div>
  )
}

function ChowstorePage() {
  return (
    <>
      <ChowstoreHero />
      <FreeDeliverySection />
      <div className="bottom-band relative">
        <div className="relative z-10 pb-24 lg:pb-10">
          <div className="mt-16 lg:mt-20" />
          <ChowstoreFaqSection />
          <ChowstorePromoSection />
          <Newsletter />
        </div>
      </div>
    </>
  )
}

export default ChowstorePage
