import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0,
            count2: 1,
        };

        console.log("child constrector");
        
    }
    componentDidMount(){
        console.log("child component did mounts");
        
    }


    render(){
        console.log("child render");
        
        const {name, Location,Contact} = this.props;
        const{count, count2} = this.state;
        // deStructure the props here.
        return(
            <div className="user-card">
                <h1>Count:{count2}</h1>
                <h1>Count:{count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                        count2: this.state.count+2
                    })
                }}>count Increase</button>
        <h2>Name: {name/**this.props.name*/}</h2>
        <h2>Loaction: {Location/**this.props.Location*/}</h2>
        <h2>Contact: {Contact/**this.props.Contact*/}</h2>
    </div>
        );
    }
}

export default UserClass;