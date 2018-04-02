import React from "react";
import "./Toast.css";

// class Toast extends React.Component {
//     constructor() {
//         super();
//         this.state = { toast: "", active: ""};
// this.renderTabs = this.renderTabs.bind(this);
// this.renderBtn = this.renderBtn.bind(this);
// this.render = this.render.bind(this);

// }
// renderBtn=(props)=> {
//     return (
//         <div><button className="button">{this.props.buttonText}</button>
//         </div>
//     )
// }

// render() {
//     return (
const Toast = (props) =>(
    <div className="columns level is-centered">
  <div className="column toastcolumn">
  <div className={props.className}>
        <button className="delete"></button>
        Prlor. <strong>Pellents mi</strong>, tet dictum <a>felis venenatis</a> effici
  </div></div>
</div>

    )
//     }

// }


export default Toast;