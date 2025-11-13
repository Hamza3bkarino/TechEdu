import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Quiz from './pages/quiz';
import Navbar from './components/NavBar'
import Result from './pages/result';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path='/result' element={<Result/>}/>
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
