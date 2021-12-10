
const CalendarDay = ({dateDay, weekDay, calDayBG, calTodayTasks}) => {
    return (
        <div 
            className='calendar-day' 
            onMouseEnter={calTodayTasks} 
            style={{background:calDayBG,}}
        >
            <h2 style={{fontWeight:'900', fontSize:'1.5rem'}}>{dateDay}</h2>
            <h3 style={{fontWeight:'normal'}}>mon.</h3>
        </div>
    )
}

export default CalendarDay
