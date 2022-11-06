import React from 'react'
import {Link } from "react-router-dom";
import "./NavBar.css"; 


function NavBar() {
  return (
    <>
    <div className="NavBar">
    <Link to="/Experience">Experience</Link>
    <Link to="/Achievement">Achievement</Link>
    <Link to="/Portfolio">Portfolio</Link>
    <Link to="/LetUsTalk">LetUsTalk</Link>
    </div>
    </>
  )
}

export default NavBar