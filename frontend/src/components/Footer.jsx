import React from "react";

const Footer = ({ footer }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4">
            <h2>{footer.title}</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
