import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const ServiceCard = ({ service }) => {
  return (
    <div className="serviceCard">
      <div className="serviceCard--head">
        <GatsbyImage
          image={service.node.image.localFile.childImageSharp.gatsbyImageData}
          alt={`Cover image`}
          className="serviceCard--head--image"
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
