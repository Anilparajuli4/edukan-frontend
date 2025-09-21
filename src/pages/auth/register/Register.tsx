
import Form from "../../../globals/components/form/Form"
import { useAppDispatch, type UserDataType } from "../../types"
import { register, resetStatus } from "../../../store/authSlice";
import { useAppSelector } from "../../../store/hook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Register() {
  const navigate = useNavigate()
  const {status}= useAppSelector((state)=> state.auth)
console.log(status);

  
  const dispatch = useAppDispatch()
  const handleRegister= (data:UserDataType)=>{
    console.log('i am inside handleregister');
    
   console.log('this is from register', data);
   dispatch(register(data))
  }

  useEffect(()=>{
   if(status == 'success'){
    dispatch(resetStatus())
    navigate('/login')

   }
  },[status])

  return (
    <Form type="register" onSubmit={handleRegister}/>
  )
}


export default Register