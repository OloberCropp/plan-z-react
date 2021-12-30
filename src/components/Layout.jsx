import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Layout = ({ showLogIn, showSignUp, account, signOut}) => {
    return (
        <div className='App'>
            <Header account={account} showLogIn={showLogIn} showSignUp={showSignUp} signOut={signOut} />
            <div 
                className="top-line" 
                style={{height:'1px', 
                width:'100%', 
                background:'transparent'}} 
            />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
