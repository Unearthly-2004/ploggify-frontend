import Signin from "./Components/Auth/Signin";
import Login from "./Components/Auth/Login"
import Home from "./Components/Homepage/Home.jsx";
import AllEvents from "./Components/Events/AllEvents";
import Report from "./Components/Report/Report.jsx";
import Enroll from "./Components/Events/Enroll.jsx"
import Navbar from "./Components/Homepage/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeaderBoard from "./Components/LeaderBoard/LeaderBoard.jsx";
import Wallet from "./Components/Wallert/Wallet.jsx";
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/report" element={<Report/>} />
        <Route path="/dashboard" element={<LeaderBoard/>} />
        <Route path="/signin" element={<Login/>} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/event" element={<AllEvents/>} />
        <Route path="/enroll/:id" element={<Enroll/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
