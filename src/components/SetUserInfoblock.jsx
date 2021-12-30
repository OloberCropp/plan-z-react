const SetUserInfo__block = ({ setInfoInputType, setInfoLabel, onSubmit }) => {
    return (
        <form className='SetUserInfo__form' onSubmit={onSubmit}>
            <label>{setInfoLabel}</label>
            <span className='SetUserInfoForm__Input-Submit'>
                <input className='SUIF__input' type={setInfoInputType} />
                <input type="submit" className='btn welcome-btn' value='Confirm' />
            </span>
        </form>
    )
}

export default SetUserInfo__block
