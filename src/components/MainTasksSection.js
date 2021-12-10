import CalendarBig from "./CalendarBig";
import Tasks from "./Tasks";

const MainTasksSection = ({setDate, date, tasks, onDelete, onToggle}) => {
    return (
        <section className='main-section'>
            <h2 className='main-section-title'>Recently Visited</h2>               
            <div className="calendar-Tasks-container">
                <div className="calendar">

                    <h1 className='calendar-header'>calendar</h1>

                    <div className="calendar-absolute-bg" />

                    <div className="calendar-items-container"> 
                        <CalendarBig setDate={setDate} date={date} />
                        <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
                    </div>

                </div>            
            </div>
        </section>
    )
}

export default MainTasksSection
