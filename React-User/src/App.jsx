
import './App.css'
// import Users from './assets/UserData.js';
// import Display from './components/Display.jsx';
import Counter from './components/Hooks'
import Books from './components/Books/books'
function App() {
  return (
    <>
      {/* {
        Users.map(user=>{
          
        return<Display  key={user.id} name={user.name} email={user.email}/>
        
})
      } */
     
      }

        {/* <Counter/> */}

        {<Books/>}
    </>
    
  )
}

export default App
