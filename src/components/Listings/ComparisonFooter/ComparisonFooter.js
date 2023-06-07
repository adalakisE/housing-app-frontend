import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromComparison } from "../../../redux/actions/toDoActions";
import "./ComparisonFooterStyles.scss";
import Close from "../../../api/Icons/close.png";

function ComparisonFooter() {
  const stateItems = useSelector((state) => state.itemsInComparison);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(removeFromComparison(item));
  };

  let itemsList = [];

  if (Object.keys(stateItems).length !== 0) {
    itemsList = stateItems.map((item) => (
      <li key={item.id} className="comparison-footer__list-item">
        <div className="comparison-footer__left-container">
          <img
            className="comparison-footer__list-photo"
            src={item.photoLink}
            alt="house"
          />
          <div className="comparison-footer__list-body">
            <p style={{ fontWeight: "600" }}>
              {item.title} ({item.id})
            </p>
            <p>{item.area}</p>
            <p style={{ fontWeight: "bold" }}>${item.price}</p>
          </div>
        </div>
        <div className="comparison-footer__list-remove-container">
          <img
            className="icon-area"
            src={Close}
            alt="close"
            onClick={() => handleDelete(item)}
          />
        </div>
      </li>
    ));
    return (
      <div className="comparison-footer">
        <ul className="comparison-footer__list-container">{itemsList}</ul>
      </div>
    );
  } else return <div></div>;
}

export default ComparisonFooter;