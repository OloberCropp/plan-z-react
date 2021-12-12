// import { useState } from "react";
import CalendarBig from "./CalendarBig";
import Tasks from "./Tasks";

const MainTasksSection = ({setDate, date, tasks, onDelete, onToggle, taskDate, onAdd, tileClass}) => {

    return (
        <section className='main-section'>
            <h2 className='main-section-title'>Ready to start you'r day?</h2>               
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
