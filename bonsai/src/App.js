import React from 'react';
import Feature from './components/features';
import './App.css';
import Rating from './components/ratings';
import Signup from './components/signup';
import Getstarted from './components/getstarted'

const App = () => {
  return (
  
    <div className='page'>
    <Feature/>
    <Rating/>
    <Signup/>
    <Getstarted/>
    
    </div>
    
  );
}

export default App;
