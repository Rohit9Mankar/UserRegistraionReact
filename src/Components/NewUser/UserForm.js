import React, { useState } from "react";
import './UserForm.css';
import '../Styling.css';
import ErrorDialog from "../ErrorDialog";
import Card from "../Card";

const UserForm = (props) => {
    const [inputName, setInputName] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [isVisible, setIsVisible]=useState(false);
    const [isVisibility, setIsVisibility]=useState(false);

    const nameChangeHandler = (event) => {
        setInputName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setInputAge(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
       
        const obj={name:inputName,age:inputAge};
        if(inputName===""){
            return setIsVisibility(true);
        }
        if(inputAge<1){
            return setIsVisible(true);
        }
        props.onAddNewUser(obj);
        setInputName("");
        setInputAge("");
        

    }
    const errorHandler=()=>{
        setIsVisible(false);
        setIsVisibility(false);
        setInputName("");
        setInputAge("");
    }
    return (
        <Card>
            {isVisible && <ErrorDialog title="Invalid input " content="Please enter valid age(age>0)" onClick={errorHandler}></ErrorDialog>}
            {isVisibility && <ErrorDialog title="Invalid input" content="Please enter name and age " onClick={errorHandler}></ErrorDialog>}
            <form onSubmit={submitHandler}>
                <div className="newUser_controls">
                    <label>UserName </label>
                    <div>
                    <input type="text" value={inputName} onChange={nameChangeHandler}></input>
                    </div>
                    
                    
                </div>
                <div className="newUser_controls">
                <label>Age (years)</label>
                <div>
                <input type="number" value={inputAge} onChange={ageChangeHandler}></input>
                </div>
                    
                </div>
                <div className="actions">
                    <button type="submit">Add User</button>
                </div>
            </form>
        </Card>
    )
}

export default UserForm;