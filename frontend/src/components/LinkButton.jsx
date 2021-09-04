import React from "react";
import { Link } from "gatsby";

const LinkButton = ({ href, textcontent }) => {
  return (
    <Link className="linkButton" to={href}>
      {textcontent}
    </Link>
  );
};

export default LinkButton;
