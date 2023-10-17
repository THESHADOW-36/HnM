// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from "./Component/Homepage";
import Store from "./Component/Store/Store";
import SignIn from "./Component/Sign-in/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
