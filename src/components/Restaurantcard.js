import { CARD_LOGO } from "../utils/constants";
const RastaurantCard = (props) => {
    const {resData} =props;
    const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo} = resData?.info;
    // destructureing 
    
      return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
          <img
            className="res-logo"
            alt="res-logo"
            src={CARD_LOGO+cloudinaryImageId}
          />
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
          <h4>{deliveryTime}</h4>
          <h4>{costForTwo}</h4>
        </div>
      );
    };
    export default RastaurantCard;