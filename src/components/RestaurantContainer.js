import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";

const RestaurantContainer = () => {
    return (
        <div className='res-container'>
            {
                resData.map((resturant) =>
                    <RestaurantCard key={resturant.info.id} resData={resturant} />)
            }
        </div>
    );
}

export default RestaurantContainer;