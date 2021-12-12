import {FaSkullCrossbones} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div 
            className={`task ${task.reminder ? 'task-remind' : ''}`} 
            onDoubleClick={()=>onToggle(task.id)}
        >
            <h3 className='show-task-title'>
                {task.title} 
            </h3>
            <h3 className='show-task-details'>
                {task.details} 
            </h3>
                <FaSkullCrossbones className='fa-skull' onClick={()=>onDelete(task.id)} />

            {/* <p className='task-date'>{task.dateOn}</p> */}

        </div>
    )
}

export default Task