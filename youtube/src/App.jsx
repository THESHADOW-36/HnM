// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
