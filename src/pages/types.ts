// import type { ThunkDispatch } from "@reduxjs/toolkit"
// import {AnyAction} from 'react-redux'

import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";

export interface PropsType{
    type: string,
    onSubmit: (data:UserDataType)=> void
}


export interface UserDataType{
    email:string,
    password:string,
    userName:string
} 

export const useAppDispatch: () => AppDispatch = useDispatch;

// export type AppDispatch = ThunkDispatch<any, any, AnyAction>