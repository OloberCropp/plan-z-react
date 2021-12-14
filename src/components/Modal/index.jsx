import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

const Modal = ({handleClose, modalInner}) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
            onClick={(e)=>e.stopPropagation()}
            className='modal'
            >

            </motion.div>
        </Backdrop>
    )
}

export default Modal
