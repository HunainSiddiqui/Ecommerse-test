import React, { useState } from "react";
import ProductDetailView from "../../views/product/Detail";

const FilterColor = (props) => {
  // Define a state variable to track selected colors
  const [selectedColors, setSelectedColors] = useState([]);

  // Function to handle color selection
  const handleColorSelect = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  // Color options with their respective backgrounds
  const colorOptions = [
    { color: "Blue", bgClass: "bg-primary" },
    { color: "Gray", bgClass: "bg-secondary" },
    { color: "Green", bgClass: "bg-success" },
    { color: "Red", bgClass: "bg-danger" },
    { color: "Yellow", bgClass: "bg-warning" },
    { color: "Cyan Blue", bgClass: "bg-info" },
    { color: "Light", bgClass: "bg-light" },
    { color: "Dark", bgClass: "bg-dark" },
  ];

  return (
    <div className="card mb-3">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterColor"
        aria-expanded="true"
        aria-controls="filterColor"
      >
        Color
      </div>
      <ul className="list-group list-group-flush show" id="filterColor">
        {colorOptions.map((option, index) => (
          <li className="list-group-item" key={index}>
            <div className="row g-0">
              <div className="form-check col">
                <input
                  className={`form-check-input ${option.bgClass}`}
                  type="checkbox"
                  id={`flexCheckColor${index}`}
                  checked={selectedColors.includes(option.color)}
                  onChange={() => handleColorSelect(option.color)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`flexCheckColor${index}`}
                >
                  {option.color} <span className="text-muted">(5)</span>
                </label>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterColor;
