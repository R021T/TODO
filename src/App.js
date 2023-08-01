import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

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
      <img src="./images/check.png" alt='footer'/>
     </footer>
    </div>
  );
}

export default App;
