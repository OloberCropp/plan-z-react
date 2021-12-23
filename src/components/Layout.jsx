import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Layout = ({onChange, onCheck}) => {
    return (
        <div className='App'>
            <Header onCheck={onCheck} onChange={onChange} />
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
