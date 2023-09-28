// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/navbar' element={<Navbar />} />
        <Route excat path='/footer' element={<Footer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
