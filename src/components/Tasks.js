import Task from './Task';
import Linkk from './Links';
import { Routes, Route, Outlet} from 'react-router-dom';

const Tasks = ({ tasks, onDelete, onToggle, tasksDay }) => {

  const showTasks = () => {
    const TasksOnDate = tasks.length > 0 ? tasks.filter(task => task.dateOn === tasksDay) : [];
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
            <Route path='/' element={
                <>
                  <Linkk linkClass='createTaskBtn' linkTo='addtask' title='Create new Task' />
                  <div className="tasksWrapper">{showTasks()}</div>
                </>
              }
            />
          </Routes>
          <Outlet />
        </div>
    )
}

export default Tasks