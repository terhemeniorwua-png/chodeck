import { useState } from 'react'
import Newsletter from '../components/sections/Newsletter'
import PlaceOrder from '../components/sections/PlaceOrder'
import Faq from '../components/sections/Faq'

const topicOptions = [
  'General Inquiry',
  'Order Issue',
  'Vendor Support',
  'Rider Support',
  'Feedback & Suggestions',
  'Partnership',
  'Press & Media',
  'Other',
]

function ContactHero() {
  return (
    <div
      className="bg-chow-green h-[469px] pt-40 overflow-hidden relative"
      style={{
        backgroundImage: 'url(/illustrations/cloud-right.svg), url(/illustrations/bg-tiny-bottom.png)',
        backgroundPosition: 'right 0, bottom',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: '70%, 100%',
      }}
    />
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  })
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="-mt-48">
      <div className="container">
        <div className="bg-white border-4 border-black p-6 rounded-3xl md:p-10 lg:p-16 mt-16" data-aos="fade-up">
          <div className="flex items-center mb-3">
            <span className="mr-auto">
              <span className="block font-bold text-3xl md:text-5xl">Email Us</span>
            </span>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="w-16 md:w-24">
              <circle cx="32" cy="32" r="30" fill="#FFC501" opacity="0.2"/>
              <circle cx="32" cy="24" r="12" fill="#FFC501"/>
              <path d="M16 48c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#FFC501"/>
              <circle cx="28" cy="22" r="2" fill="#0C513F"/>
              <circle cx="36" cy="22" r="2" fill="#0C513F"/>
              <path d="M28 28c2 2 6 2 8 0" stroke="#0C513F" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          <span className="block md:text-2xl text-base text-black font-medium mb-10">
            You can report all complaints, concerns or suggestions regarding our operations, including ESG-related matters, on this contact form or via email at{' '}
            <a href="mailto:hello@chowdeck.com" className="underline">hello@chowdeck.com</a>{' '}
            or our mobile in-app Support Chat.
          </span>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-3 mb-4">
              <div className="bg-gray-100 rounded-lg px-4 md:px-5 border border-gray-100 flex items-center col-span-3 md:col-span-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <input
                  type="text"
                  className="flex w-full bg-transparent h-14 px-3 outline-none placeholder:text-black"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="bg-gray-100 rounded-lg px-4 md:px-5 border border-gray-100 flex items-center col-span-3 md:col-span-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <input
                  type="email"
                  className="flex w-full bg-transparent h-14 px-3 outline-none placeholder:text-black"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="bg-gray-100 rounded-lg px-4 md:px-5 border border-gray-100 flex items-center col-span-3 md:col-span-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <input
                  type="tel"
                  className="flex w-full bg-transparent h-14 px-3 outline-none placeholder:text-black"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="relative bg-black rounded-lg border h-14 border-gray-100 col-span-3 mb-4">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="h-full flex items-center px-4 text-white md:px-5 w-full bg-transparent cursor-pointer"
              >
                <span className={formData.topic ? 'text-white' : 'text-slate-400'}>
                  {formData.topic || 'Select a topic'}
                </span>
                <span className="ml-auto text-sm tracking-[3px] font-bold uppercase flex items-center">
                  select
                  <svg className="ml-1 mt-0.5" height="12" width="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </span>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-black border border-gray-100 rounded-b-lg z-10 max-h-60 overflow-y-auto">
                  {topicOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, topic: option })
                        setDropdownOpen(false)
                      }}
                      className="w-full text-left px-5 py-3 text-white hover:bg-white/10 transition-colors text-sm cursor-pointer"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-gray-100 rounded-lg px-4 md:px-5 border border-gray-100 mb-4">
              <textarea
                className="flex w-full bg-transparent p-3 outline-none placeholder:text-black"
                rows="7"
                placeholder="Type a message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="bg-chow-green inline-flex items-center justify-center text-white py-3 font-medium px-6 rounded-lg transition-transform active:scale-95 hover:bg-chow-green/90 cursor-pointer"
            >
              {submitted ? 'Message Sent!' : 'Submit Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
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

export default ContactPage
