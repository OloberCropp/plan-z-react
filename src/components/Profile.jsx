import ProfileUserInfo from "./ProfileUserInfo"
import ProfileSetUserInfo from "./ProfileSetUserInfo"

const Profile = ({account}) => {
    return (
        <div className='Profile'>
            <div className='Profile__userInfo--wrapper'>
                <ProfileUserInfo account={account} />
            </div>
            <ProfileSetUserInfo />
        </div>
    )
}

export default Profile
