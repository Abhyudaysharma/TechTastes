import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{
    const[resInfo, setResInfo] = useState(null);
    useEffect(() =>{
        fetchMenu();
    },[])

    const fetchMenu = async() =>{
        const data = await fetch(    
       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4917218&lng=77.2886424&restaurantId=655870&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
  
    };
    if(resInfo === null)
        return <Shimmer />;

    const {name,cuisines,avgRating,costForTwo} = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;

    return (
        <div className="menu">
            <h1>{name}</h1>
        <p>{cuisines.join(", ")}- {costForTwo}</p>
        <h2>Avg Rateing - {avgRating}</h2>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Maggi</li>
            <li>Cock</li>
        </ul>
        </div>
        


    )
}
export default RestaurantMenu;