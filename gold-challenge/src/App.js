import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landingpage from "./Landingpage";
import Carsearchpage from './Carsearchpage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/search' element={<Carsearchpage/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
