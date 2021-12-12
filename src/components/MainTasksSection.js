// import { useState } from "react";
import CalendarBig from "./CalendarBig";
import Tasks from "./Tasks";

const MainTasksSection = ({setDate, date, tasks, onDelete, onToggle, calendarRange, onAdd}) => {

    return (
        <section className='main-section'>
            <h2 className='main-section-title'>Recently Visited</h2>               
            <div className="calendar-Tasks-container">
                <div className="calendar">

                    <h1 className='calendar-header'>calendar</h1>

                    <div className="calendar-absolute-bg" />

                    <div className="calendar-items-container"> 
                        <CalendarBig 
                            setDate={setDate} 
                            date={date} 
                            calendarRange={calendarRange}
                        />
                        <Tasks 
                            tasksDay={date.toDateString()} 
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
