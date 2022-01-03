
const ProfileUserInfo = ({account}) => {
    
    const getAvatar = () => {
        const url = account.avatar ? account.avatar : 'https://camo.githubusercontent.com/a7c4c268f6216f37d5c38ac9f53d4244254ebad4fea97413bd1e0dea54e51dc1/68747470733a2f2f7261772e6769746875622e636f6d2f68617368646f672f6e6f64652d6964656e7469636f6e2d6769746875622f6d61737465722f6578616d706c65732f696d616765732f6769746875622e706e67';
        return url;
    }

    return (
        <div className='Profile__userInfo widthAdjustment'>
            <div style={{background:`url(${getAvatar()}) center center no-repeat`, backgroundSize:'100% 100%'}} className="Profile__UserAvatar" />
            <div className="Profile__InfoNearAvatar">
                <h3>{account.email}</h3>
                <h3>{account.firstName} {account.lastName}, {account.age}</h3>
            </div>
        </div>
    )
}

export default ProfileUserInfo
