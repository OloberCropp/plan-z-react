import Chat from "./Chat";
import ContactList from "./ContactList";

const ContactsSection = ({ myID, setMessageData, getChat, getContacts }) => {
    const onContactSelected = (id) => {
        console.log(`onContactSelected test: ${id}`);
    }
    return (
        <div className='contacts'>
            <h2>My Contacts</h2>
            <div className='contacts__wrapper container'>
                <ContactList onContactSelected={onContactSelected} getContacts={getContacts} />
                <Chat myID={myID} setMessageData={setMessageData} getChat={getChat} getContacts={getContacts} />
                <h3>calendar/files</h3>
            </div>
        </div>
    )
}

export default ContactsSection
