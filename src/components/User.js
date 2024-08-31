import { useState, useEffect } from "react";

const CreateToDO = ()=>{
    
}
const User = (props) => {
    const {name, location} = props
    const[count, setCount] = useState(0);

    useEffect(()=>{
        fetchdata();
    },[]);

    const fetchdata = async () => {
        const response = await fetch("https://api.github.com/users/udaykiran666#");
        const data = await response.json();
        console.log(data);
        return data;
    }

    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <button onClick={() => {
                setCount(count + 1);
            }}>Count Increase</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @udaykirannn_14</h4>
        </div>
    )
}
export default User;