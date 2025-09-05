
import Form from "../../../globals/components/form/Form"
import { useAppDispatch, type UserDataType } from "../../types"
import { register } from "../../../store/authSlice";


function Register() {
  const dispatch = useAppDispatch()
  const handleRegister= (data:UserDataType)=>{
    console.log('i am inside handleregister');
    
   console.log('this is from register', data);
   dispatch(register(data))
  }

  return (
    <Form type="register" onSubmit={handleRegister}/>
  )
}

export default Register