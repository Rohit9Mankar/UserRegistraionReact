import React from "react";
import Card from "./Card";
import './Styling.css';
import UsersList from "./UsersList";

const Users=(props)=>{
    return(
        <Card>
<UsersList items={props.items}></UsersList>
        </Card>
        
    )
}
export default Users;