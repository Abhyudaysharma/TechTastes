import React, { useState } from "react";
const User = ({name}) =>{
    const[count ,setCount] = useState(0);
    const[count2] = useState(1);
    return <div className="user-card">
        <h2>Name: {name}</h2>
        <h2>Count={count}</h2>
        <h2>Count={count2}</h2>
        <h2>Loaction: Delhi</h2>
        <h2>Contact: 6398404151</h2>
    </div>
}

export default User;