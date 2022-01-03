const Contact = ({ contact, onContactSelected, selection, myChats }) => {
    const defaultAvatar = 'https://camo.githubusercontent.com/a7c4c268f6216f37d5c38ac9f53d4244254ebad4fea97413bd1e0dea54e51dc1/68747470733a2f2f7261772e6769746875622e636f6d2f68617368646f672f6e6f64652d6964656e7469636f6e2d6769746875622f6d61737465722f6578616d706c65732f696d616765732f6769746875622e706e67';

    const selected = () => {
        if(contact.id === selection){
            return 'contact--selected'
        }
    }

    const getLastMessage = () => {
        const thisUsersChat = myChats.filter(element => element.membersID.includes(contact.id))[0];
        const lastMessage = thisUsersChat.messages.length > 0 ? thisUsersChat.messages[thisUsersChat.messages.length-1].messageText : '';
        return <h3 className='contact__lastMessage'>{lastMessage}</h3>
    }

    return (
        <div className={`contact ${selected()}`} onClick={()=>onContactSelected(contact.id)}>
            <img className='nav-avatar contact__avatar' alt='avatar' src={contact.avatar ? contact.avatar : defaultAvatar} />
            <div className='contact__nameMessage--wrapper'>
                <h3 className='contact__name'>{contact.firstName} {contact.lastName}</h3>
                {getLastMessage()}
            </div>
        </div>
    )
}

export default Contact
