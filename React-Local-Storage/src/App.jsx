
import './App.css'
import {Routes,Route} from 'react-router'

import Home from './Components/Home'
import Cart from './Components/Cart'
import PrivateRoute from './Components/PrivateRoute'
function App() {
return(
   <>
 <Routes>
    
        <Route path='/' element={
          <PrivateRoute><Home/></PrivateRoute>
        }/>
         <Route path='/Home' element={
          <PrivateRoute><Home/></PrivateRoute>
        }/>
         <Route path='/SignIn' element={
          <PrivateRoute><Home/></PrivateRoute>
        }/>
    
       <Route path='/Cart' element={
        <PrivateRoute>
          <Cart/>
       </PrivateRoute>}/>
    
 </Routes>
</>
)
  
}

export default App
