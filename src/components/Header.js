import Linkk from './Links'

const Header = () => {
    return (
        <header>
            <nav className='container'>
                <h1 className='Logo'>PlanZ</h1>
                <div className="nav-links">
                    <Linkk linkTo='#' text='today' />
                    <Linkk linkTo='#' text='tools' />
                    <Linkk linkTo='#' text='files' />
                    <Linkk linkTo='#' text='my friend'/>
                </div>
            </nav>
            {/* <Link to='/tasks-manipulations'>Create New Tasks</Link> */}
            
        </header>
    )
}

export default Header
