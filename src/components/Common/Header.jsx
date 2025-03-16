import React from "react";
import { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = (props) => {

  // const [username, setusername] = useState('')

  // if(!data){
  //   setusername('Admin')
  // }
  // else{
  //   setusername(data.firstName)
  // }

  const handleLogOut = ()=>{
    localStorage.setItem('loggedInUser','')
    // console.log(props.changeUser)
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className="flex items-end justify-between"> 
      <h1 className="text-2xl font-medium">
        Hello <br /> 
        <span className="text-3xl font-semibold">Nidhi👋</span>
      </h1>
      <button onClick={handleLogOut} className="bg-red-600 text-lg font-medium px-5 py-2 rounded-sm">Log Out</button>
    </div>
  );
};

export default Header;
