import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SaleList from "../pages/SaleList";
import CharterList from "../pages/CharterList";
import YachtDetails from "../pages/YachtDetails";
import Destinations from "../pages/Destinations";
import DestinationDetails from "../pages/DestinationDetails";
import Offices from "../pages/Offices";
import Articles from "../pages/Articles";
import ArticleDetails from "../pages/ArticleDetails";
import Favorites from "../pages/Favorites";
import AboutUs from "../pages/AboutUs";    
import Contact from "../pages/Contact";  
import PriveService from "../pages/PriveService";  

export default function router(layoutProps) {
  return createBrowserRouter([
    {
      path: "/",
      element: <App {...layoutProps} />,
      children: [
        { index: true, element: <Home /> },
        { path: "yachts-for-sale", element: <SaleList /> },
        { path: "yachts-for-charter", element: <CharterList /> },
        { path: "yacht/:id", element: <YachtDetails /> },
        { path: "destinations", element: <Destinations /> },
        { path: "destinations/:id", element: <DestinationDetails /> },
        { path: "offices", element: <Offices /> },
        { path: "articles", element: <Articles /> },
        { path: "articles/:id", element: <ArticleDetails /> },
        { path: "favorites", element: <Favorites /> },
        { path: "about", element: <AboutUs /> },
        { path: "contact", element: <Contact /> },
        { path: "prive-service", element: <PriveService /> },
        
      ],
    },
  ]);
}
