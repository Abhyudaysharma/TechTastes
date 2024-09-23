import React from 'react';
import ReactDOM from "react-dom/client";

const Header =() =>{
    return (
        <div className ="header">
            <div className="logo-container">
               <img className='logo' src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" /> 
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                </ul>

            </div>
        </div>
    );
};
const RastaurantCard=(props)=>{
    console.log(props);
    
    return(
        <div className='res-card' style={{backgroundColor: "#f0f0f0"}}>
            <img className='res-logo' alt='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f996b31033fd07603bfb28cb4e526683'/>
            <h3>{props.resName}</h3>
            <h4>{props.cousine}</h4>
            <h4>{props.rateing}</h4>
            <h4>{props.time}</h4>

        </div>
    )
}
const Body =()=>{
    return(
       <div className='body'>
        <div className='Search'> search</div>
        <div className='res-container'>
            <RastaurantCard resName="Meghana Foods" cousine="Biryani,North Indian, Ashian" rateing="4.4 star" time="38 min"/>
            <RastaurantCard resName="KFC" cousine="Burger,fast food, us" rateing="4.0 star" time="11 min"/>
            
            
        </div>
       </div> 
    )
}
const Footer =() =>{
    return(
        <div>

        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="app">
            <Header></Header>
            <Body />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);