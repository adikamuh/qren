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
import NavbarLogin from './components/navbar/navbar-login';
import SignUpComplete from './pages/signup-complete/signup-complete';

function App() {
  const DefaultRoutes = withRouter(({ location }) => {
    return(
      <div style={{boxSizing: 'border-box', width: '100%'}}>
        {
          location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/signup-complete' ? <Navbar /> : <NavbarLogin />
        }

        <Route path="/" component={Home} exact></Route>
        <Route path="/product" component={Product} />
        <Route path="/featured" component={Featured} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signup-complete" component={SignUpComplete} />

        <Route path='/play-store' component={() => { 
            window.location.href = 'https://play.google.com/store/apps/details?id=com.tmoney.qren'; 
            return null;
        }}/>
        
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
