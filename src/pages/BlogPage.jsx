import { useState } from 'react'
import Newsletter from '../components/sections/Newsletter'
import PlaceOrder from '../components/sections/PlaceOrder'
import Faq from '../components/sections/Faq'

const categories = ['all', 'Product', 'Engineering', 'Company', 'Culture']

function BlogHero() {
  return (
    <div
      className="bg-chow-green overflow-hidden relative"
      style={{
        backgroundImage: 'url(/illustrations/cloud-left.svg), url(/illustrations/cloud-right.svg), url(/illustrations/bg-tiny-bottom.png)',
        backgroundPosition: '0 90px, 100% 0, bottom',
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
        backgroundSize: '20%, 30%, 100%',
        minHeight: '500px',
      }}
    >
      <div className="container pt-40 pb-10 lg:grid lg:grid-cols-5 lg:gap-10 lg:min-h-[912px]">
        <div className="lg:col-span-2 lg:flex lg:flex-col lg:justify-end lg:py-16">
          <h1
            className="text-white mt-16 mb-6 font-bold tracking-[-4px] md:mt-[12rem] lg:mt-16"
            style={{ fontSize: 'clamp(60px, 8vw, 112px)', lineHeight: '1.25' }}
            data-aos="fade-up"
          >
            Blog &amp; Stories
          </h1>
          <h3 className="text-white text-lg lg:text-xl leading-7 lg:leading-7" data-aos="fade" data-aos-delay="200">
            The good stuff. Follow our social media for the latest updates, features and even sneak peeks 👀
          </h3>
        </div>
        <div className="hidden lg:block lg:col-span-3 lg:overflow-y-auto lg:h-[740px] lg:mt-32">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden mb-7">
              <div className="h-40 w-full mb-7 skeleton rounded-xl" />
              <div className="my-2 h-6 w-3/4 skeleton rounded" />
              <div className="my-2 h-6 w-1/2 skeleton rounded" />
              <div className="my-2 h-6 w-2/3 skeleton rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CategoriesDropdown({ selected, onSelect }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mb-20 w-full md:w-[480px] mx-auto" data-aos="fade-up">
      <div className="relative bg-black rounded-lg border h-14 border-gray-100">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="h-full flex items-center px-4 text-white md:px-5 w-full bg-transparent cursor-pointer"
        >
          <span className="flex items-center text-white capitalize">
            <span className="h-2 w-2 rounded-full border border-chow-yellow-100 mr-3 bg-chow-yellow-100" />
            Categories : {selected}
          </span>
          <span className="ml-auto text-sm tracking-[3px] font-bold uppercase flex items-center">
            select
            <svg className="ml-1 mt-0.5" height="12" width="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </span>
        </button>
        {open && (
          <div className="absolute top-full left-0 right-0 bg-black border border-gray-100 rounded-b-lg z-10 max-h-60 overflow-y-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  onSelect(cat)
                  setOpen(false)
                }}
                className="w-full text-left px-5 py-3 text-white hover:bg-white/10 transition-colors text-sm capitalize cursor-pointer"
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="py-10">
      <p className="flex flex-col items-center justify-center pt-20 text-4xl text-gray-400 font-medium">
        <span className="relative h-72 w-72 block">
          <img src="/illustrations/no-item.png" alt="chowdeck blog" className="absolute inset-0 w-full h-full object-contain" loading="lazy" />
        </span>
        No stories at the moment, check again later!
      </p>
    </div>
  )
}

function PressSection() {
  return (
    <div className="mt-40">
      <h2 className="section-title border-b border-black py-5">Press</h2>
      <div className="grid">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 my-3 skeleton rounded-lg" />
        ))}
      </div>
    </div>
  )
}

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <>
      <BlogHero />
      <div className="container pt-20 pb-60">
        <CategoriesDropdown selected={selectedCategory} onSelect={setSelectedCategory} />
        <EmptyState />
        <PressSection />
      </div>
      <div className="bottom-band relative">
        <div className="relative z-10 pb-24 lg:pb-10">
          <div className="mt-16 lg:mt-20" />
          <Faq />
          <PlaceOrder />
          <Newsletter />
        </div>
      </div>
    </>
  )
}

export default BlogPage
