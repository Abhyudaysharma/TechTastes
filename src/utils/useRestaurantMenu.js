import { useEffect } from "react";
const useRestaurantMenu= (resId)=>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(() =>{
        fetchData();
    },[]);
     
    const fetchData = async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4917218&lng=77.2886424&restaurantId=655870&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        setResInfo(json.data);
    };
    return resInfo;

}
export default useRestaurantMenu;