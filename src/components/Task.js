import {FaSkullCrossbones} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div 
            className={`task ${task.reminder ? 'remind' : ''}`} 
            onDoubleClick={()=>onToggle(task.id)}
        >
            <h3>
                {task.text} 
                <FaSkullCrossbones className='fa-skull' onClick={()=>onDelete(task.id)} />
            </h3>

            <p>{task.date}</p>

        </div>
    )
}

export default Task