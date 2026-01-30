import React from "react";
class Userclass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count:1,count2:2,
            userInfo:{name:"Dummy",
                location:"Default",
                
        
             },
        };
        console.log("child contructor");
    }   
    async componentDidMount(){
        //API CALL

        const data = await fetch(" https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo:json,
        });
        
    }
    
        
    render(){

        console.log("child render");
        // const {name,Location} = this.props;
        const {name,Location, avatar_url}= this.state.userInfo;
        debugger;
        const {count,count2} = this.state;
        return(
        <div className="user-card">

            <h1>Count = {count}</h1>
            <button onClick={()=>{
                this.setState({count: count+1})
            }}>Count Increse</button>
            
            <button onClick={()=>{
                this.setState({count2: count2 -1})
            }}>Count Decrease</button>


            <h1>Count2 ={count2}</h1>
            <img src={avatar_url} />
            <h2>Name: {name}  </h2>
            <h2>Location: {Location}  </h2>
            <h2>Contact: 123456789  </h2>
        </div>
        );
    }
};
export default Userclass;