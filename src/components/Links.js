import { Link } from 'react-router-dom'; 

const Linkk = ({LinkClass, text, linkTo}) => {
    return (
        <Link className={LinkClass+' '+' Link'} to={linkTo}>{text}</Link>
    )
}

export default Linkk
