import { useState } from "react";
import Linkk from "./Links";

const AddTask = ({onAdd}) => {
    
    const [ title, settitle ] = useState('');
    const [ details, setDetails ] = useState('');
    const [ reminder, setReminder ] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!title){
            alert('Please, enter you\'r task');
            return;
        }

        onAdd({title, details, reminder});

        settitle('');
        setDetails('');
        setReminder(false);
    }

    const height = () => {
        const breaksAmount = details.split('\n');
        const varHeight = (details.length)/34+3+(breaksAmount.length*1.5);

        return varHeight;
    }
    const textAreaHeight = {
        height: height() +'rem',
    }
    

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Add title</label>
                <input 
                className='task-title'
                type="text" 
                placeholder='project meeting' 
                value={title}
                onChange={(e)=>settitle(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Add task details</label>
                <textarea 
                className='task-details'
                style={textAreaHeight} 
                placeholder='Set up development process'
                value={details}
                onChange={(e)=>setDetails(e.target.value)} 
                />
            </div>
            <div className="form-control form-checkbox">
                <label>Mark as important</label>
                <input 
                className='task-importance'
                type="checkbox" 
                checked={reminder}
                value={reminder}
                onChange={(e)=>setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type="submit" value='Confirm Task' className='btn btn-block' />
            <Linkk linkTo='/' title='back to tasks' />

        </form>
    )
}

export default AddTask
