import { useState } from "react";
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';
import Message from "./Message";

const Chat = ({ myID, setMessageData, getChat, getContacts, selection}) => {

    const [messageText, setMessageText] = useState('');
    // const [messageAttach, setMessageAttach] = useState(null);
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
        if(getChat.length > 0 || selection !== 0){
            const messagesComponents = getChat.map(message => 
                <Message 
                    text={message.messageText} 
                    sentOnDate={getTime(message)}
                    key={message.id} 
                    messageBorderRadius={message.sentBy === myID ? '.8rem .8rem 0 .8rem' : '.8rem .8rem .8rem 0'}
                    alignMessage={message.sentBy === myID ? 'flex-end' : 'flex-start'}
                />
            );
            return <> 
                    <div className='chat__selectedContact'>
                        {getAvatar()}
                        <h3>{getName()}</h3>
                    </div>

                    <div className='chat__showMessages'> 
                        {messagesComponents.reverse()} 
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
                    </>;
        }else{
            return <h3>There's no messages yet. Send you firs message</h3>;
        }
    }

    const getSelectedContact = () => {
        return getContacts.filter(element => element.id === selection)[0];
    }

    const getAvatar = () => {       
        const selectedContact = getSelectedContact(); 

        if(selectedContact){
            return <img 
            className='nav-avatar' 
            alt='avatar' 
            src={selectedContact.avatar ? selectedContact.avatar : 
                'https://camo.githubusercontent.com/a7c4c268f6216f37d5c38ac9f53d4244254ebad4fea97413bd1e0dea54e51dc1/68747470733a2f2f7261772e6769746875622e636f6d2f68617368646f672f6e6f64652d6964656e7469636f6e2d6769746875622f6d61737465722f6578616d706c65732f696d616765732f6769746875622e706e67' } />
        } 
        else return '';   
    }
    
    const getName = () => {       
        const selectedContact = getSelectedContact(); 
        if(selectedContact){
            return selectedContact.firstName + ' ' + selectedContact.lastName;
        }else return '';   
    }

    return (

        <div className='chat'>
            
                {getMessages()}
            
        </div>
    )
}

export default Chat
