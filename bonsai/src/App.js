
import Dashboard from "./components/Dashboard"

import React from 'react';
import Feature from './components/features';
import './App.css';
import Rating from './components/ratings';


const App = () => {
  return (

  
    <div className='page'>
    <Dashboard />
    <Feature/>
    <Rating/>

    </div>

  );
}

export default App;
