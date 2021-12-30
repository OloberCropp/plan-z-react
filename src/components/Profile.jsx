import Profile__UserInfo from "./ProfileUserInfo"
import Profile__SetUserInfo from "./ProfileSetUserInfo"

const Profile = () => {
    return (
        <div className='Profile'>
            <div className='Profile__userInfo--wrapper'>
                <Profile__UserInfo />
            </div>
            <Profile__SetUserInfo />
        </div>
    )
}

export default Profile
