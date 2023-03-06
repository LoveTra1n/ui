import {configureStore} from "@reduxjs/toolkit";
import newReducer from "./cardSlice"

export const store=configureStore(
    {
        reducer:{
            newReducer
        }
    }
)