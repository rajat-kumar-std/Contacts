import React, { useState, useEffect } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';  
import EditContact from './EditContact';    


function App() {
    const LOCALSTORAGE_KEY = 'contacts';
    const [contacts, setContacts] = useState([]);

    const retriveContacts = () =>{
        const contacts = JSON.parse(
            localStorage.getItem(LOCALSTORAGE_KEY, JSON)
        );
        if (contacts) setContacts(contacts);
    }

    const storeContacts = (contacts) =>{
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
    }

    useEffect(() => {
        retriveContacts();
    }, []);

    useEffect(() => {
        storeContacts(contacts);
    }, [contacts]);

    const addContactHandler = (contact) => {
        setContacts([...contacts, { id: nanoid(6), ...contact }]);
    };
    
    const updateContactHandler = (contact) =>{
        let updateIndex = contacts.findIndex((cnt)=>cnt.id === contact.id);
        contacts.splice(updateIndex,1,contact);
        setContacts([...contacts])
        // const newContacts = contacts.filter((cnt)=> (cnt.id !== contact.id));
        // newContacts.splice(updateIndex,0,contact);
        // setContacts(newContacts);
    }

    const removeContactHandler = (id) => {
        const newContact = contacts.filter((contact) => (contact.id !== id));
        setContacts(newContact);
    };

    return (
        <div className="App">
            <Header />
            <Router>
                <Switch>
                    <Route exact path='/contacts/:id' component={ContactDetails}/>
                    <Route
                        exact
                        path="/add"
                        render={(props)=><AddContact {...props} addContactHandler={addContactHandler}/>}
                        // component={() =><AddContact addContactHandler={addContactHandler}/>}  <== this is not the good practise decr performance
                    />
                    <Route
                        exact
                        path="/edit"
                        render={(props)=><EditContact {...props} updateContactHandler={updateContactHandler}/>}
                    />
                    <Route
                        exact
                        path="/"
                        render={(props)=><ContactList {...props} contacts={contacts} removeContactHandler={removeContactHandler}/>}
                    />
                    {/* removerContactHandler is passed in ContactList comp because there is button to delete the contact, so we have to the method to there as a props to be able to access removeContactHandler */}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
