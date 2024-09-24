import RastaurantCard from "./Restaurantcard";
import { useState } from "react";

//   we have to always use unique keys if key is not available we can also use index as a key but it is not a good practice(li:1913)
//  not useing keys(not acceptable) <<<< index as a key (not a good practice) <<<< Unique id( best practice)

const Body = () => {
    //local state variable or React variable
    const[listofrestaurants, setListofRestarunt]=useState([{"info":
        {
        "id": "83105",
        "name": "Chinese Wok",
        "cloudinaryImageId": "f996b31033fd07603bfb28cb4e526683",
        "locality": "Chandni Chowk",
        "areaName": "Omaxe mall",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts",
        ],
        "avgRating": 4.1,
        
        }
      },
      { "info": {
        "id": "831065",
        "name": "KFC",
        "cloudinaryImageId": "f996b31033fd07603bfb28cb4e526683",
        "locality": "Chandni Chowk",
        "areaName": "Omaxe mall",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts",
        ],
        "avgRating": 3.1,
        
        }
      },]);
    // normal js variable
    // let listofrestaurants =[];
 let listofrestaurantsJS = [
        {"info": {
          "id": "83105",
          "name": "Chinese Wok",
          "cloudinaryImageId": "f996b31033fd07603bfb28cb4e526683",
          "locality": "Chandni Chowk",
          "areaName": "Omaxe mall",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Chinese",
            "Asian",
            "Tibetan",
            "Desserts",
          ],
          "avgRating": 4.1,
          
          }
        },
        { "info": {
          "id": "831065",
          "name": "KFC",
          "cloudinaryImageId": "f996b31033fd07603bfb28cb4e526683",
          "locality": "Chandni Chowk",
          "areaName": "Omaxe mall",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Chinese",
            "Asian",
            "Tibetan",
            "Desserts",
          ],
          "avgRating": 3.1,
          
          }
        },
         
 ];

    return (
      <div className="body">
        //filter
        <div className="filter"> <button className="filter button" onClick={()=>{ const filterlist= 
        listofrestaurants.filter((res)=> res.info.avgRating > 4);
        console.log(listofrestaurants);
        setListofRestarunt(filterlist);
            
        }}>Top Rated Restaurant</button></div>
        <div className="res-container">
        {listofrestaurants.map((restaurant) => (<RastaurantCard key={restaurant.info.id} resData={restaurant}/>))}
         
        </div>  
      </div>
    );
  };

  export default Body;