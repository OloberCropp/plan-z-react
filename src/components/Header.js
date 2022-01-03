import { Routes, Route, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Header = ({ showLogIn, showSignUp, account, signOut}) => {

    const headerRef = useRef(null);
    const [showNav, setShowNav] = useState(false);
    const [NestNav, setNestNav] = useState(false);

    useEffect(()=>{
        const width = headerRef.current.offsetWidth;
        console.log('width is changing');
        setShowNav(width < 500 ? false : true);
    },[])

    const avatarClick = () => {
        // (headerRef.current.offsetWidth < 500 && setShowNav(false));
        setNestNav(!NestNav)
        console.log('Avatar Clicked');
    }

    const navApears = {
        hidden:{y: '-100vh'},
        visible:{
            y: '0', transition: {duration: 0.1, type: 'spring', damping: 15, stiffness: 400,}
        },
        exit:{y: '-100vh'}
    }
    
    const nestedNavApears = {
        hidden:{y: '-100%', opacity:0},
        visible:{
            y: '-35%', opacity: 1, transition: {duration: 0.1, type: 'spring', damping: 15, stiffness: 400,}
        },
        exit:{y: '-120%', opacity: 0}
    }

    const getAvatar = () => {
        const src = account.avatar ? account.avatar :'https://camo.githubusercontent.com/a7c4c268f6216f37d5c38ac9f53d4244254ebad4fea97413bd1e0dea54e51dc1/68747470733a2f2f7261772e6769746875622e636f6d2f68617368646f672f6e6f64652d6964656e7469636f6e2d6769746875622f6d61737465722f6578616d706c65732f696d616765732f6769746875622e706e67';
        return src;
    }

    return (
        <header ref={headerRef}>
            <nav className='container'>
                <h1 className='logo'>PlanZ</h1>
                    <Routes>
                        <Route path='/*' 
                        element={
                            account.id !== 0 ? 
                            <>
                            <AnimatePresence initial={false} exitBeforeEnter={false}>

                                {showNav &&
                                    <motion.div
                                        className="nav-links"
                                        onClick={(e)=>e.stopPropagation()}
                                        variants={navApears}
                                        initial='hidden'
                                        animate='visible'
                                        exit='exit'
                                    >
                                        <NavLink to='/' >Home</NavLink>
                                        <NavLink to='files' >Files</NavLink>
                                        <NavLink to='contacts' >Contacts</NavLink>
                                        <div style={{background: `url(${getAvatar()})left top no-repeat`, backgroundSize:'100% 100%' }} className='nav-avatar' onClick={avatarClick}>

                                        <AnimatePresence initial={false} exitBeforeEnter={false}>
                                            {NestNav && 
                                                <motion.div
                                                    className='nested-nav'
                                                    onClick={(e)=>e.stopPropagation()}
                                                    variants={nestedNavApears}
                                                    initial='hidden'
                                                    animate='visible'
                                                    exit='exit'
                                                >
                                                    <NavLink to='profile'>Profile</NavLink>
                                                    <NavLink to='settings'>Settings</NavLink>
                                                    <button className='btn--clearDefault Link' onClick={signOut} style={{whiteSpace:'nowrap'}} >Sign Out</button>
                                                </motion.div>
                                            }
                                        </AnimatePresence>
                                        
                                        </div>
                                    </motion.div>
                                }
                            </AnimatePresence>
                                <div className='burger' onClick={()=>setShowNav(!showNav)}>
                                    <div className='burger-top' />
                                    <div className='burger-mid' />
                                    <div className='burger-bottom' />
                                </div>
                            </>
                                :
                            <div className="nav-log-sign">
                                    <button onClick={showLogIn} className='btn--clearDefault Link' >Log In</button>
                                    <button onClick={showSignUp} className='btn--clearDefault Link' >Sign Up</button>
                            </div>
                            }
                        />
                    </Routes>
            </nav>
        </header>
    )
}

export default Header
