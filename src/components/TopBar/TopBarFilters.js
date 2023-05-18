import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { filterByPrice, filterBySize } from "../../redux/actions/toDoActions";

function TopBarFilters() {
  const [filterPrice, setFilterPrice] = useState("");
  const [filterSize, setFilterSize] = useState("");

  const dispatch = useDispatch();

  function handleChange(e) {
    console.log(e.target);
    if (e.target.name === "Price") {
      setFilterPrice(e.target.value);
    } else if (e.target.name === "Size") {
      setFilterSize(e.target.value);
    }
    dispatch(filterByPrice(filterPrice));
    dispatch(filterBySize(filterSize));
  }

  return (
    <div className="top-bar__filters-container">
      <Select
        className="top-bar__filter"
        value={filterPrice}
        name="Price"
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Price</em>
        </MenuItem>
        <MenuItem value={900}>{`> $900`}</MenuItem>
        <MenuItem value={1100}>{`> $1100`}</MenuItem>
      </Select>
      <Select
        className="top-bar__filter"
        value={filterSize}
        name="Size"
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Size</em>
        </MenuItem>
        <MenuItem value={50}>{`> 50m2`}</MenuItem>
        <MenuItem value={100}>{`> 100m2`}</MenuItem>
      </Select>
    </div>
  );
}

export default TopBarFilters;
