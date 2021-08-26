import React from 'react';
import user from '../images/user.jpg';
import {Link} from 'react-router-dom';

const ContactCard = (props) => {
    const {id,name,email} = props.contact;
    const {removeContactHandler} = props;

    const style = {
        blue:{color:'blue'},
        red:{color :'red'},
        btn:{
            border:'none',
            outline:'none',
            margin: '2px',
            borderRadius:'3px'
        },
        avatar : {
            height: '30px',
            width: '30px',
            borderRadius:'50%',
            border: '1px solid blue',
        },
        link : {
            textDecoration: 'none',
            color: 'black',
            padding: '5px',
        }
    }

    return (
        <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
            <span><img src={user} alt="user_image" style={{...style.avatar}}/></span> 
            <Link to={{pathname:`/contacts/${id}`, state:{contact:props.contact}}} style={{...style.link}}>
            {/* <Link to={`/contacts/${id}`}> */}
                <span><b> {name} </b></span>
                <span><i> {email} </i></span>
            </Link>
            <Link to={{pathname:`/edit`, state:{contact:props.contact}}}>
                <button style={{...style.btn,...style.blue}}>Edit</button>
            </Link>
            <button style={{...style.btn,...style.red}} onClick={()=>{removeContactHandler(id)}}>Delete</button>
        </div>
    );
};

export default ContactCard;
