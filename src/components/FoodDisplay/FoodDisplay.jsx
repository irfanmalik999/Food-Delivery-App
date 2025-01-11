import React, { createContext, useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../StoreContext/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ( {category} ) => {
    const {food_list, add} = useContext(StoreContext)
    // console.log("Adding", add(12,34))
    
    return (
    <div className='Food_display' id='Food_display' >
        <h2>Top dishes near you </h2>
        <div className="food-display-list">
            {food_list ? food_list.map((item, index) => {
                if(category==="All" || category===item.category){
                    return <FoodItem key={index} name={item.name} id={item._id} description={item.description} price={item.price} image={item.image} />
                }

            }):"Food List main data abhi tak nahi aaya hai"}
        </div>
    </div>
  )
}

export default FoodDisplay