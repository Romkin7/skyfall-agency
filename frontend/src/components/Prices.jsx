import React from "react";
import PriceCard from "./PriceCard";

const Prices = ({ prices }) => {
  return (
    <div className="row d-flex justify-content-center">
      {prices.map((price, i) => {
        return (
          <div
            key={`price__right__${price.node.slug}`}
            className="col-6 col-sm-6 col-md-4"
          >
            <PriceCard price={price} />
          </div>
        );
      })}
    </div>
  );
};

export default Prices;
