import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const ServiceCard = ({ service }) => {
  return (
    <div className="uk-card uk-card-muted">
      <div className="uk-card-media-top">
        <GatsbyImage
          image={service.node.cover.localFile.childImageSharp.gatsbyImageData}
          alt={`Hero image`}
        />
      </div>
      <div className="uk-card-body">
        <p id="title" className="uk-text-uppercase">
          {service.node.title}
        </p>
        <p id="description" className="uk-text-large">
          {service.node.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
