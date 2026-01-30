import { useState } from "react";
const User =(props)=>{
    const[count] = useState(0);
    const[count2] = useState(1);
    return(       
         <div className="user-card">
            <h1>Count = {count}</h1> 
            <h1> count2 ={count2}</h1>
            <h2>Name: {props.name} </h2>
            <h2>Location: {props.Location}  </h2>
            <h2>Contact: 123456789  </h2>
        </div>
    );
};
export default User;