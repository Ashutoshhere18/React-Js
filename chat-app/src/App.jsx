
import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import UserHomePage from './components/UserHomePage'
import {Route,Routes} from 'react-router'
function App() {
 

  return (
    <>
 <Routes>
  <Route path='/' element={<SignIn/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/home' element={<UserHomePage/>}/>
 </Routes>
    
    </>
  )
}

export default App
