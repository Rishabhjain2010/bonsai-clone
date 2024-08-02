import React from 'react';
import Feature from './components/Feature';
import './App.css';


const features = [
  {
    title: 'Deliver projects on-time & on-budget',
    description: '✓ Assign, prioritize & track tasks, ✓ Track your budget across projects. ✓ Log your team\'s time in-app or in timesheets.',
    buttonText: 'Get Started',
    imgSrc: '',  
    imgAlt: 'Project Management Image'
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    buttonText: 'Button Text 2',
    imgSrc: '', 
    imgAlt: 'Alt Text 2'
  },
  {
    title: 'Title 3',
    description: 'Description 3',
    buttonText: 'Button Text 3',
    imgSrc: '',  
    imgAlt: 'Alt Text 3'
  }
];

const App = () => {
  return (
    <div className="App">
      
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    
    </div>
  );
}

export default App;
