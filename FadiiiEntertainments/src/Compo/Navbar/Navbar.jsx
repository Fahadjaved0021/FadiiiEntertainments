import React from 'react'
import './Navbar.css'
import { AiOutlineHome,AiOutlinePhone} from "react-icons/ai";
import { BsHandThumbsUp } from "react-icons/bs";
import { MdOutlineAdsClick } from "react-icons/md";
import {Link} from "react-router-dom"
import Deals from '../Deals/Deals';
function Navbar() {
  return (
    <div className='Navbar-container'>

        <div className="Navbar-separator"></div>
       <Link to='/'> <div className='Navbar-img'>
            <img src="Title.png" alt="" />
        </div></Link>
        <ul className='Navbar-list'>
           <Link  to='/' style={{color:"black" ,  textDecoration:"none"}}  > <li className='Navbar-Home'>
               {<AiOutlineHome />} Home 
            </li></Link>
            <Link to='/deals' style={{color:"black" ,  textDecoration:"none"}}><li className='Navbar-Deals'>
                {<BsHandThumbsUp />}Deals
            </li></Link>
            <Link to='/promo' style={{color:"black" ,  textDecoration:"none"}}><li className='Navbar-Promotions'>
               {<MdOutlineAdsClick />} Promotions
            </li></Link>

            <Link to='/contact' style={{color:"black" ,  textDecoration:"none"}}><li className='Navbar-Contact'>
                {<AiOutlinePhone />}Contact
            </li>
            </Link>

        </ul>
    </div>
  )
}

export default Navbar