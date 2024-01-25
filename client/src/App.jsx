
import { BrowserRouter, Routes, Route } from "react-router-dom"; // on peut dire que c'est comme nav ul li..
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import About from "./pages/About.jsx";
import Header from "./components/Header.jsx";
import PrivateRoute from "./components/Privateroute.jsx";

import CreateListing from './pages/CreateListing.jsx';

export default function App() {
  return (
    
    <BrowserRouter>
       <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />} >
        <Route path="/profile" element={<Profile/>} />

          <Route path="/create-listing" element={<CreateListing />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
