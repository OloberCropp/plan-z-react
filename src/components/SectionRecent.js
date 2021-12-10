import Calendar from "./Calendar";

const SectionRecent = () => {
    return (
        <section className='Recent-s'>

                <h2 className='Recent-title'>Recently Visited</h2>
                    
                <div className="Recent-s-content">

                <div className="cards">
                    <Calendar curMonthYear='December 2021' />
                </div>
                
                </div>
                
        </section>
    )
}

export default SectionRecent
