import React from "react";
import "./List.css";
import {Collection, CollectionItem} from "react-materialize";

export const List = (props) => {
  return (
    <Collection>
      <CollectionItem href="#">Question</CollectionItem>
      <CollectionItem href="#">Question</CollectionItem>
      <CollectionItem href="#">Question</CollectionItem>
      <CollectionItem href="#">Question</CollectionItem>
    </Collection>
  );
};
export default List;
