import React from "react";

class UserClass extends React.Component {
    constructor(props){
        debugger;
        super(props);
        console.log(this.props.name + "child constructor is called");
        this.state = {
            userInfo:{
                login:"Dummy",
                created_at:"dummy", 
                avatar_url:"dummy"
            },
            count:0,
        };
    }

    fetchUserInfo = async ()=>{
        const response = await fetch("https://api.github.com/users/udaykiran666#");
        const data = await response.json();
        this.setState({
            userInfo:data,
        })
    }

     // basically componentdidMount is useeffect...this is hoiw we call api calls in class based methods
    async componentDidMount(){
        this.fetchUserInfo();
        
    }

    // /*{/* count is controlled by the state */, /* state is updated by calling this.setState */, /* when state changes, render is called again */ , /* count is now tied to the state */ , /* this.state.count is used in the render method */ , /* whenever count changes, the component re-renders */ , /* count is now displayed on the webpage */}  {/* so, this.state.count is used in the render method */}  {/* count is displayed on the webpage */}  {/* this.state.count is used in the render method */}  {/* count is displayed on the webpage */}  {/* this.state.count is used in the render method */}  {/* count is displayed on the webpage */}  {/* this.state.count is used in the render method */}  {/* count is displayed on the webpage */}  {/* this.state.count is used in the render method*/}
    render(){
        console.log(this.props.name + "child redner is called")
        const {login, created_at, avatar_url} = this.state.userInfo;
        const {count} = this.state;
        return(
            <div className="userclass-card">
            <h1>Count : {count}</h1>
            <button onClick={()=>{
                //NEVER EVER UPDATE STATE VARIABLES DIRECTLY
                this.setState({
                    count:this.state.count + 1
                });
            }}>Count Increase</button>
            <h2>Name: {login}</h2>
            <h3>Created At: {created_at}</h3>
            <img src={avatar_url} alt="User Image"/>
            <h4>Contact: @udaykirannn_14</h4>
            </div>
        );
    }
}
export default UserClass;