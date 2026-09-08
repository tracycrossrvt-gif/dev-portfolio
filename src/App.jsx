import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteShell from './components/layout/SiteShell'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import MmacCaseStudyPage from './components/pages/MmacCaseStudyPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <SiteShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/case-studies/mmac-hub" element={<MmacCaseStudyPage />} />
        </Routes>
      </SiteShell>
    </BrowserRouter>
  )
}

export default App
