import RastaurantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


//   we have to always use unique keys if key is not available we can also use index as a key but it is not a good practice(li:1913)
//  not useing keys(not acceptable) <<<< index as a key (not a good practice) <<<< Unique id( best practice)

const Body = () => {
  //local state variable or React variable
  const [listofrestaurants, setListofRestarunt] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");

  console.log("Body Rendered");
  
  // normal js variable
  // let listofrestaurants =[];
  // let listofrestaurantsJS = [
  //   {
  //     info: {
  //       id: "83105",
  //       name: "Chinese Wok",
  //       cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
  //       locality: "Chandni Chowk",
  //       areaName: "Omaxe mall",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
  //       avgRating: 4.1,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "831065",
  //       name: "KFC",
  //       cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
  //       locality: "Chandni Chowk",
  //       areaName: "Omaxe mall",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
  //       avgRating: 3.1,
  //     },
  //   },
  // ];
useEffect(()=>{
  fetchData();
},[])
const fetchData= async()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json);
  
  
  
  //Optional Chaining
  setListofRestarunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  // setfilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
};

//Conditional Rendering
// if(listofrestaurants.length === 0){
//   return <Shimmer/>;
// }
// we can also write it with turnary operatior with a single return like below}

  return listofrestaurants.length === 0 ? (
    <Shimmer/>):(
        <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => { setSearchText(e.target.value);}} />
          <button onClick={()=>{
            console.log(searchText);

            const filteredRestaurant = listofrestaurants.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()));
            
            setfilteredRestaurant(filteredRestaurant);

          }}>Search</button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            const filterlist = listofrestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            
            console.log(listofrestaurants);
            setListofRestarunt(filterlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RastaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
