import { motion } from "framer-motion";
import Backdrop from "./Backdrop.jsx";

const Modal = ({ children, handleClose}) => {

    const dropNav = {
        hidden: {
            y:'-100vh'
        },
        visible: {
            y: '0',
            transition: {
                duration: 0.1,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            }
        },
        exit: {
            y:'100vh'
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
            variants={dropNav}
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
