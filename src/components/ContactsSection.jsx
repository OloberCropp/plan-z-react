import Chat from "./Chat";
import ContactList from "./ContactList";

const ContactsSection = ({ myID, setMessageData, getChat, getContacts, onContactSelected, selection, myChats }) => {

    return (
        <div className='contacts'>
            <h2>My Contacts</h2>
            <div className='contacts__wrapper'>
                <ContactList onContactSelected={onContactSelected} getContacts={getContacts} myChats={myChats} selection={selection} />
                <Chat myID={myID} setMessageData={setMessageData} getChat={getChat} getContacts={getContacts} selection={selection} />
                <h3>calendar/files</h3>
            </div>
        </div>
    )
}

export default ContactsSection
