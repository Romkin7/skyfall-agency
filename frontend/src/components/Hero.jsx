import React from "react";
import LinkButton from "./LinkButton";

const Hero = ({
  background,
  title,
  content,
  link,
  landing,
  color = "white",
}) => {
  return (
    <section
      className={landing ? "hero hero--landing mt-0 mb-5" : "hero mt-0 mb-5"}
      style={{
        backgroundImage: "url(" + background + ")",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <h1 className={`hero--title hero--title--${color}`}>{title}</h1>
            {content && (
              <div
                className={`hero--content hero--content--${color}`}
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              />
            )}
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
