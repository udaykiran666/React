import React from "react";
import ReactDOM  from "react-dom/client";
//Header
//Body
//Footer

const Resobj = [{
    id: "671928",
    name: "KFC",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1fe8039a-0a1a-41f8-8db1-f3521ba8fada_23678.jpg",
    locality: "7th Block",
    areaName: "Koramangla",
    costForTwo: "₹400 for two",
    cuisines: [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
    ],
    avgRating: 4.3,
    parentId: "547",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
    sla: {
        deliveryTime: 25,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
        nextCloseTime: "2024-05-22 02:00:00",
        opened: true
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
        entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
        }
    },
    aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50"
    },
    differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
        }
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    analytics: {},
    cta: {
        link: "https://www.swiggy.com/restaurants/kfc-7th-block-koramangla-bangalore-671928",
        type: "WEBLINK"
    }
},
{
    id: "23678",
    name: "McDonald's",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1fe8039a-0a1a-41f8-8db1-f3521ba8fada_23678.jpg",
    locality: "5th Avenue",
    areaName: "Downtown",
    costForTwo: "₹600 for two",
    cuisines: ["Pizza", "Italian"],
    avgRating: 4.1,
    parentId: "789",
    avgRatingString: "4.1",
    totalRatingsString: "800+",
    sla: {
        deliveryTime: 30,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
        nextCloseTime: "2024-05-22 01:30:00",
        opened: true
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
        entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
        }
    },
    aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹75"
    },
    differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
        }
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    analytics: {},
    cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-downtown-123456",
        type: "WEBLINK"
    }
},
{
    id: "789012",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "3rd Street",
    areaName: "Midtown",
    costForTwo: "₹500 for two",
    cuisines: ["Pizza", "Fast Food"],
    avgRating: 4.5,
    parentId: "345",
    avgRatingString: "4.5",
    totalRatingsString: "1.2K+",
    sla: {
        deliveryTime: 20,
        lastMileTravel: 1.0,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
        nextCloseTime: "2024-05-22 02:15:00",
        opened: true
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
        entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
        }
    },
    aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40"
    },
    differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
        }
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    analytics: {},
    cta: {
        link: "https://www.swiggy.com/restaurants/dominos-midtown-789012",
        type: "WEBLINK"
    }
},
{
    id: "987654",
    name: "Subway",
    cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
    locality: "JNC College Road",
    areaName: "Koramangala",
    costForTwo: "₹350 for two",
    cuisines: ["Salads",
    "Snacks",
    "Desserts",
    "Beverages"],
    avgRating: 4.0,
    parentId: "123",
    avgRatingString: "4.0",
    totalRatingsString: "600+",
    sla: {
        deliveryTime: 22,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "18-22 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
        nextCloseTime: "2024-05-22 01:45:00",
        opened: true
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
        entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
        }
    },
    aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "UPTO ₹60"
    },
    differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
        }
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    analytics: {},
    cta: {
        link: "https://www.swiggy.com/restaurants/subway-downtown-987654",
        type: "WEBLINK"
    }
},
{
    id: "987655",
    name: "Biryani Blues",
    cloudinaryImageId: "195876a3181ef63f76e45e3a7b49b585",
    locality: "Gujarati Road",
    areaName: "Mattancherry",
    costForTwo: "₹500 for two",
    cuisines: ["Biryani", "Mughlai"],
    avgRating: 4.2,
    parentId: "789",
    avgRatingString: "4.2",
    totalRatingsString: "800+",
    sla: {
        deliveryTime: 30,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
        nextCloseTime: "2024-05-22 01:45:00",
        opened: true
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
        entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
        }
    },
    aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹75"
    },
    differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
        }
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    analytics: {},
    cta: {
        link: "https://www.biryaniblues.com/restaurants/mattancherry-kochi-987655",
        type: "WEBLINK"
    }
},
{
    id: "543210",
    name: "Bikkgane Biryani",
    cloudinaryImageId: "koxmlppfprrurmmcvxp9",
    locality: "Sector 16 C",
    areaName: "Gaur City 2",
    costForTwo: "₹400 for two",
    cuisines: ["Biryani", "Indian"],
    avgRating: 4.0,
    parentId: "987",
    avgRatingString: "4.0",
    totalRatingsString: "700+",
    sla: {
        deliveryTime: 28,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "23-28 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
        nextCloseTime: "2024-05-22 02:15:00",
        opened: true
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
        entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
        }
    },
    aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹50"
    },
    differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
        }
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    analytics: {},
    cta: {
        link: "https://bikkganebiryani.com/",
        type: "WEBLINK"
    }
}
];  

const ResturantCard = (props) =>{
    const {resObj} = props;  // for destructing if not we need to give props.resObj in every call so its beeter code practise and clean code.
    const {name, cuisines, costForTwo, avgRating, sla: { deliveryTime}, cloudinaryImageId } = resObj; //destructing the props cause to make the code clean and fast
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo"
            src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
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
const Body = () =>{
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
            {
                Resobj.map((restaurnt)=>(<ResturantCard key={restaurnt.id} resObj={restaurnt}></ResturantCard>)) //always pass key when ever you're looping thorugh.
            }
            </div>
        </div>
    )
}
const Header = () =>{
    return (
    <div className="header">
        <div className="logo-container">
            <img 
            className="logo" 
            src="https://cdn.dribbble.com/userupload/6440848/file/original-7cc6fd8be265505f2e7b408fb754afa3.png?resize=640x480&vertical=center"></img>
        </div>
        <div className="naive-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}
const AppLayout = () =>{
    return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);