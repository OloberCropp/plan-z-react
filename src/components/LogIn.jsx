import Modal from "./Modal";
import { useState } from "react";

const LogIn = ({ handleClose, logInData }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (logInDataFromInput) => {
        logInDataFromInput.preventDefault();

        alert('Your data is ' + email, password)
        logInData({email, password});
    }

    return (
        <Modal handleClose={handleClose}>
            <form className='add-form' onSubmit={onSubmit}> 
                <h2>Log In</h2>

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
