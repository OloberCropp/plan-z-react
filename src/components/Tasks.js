import Task from './Task';
import Linkk from './Links';
import AddTask from './AddTask';
import { Routes, Route } from 'react-router-dom';

const Tasks = ({tasks, onDelete, onToggle, tasksDay, onAdd}) => {

  const showTasks = () => {
    const TasksOnDate = tasks.filter(task => task.dateOn === tasksDay);
    if(TasksOnDate.length > 0){
      return TasksOnDate.map(task => <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />)
    }else{
      return <h3 style={{opacity:'0.7', margin:'1rem 0'}}>There's nonthig there yet. <br />Add tasks for this day</h3>
    }
  }
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
                    {showTasks()}
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