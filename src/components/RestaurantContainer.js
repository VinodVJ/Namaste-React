import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState } from "react";

const RestaurantContainer = () => {
    const [restaurantList, setRestaurantList] = useState(resData);

    return (
        <div>
            <div className="res-btn">
                <button onClick={() => {
                    const filteredList = resData.filter((res) => res?.info?.avgRating > 4.2)
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