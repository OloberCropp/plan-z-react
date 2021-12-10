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

                        switch(day){
                            case 1: case 8: case 15: case 22: case 29: 
                            weekDay='mon.'; 
                            return (<CalendarDay 
                                dateDay={day} 
                                key={day-1} 
                                calDayBG={workingDayBG}
                                weekDayDot={weekDay} 
                                calTodayTasks={calTodayTasks} 
                                />)

                            case 2: case 9: case 16: case 23: case 30:
                            weekDay='tue.';
                            return (<CalendarDay 
                                dateDay={day} 
                                key={day-1} 
                                calDayBG={workingDayBG}
                                weekDayDot={weekDay} 
                                calTodayTasks={calTodayTasks} 
                                />) 

                            case 3: case 10: case 17: case 24: case 31:
                            weekDay='wed.'; 
                            return (<CalendarDay 
                                dateDay={day} 
                                key={day-1} 
                                calDayBG={workingDayBG}
                                weekDayDot={weekDay} 
                                calTodayTasks={calTodayTasks} 
                                />)

                            case 4: case 11: case 18: case 25:
                            weekDay='thu.';
                            return (<CalendarDay 
                                dateDay={day} 
                                key={day-1} 
                                calDayBG={workingDayBG}
                                weekDayDot={weekDay} 
                                calTodayTasks={calTodayTasks} 
                                />)

                            case 5: case 12: case 19: case 26:
                            weekDay='fri.'; 
                            return (<CalendarDay 
                                dateDay={day} 
                                key={day-1} 
                                calDayBG={workingDayBG}
                                weekDayDot={weekDay} 
                                calTodayTasks={calTodayTasks} 
                                />)

                            case 6: case 13: case 20: case 27:
                            weekDay='sat.'; 
                            return (<CalendarDay 
                                dateDay={day} 
                                key={day-1} 
                                calDayBG={weekendDayBG}
                                weekDayDot={weekDay} 
                                calTodayTasks={calTodayTasks} 
                                />)
                                
                            case 7: case 14: case 21: case 28:
                            weekDay='sun.'; 
                            return (<CalendarDay 
                                dateDay={day} 
                                key={day-1} 
                                calDayBG={weekendDayBG}
                                weekDayDot={weekDay} 
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
