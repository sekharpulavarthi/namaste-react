import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = (props) => {
  const { items } = props;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} - </span>
              <span>Rs. {item.card.info.price / 100}/-</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                onClick={() => handleAddItem(item)}
                className="mx-10 mt-16 p-2 shadow-lg rounded-md bg-black text-white"
              >
                Add+
              </button>
            </div>

            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
