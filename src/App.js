import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import store from "./redux/store/store"
import { Provider } from "react-redux"

const App = () => {

  return (
    <>
      <Provider store={store}>
        <Router>

          <Navigation />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Pizza-Cart' element={<Home />}></Route>
            <Route path='/products' element={<ProductsPage />}></Route>
            <Route path='/products/:_id' exact element={<SingleProduct />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>

        </Router>
      </Provider>
    </>
  )
}

export default App;

