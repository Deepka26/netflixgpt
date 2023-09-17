import React, { useState ,useRef} from "react";
import Header from "./Header";
import netflixbg from "../Components/Assets/netflixbg.jpg";
import CheckValidData from "../Utils/Validate"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Utils/Firebase"
import {  signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser} from "../Utils/UserSlice"

const Login = () => {
  const dispatch=useDispatch()
  const navigate =useNavigate()
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage,setErrorMessage]=useState(null)
  const email=useRef(null)
  const password=useRef(null)
  const name=useRef(null)
  const handleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const onHandleButtonClick=()=>{
    
    const validationMessage=CheckValidData(email.current.value,password.current.value)
    setErrorMessage(validationMessage)
    //Sign Up logic
    if(!isSignIn)
    {
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
        }).then(() => {
         
          const {uid,email,displayName} =auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        }).catch((error) => {
         
        });
       
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +" "+ errorMessage)
       
      });
    } 
    //Sign In logic
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" "+errorMessage)
      });
    }
  } 
  console.log(isSignIn)
   return (
    <div>
      <Header />
      <div className="absolute">
        <img src={netflixbg} alt="netflixbg" className="object-cover" />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-black relative  w-[28vw] h-[65vh] rounded-lg bg-opacity-80 ">
          <div className="px-10 py-12">
            <h1 className="text-white text-2xl font-bold ">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            <div className="flex flex-col mt-4">
              {!isSignIn && (
                <input
                ref={name}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Name"
                  className="p-2 my-2 outline-none bg-gray-700 rounded text-white"
                />
              )}
              
              <input
              ref={email}
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="p-2 my-2 outline-none bg-gray-700 rounded text-white"
              />
               <p className="text-red-600 text-xs ">{errorMessage}</p>
              <input
              ref={password}
                type="password"
                name="password"
                id="password"
                className="p-2 my-2 bg-gray-700 outline-none rounded text-white "
                placeholder="Password"
              />
            </div>
            <div className=" mt-6" onClick={()=>{onHandleButtonClick()}}>
              <button
                type="button"
                className="text-white w-full bg-red-700 py-2 font-semibold text-xl rounded"
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <p
              className="mt-6 text-base  text-white cursor-pointer"
              onClick={() => {
                handleSignInForm();
              }}
            >
              {" "}
              <span className="  ">
                {isSignIn
                  ? "New to Netflix? Sign Up Now"
                  : "Already registered? Sign In Now"}
              </span>
            </p>
          </div>

          <form action=""></form>
        </div>
      </div>
    </div>
  );
};

export default Login;
