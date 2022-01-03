import SetUserInfoBlock from "./SetUserInfoBlock"

const ProfileSetUserInfo = ({setGender, setCompany, setShowEmail}) => {
    return (
        <div className='Profile__SetUserInfo widthAdjustment' >
            <h2>Change Your Profile Info Here:</h2>
            <SetUserInfoBlock setInfoInputType='text' setInfoLabel='Your Gender:' onSubmit={setGender} />
            <SetUserInfoBlock setInfoInputType='text' setInfoLabel='Company that you are currently in:' onSubmit={setCompany} />
            <SetUserInfoBlock setInfoInputType='checkbox' setInfoLabel='Show your email to other users?' onSubmit={setShowEmail} />
        </div>
    )
}

export default ProfileSetUserInfo
