import { Routes, Route, NavLink} from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ({onCheck, onChange}) => {

    const avatarClick = () => {
        console.log('Avatar Clicked');
    }
    
    const burgerClick = () => {
        console.log('Burger Clicked');
    }

    return (
        <header>
            <nav className='container'>
                <h1 className='logo'>PlanZ</h1>
                    <Routes>
                        <Route path='/*' 
                        element={
                            onCheck ? 
                            <>
                                <div className="nav-links">
                                        <NavLink to='/' >Home</NavLink>
                                        <NavLink to='dir' >Directories</NavLink>
                                        <NavLink to='contacts' >My Contacts</NavLink>
                                        <div className='user-avatar nav-avatar' onClick={avatarClick} />
                                </div>
                                <div className='burger' onClick={burgerClick}>
                                    <div className='burger-top' />
                                    <div className='burger-mid' />
                                    <div className='burger-bottom' />
                                </div>
                            </>
                                :
                            <div className="nav-log-sign">
                                    <NavLink to='login' >Log In</NavLink>
                                    <NavLink to='singin' >Sign In</NavLink>
                            </div>
                            }
                        />
                    </Routes>
            </nav>
                <div className="absolute-check">
                    <input type="checkbox" className='switch-user-check' checked={onCheck} onChange={onChange} />
                </div>
        </header>
    )
}

export default Header
