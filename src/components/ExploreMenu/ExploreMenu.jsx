import React from 'react'
import './ExploreMenu.css'
import {assets, menu_list} from '../../assets/assets'
import all from './all.png'
const ExploreMenu = ({ category, setCategory }) => {
    return (
    <div className='explore-menu' id='explore-menu' >
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="explore-menu-list">
            <div className="all">
                <img onClick={()=> setCategory("All") } src={all} alt="" className={` all-item-list ${category === 'All' ? "active" : ""}`}/>
                <p>All</p>
            </div>
            
            {
                menu_list.map((item, index) => {
                    return(
                        <div onClick={()=> setCategory( prev => prev === item.menu_name? "All": item.menu_name ) } key={index} className='explore-menu-list-item' >
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />

    </div>
  )
}

export default ExploreMenu