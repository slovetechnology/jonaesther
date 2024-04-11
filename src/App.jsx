import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactusPage from './pages/ContactusPage'
import AboutUsPage from './pages/AboutUsPage'
import SingleBlogPage from './pages/SingleBlogPage'


// dynamic url 
// static url

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactusPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}

