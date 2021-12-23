import { motion } from "framer-motion";
import Backdrop from "./Backdrop.jsx";

const Modal = ({ children, handleClose}) => {

    const dropIn = {
        hidden: {
            y:'-100vh',
            opacity: '0'
        },
        visible: {
            y: '0',
            opacity: '1',
            transition: {
                duration: 0.1,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            }
        },
        exit: {
            y:'-100vh'
        }
    }


  const closeOnDrag = (event, info) => {
    console.log(info)
    if (info.offset.x > 100 || info.offset.x < -100) {
      handleClose();
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
            positionTransition
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={closeOnDrag}
            >
                {children}
            </motion.div>
        </Backdrop>
    )
}

export default Modal
