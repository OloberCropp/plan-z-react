
const CalendarDay = ({dateDay, weekDayDot, calDayBG, calTodayTasks, classs}) => {
    return (
        <div 
            className={'calendar-day ' + classs} 
            onClick={calTodayTasks} 
            style={{background:calDayBG,}}
        >
            <h2 style={{fontWeight:'900', fontSize:'1.5rem'}}>{dateDay}</h2>
            <h3 style={{fontWeight:'normal'}}>{weekDayDot}</h3>
        </div>
    )
}

export default CalendarDay
