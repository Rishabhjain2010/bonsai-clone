import logo from './logo.svg';
import './App.css';
import features from './Components/features/features';
import 

const features = [
  {
tittle: 'Deliver projects on-time & on-budget' ,
description: '✓ Assign, prioritize & track tasks, '
              '✓ Track your budget across projects.'
              '✓ Log your team's time in-app or in timesheets.' ,
buttonText: 'Get Started ',
imgSrc:  '' ,
altImg:  '' 

}, 
{
tittle: '' ,
description: '' ,
buttonText: ' ',
imgSrc:  '' ,
altImg:  '' 

},{
tittle: '' ,
description: '' ,
buttonText: ' ',
imgSrc:  '' ,
altImg:  '' 

}
]


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
