
import './App.css'
import CounterProvider from './context/CounterProvider';
import Counter from './components/Counter';

function App() {
return(
    
   <CounterProvider>
      <Counter />
    </CounterProvider>
  
)
}

export default App
