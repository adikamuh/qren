import React from 'react';
import './App.scss';
import './style/text.scss'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact></Route>
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
