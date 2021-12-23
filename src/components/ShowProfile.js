import Tasks from "./Tasks";
import Linkk from "./Links";

const ShowProfile = ({account, tasks, onDelete, onToggle, tasksDay, onAdd}) => {
    console.log(tasksDay);
    return (
        <div className='show-profile'>
            <h2>Good "daytime function" {account.firstName} {account.lastName}</h2>
            <h2>Profile Settings</h2>
            <Linkk linkTo='/' title='Back' />
            <div className='Profile-today'>
                <Tasks 
                onToggle={onToggle} 
                tasks={tasks} 
                onDelete={onDelete} 
                tasksDay={tasksDay} 
                onAdd={onAdd} />
            </div>
            <div className='Profile-tomorrow'>

            </div>
            <div className='recently-viewed-files'></div>
        </div>
    )
}

export default ShowProfile
