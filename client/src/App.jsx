import React from 'react';
import 'bootstrap';
import cyborg from './cyborg.scss';
import NavBar from './components/nav/NavBar';
import { Navigate, Routes, Route, Link } from "react-router-dom";
import About from './pages/about/About';
import Anime from './pages/anime/Anime';
import Home from './pages/home/Home';
import Manga from './pages/manga/Manga';
import Registration from './pages/reg/Reg';
import Login from './pages/login/Login';
import Profile from './pages/dashboard/Profile';


const App = () => {
  return (

    <div>
      <>
        <NavBar>
            <Link to="/"> Home </Link>

        </NavBar>
        <>
          <Routes>
            
            {/* <Route exact path="/" element= {<Navigate to="/home" replace />} /> */}
            <Route exact path="/home" element={<Home />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/manga" element={<Manga />} />
            <Route path="/about" element={<About />} />
            {/* test path */}
            <Route exact path="/Register" element={<Registration />} />
            <Route exact path="/Login" element={<Login /> } />
            <Route exact path="/Profile" element={<Profile />} />
            


          </Routes>
        </>
      </>
    </div>
  );
}

export default App