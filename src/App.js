import React from 'react';
import './App.scss';
import './style/text.scss'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Product from './pages/product/product';

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/product" component={Product} />
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
