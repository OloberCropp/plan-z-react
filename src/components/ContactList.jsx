import Contact from "./Contact";
import { useState } from "react";

const ContactList = ({ onContactSelected, getContacts}) => {

    const getContactsComponents = () => {

        if(getContacts.length > 0){
            return getContacts.map(contact => <Contact contact={contact} onContactSelected={onContactSelected} key={contact.id} />)
        }else{ 
            return <div><h3>Nothig there yet, add your first contact first</h3></div>
        }
    }
    return (
        <div className='contactsList' >
            <input className='contactList__search' type="text" placeholder='Search for contact' />
            {getContactsComponents()}
        </div>
    )
}

export default ContactList
