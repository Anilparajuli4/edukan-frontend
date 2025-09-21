import { useEffect } from "react"
import Form from "../../../globals/components/form/Form"
import { login, resetStatus } from "../../../store/authSlice"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../../store/hook"
import { useAppDispatch, type UserDataType } from "../../types"


function Login() {
    const navigate = useNavigate()
  const {status}= useAppSelector((state)=> state.auth)
console.log('login', status);

  
  const dispatch = useAppDispatch()
  const Login= (data:UserDataType)=>{

   dispatch(login(data))
  }

  useEffect(()=>{
   if(status === 'success'){
    dispatch(resetStatus())
    navigate('/')
   }
  },[status])
  return (
   <Form type={'login'} onSubmit={Login}/>
  )
}

export default Login