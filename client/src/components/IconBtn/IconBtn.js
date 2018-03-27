import React from "react";
// import "./DeleteBtn.css";
import {Icon, Button} from "react-materialize";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const IconBtn = props => (
    // <Icon className={props.classname} {...props}>{props.children}</Icon>
    <Button floating small className='darkgrey' waves='light' icon={props.icon}/>
);

export default IconBtn;
