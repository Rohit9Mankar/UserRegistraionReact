import React from "react";
import Card from "../Card";
import UserForm from "./UserForm";


const NewUser=(props)=>{
    

const addNewUserHandler=(userObj)=>{
const obj={
    ...userObj,
    id:Math.random().toString()
}


props.onaddUsers(obj);
}


return(
    <Card>
      
    <UserForm onAddNewUser={addNewUserHandler}></UserForm>
    </Card>

    
    
)
}

export default NewUser;