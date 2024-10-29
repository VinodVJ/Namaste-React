import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } = resData?.info
    return (
        <div className='res-card'>
            <img
                className='res-logo'
                alt='Restaurant Name'
                src={CDN_URL + cloudinaryImageId}
            />
            <h2>{name}</h2>
            <h4>{cuisines}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;