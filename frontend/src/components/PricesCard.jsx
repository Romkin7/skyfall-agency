import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const PriceCard = ({ price }) => {
  return (
    <div className="uk-card uk-card-muted">
      <div className="uk-card-media-top">
        <GatsbyImage
          image={price.node.cover.localFile.childImageSharp.gatsbyImageData}
          alt={`cover image`}
        />
      </div>
      <div className="uk-card-body">
        <p id="title" className="uk-text-uppercase">
          {price.node.title}
        </p>
        <p id="description" className="uk-text-large">
          {price.node.description}
        </p>
      </div>
    </div>
  );
};

export default PriceCard;
