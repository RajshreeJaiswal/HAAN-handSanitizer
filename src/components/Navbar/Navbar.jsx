import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser,FaShoppingBag} from "react-icons/fa";
import {AiOutlineMenu } from "react-icons/ai";
import {BiLogOut } from "react-icons/bi";
import "./Navbar.css"
import { signOut } from 'firebase/auth';
import{auth} from '../../firebase'


function Navbar(props) {
    const logout=useNavigate();
    const handelLogout=()=>{
        signOut(auth).then(val=>{
            logout('/')
        })
    }
    return(
        <div className = "navbar">
           <span><Link to='/'><AiOutlineMenu size='2rem'/></Link></span>
           <span><Link to='/best_seller'>Best Seller</Link></span>
           <span>Hand Cream</span>
           <span>Refills</span>
           <Link to='/'><img src='https://haanready.com/cdn/shop/files/logo_han.png?v=1651046048' alt='logo' /></Link>
           <span>Toothpaste</span>
           <span>Hand Soap</span>
           <span>Combos</span>
           <span>{props.name?<>Hii, {props.name}<button className='logout' 
           onClick={handelLogout}><BiLogOut/></button></>:<Link to='/login'><FaRegUser size='1.2rem'/></Link>}</span>
           <i><FaShoppingBag size='1.2rem'/></i>
        </div>
    )
}

export default Navbar