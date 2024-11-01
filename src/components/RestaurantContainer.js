import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantContainer = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    let rawRestaturantData = [];


    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9879576&lng=77.5374662&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        rawRestaturantData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        console.log(rawRestaturantData);
        setRestaurantList(rawRestaturantData)
    }

    useState(() => {fetchData()}, []);

    if (restaurantList?.length == 0){
        return <Shimmer />;
    }

    return (
        <div>
            <div className="filter-container">
                <div className="search-container">
                    <input type='text' />
                    <button>Search</button>
                </div>
                <button className="res-btn" onClick={() => {
                    const filteredList = restaurantList.filter((res) => res?.info?.avgRating > 4.2)
                    console.log(filteredList);
                    setRestaurantList(filteredList);
                }}>Top Rated Resturants</button>
            </div>
            <div className='res-container'>
                {
                    restaurantList.map((resturant) =>
                        <RestaurantCard key={resturant.info.id} resData={resturant} />)
                }
            </div>
        </div>
    );
}

export default RestaurantContainer;