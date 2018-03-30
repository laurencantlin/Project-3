import React, { Component } from "react";
import "./IconBtn.css";
import { Icon, Button, Badge } from "react-materialize";
import ReactTooltip from 'react-tooltip'

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class IconBtn extends Component {


    render = (props) => {
        return     <a className={this.props.level}>
        <span className={this.props.spanclasses} onClick={this.props.onClick}><i data-fa-transform={this.props.rotate} className={this.props.icon}></i></span>
      </a>
            {/* <Button 
            onClick={this.props.onClick}
            className={this.props.classes}
             large={this.props.large}
              flat={this.props.flat} 
              floating={this.props.floating} 
               waves='light'
                icon={this.props.icon} 
                data-tip={this.props.datatip} data-for="tip"></Button>
            <ReactTooltip id="tip"
             type={this.props.type}             
              effect="solid"></ReactTooltip> */}
           
             
    }
}

export default IconBtn;
