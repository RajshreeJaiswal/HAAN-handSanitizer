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
        
        <nav>
            <ul className='list'>
                <li className='btn'><AiOutlineMenu size='2rem'/></li>
                <li className='items'><Link to='/best_seller'>Best Seller</Link></li>
                <li className='items'>Hand Cream</li>
                <li className='items'>Refills</li>
                <li className='items'><Link to='/'><img src='https://haanready.com/cdn/shop/files/logo_han.png?v=1651046048' alt='logo' /></Link></li>
                <li className='items'>Toothpaste</li>
                <li className='items'>Hand Soap</li>
                <li className='items'>Combos</li>
                <li className='items'>{props.name?<>Hii, {props.name}<button className='logout' 
            onClick={handelLogout}><BiLogOut/></button></>:<Link to='/login'><FaRegUser size='1.2rem'/></Link>}</li>
                <li className='items'><FaShoppingBag size='1.2rem'/></li>
            </ul>
        </nav>
        // <div className = "navbar">
        //    <span><Link to='/'><AiOutlineMenu size='2rem'/></Link></span>
        //    <span><Link to='/best_seller'>Best Seller</Link></span>
        //    <span>Hand Cream</span>
        //    <span>Refills</span>
        //    <Link to='/'><img src='https://haanready.com/cdn/shop/files/logo_han.png?v=1651046048' alt='logo' /></Link>
        //    <span>Toothpaste</span>
        //    <span>Hand Soap</span>
        //    <span>Combos</span>
        //    <span>{props.name?<>Hii, {props.name}<button className='logout' 
        //    onClick={handelLogout}><BiLogOut/></button></>:<Link to='/login'><FaRegUser size='1.2rem'/></Link>}</span>
        //    <i><FaShoppingBag size='1.2rem'/></i>
        // </div>
    )
}

export default Navbar