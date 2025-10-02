
import './App.css'
import CounterProvider from './context/CounterProvider';
import Counter from './components/Counter';
import Todos from './components/Todos';

function App() {
return(
    
   <CounterProvider>
      <Counter />
      <Todos/>
    </CounterProvider>
  
)
}

export default App
