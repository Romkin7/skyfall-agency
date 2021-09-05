import React from "react";

const ListItem = ({ link, item }) => {
  return (
    <>
      {link ? (
        <li className="list-group-item list--item">
          <a href={item.value}>{item.text}</a>
        </li>
      ) : (
        <li className="list-group-item list--item">{item}</li>
      )}
    </>
  );
};

export default ListItem;
