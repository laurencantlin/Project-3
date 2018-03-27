import React from "react";
import { Collection } from "react-materialize";
// import { Link } from "react-router-dom";

// export const ListItem = props => {
//   return (
//     <CollectionItem >
//       {props.children}
//     </CollectionItem>
//     )
// }

export const ListItem= ({props}) => { 
  return(
    <Link to={"/questions"}>
    <CollectionItem>
    {props.key}
    </CollectionItem>
    </Link>
  )
}
export default ListItem;
