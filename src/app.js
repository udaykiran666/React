import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantInfo from "./components/ResturantMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
//Header
//Body
//Footer

const AppLayout = () =>{
    return (
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    )
}

const approuter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "resturant/:resID",
                element : <RestaurantInfo/>
            }
        ],
        errorElement : <Error/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router = {approuter}/>);