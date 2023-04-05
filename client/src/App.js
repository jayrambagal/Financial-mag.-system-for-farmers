import './App.css';
import Graph from './components/Graph';
import seed from "./assets/seed1.png"
import Form from './components/Form';
function App() {
  return (
    <div className="App">
    <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
    <h1 className="text-4xl py-8 mb-10 bg-green-800 text-white rounded">
    {/* <img className='seed' src={seed}  alt='seed'/> */}
    <div className='header'> 
    <img className='seed' src={seed}  alt='seed'/>
    FarmaTracker
    </div>
    
    </h1>
    

    {/* grid columns */}
    <div className="grid md:grid-cols-2 gap-4">
        {/* Chart */}
        <Graph />  
        <Form/>
    </div>
    
  </div>
    </div>
  );
}

export default App;
