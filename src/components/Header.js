import Linkk from './Links'

const Header = ({Checked, onChange}) => {
    return (
        <header>

            <nav className='container'>

                <h1 className='logo'>PlanZ</h1>

                <div className="nav-links">

                    <Linkk linkTo='#' text='today' />
                    <Linkk linkTo='#' text='tools' />
                    <Linkk linkTo='#' text='files' />
                    <Linkk linkTo='#' text='my friend'/>
                    <input type="checkbox" checked={Checked} onChange={onChange} style={{alignSelf:'center', backgroundColor:'red'}} />
                
                </div>

            </nav>
            
        </header>
    )
}

export default Header
