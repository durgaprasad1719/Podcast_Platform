import React from 'react'
import { useState } from 'react'
import InputComponent from"../../Common/Input"
import Button from '../../Common/button'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db,storage} from "../../../firebase";
import { doc, setDoc } from "firebase/firestore"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../slices/userSlice';
import { toast } from 'react-toastify';

function SignupForm() {
    const[fullName,setFullName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[confirmPassword,setConfirmPassword]=useState()
    const[loading,setLoading]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleSignup= async()=>{
        console.log("handle signup")
        setLoading(true)
        // creating user
        if(password==confirmPassword&&password.length>=6 && fullName&& email){
          try {
            // Creating user's account.
            const userCredential = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );
            const user = userCredential.user;
            console.log("user",user)
             // Saving user's details.
             // creating doc in db we have & comming from firebase
             // users is name of collection
             // user.uid is document id
        await setDoc(doc(db, "users", user.uid), {
          name: fullName, // comming from user 
          email: user.email,
          uid: user.uid,
        })
        // set user is action we have
        // save data in the redux, call the redux action
        dispatch(setUser({
          name: fullName, 
          email: user.email,
          uid: user.uid,
        }))
        toast.success("User has been created")
        // every time we signup it will go to profile
        setLoading(false)
        navigate("/profile")
          }
          catch(e){
            console.log("error",e)
            toast.error(e.message)
            setLoading(false)
          }
        

        }
        else{
          // throw error
          if(password!=confirmPassword){
            toast.error("Please Make Sure your password and Confirm Password matches!")
          }
          else if (password.length < 6) {
            toast.error(
              "Please Make Sure your password is more than 6 digits long!"
            );
          }
          setLoading(false)
        }

        
           //console.log("user", user);
      }
  return (
    <>
    <InputComponent state={fullName} setState={setFullName} placeholder="Full Name" type="text" required={true}/>
      <InputComponent state={email} setState={setEmail} placeholder="Email" type="text" required={true}/>
      <InputComponent state={password} setState={setPassword} placeholder="Password" type="password" required={true}/>
      <InputComponent state={confirmPassword} setState={setConfirmPassword} placeholder="Confirm Password" type="password"  required={true}/>
      <Button text={loading?"Loading..":"Signup"} disabled={loading} onClick={handleSignup}/>
    </>
  )
}

export default SignupForm