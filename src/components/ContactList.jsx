import Contact from "./Contact";
import { useState } from "react";

const ContactList = ({ onContactSelected, getContacts, selection, myChats}) => {
    const findUser = (e) => {
        e.preventDefault();
        console.log(findByEmail);
    }
    const [findByEmail, setFindByEmail] = useState('');

    const getContactsComponents = () => {

        if(getContacts.length > 0){
            return getContacts.map(contact => <Contact contact={contact} onContactSelected={onContactSelected} selection={selection} myChats={myChats} key={contact.id} />)
        }else{ 
            return <div><h3>Nothig there yet, add your first contact first</h3></div>
        }
    }
    return (
        <div className='contactsList' >
            <h3 style={{letterSpacing:'5px', textTransform:'uppercase'}}>contact list</h3>
            <form className='quickForm' onSubmit={findUser}>
                <input className='contactList__search' type="text" value={findByEmail} onChange={(e)=>setFindByEmail(()=>e.target.value)} placeholder='Search users by Email' />
                <input type="submit" className='quickForm__btn' />
            </form>
            {getContactsComponents()}
        </div>
    )
}

export default ContactList
