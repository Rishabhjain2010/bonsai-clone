import React from 'react';
import Signup from './components/signup';
import Getstarted from './components/getstarted';
import Dashboard from "./components/dashboard";
import Feature from './components/features';
import Rating from './components/ratings';

import Template from './components/Template';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';


const App = () => {
  return (

  
    <div className='page'>

    <Navbar />
    <Dashboard />
    <Feature/>
    <Rating/>
    <Template/>
    <Signup/>
    <Getstarted/>
    <Footer />


    </div>

  );
}

export default App;
