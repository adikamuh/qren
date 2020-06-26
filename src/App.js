import React from 'react';
import './App.scss';
import './style/text.scss'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Product from './pages/product/product';
import Featured from './pages/featured/featured';

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/product" component={Product} />
        <Route path="/featured" component={Featured} />
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
