import React, { useState } from "react";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";

const FilterStar = (props) => {
  const [selectedStar, setSelectedStar] = useState(null);

  const handleStarChange = (value) => {
    setSelectedStar(value);
    props.onratingChange(value);
  };

  return (
    <div className="card mb-3 accordion">
      <div className="card-header fw-bold text-uppercase accordion-icon-button" style={{background:"#8597ff"}}>
        Ratings
      </div>
      <div className="card-body show" id="filterStar">
      {[5, 4, 3, 2, 1].map((value) => (
        <div className="form-check" key={value}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id={`flexRadioDefault${value}`}
            value={value}
            checked={selectedStar === value}
            onChange={() => handleStarChange(value)}
          />
          <label
            className="form-check-label"
            htmlFor={`flexRadioDefault${value}`}
            aria-label="Star"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <IconStarFill
                key={star}
                className={`${
                  star <= value ? "text-warning" : "text-secondary"
                } me-1 mb-2`}
              />
            ))}
          </label>
        </div>
      ))}
      
    </div>


    </div>
  );
};

export default FilterStar;
