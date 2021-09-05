import React from "react";
import Icon from "./Icon";

const SocilaLinks = ({ socialLinks, side = "center" }) => {
  return (
    <ul className={`socialLinks socialLinks--${side}`}>
      {socialLinks.map((socialLink) => {
        return (
          <a href={socialLink.node.href} target="__blank">
            <Icon iconName={socialLink.node.iconname} />
          </a>
        );
      })}
    </ul>
  );
};

export default SocilaLinks;
