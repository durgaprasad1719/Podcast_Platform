import React from 'react'
import { useSelector } from 'react-redux'
import userSlice from '../slices/userSlice'
import Header from '../components/Common/Header'
import Button from '../components/Common/button'
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from '../components/Common/Loader'

function Profile() {
    // state refers to global state 
    // state.user refers  slice object name
    const user=useSelector((state)=>state.user.user)
   console.log("my user",user)
   if (!user) {
    return <Loader/>;
  }
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  return (
    <div>
        <Header/>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.uid}</h1>
        <Button text={"Logout"} onClick={handleLogout}></Button>
        </div>
    
  )
}

export default Profile