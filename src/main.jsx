import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'

import './index.css'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import TermsPage from './pages/TermsPage.jsx'
import BlogsPage from './pages/BlogsPage.jsx'
import BlogContentPage from './pages/BlogContentPage.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='' element={<HomePage />} />
    <Route path='contact' element={<ContactPage />} />
    <Route path='about' element={<AboutPage />} />
    <Route path='terms-of-use' element={<TermsPage />} />
    <Route path='blogs' element={<BlogsPage />} />
    <Route path='/:url' element={<BlogContentPage />} />


  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
