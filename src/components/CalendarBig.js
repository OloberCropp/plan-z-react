// import CalendarDay from "./CalendarDay";
import Calendar from 'react-calendar';

const CalendarBig = ({ setDate, date }) => {
    
    return (
                <div className="calendar-table-inner">

                    <div className='calendar-container'>
                        <Calendar onChange={setDate} value={date} />
                    </div>

                    <p className='text-center'>
                        <span className='bold'>Selected Date:</span>{' '}
                        {date.toDateString()}
                    </p>

                </div>
    )
}

export default CalendarBig
