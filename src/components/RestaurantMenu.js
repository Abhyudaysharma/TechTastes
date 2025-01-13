import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{
    const[resInfo, setResInfo] = useState(null);
    useEffect(() =>{
        fetchMenu();
    },[])

    const fetchMenu = async() =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97262329296085&lng=77.59411208888547&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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