import React from "react";
import ReferenceCard from "./ReferenceCard";

const References = ({ references }) => {
  return (
    <div className="row d-flex justify-content-center">
      {references.map((reference) => {
        return (
          <div
            key={`reference__right__${reference.node.slug}`}
            className="col-6 col-sm-6 col-md-4"
          >
            <ReferenceCard reference={reference.node} />
          </div>
        );
      })}
    </div>
  );
};

export default References;
