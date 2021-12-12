import Task from './Task';
import Linkk from './Links';
import AddTask from './AddTask';
import { Routes, Route } from 'react-router-dom';

const Tasks = ({tasks, onDelete, onToggle, tasksDay, onAdd}) => {
    return (
        <div className='tasks container'>
            <h3>Tasks for: {tasksDay}</h3>
          <Routes>
            <Route 
              path='/'
              element={
                <>
                  <Linkk linkClass='createTaskBtn' linkTo='/add-task' title='Create new Task' />

                  <div className="tasksWrapper">
                    {tasks.filter(task => task.dateOn === tasksDay).map(task => (
                    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} /> ))}
                  </div>
                </>
              }
            />
            <Route path='/add-task' element={<AddTask onAdd={onAdd} />} />
          </Routes>
        </div>
    )
}

export default Tasks