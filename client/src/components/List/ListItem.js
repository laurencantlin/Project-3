import React from "react";
import { Collection, CollectionItem } from "react-materialize";

export const ListItem = props => {
  return (
    <CollectionItem >
      {props.children}
    </CollectionItem>
    )
}
export default ListItem;
