import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from './store'
import { useState } from 'react'
import Home from './components/Home'
const Header = lazy(() => import('./components/Header'))
const ProductList = lazy(() => import('./components/ProductList'))
const ProductDetail = lazy(() => import('./components/ProductDetail'))
const Cart = lazy(() => import('./components/Cart'))
const NotFound = lazy(() => import('./components/NotFound'))

function App() {


  return (
    <>
  <Provider store={store}>
      <Router>
        <div>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Header />
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path="/browse" element={< ProductList/>} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
          </Suspense>
        </div>
      </Router>
    </Provider>
    </>
  )
}

export default App
