import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import VendorsPage from './pages/VendorsPage'
import RidersPage from './pages/RidersPage'
import ChowpassPage from './pages/ChowpassPage'
import RelayPage from './pages/RelayPage'
import AdsPage from './pages/AdsPage'
import ChowstorePage from './pages/ChowstorePage'
import ContactPage from './pages/ContactPage'
import FaqsPage from './pages/FaqsPage'
import BlogPage from './pages/BlogPage'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/vendors" element={<VendorsPage />} />
          <Route path="/riders" element={<RidersPage />} />
          <Route path="/chowpass" element={<ChowpassPage />} />
          <Route path="/relay" element={<RelayPage />} />
          <Route path="/ads" element={<AdsPage />} />
          <Route path="/chowstore" element={<ChowstorePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App