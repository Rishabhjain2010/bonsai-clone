import React from 'react';
import Feature from './components/features';
import './App.css';


//  const features = [
//   {
//     title: 'Deliver projects on-time & on-budget',
//     description: '✓ Assign, prioritize & track tasks,✓ Track your budget across projects. ✓ Log your team\'s time in-app or in timesheets.',
//     buttonText: 'Get Started',
//     imgSrc: '/assets/consultingpartner.png',  
//     imgAlt: 'Project Management Image'
//   },
//   {
//     title: 'Title 2',
//     description: 'Description 2', 
//     buttonText: 'Button Text 2',
//     imgSrc: '/assets/profitability.png', 
//     imgAlt: 'Alt Text 2'
//   },
//   {
//     title: 'Title 3',
//     description: 'Description 3',
//     buttonText: 'Button Text 3',
//     imgSrc: '/assets/projectpepiline.png',  
//     imgAlt: 'Alt Text 3'
//   }
// ];

const App = () => {
  return (
    <div className="App">
    <Feature/>
    </div>
  );
}

export default App;
