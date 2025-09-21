import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store"
import Home from "./pages/home/Home"
import Register from "./pages/auth/register/Register"
import Login from "./pages/auth/login/Login"
import ProductDetail from "./pages/ProductDetail/ProductDetail"

function App() {
  return (
 <>
<Provider store={store}>
   <Router>
  <Routes>
    <Route path ='/' element={<Home/>} />
    <Route path ='/register' element={<Register/>} />
    <Route path ='/login' element={<Login/>} />
    <Route path ='/productdetail/:id' element={<ProductDetail/>} />
  </Routes>
 </Router>
</Provider>
 </>
  )
}

export default App