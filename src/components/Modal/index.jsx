import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

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
                duration: 2,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            }
        },
        exit: {
            y:'100vh',
            transition: {
                duration: 0.1,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            }
            // opacity: '0'
        }
    }


  const closeOnDrag = (event, info) => {
    console.log(info)
    // if (info.velocity.x > 0) {
    //   handleClose();
    // }
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
