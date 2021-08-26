import React from 'react';
import user from '../images/user.jpg';
import {Link} from 'react-router-dom';

const ContactDetails = (props) => {
    const { name, email } = props.location.state.contact;
    return (
        <div>
            <img src={user} alt="user" />
            <br />
            <h2>{name}</h2>
            <p>{email}</p>
            <div><Link to='/'><button>Back</button></Link></div>
        </div>
    );
};

export default ContactDetails;
