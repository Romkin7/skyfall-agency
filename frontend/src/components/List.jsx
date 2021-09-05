import React from "react";
import ListItem from "./ListItem";

const List = ({ listItemData }) => {
  return (
    <ul className="list list-group list-group-flush">
      <ListItem item={listItemData.subtitle} />
      <ListItem item={listItemData.address} />
      {listItemData.link.map((item) => {
        return <ListItem key={item.id} link={item.href} item={item} />;
      })}
    </ul>
  );
};

export default List;
