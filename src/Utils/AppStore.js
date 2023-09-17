import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/UserSlice"
import moviesReducer from "./moviesSlice"

const AppStore=configureStore({
    reducer:{
        user:userReducer, 
        movies:moviesReducer, 
    }
})
export default AppStore;