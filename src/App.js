import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './page/Home';
import Details from './page/Details';



function App() {
  return (
    <div className="App">      
     <Routes>
        
        <Route path="/product/:id" element={<Details/>} />
        <Route path='/' element={<Home/>} />

      </Routes>
    </div>
  );
}

export default App;
