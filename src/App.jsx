import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import './App.css';


const App = () => {
  
  return (
    <> 
      <div className='card'>
        <h1>Lista de Tareas</h1>
        <AddTask />
        <Tasks />
      </div>
    </>
  );
};

export default App;
