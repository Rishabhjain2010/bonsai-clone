
import React from 'react';

import Dashboard from "./components/dashboard"
import Feature from './components/features';
import Rating from './components/ratings';
import './App.css';


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
