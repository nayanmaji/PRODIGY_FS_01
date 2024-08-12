import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Component/NavBar';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import ProtectedRouter from "./Component/ProtectedRouter";
import Home from "./Component/Home";

function App() {
  return (
    <>
    <NavBar/>
      <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<ProtectedRouter component={Home}/> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
