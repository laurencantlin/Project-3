import React from "react";
import "./List.css";
import { Collection, CollectionItem } from "react-materialize";
import { Link } from "react-router-dom";

export const List = ({ children }) => {
  return (
      <Collection>    
      {children}
      </Collection>
  );
};
export default List;
