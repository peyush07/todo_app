import './App.css';
import TodoApp from './components/todoapp';
// import background from './background.jpg';


function App() {
  return (
    <div 
    className="background">
      <div className="App">
        <span className="title">Todo List</span> <br />
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
