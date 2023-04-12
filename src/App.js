import React from 'react';
import './App.css'
import { Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Home from './views/Home/Home';
import About from './views/About/About';
import Band from './views/Band/Band';
import Services from './views/Services/Services';

function App() {
  return (
    <div className='appWrapper'>
        <NavBar/>
          <Route exact path = '/' component = { Home } />
          <Route path = '/about' component = { About } />
          <Route path = '/band' component = { Band } />
          <Route path = '/services' component = { Services } />
          <Footer/>
    </div>        
  );
}

export default App;
