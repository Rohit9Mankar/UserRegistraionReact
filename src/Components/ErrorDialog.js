import React from "react";

import './Styling.css';
const ErrorDialog = (props) => {
    return (
        <div className="error_container">
            <div className="error">
                <header className="error_header">
                    <h1>
                        {props.title}
                    </h1>
                </header>
                <div className="error_content">
                    <h3>{props.content}</h3>
                    <div className="error_control_action">
                    <button onClick={props.onClick}>Ok</button>
                </div>
                </div>
                
            </div>
        </div>




    )
}
export default ErrorDialog;