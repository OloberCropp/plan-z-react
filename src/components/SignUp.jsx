import Modal from "./Modal.jsx";
import { useState } from "react";
import Button from "./Button";

const SignUp = ({handleClose, SignUpData}) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [passCheck, setPassCheck] = useState('');
    const [privacyP, setPrivacyP] = useState(false);
    const [showNotValid, setShowNotValid] = useState(true)
    const tasks = []

    const onSubmit = (e) => {
        e.preventDefault();

        if(email.length < 1 || 
            firstName.length < 1 || 
            lastName.length < 1 || 
            age.length < 1 || 
            password.length < 8 || 
            passCheck !== password || 
            !privacyP){
                setShowNotValid(false);
            console.log(email, firstName, lastName, age, password, passCheck, privacyP );
            return
        }
        
        SignUpData({email, firstName, lastName, age, password, tasks});
        console.log('everything went fine');
        alert('everything went fine')
    }

    return (
        <Modal handleClose={handleClose} >
            <form className='add-form' onSubmit={onSubmit}>
                <h2>Create new Account </h2>
                <div className="form-control sign-log-form">
                    <label>Email:</label>
                    <input 
                    type="email"
                    value={email} 
                    placeholder='MikeVasowski@gmail.com'
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="form-control sign-log-form">
                    <label>First Name:</label>
                    <input 
                    type="text"
                    value={firstName} 
                    placeholder='Mike'
                    onChange={(e)=>setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-control sign-log-form">
                    <label>Last Name:</label>
                    <input 
                    type="text"
                    value={lastName} 
                    placeholder='Vasowski'
                    onChange={(e)=>setLastName(e.target.value)}
                    />
                </div>
                <div className="form-control sign-log-form">
                    <label>Age:</label>
                    <input 
                    type="text"
                    value={age} 
                    placeholder='22'
                    onChange={(e)=>setAge(e.target.value)}
                    />
                </div>
                <div className="form-control sign-log-form">
                    <label>Create Password:</label>
                    <input 
                    type="password"
                    value={password} 
                    placeholder='Minimum 8 characters'
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className="form-control sign-log-form">
                    <label>Confirm your Password:</label>
                    <input 
                    type="password"
                    value={passCheck} 
                    onChange={(e)=>setPassCheck(e.target.value)}
                    />
                </div>
                <div className="form-control form-checkbox">
                    <label>
                        I agree with our
                        <span 
                            style={{color: 'blue', 
                            textDecorationLine:'underline', 
                            fontStyle:'italic' 
                        }}>  privacy policy  </span> 
                        and want to create profile
                    </label>
                    <input 
                    type="checkbox"
                    value={privacyP} 
                    onChange={(e)=>setPrivacyP(e.currentTarget.checked)}
                    />
                </div>
                <h3 
                hidden={showNotValid} 
                style={{color:'red', 
                fontWeight:'lighter',
                fontSize:'1rem'
                }}
                >
                    Sorry, seems something isn't correct, check your info and try again</h3>
                <input className='btn btn-block' type="submit" value='Sign In' />
                <Button btnClass='sign-log-btn' onClick={handleClose} text='later' />
            </form>
        </Modal>
    )
}

export default SignUp
