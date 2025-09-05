import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'
import App from '../App';
import API from '../http';


type Status = 'loading' | 'success' | 'error';

interface RegisterData{
    userName: string,
    email: string,
    password: string,
}

interface LoginData{
    email: string,
    password: string,
}

interface User{
    userName: string,
    email: string,
    password:string,
    token: string
}

interface AuthState{
    user: User,
    status: Status
}




const initialState:AuthState = {
   user:{} as User,
   status: 'loading'
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser(state:AuthState, action:PayloadAction<User>){
             state.user = action.payload
        },

        setStatus(state:AuthState, action:PayloadAction<Status>){
            state.status = action.payload
        }
    }
})




export const {setUser, setStatus} = authSlice.actions
export default authSlice.reducer





export function register(data:RegisterData){

    return async function registerThunk(dispatch:any){
        dispatch(setStatus('loading'))
    try {
          const response =  await API.post('register', data)

     if(response.status === 201){
 dispatch(setStatus('success'))
     }else{
 dispatch(setStatus('error'))
     }
    } catch (error) {
        dispatch(setStatus('error'))
    }
   
   
    }
}


export function login (data:LoginData){
return async function loginThunk(dispatch:any){
    dispatch(setStatus('loading'))
try {
    const response = await API.post('login', data)
    if(response.status === 201){
 dispatch(setStatus('success'))
    }else{
 dispatch(setStatus('error'))
    }
} catch (error) {
     dispatch(setStatus('error'))
}
}
}
 