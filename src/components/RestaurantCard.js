import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating } = resData.info;

  return (
    <div
      data-testid="resCard"
      className="m-4 h-72 p-4 w-[250px] border border-solid border-black rounded-lg"
    >
      <img
        className="res-logo rounded-lg cursor-pointer"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-2">{name}</h3>
      <h4 className="py-2">{cuisines.join(", ")}</h4>
      <h4 className="py-2">{avgRating}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <div>
      <p className="absolute p-2 bg-black rounded-lg text-white">Promoted</p>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
