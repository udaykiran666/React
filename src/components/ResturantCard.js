import { CDN_URL } from "../utils/constans"; // WITH {} WE EXPORT NAMED EXPORTS

const ResturantCard = (props) =>{
    const {resObj} = props;  // for destructing, if not we need to give props.resObj in every call so its beeter code practise and clean code.
    const {name, cuisines, costForTwo, avgRating,  deliveryTime, cloudinaryImageId } = resObj.info; //destructing the props cause to make the code clean and fast
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo"
            src= { CDN_URL +
                    cloudinaryImageId}>
            </img>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwo}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    )
}

export default ResturantCard;