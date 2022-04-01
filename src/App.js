import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import GrandPa from './components/GrandPa/GrandPa';

function App() {
  return (
    <div className='App' >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/grandpa' element={<GrandPa />}></Route>
      </Routes>
    </div>
  );
}

export default App;
