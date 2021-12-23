// import CalendarDay from "./CalendarDay";
import Calendar from 'react-calendar';

const CalendarBig = ({ setDate, date, tileClass }) => {

    return (
                <div className="calendar-table-inner">

                    <div className='calendar-container'>
                        <Calendar onClickDay={setDate} isMultipleSelection={true} showNavigation={true} tileClassName={tileClass} value={date} />
                    </div>

                </div>
    )
}

export default CalendarBig
