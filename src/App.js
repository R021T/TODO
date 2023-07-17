import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
     <div className='Head'>
      <h2>Todo App</h2>
     </div>
     <div className='Box'>
      <TodoWrapper/>
     </div>
    </div>
  );
}

export default App;
