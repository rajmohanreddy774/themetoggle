import { useState } from 'react'
import './App.css';
import { ThemeContext } from './context/Themecontext';
import { Navbar } from './components/Navbar'
import {useContext} from 'react'
import {footer} from "./components/footer";

import { Body } from './components/body';
function App() {
  const {theme} = useContext(ThemeContext)

  return (
    <div className="App" 
    style={{
      backgroundColor:theme==="dark" ? "Black" : "white",
      height: "100vh",
      color:'black',
    }}>
       <Navbar></Navbar>
       <Body></Body>
       <footer/>
       
    </div>
  )
}

export default App