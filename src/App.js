import React from 'react';
import './App.scss';
import './style/text.scss'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Product from './pages/product/product';
import Featured from './pages/featured/featured';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';

function App() {
  const DefaultRoutes = withRouter(({ location }) => {
    return(
      <div style={{boxSizing: 'border-box', width: '100%'}}>
        {
          location.pathname !== '/login' && location.pathname !== '/signup' && <Navbar />
        }

        <Route path="/" component={Home} exact></Route>
        <Route path="/product" component={Product} />
        <Route path="/featured" component={Featured} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        
        {
          location.pathname !== '/login' && location.pathname !== '/signup' && <Footer />
        }
      </div>

    )
  })

  return (
    <Switch>
      <DefaultRoutes />
    </Switch>
  );
}

export default App;
