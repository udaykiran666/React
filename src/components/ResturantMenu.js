import {RESTURANT_MENU_URL} from "../utils/constans/"
import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimer from "./shimer";

//this component is used to fetch restaurant menu data from swiggy api and display it.
const RestaurantInfo = ()=>{
    const [resInfo, setresInfo] = useState(null);
    const {resID} = useParams();

    useEffect(()=>{
        fetchmenudata();
    },[]);

    const fetchmenudata= async ()=>{
        const response = await fetch(RESTURANT_MENU_URL + resID);
        const answer = await response.json();
        console.log(answer.data);
        console.log(answer.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card.itemCards)
        setresInfo(answer.data);
    }
    if (resInfo === null) return <Shimer/>
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card.card.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;

    return(
        <div>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
        <ul>
            {/** when ever you are using map use id always else react will throw an warning message in console */}
            {itemCards.map((item)=><li key={item.card.info.id}>
                {item.card.info.name} - {"Rs"} : {item.card.info.price/100 || item.card.info.defaultPrice/100}
                </li>)}
        </ul>
        </div>
    );
};

export default RestaurantInfo;