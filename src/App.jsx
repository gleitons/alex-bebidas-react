
import HeadFront from './components/HeaderFront';
import DataH from './components/ano';
import './App.css';

function App() {
  
  return (
    <div className='App-header'>
      
      <HeadFront />
      
      <p className='texto'>Copyright <DataH /> Seu Site Online - <a className="links" href="https://seusiteonline.com" 
      target="_blank"
      rel="noopener noreferrer"> Seusiteonline.com</a></p>
      
    </div>
  );
}

export default App;
