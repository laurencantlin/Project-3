import React from "react";
// import "./List.css";
// import { Collection, CollectionItem } from "react-materialize";
import "./Table.css";


export const Table = ({ props, children }) => {
    return (
        <table className="table is-striped is-hoverable is-fullwidth">
            <tbody>{children}</tbody>
        </table>

    );
};
export default Table;
