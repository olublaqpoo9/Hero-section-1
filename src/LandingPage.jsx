import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <body>
        <div className='firstpage'>
            <nav>
                <div className='logo'>LOGO</div>
                <div className='links'><ul> 
                <li><a href="">Home</a></li>
                <li><a href="">Service</a> </li>
                <li><a href="">Properties</a></li>
                <li><a href="">About</a></li>
                </ul></div>
                <div className='btn'>
                  <button>BUY NOW</button>
                </div>
            </nav>
            <div className='maincontent'>
              <div className='content-top'>

                    <h1>Where Fashion Meets Fierce</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis accusantium itaque aperiam, <br /> aliquid porro numquam corrupti, quae, ex animi .</p>
                    <div className='buttons'>
                        <button>GET STARTED</button>
                        <button id='btn' >INVEST</button>
                    </div>

              </div>

              <div className='content-down'>
                         <div className='images'>
                        <div id='first'></div>
                        <div id='middle'></div>
                        <div id='last' ></div>
                    </div>
              </div>
            </div>
        </div>
        aktsgdys
    </body>
  )
}

export default LandingPage