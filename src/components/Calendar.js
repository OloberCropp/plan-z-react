import CalendarDay from "./CalendarDay";

const Calendar = ({curMonthYear}) => {

    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
                            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5]
    const workingDayBG = 'rgba(28, 20, 51, 0.4)';
    const weekendDayBG = 'rgba(98, 15, 15, 0.4)';

    const calTodayTasks = () => {
        return <h1>FINISH THIS SHIT</h1>
    }
    
    return (
        
        <div className="calendar">
            <div className='calendar-header'>
                <h1 className='calendar-title'>calendar</h1>
            </div>
                <div className="calendar-absolute-bg" />
                <div className="calendar-table">
                    <h2 className='calendar-table-title'>{curMonthYear}</h2>
                    <div className="calendar-table-inner">
                        {/* <CalendarDay dateDay={1} /> */}
                    {month.map((day) => {
                        if(day && day%7){
                            return (<CalendarDay dateDay={day} calDayBG={workingDayBG} calTodayTasks={calTodayTasks} />)
                        }else{
                            return (<CalendarDay dateDay={day} calDayBG={weekendDayBG} calTodayTasks={calTodayTasks} />)
                        }
                    })}
                    </div>
                </div>
                <div className="calendar-task-bar">
                    
                </div>
        </div>
    )
}

export default Calendar
