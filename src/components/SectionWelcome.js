import Button from './Button';
import calendarBig from './img/calendar-big.svg'

const SectionWelcome = ({onClick}) => {       

    return (
        <section className='welcome-s'>
            {/* <div className="container"> */}
                <h2 className='welcome-title'>Plan as you should with.. 
                    <span className='logo title-logo'>PlanZ</span>
                </h2>
                    
                <div className="welcome-s-content">

                    <div className="welcome-content-left" style={{color:'#4D4A74'}}>
                        
                        <h3>
                            Plan your time smartely, create your own<br />
                            workflows, manage important files and<br />
                            resourses, and solve your everyday<br />
                            tasks with our handie instruments!
                        </h3>

                        <h3>Bring scripts in your life 
                            <span style={{color:'#B157A8'}}> for free!!</span>
                        </h3>

                        <Button btnClass='welcome-btn' text='get started' onClick={onClick} />

                    </div>
                    
                    {/* calendar-big */}
                    <img 
                        className="welcome-content-right" 
                        src={calendarBig} 
                        alt="calendar" 
                    />
                
                </div>

            {/* </div> */}
        </section>
    )
}


export default SectionWelcome
