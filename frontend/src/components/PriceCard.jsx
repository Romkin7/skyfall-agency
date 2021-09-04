import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const PriceCard = ({ price }) => {
  return (
    <div className="uk-card uk-card-muted">
      <div className="uk-card-media-top">
        <h3 id="title" className="uk-text-uppercase">
          {price.node.title}
        </h3>
        <GatsbyImage
          image={price.node.image.localFile.childImageSharp.gatsbyImageData}
          alt={`cover image`}
        />
      </div>
      <div className="uk-card-body">
        <p id="title" className="uk-text-uppercase">
          {price.node.price}
        </p>
        <div dangerouslySetInnerHTML={{ __html: price.node.content }} />
      </div>
    </div>
  );
};

export default PriceCard;
