// import { useState } from "react";
import CalendarBig from "./CalendarBig";
import Tasks from "./Tasks";

const MainTasksSection = ({account, setDate, date, tasks, onDelete, onToggle, taskDate, onAdd, tileClass}) => {
    
    const getDayTime = () => {
        const time = new Date().getHours();
        const dayTime = time < 6 ? 'Night' : time < 12 ? 'Morning': time < 18 ? 'Day' : time < 24 ? 'Evening' : '';
        return dayTime;
    }

    return (
        <section className='main-section'>
            <h2 className='main-section-title'>Good {getDayTime()}, {account.firstName} {account.lastName}!</h2>  

            <div className="calendar-Tasks-container">
                <div className="calendar">

                    <h1 className='calendar-header'>calendar</h1>

                    <div className="calendar-absolute-bg" />

                    <div className="calendar-items-container"> 
                        <CalendarBig 
                            setDate={setDate} 
                            date={date} 
                            tileClass={tileClass}
                        />
                        <Tasks 
                            tasksDay={taskDate} 
                            tasks={tasks} 
                            onDelete={onDelete} 
                            onToggle={onToggle} 
                            onAdd={onAdd}
                        />
                    </div>

                </div>            
            </div>
        </section>
    )
}

export default MainTasksSection
