import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [fList, setFiteredList] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4345678&lng=78.3162231&collection=97262&tags=layout_worldcup2&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const jsonData = await data.json();
    const fetchedRestaurantsList =
      jsonData?.data?.cards[0]?.card?.card?.info[0]?.stackedDetails
        ?.favRestaurantInfoCard?.restaurants;
    setResList(fetchedRestaurantsList);
    setFiteredList(fetchedRestaurantsList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            input={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchList = resList.filter((resItem) =>
                resItem.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFiteredList(searchList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (resItem) => resItem.info.avgRating > 4
            );
            setResList(filteredList);
            setFiteredList(filteredList);
          }}
        >
          Top Rated Restuarants
        </button>
      </div>
      <div className="res-container">
        {fList.map((resItem) => (
          <Link to={"/restaurants/" + resItem.info.id} key={resItem.info.id}>
            <RestaurantCard resData={resItem} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
