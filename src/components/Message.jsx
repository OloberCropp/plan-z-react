
const Message = ({text, sentOnDate, alignMessage, messageBorderRadius}) => {
    return (
        <div className='chat__message' style={{alignSelf:alignMessage, borderRadius:messageBorderRadius}}>
            <h3>{text}</h3>
            <span>{sentOnDate}</span>
        </div>
    )
}

export default Message
