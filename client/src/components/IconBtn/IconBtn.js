import React from "react";
import "./IconBtn.css";
import { Icon, Button } from "react-materialize";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const IconBtn = props => (
    <a href="" onClick={props.onClick} >
        <Icon
            className={props.classes}
            right={props.right} left={props.left} center={props.center}
            tiny={props.tiny} small={props.small} medium={props.medium} large=  {props.large}>
              {props.children}
        </Icon>
    </a>
    // <Button floating small className='darkgrey' waves='light' icon={props.icon}/>
);

export default IconBtn;
