import React from 'react'
import "./navbar.css"
import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {BsClock} from "react-icons/bs"
import img from "../1648287741986.jpg"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-icon'  >
            <FaBars />
        </div>
        <div className='navbar-left'>
            <a href="#">Subscriber</a>
            <a href="#">Video management</a>
            <a href="#" className='active-link'>Admin</a>
        </div>
        <div className='navbar-right'>
            <a href="#">
                <AiOutlineSearch className='icon' />
            </a>
            <a href="#">
                <BsClock className='icon' />
            </a>
            <a href="#">
                <img src={img} width="20px" alt="" className='img' />
            </a>
        </div>
    </div>
  )
}

export default Navbar