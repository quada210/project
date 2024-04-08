
import { Route, Routes } from 'react-router-dom';
import './App.css';



import { Navbar } from './Components/Navbar';


import Api from './Components/Api';
import Add from './Components/Add';
import Viewincard from './Components/Viewincard';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
     
      <Route path='/view' element={<Api/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/card' element={<Viewincard/>}/>
      

      </Routes>
      
    </div>
  );
}

export default App;
