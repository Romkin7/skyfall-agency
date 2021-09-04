import React from "react";
import LinkButton from "./LinkButton";

const Hero = ({ background, title, content, link }) => {
  return (
    <section
      className="hero mt-0 mb-5"
      style={{
        backgroundImage: "url(" + background + ")",
      }}
    >
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <h1 className="hero--title">{title}</h1>
            {content && <p>{content}</p>}
            {link && (
              <LinkButton textcontent={link.textcontent} href={link.href} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
