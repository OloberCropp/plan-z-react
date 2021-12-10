import CalendarDay from "./CalendarDay";

const Calendar = ({curMonthYear}) => {

    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
                            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const workingDayBG = 'rgba(28, 20, 51, 0.4)';
    const weekendDayBG = 'rgba(98, 15, 15, 0.4)';
    let weekDay = 'sun.';

    const calTodayTasks = () => {
        console.log('should show tasks');
        return  <div className='todayTasks'>
                    <h1>FINISH THIS SHIT</h1>
                </div>
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
                        if(day%7 && day !== 6 && day !== 13 && day !== 20 && day !== 27){
                            switch(day){
                                case (1 || 8 || 22 || 29): 
                                weekDay='mon.'; 
                                break;
                                case (2 || 9 || 23 || 30): 
                                weekDay='tue.'; 
                                break;
                                case (3 || 10 || 24 || 31): 
                                weekDay='wed.'; 
                                break;
                                case (4 || 11 || 25): 
                                weekDay='thu.';
                                break;
                                case (5 || 12 || 26): 
                                weekDay='fri.'; 
                                break;
                                case (6 || 13 || 27): 
                                weekDay='sat.'; 
                                break;
                                case (7 || 14 || 28): 
                                weekDay='sun.'; 
                                break;
                            }
                            return (<CalendarDay 
                                dateDay={day} 
                                key={day-1} 
                                calDayBG={workingDayBG}
                                weekDayDot={weekDay} 
                                calTodayTasks={calTodayTasks} 
                                />)
                        }else{
                            return (<CalendarDay 
                                dateDay={day} 
                                key={day-1} 
                                weekDayDot={weekDay}
                                calDayBG={weekendDayBG} 
                                calTodayTasks={calTodayTasks} 
                                />)
                        }
                    })}
                        <h2 className='calDayInner'>move to the next month . .</h2>
                    </div>
                </div>
                <div className="calendar-task-bar">
                    
                </div>
        </div>
    )
}

export default Calendar
