
import Dashboard from "./components/Dashboard";

import React from 'react';
import Feature from './components/features';
import './App.css';
import Rating from './components/ratings';
import Template from './components/Template';


const App = () => {
  return (

  
    <div className='page'>
    <Dashboard />
    <Feature/>
    <Rating/>
    <Template/>

    </div>

  );
}

export default App;
