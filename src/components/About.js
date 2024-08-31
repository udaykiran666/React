import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor is called.")
        // this.state = {
        //     //Add your state variables here
        // };
    }

    componentDidMount(){
        console.log("parent mount ios called");
    }
    render(){
        console.log("parent redner ios called");
        return(
            <div>
                <h1>About Us</h1>
                <h2>-------------------</h2>
                <UserClass name ={"Uday Kiran (class based)"} location={"Andhra Pradesh (class)"}/>
            </div>
         );
    }
}

export default About;