import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store"

function App() {
  return (
 <>
<Provider store={store}>
   <Router>
  <Routes>
    <Route path ='/' element={<h1>this is home</h1>} />
    <Route path ='/register' element={<h1>this is register</h1>} />
    <Route path ='/login' element={<h1>this is login</h1>} />
  </Routes>
 </Router>
</Provider>
 </>
  )
}

export default App