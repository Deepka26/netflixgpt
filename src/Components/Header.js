import React, { useEffect } from "react";
import netflixLogo from "../Components/Assets/netlixlogo.png";
import netfliUserImage from "../Components/Assets/netflixUserIcon.png";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { removeUser, addUser } from "../Utils/UserSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
 const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {});
  };
  const handleGptSearch = () => {
  // Toggle GPT search
   dispatch(toggleGptSearchView())

  };

  const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        src={netflixLogo}
        alt="netflixlogo"
        className=" relative  w-40 h-32 bottom-4 "
      />

      {user && (
        <div className="flex gap-3 items-center mb-8 mr-5">
          {
            showGptSearch &&  <select name="language" id="language" className="p-2 bg-gray-900 text-white" onChange={(e)=>{handleLanguageChange(e)}}>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>
          }
         
          <button
            type="button"
            className="px-5 py-2 text-white hover:bg-red-800 rounded bg-red-600 "
            onClick={() => {
              handleGptSearch();
            }}
          >
           {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            src={netfliUserImage}
            className="w-10 h-10"
            alt="netflixUserImage"
          />
          <button
            type="button"
            className="text-white font-semibold"
            onClick={() => {
              handleSignOut();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
