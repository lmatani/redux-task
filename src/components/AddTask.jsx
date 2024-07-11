import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todosSlice';
import '../assets/css/Tasks.css';


function AddTask() {
    const [taskText, setTaskText] = useState('');
    const dispatch = useDispatch();
  
    const handleAddTask = () => {
        if (taskText != '') {   
            dispatch(addTask(taskText));
            setTaskText('');
        }  
        else {
            alert ('Debes introducir un texto para la tarea!');
        }
    }

    return (
        <div className="container-add">
            <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)}/>
            <button onClick={handleAddTask}>Añadir Tarea</button>
        </div>
    );
  }

  export default AddTask;
  