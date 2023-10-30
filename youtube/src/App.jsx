// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import SignIn from "./Components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route exact path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
