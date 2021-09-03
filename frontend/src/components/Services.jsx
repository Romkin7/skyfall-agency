import React from "react";
import ServiceCard from "./ServiceCard";

const Services = ({ services }) => {
  return (
    <div className="row d-flex justify-content-center">
      {services.map((service, i) => {
        return (
          <div
            key={`service__right__${service.node.slug}`}
            className="col-6 col-sm-6 col-md-4"
          >
            <ServiceCard service={service} />
          </div>
        );
      })}
    </div>
  );
};

export default Services;
