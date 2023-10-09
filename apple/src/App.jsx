// import logo from './logo.svg';
// import './App.css';

import { Route, Routes } from "react-router-dom";
import Homepage from "./Component/Homepage";
import Navbar from "./Component/Header/Navbar";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
