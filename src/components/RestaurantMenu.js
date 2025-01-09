import { useEffect } from "react";

const RestaurantMenu = ()=>{
    useEffect(() =>{
        fetchMenu();
    },[])

    const fetchMenu = async() =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97262329296085&lng=77.59411208888547&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        
    };
    return(
        <div>
            <h1>Name of restraunt</h1>
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