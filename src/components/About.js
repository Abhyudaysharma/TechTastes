import User from "./User"
import UserClass from "./UserClass";
import React from "react";

// this is class based component
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parentrt constructor props")
    }
    componentDidMount(){
        console.log("parent component did mount");
    }
    render(){

        console.log("parent render")

        return(
            <div>
               <h1>About</h1>
               <h1>this is about page</h1>
              {/* <User name={"Abhyuday Sharma(function props)"} Location = {"Delhi"}/> */}
            <UserClass name={"Abhyuday Sharma(Class props)"} Location = {"Delhi"} Contact= {"6398404151"}/>
            
          </div>
        );
    }
}
//this is functional component
// const About = ()=>{
//     return(
//         <div>
//            <h1>About</h1>
//            <h1>this is about page</h1>
//           {/* <User name={"Abhyuday Sharma(function props)"} Location = {"Delhi"}/> */}
//         <UserClass name={"Abhyuday Sharma(Class props)"} Location = {"Delhi"} Contact= {"6398404151"}/>
//       </div>
//     );
//  };
export default About;

