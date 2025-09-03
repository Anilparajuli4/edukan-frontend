import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store"
import Home from "./pages/home/Home"
import Register from "./pages/auth/register/Register"

function App() {
  return (
 <>
<Provider store={store}>
   <Router>
  <Routes>
    <Route path ='/' element={<Home/>} />
    <Route path ='/register' element={<Register/>} />
    <Route path ='/login' element={<h1>this is login</h1>} />
  </Routes>
 </Router>
</Provider>
 </>
  )
}

export default App