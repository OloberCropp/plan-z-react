import { useState } from "react";
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';
import Message from "./Message";

const Chat = ({ myID, setMessageData, getChat, getContacts}) => {

    const [messageText, setMessageText] = useState('');
    const [messageAttach, setMessageAttach] = useState(null);
    const onDateTime = new Date().toLocaleString().split(',');
    const sentBy = myID;

    const onSubmit = (message) => {
        message.preventDefault();
        setMessageData({ messageText, onDateTime, sentBy })
        setMessageText('');
    }

    const getTime = (message) => {
        const hoursMins = message.onDateTime[1].split(':');
        hoursMins.pop();
        return hoursMins.join(':')
    }
    
    const getMessages = () => {
        if(getChat.length > 0){
            const messagesComponents = getChat.map(message => 
                <Message 
                    text={message.messageText} 
                    sentOnDate={getTime(message)}
                    key={message.id} 
                    messageBorderRadius={message.sentBy === myID ? '.8rem .8rem 0 .8rem' : '.8rem .8rem .8rem 0'}
                    alignMessage={message.sentBy === myID ? 'flex-end' : 'flex-start'}
                />
            );
            return messagesComponents;
        }else{
            return <h3>There's no messages yet. Send you firs message</h3>;
        }
    }


    return (

        <div className='chat'>
            <div className='chat__selectedContact'>
                <h3 style={{padding:'1rem 0 0 0 '}}>{ getContacts[0] ? getContacts[0].firstName + ' ' + getContacts[0].lastName : ''}</h3>
            </div>
            <div className='chat__showMessages'>
                {getMessages()}
            </div>
            <form className='chat__createMessage' onSubmit={onSubmit}>
                    
                    <FaPaperclip className='createMessage__clip' />

                    <textarea 
                        placeholder='Enter your message' 
                        className='createMessage__textArea' 
                        value={messageText}
                        onChange={(e)=>setMessageText(e.target.value)} 
                    >  
                    </textarea>
                    <label htmlFor='send-btn'><FaPaperPlane className='btn send-btn' /></label>
                    <input id='send-btn' className='hidden' type="submit" />
            </form>
        </div>
    )
}

export default Chat
