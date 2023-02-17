import React from "react";
import './Styling.css';
import UserItem from "./UserItem";

const UsersList = (props) => {
  
  return(

    <div className="newUser_List">
          <ul > {
        props.items.map((item) => (
      
              <UserItem
                key={item.id}
                name={item.name}
                age={item.age}
                
            ></UserItem>
          
          
        )
    
        )
    }</ul>
    </div>

  ) 
       
    

}


export default UsersList;