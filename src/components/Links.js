import { Link } from 'react-router-dom'; 

const Linkk = ({linkClass, title, linkTo}) => {
    return (
        <Link className={linkClass+' Link'} to={linkTo}>{title}</Link>
    )
}

export default Linkk
