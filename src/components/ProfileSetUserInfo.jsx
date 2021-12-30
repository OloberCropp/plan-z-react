import SetUserInfo__block from "./SetUserInfoblock"

const Profile__SetUserInfo = ({setGender, setCompany, setShowEmail}) => {
    return (
        <div className='Profile__SetUserInfo widthAdjustment' >
            <h2>Change Your Profile Info Here:</h2>
            <SetUserInfo__block setInfoInputType='text' setInfoLabel='Your Gender:' onSubmit={setGender} />
            <SetUserInfo__block setInfoInputType='text' setInfoLabel='Company that you are currently in:' onSubmit={setCompany} />
            <SetUserInfo__block setInfoInputType='checkbox' setInfoLabel='Show your email to other users?' onSubmit={setShowEmail} />
        </div>
    )
}

export default Profile__SetUserInfo
