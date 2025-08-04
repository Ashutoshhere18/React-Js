
import './App.css'
import Users from './assets/UserData.js';
import Display from './components/Display.jsx';
function App() {
  return (
    <>
      {
        Users.map(user=>{
          
        return<Display  key={user.id} name={user.name} email={user.email}/>
        
})
      }
    </>
  )
}

export default App
