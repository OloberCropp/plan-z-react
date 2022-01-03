import Modal from "./Modal";
import { useState } from "react";

const LogIn = ({ handleClose, logInData }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (logInDataFromInput) => {
        logInDataFromInput.preventDefault();

        logInData({email, password});
        handleClose();
    }

    const quickLogMe = () =>{
        const email = 'olivercropp1966@gmail.com'
        const password = '11111111'
        logInData({email, password})
        handleClose();
    }
    
    const quickLogSully = () =>{
        const email = 'JamesSullivan@gmail.com'
        const password = '11111111'
        logInData({email, password})
        handleClose();
    }
    
    const quickLogMike = () =>{
        const email = 'MikeVazowski@gmail.com'
        const password = '11111111'
        logInData({email, password})
        handleClose();
    }
    
    const quickLogDick = () =>{
        const email = 'PenisAnnihilator666@gmail.com'
        const password = '11111111'
        logInData({email, password})
        handleClose();
    }

    return (
        <Modal handleClose={handleClose}>
            <form className='add-form' onSubmit={onSubmit}> 
                <h2 style={{textAlign:'center'}}>Log In</h2>

                <div style={{display:'flex', width: '100%', justifyContent:'space-around', border:'1px solid whitesmoke', padding:'1rem'}}>
                    <button className='btn' style={{background: '#ff6161'}} onClick={quickLogMe}>QuickLog Me</button>
                    <button className='btn' style={{background: '#ff6161'}} onClick={quickLogSully}>QuickLog Sully</button>
                    <button className='btn' style={{background: '#ff6161'}} onClick={quickLogMike}>QuickLog Mike</button>
                    <button className='btn' style={{background: '#ff6161'}} onClick={quickLogDick}>QuickLog Dick</button>
                </div>

                <div className="form-control">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div className="form-control">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>

                <input type="submit" className='btn btn-block' value='Log In' />
            </form>
        </Modal>
    )
}

export default LogIn
