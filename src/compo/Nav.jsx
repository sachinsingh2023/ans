import React from 'react'
import Logo from "../images/logo.jpg"
import live from "../images/live tv.png"
import { useState, useEffect } from 'react'



const Nav = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = date.toLocaleDateString(undefined, options);


    return (
        <>
            <nav>
                <div className="nav-top" >
                    <div className="date" >
                        <div className="date-status">
                            {dateString}
                

                        </div>
                        
                      
                    </div>

                    {/* <div className="status">
                       
                        <div className="social  d-md-col-2" style={{ float: "right" }}>
                            <i class="fa-brands fa-facebook" style={{ color: " #4567a1;" }}></i>
                            <i class="fa-brands fa-x-twitter"></i>
                            <i class="fa-brands fa-telegram"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin"></i>

                        </div>
                    </div> */}
                </div>
                <div className="nav-bottom" style={{ display: "flex" }}>
                    <a href="" style={{ textDecoration: "none", color: "black", textTransform: "capitalize" }}>

                        <i class="fa-solid fa-bars d-block d-md-none" style={{ fontSize: "25px", color: "black", marginLeft: "20px", marginTop: "5px" }}></i>
                        {/* laptop */}

                    </a>
                    <div className="logo ">

                        <img src={Logo} style={{ height: "70px", width: "120px", position: "relative", bottom: "13px", backgroundColor: "white", left: "20px" }} alt="logo" />
                    </div>
                    <ul className='d-none d-md-flex' style={{ display: "flex" }}>
                        <li><a href="">Home</a></li>
                        <li><a href="">live</a></li>
                        <li><a href="">eduation</a></li>
                        <li><a href="">trending</a></li>
                        <li><a href="">worlds</a></li>
                        <li><a href="">sports</a></li>
                        <li><a href="">science</a></li>
                        <li><a href=""> business</a></li>

                        <li><a href=""> india</a></li>

                    </ul>
                    <div className="nav-icons" >

                        <i class="fa-solid fa-magnifying-glass"></i>


                        <i class="fa-regular fa-bell"></i>
                        <i class="fa-solid fa-bars"></i>


                    </div>

                </div>

            </nav>
        </>
    )
}

export default Nav