import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';
import {FaSeedling} from  "react-icons/fa"
function App() {
  return (
    <div className="App">
    <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
    <h1 className="text-4xl py-8 mb-10 bg-green-800 text-white rounded-lg">
    {/* <img className='seed' src={seed}  alt='seed'/> */}
    <div className='header'> 

    
    <div className='seed'><FaSeedling /></div>
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
