import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";

const Body = () => {
  const [resList, setResList] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (resItem) => resItem.data.avgRating > 4
            );
            setResList(filteredList);
          }}
        >
          Top Rated Restuarants
        </button>
      </div>
      <div className="res-container">
        {resList.map((resItem) => (
          <RestaurantCard key={resItem.data.id} resData={resItem} />
        ))}
      </div>
    </div>
  );
};

export default Body;
