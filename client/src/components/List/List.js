import React from "react";
import "./List.css";
import { Collection, CollectionItem } from "react-materialize";
import { Link } from "react-router-dom";

export const List = ( {props, children }) => {
  return (
    <Collection>
     {/* <Link to={props.link}> */}
      {children}
    {/* </Link> */}
    </Collection>
  );
};
export default List;
