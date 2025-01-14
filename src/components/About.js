import User from "./User"
import UserClass from "./UserClass";
import React from "react";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log("parent constrector");
        
    }
    componentDidMount(){
        console.log("parent component did mounts");
        
    }

    render(){
        console.log("paprent render");
        
        return(
            <div>
            <h1>About</h1>
            <h1>this is about page</h1>
            <User name={"Abhyuday Sharma(function props)"}/>
            <UserClass name={"Abhyuday Sharma(Class props)"} Location = {"Delhi"} Contact= {"6398404151"}/>
        </div>
        );
    }
}

// const About = ()=>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h1>this is about page</h1>
//             <User name={"Abhyuday Sharma(function props)"}/>
//             <UserClass name={"Abhyuday Sharma(Class props)"} Location = {"Delhi"} Contact= {"6398404151"}/>
//         </div>
//     )
// };
export default About;

