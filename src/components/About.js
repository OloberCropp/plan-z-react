import Linkk from "./Links"

const About = () => {
    return (
        <div className='about-screen container'>
            <h3>PlanZ Alpha v0.0.1 </h3>
            <h4>Contact us:</h4>
            <h3 style={{color:'rgb(100, 256, 256)'}}>
                PointInGrave@gmail.com <br />
                Leonenko Oleg
                </h3>
            <Linkk linkTo='/' title='back' />
        </div>
    )
}

export default About
