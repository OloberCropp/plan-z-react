// import CalendarDay from "./CalendarDay";
import Calendar from 'react-calendar';

const CalendarBig = ({ setDate, date, tileClass }) => {
    // Calendar.MonthView.Days.TileGroup.Flex.Day
    return (
                <div className="calendar-table-inner">

                    <div className='calendar-container'>
                        <Calendar onClickDay={setDate} isMultipleSelection={true} showNavigation={false} tileClassName={tileClass} value={date} />
                    </div>

                </div>
    )
}

export default CalendarBig
