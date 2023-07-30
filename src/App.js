import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import img from "./images/check.png"

function App() {
  return (
    <div className='App'>
     <div className='Head'>
      <h2>Todo App</h2>
     </div>
     <div className='Box'>
      <TodoWrapper/>
     </div>
     <footer>
      <img src={img}/>
     </footer>
    </div>
  );
}

export default App;
