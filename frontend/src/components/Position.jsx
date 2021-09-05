import React from "react";

const Position = ({ position }) => {
  return (
    <div className="row d-flex">
      <div className="col-12 col-md-5">
        <h2>{position.title}</h2>
      </div>
      <div className="col-12 col-md-7">
        <div
          className="hero--content"
          dangerouslySetInnerHTML={{
            __html: position.description,
          }}
        />
      </div>
    </div>
  );
};

export default Position;
