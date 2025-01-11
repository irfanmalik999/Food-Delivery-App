import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../StoreContext/StoreContext'

const Navbar = ({setShowLogin}) => {
    const [ menu, setMenu] = useState("home")

    const { getTotalCartAmount } = useContext(StoreContext)
    
  return (
    <div className='navbar' >
        <Link to='/' ><img src={assets.logo} className='logo' alt="" /></Link> 
        <ul onClick={(e) => {console.log(e.target.textContent); if(e.target.textContent ==="hellohomemenumobile-appcontact us"){ e.stopPropagation() } else{ setMenu(e.target.textContent) } }} className="navbar-menu">

            <Link to='/' className={menu === "home" ? "active" : ""}>home</Link>
            <a href='#explore-menu' className={menu === "menu" ? "active" : ""}>menu</a>
            <a href='#app-download' className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
            <a href='#footer' className={menu === "contact us" ? "active" : ""}>contact us</a>
        </ul> 
        {/*  Right Navbar  */}
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className='navbar-search-icon' >
                <Link to='/cart' ><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount() === 0 ? "": "dot"} ></div>
            </div>
            <button onClick={() => setShowLogin(true)} >sign in</button>
        </div>
    </div>
  )
}

export default Navbar