// import CalendarDay from "./CalendarDay";
import Calendar from 'react-calendar';

const CalendarBig = ({ setDate, date, calendarRange }) => {
    return (
                <div className="calendar-table-inner">

                    <div className='calendar-container'>
                        <Calendar onChange={setDate} value={date} selectRange={calendarRange} />
                    </div>

                </div>
    )
}

export default CalendarBig
