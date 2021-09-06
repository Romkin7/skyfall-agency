import React from "react";

const Position = ({ position }) => {
  return (
    <div className="row d-flex my-5">
      <div className="col-12 col-md-5">
        <h2>{position.title}</h2>
      </div>
      <div className="col-12 col-md-7">
        <div
          className="position"
          dangerouslySetInnerHTML={{
            __html: position.description,
          }}
        />
      </div>
    </div>
  );
};

export default Position;
