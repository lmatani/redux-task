import { useSelector, useDispatch } from 'react-redux';
import { removeTask, changeStateTask } from '../redux/todosSlice';
import '../assets/css/Tasks.css';

function Tasks() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);
  
    return (
      <>
       <div className="container-list">
          <ul>
            {tasks.length >= 1 && tasks.map((task) => (
                <li key={task.id}>
                    <p><span>{task.task}</span></p>
                    <p>{task.state ? "Hecha" : "Pendiente"}</p>
                    <div className="botonera">
                      <button onClick={() => dispatch(changeStateTask(task.id))}>Cambiar Estado</button>
                      <button onClick={() => dispatch(removeTask(task.id))}>Eliminar Tarea</button>
                    </div>
                </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
  
  export default Tasks;