import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Status from './pages/Status'
import About from './pages/About'
import News from './pages/News'
import Downloads from './pages/Downloads'
import Onboarding from './pages/Onboarding'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="relative min-h-screen bg-[#050506]">
          <ScrollToTop />
          <div className="fixed inset-0 bg-background -z-50" />
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(139,92,246,0.1),transparent_50%)] -z-40 pointer-events-none" />
          <Navbar />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/status" element={<Status />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/start" element={<Onboarding />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
