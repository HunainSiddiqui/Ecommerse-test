// FilterCategory.js
import React from "react";

function FilterCategory({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="card mb-3 accordion">
      <div className="card-header fw-bold text-uppercase accordion-icon-button">
        Categories
      </div>
      <ul className="list-group list-group-flush show" id="filterCategory">
        <li key="all" className="list-group-item">
          <label>
            <input
              type="radio"
              value="all"
              checked={selectedCategory === "all"}
              onChange={() => onCategoryChange("all")}
              style={{ marginRight: "5px" }}
            />
            All Categories
          </label>
        </li>
        {categories.map((category) => (
          <li key={category} className="list-group-item">
            <label>
              <input
                type="radio"
                value={category}
                checked={selectedCategory === category}
                onChange={() => onCategoryChange(category)}
                style={{ marginRight: "5px" }}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterCategory;

