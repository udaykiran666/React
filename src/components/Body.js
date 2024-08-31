import ResturantCard from "./ResturantCard";
import ClipLoader from "react-spinners/ClipLoader";
import {useState, useEffect} from "react";
import Shimer from "./shimer"
import { SWIGGY_API } from "../utils/constans";
import { Link } from "react-router-dom";
//import Resobj from "../utils/mockdata"; we no longer need this one as we've been getting data from swiggy api


const Body = () => {
    // all detail info regarding below in 
    // why react is fast...because it does efficient dom manipulation...how?? we have virtual dom.
    // as soon as u call the setlistofRestaurants react will the diff and update the ui
    //state variable in react (normal js utility fn, like usestate, useeffect)
    //when ever state variable updates react re-renders the component
    // react keeps the ui layers sync with data layer...as soon as datalyer updated the ui layer as well chnages..
    //reconciliation : reatc uses this algorithm which is also known as react fiber.lets say we have a dom(res-container) and it has 7
                    // cards and now suppose our ui chnages to filter 3 cards only..in this situation react creates virtual dom
                    // ..what is virtual dom..it is representation of actual dom..or a normal js object
    // diff algorithm : it basically finds the diff b/w two virtual doms. it means it finds the diff b/w updated virtual dom and previous
                        // virtual dom
    //JavaScript's optional chaining (?.) is used to safely access properties in a nested object structure. It allows us to attempt to 
       //access nested properties without causing an error if one of the intermediate properties is null or undefined.
    //operator (...) to concatenate the arrays restaurants_1 and restaurants_2 into a single array named restaurants.

    // local state variable
    const [ listofRestaurants, setlistofRestaurants] = useState([]);
    const [searchtext, setsearchtext] = useState("");
    const [filteredRestaurants, setfilteredRestaurants] = useState(listofRestaurants);
    

    useEffect(()=>{
        fetchData();
    },[]) // takes 2 arguments (1.callback fun, 2.dependency array)

    const  fetchData= async ()=>{
        const data = await fetch(SWIGGY_API) //fetch is given to us by browsers
        const json = await data.json(); //data returns a promise obect so thast why we need await here as well.    
        const restaurants = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       setlistofRestaurants(restaurants);
       setfilteredRestaurants(restaurants);

    } //fetch will return promise
    
    // if (listofRestaurants.length == 0){
        
    //     return  <Shimer/>
    // //     return  <ClipLoader
    // //     color={'#000000'}
    // //     loading={true}
    // //     size={50}
    // //     aria-label="CircleLoader"
    // //     data-testid="loader"
    // //   />
    // }
    // normal js variable
    
    
    
//1.   in below the input field is a controlled component because its value is controlled by the React state (searchtext). When you comment 
            //out the onChange attribute, the input field’s value is still tied to the state, but there’s no way to update the state when 
            //the user types into the input field.
    return listofRestaurants.length == 0 ? (
    <Shimer/>
    ) :(  
        <div className="body">
            <div className="Filter">
                <div className="search-bar-div">
                <input 
                className="search-bar" 
                type="text" 
                placeholder="Search by restaurant name" 
                value={searchtext}
                onChange={(event)=>{
                    console.log('event',event);
                    setsearchtext(event.target.value);
                    console.log(setsearchtext)
                }}/>
                <button className="search-bar-button"
                    onClick = {() => {
                        console.log(filteredRestaurants)
                        const filteredList = listofRestaurants.filter(res => res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                        console.log(filteredList)
                        setfilteredRestaurants(filteredList);
                }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    // filter logic here
                    const filteredfList = listofRestaurants.filter(res => res.info.avgRating > 4.2);
                    setfilteredRestaurants(filteredfList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => (
                        console.log(restaurant.info.id),
                        <Link key={restaurant.info.id} to={"/resturant/" + restaurant.info.id}><ResturantCard resObj={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    );
}


export default Body;