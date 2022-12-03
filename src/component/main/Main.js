import React from 'react'
import "./main.css"
import image from "../c.jpg"
import {BiUserCircle} from "react-icons/bi"
import {BsFillCalendar2DayFill, BsCameraVideoFill, BsHandThumbsUp,BsCurrencyBitcoin,BsHouseDoorFill} from "react-icons/bs"
import Chart from '../chart/Chart'

const Main = () => {
  return (
    <div>
      <main>
      <div className='main-container'>
        <div className='main-title'>
          
          <div className='main-greeting'>
            <h1>Hello Max</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        <div className='main-card'>
          <div className='card-wrapper-1'>
            <BiUserCircle className='icon-1' />
            <div className='card-inner'>
              <p className='text'>Number of subscribers</p>
              <span className='f-text'>578</span>
            </div>
          </div>

          <div className='card-wrapper-2'>
            <BsFillCalendar2DayFill className='icon-2' />
            <div className='card-inner'>
              <p className='text'>Time of watching</p>
              <span className='f-text'>2467</span>
            </div>
          </div>

          <div className='card-wrapper-3'>
            <BsCameraVideoFill className='icon-3' />
            <div className='card-inner'>
              <p className='text'>Number of videos</p>
              <span className='f-text'>340</span>
            </div>
          </div>

          <div className='card-wrapper-4'>
            <BsHandThumbsUp className='icon-4' />
            <div className='card-inner'>
              <p className='text'>Number of likes</p>
              <span className='f-text'>645</span>
            </div>
          </div>
        </div>

        
        

        
          <div className='chart-left'>
            <div className='chart-left-title'>
              <div>
                <h1>Daily report</h1>
                <p>Cupertico, california USA</p>
              </div>
              <BsCurrencyBitcoin className='icon-2' />
            </div>
          </div>

          <div className='chart-right'>
            <div className='chart-right-title'>
              <div>
                <h1>Stats Report</h1>
                <p>Cupertino, california USA</p>
              </div>
              <BsHouseDoorFill className='icon-2' />
            </div>
            <div className='chart-right-card'>
              <div className='card1'>
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className='card2'>
                <h1>Sales</h1>
                <p>$5,300</p>
              </div>

              <div className='card3'>
                <h1>Users</h1>
                <p>7580</p>
              </div>

              <div className='card4'>
                <h1>Order</h1>
                <p>4521</p>
              </div>
              

            </div>

         


        </div>

      </div>
      </main>
    </div>
  )
}

export default Main