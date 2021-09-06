import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const ReferenceCard = ({ reference }) => {
  return (
    <Link to={`/referenssit/${reference.slug}`}>
      <div className="card">
        <div className="card-head">
          <GatsbyImage
            image={reference.image.localFile.childImageSharp.gatsbyImageData}
            alt={`cover image`}
          />
          <h3 id="title" className="card-body">
            {reference.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ReferenceCard;
