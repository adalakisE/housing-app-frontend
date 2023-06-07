import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToComparison,
  removeFromComparison,
} from "../../redux/actions/toDoActions";
import "./ListingsStyles.scss";
import Bed from "../../api/Icons/bed.png";
import Placeholder from "../../api/Icons/placeholder.png";
import Area from "../../api/Icons/area.png";
import Compare from "../../api/Icons/compare.png";

function ListingCard({
  item,
  imgSrc,
  title,
  description,
  size,
  bedroom,
  price,
  area,
}) {
  //dispatch actions to redux
  const stateItems = useSelector((state) => state.itemsInComparison);
  const dispatch = useDispatch();

  const handleClick = (clickedItem) => {
    if (stateItems.some((item) => item === clickedItem)) {
      dispatch(removeFromComparison(clickedItem));
    } else {
      dispatch(addToComparison(item));
    }
  };

  return (
    <div className="listing-card__container">
      <img
        className="listing-card__photo"
        variant="left"
        src={imgSrc}
        alt={imgSrc}
      />
      <div className="listing-card__body">
        <div className="listing-card__body-title">{title}</div>
        <div className="listing-card__body-description">
          <ul style={{ listStyleType: "none" }}>
            <li style={{ paddingBottom: "10px" }}>
              <div>{description}</div>
            </li>
            <li className="listing-card__body-list-item">
              <img
                className="icon-area"
                src={Placeholder}
                alt="placeholder-icon"
              />
              {area}
            </li>
            <li className="listing-card__body-list-item">
              <img className="icon-area" src={Area} alt="area-icon" />
              {size / 10}m<sup>2</sup>
            </li>
            <li
              className="listing-card__body-list-item"
              style={{ paddingBottom: "10px" }}
            >
              <img className="icon-area" src={Bed} alt="bed-icon" />
              {bedroom} apartment
            </li>
            <div className="listing-card__footer">
              <span className="listing-card__price">
                ${price.toLocaleString("en")}
              </span>
              <div
                className="listing-card__comparison"
                onClick={() => handleClick(item)}
              >
                <div className="listing-card__comparison-container">
                  <p className="listing-card__comparison-container-text">
                    Include in comparison
                  </p>
                  <img className="icon-area" src={Compare} alt="bed-icon" />
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;