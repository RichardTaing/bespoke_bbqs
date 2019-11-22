import React from "react";
import "./style.css";

const Categories = prosp => {
  return (
    <React.Fragment>
      <span>Categories</span>
      <ul class="CategoryList">
        <li>
          <span>
            <a href="#">Meat</a>
          </span>
          <ul>
            <li>
              <a href="#">Red Meat</a>
            </li>
            <li>
              <a href="#">White Meat</a>
            </li>
            <li>
              <a href="#">Seafood</a>
            </li>
          </ul>
        </li>
        <li>
          <span>
            <a href="#">Bespoke BBQ Packs</a>
          </span>
        </li>
        <li>
          <span>
            <a href="#">Sauces, Spices and Rubs</a>
          </span>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Categories;
