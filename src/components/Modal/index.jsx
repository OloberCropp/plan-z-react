import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

const Modal = ({ children, handleClose}) => {

    const dropIn = {
        hidden: {
            opacity: '0',
            y:'-100vh'
        },
        visible: {
            y: '0',
            opacity: '1',
            transition: {
                duration: 2,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            }
        },
        exit: {
            opacity: '0',
            y:'+100vh'
        }
    }

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
            onClick={(e)=>e.stopPropagation()}
            className='modal'
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
            >
                {children}
            </motion.div>
        </Backdrop>
    )
}

export default Modal
