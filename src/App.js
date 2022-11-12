import React from 'react'
// import Nav from 'Components/Navbar'
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Friends from './Components/Friends/Friends';
import Navbar from './Components/Navbar/Navbar';
import Headerfriend from './Components/HeaderFriend/Headerfriend';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/main" element={<><Header/><Main/></>}/>
            <Route path="/friend" element={<><Headerfriend/> <Friends/></>}>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;