import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About.jsx'
import Blogs from './components/Blogs.jsx'
import TemplateBlog from './blogs/TemplateBlog.jsx'
import Game from './components/Game.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
        <Route path="/blog" element={<Blogs />} >
          <Route path="template" element={<TemplateBlog />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
