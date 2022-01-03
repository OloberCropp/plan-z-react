const SetUserInfoBlock = ({ setInfoInputType, setInfoLabel, onSubmit }) => {
    return (
        <form className='SetUserInfo__form' onSubmit={onSubmit}>
            <label>{setInfoLabel}</label>
            <span className='SetUserInfoForm__Input-Submit'>
                <input className='SUIF__input' type={setInfoInputType} />
                <input type="submit" className='btn' style={{color:'navy'}} value='Confirm' />
            </span>
        </form>
    )
}

export default SetUserInfoBlock
