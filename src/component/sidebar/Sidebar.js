import React from 'react'
import "./sidebar.css"
import logo from "../logo.png"
// import {FaTimes} from "react-icons/fa"
import {AiFillHome, AiOutlineUser, AiOutlineQuestionCircle,AiOutlineCalendar,AiFillFileAdd,AiFillMoneyCollect} from "react-icons/ai"
import {FaBuilding, FaArchive,FaHandshake,FaSignOutAlt,FaBriefcase,FaTimes} from "react-icons/fa"
import {FiLogOut} from "react-icons/fi"



const Sidebar = ({sidebarOpen, closeSidebar}) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="side-bar" >
        <div className='sidebar-title'>
            <div className='sidebar-image'>
                <img src={logo} alt="" className='img-logo' />
               <h1>Max</h1> 
            </div>
            <div onClick={()=> closeSidebar()}  id="sidebarIcon">
                <FaTimes />
            </div>
        </div>
        <div className='sidebar-menu'>
            <div className='sidebar-link'>
                <AiFillHome className='sidebar-icon' />
                <a href="#">Dashboard</a>
            </div>
            <h2>MNG</h2>
            <div className='sidebar-link'>
                <AiOutlineUser  className='sidebar-icon' />
                <a href="#">Admin Management</a>
            </div>
            <div className='sidebar-link'>
                <FaBuilding className='sidebar-icon' />
                <a href="#">Employee Management</a>
            </div>
            <div className='sidebar-link'>
                <FaArchive className='sidebar-icon' />
                <a href="#">Warehouse</a>
            </div>
            <div className='sidebar-link'>
                <FaHandshake className='sidebar-icon' />
                <a href="#">Contract</a>
            </div>
            <h2>LEAVE</h2>
            <div className='sidebar-link'>
                <AiOutlineQuestionCircle className='sidebar-icon' />
                <a href="#">Request</a>
            </div>
            <div className='sidebar-link'>
                <FaSignOutAlt className='sidebar-icon' />
                <a href="#">Leave Policy</a>
            </div>
            <div className='sidebar-link'>
                <AiOutlineCalendar className='sidebar-icon' />
                <a href="#">Special days</a>
            </div>
            <div className='sidebar-link'>
                <AiFillFileAdd className='sidebar-icon' />
                <a href="#">Apply for leave</a>
            </div>
            <h2>PAY ROLL</h2>
            <div className='sidebar-link'>
                <AiFillMoneyCollect className='sidebar-icon' />
                <a href="#">Payroll</a>
            </div>
            <div className='sidebar-link'>
                <FaBriefcase className='sidebar-icon' />
                <a href="#">Paygrade</a>
            </div>
            <div className='sidebar-logout'>
                <FiLogOut />
                <a href="#">Logout</a>
            </div>

            

        </div>
    </div>
  )
}

export default Sidebar