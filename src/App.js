import React, { useState, useEffect } from 'react'
// impport Route, Routes
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import ProductsPage from './pages/ProductsPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPag'
import FeaturePage from './pages/FeaturePage';
import Testimonialpage from './pages/Testimonialpage';
import Portal from './components/Portal';
import ScrollTop from './components/ScrollTop'

function App() {
 
  let [louding, setLouding] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLouding(true)
    }, 2000)

  })

  return !louding ? <Portal /> :
    <BrowserRouter>
      <div className="App" >
        <Routes>
          <Route path='/about' element={<About />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path="/productspage" element={<ProductsPage />}></Route>
          <Route path="/blogpage" element={<BlogPage />}></Route>
          <Route path="/contactpage" element={<ContactPage />}></Route>
          <Route path="/featurepage" element={<FeaturePage />}></Route>
          <Route path="/testimonialpage" element={<Testimonialpage />}></Route>
        </Routes>
        <Header />
        <ScrollTop />
      </div>
    </BrowserRouter>

}
export default App;
