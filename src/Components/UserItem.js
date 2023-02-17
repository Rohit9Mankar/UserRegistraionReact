import React from "react";
import './Styling.css';
const UserItem=(props)=>{
    return(
        <div className="newUser_List__items">
            <p>{props.name} {props.age}</p>
            
    
        </div>
    )
}


export default UserItem;