import React from 'react';
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom';
const ContactList = (props) => {
    const { contacts, removeContactHandler } = props;
    const renderContactList = contacts.map((contact) => {
        return <ContactCard contact={contact} key={contact.id} removeContactHandler={removeContactHandler}/>;
    });

    const Heading = ({children}) =>{
        return(
            (contacts.length>0)?<h3>Contacts {children}</h3>:<p>You have no contacts click '+' to add new contact ! {children}</p>
        )
    }


    return (
        <div>
            <Heading><Link to="/add"><button> + </button></Link></Heading>
            {renderContactList}
        </div>
    );
};

export default ContactList;
