import React,{useState} from 'react';
import Users from './Components/Users';
import NewUser from './Components/NewUser/NewUser';
import './App.css';

const dummy_users=[];

const App = () => {
 const[user,setUsers]=useState(dummy_users);

 const addUsersHandler = (userev) => {

  setUsers((prevUser) => {
    return [ ...prevUser,userev];
})
 };

  return (
<div>
<NewUser onaddUsers={addUsersHandler}></NewUser>
<Users items={user}></Users>
</div>
    

  );
};

export default App;
