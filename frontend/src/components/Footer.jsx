import React from "react";
import List from "./List";
import LinkButton from "./LinkButton";
import SocilaLinks from "./SocialLinks";

const Footer = ({ footer, socialLinks }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-12 footer--wrapper">
            <LinkButton
              href={footer.linkbutton.href}
              textcontent={footer.linkbutton.textcontent}
            />
            <h2>{footer.title}</h2>
            <div className="footer--wrapper--list">
              <List listItemData={footer} />
              <SocilaLinks socialLinks={socialLinks} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
