import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

import API from '../http';


export type Status = 'loading' | 'success' | 'error'; 

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
    status: Status,
    resetStatus: Status,
}




const initialState:AuthState = {
   user:{} as User,
   status: 'loading',
   resetStatus: 'loading'
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser(state:AuthState, action:PayloadAction<User>){
             state.user = action.payload
        },

        setStatus(state:AuthState,  action:PayloadAction<Status>){
            state.status = action.payload
        },
        resetStatus(state:AuthState ){
           state.status = 'loading'
        },
        setToken(state:AuthState, action:PayloadAction<Status>){
            state.user.token = action.payload
        }
    }
})





export const {setUser, setStatus, resetStatus, setToken} = authSlice.actions
export default authSlice.reducer





export function register(data:RegisterData){

    return async function registerThunk(dispatch:any){
        dispatch(setStatus('loading'))
      
        
    try {
          const response =  await API.post('auth/register', data)


     if(response.status === 201 ||  response.status === 200){
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
    const response = await API.post('auth/login', data)
    if(response.status === 201 ||  response.status === 200){
 dispatch(setStatus('success'))
dispatch(setToken(response.data.data))
localStorage.setItem('token', JSON.stringify(response.data.data))
    }else{
 dispatch(setStatus('error'))
    }
} catch (error:any) {
 
    
     dispatch(setStatus('error'))
}
}
}
 