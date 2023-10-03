// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import SignIn from './Components/SignIn/SignIn';
import BecomeAMember from './Components/BecomeAMember/BecomeAMember';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/navbar' element={<Navbar />} />
        <Route excat path='/footer' element={<Footer />} />
        <Route exact path='/sign-in' element={<SignIn />} />
        <Route exact path='/become-a-member' element={<BecomeAMember />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
