import React from "react";
import LinkButton from "./LinkButton";

const Footer = ({ footer, socialLinks }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-12">
            <LinkButton
              href={footer.linkbutton.href}
              textcontent={footer.linkbutton.textcontent}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-12">
            <h2>{footer.title}</h2>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
