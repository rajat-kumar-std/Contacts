import React, { Component } from 'react';

class EditContact extends Component {
    constructor(props){
        super(props);
        const {id,name,email}=props.location.state.contact;
        this.state = {
            id,
            name,
            email,
        };
        console.log(this.state);
    }


    update = (e) =>{
        e.preventDefault();
        if(this.state.name ==='' || this.state.email === ''){
            alert('Please fill out all the required fields.');
            return;
        }
        this.props.updateContactHandler(this.state);
        this.setState({name:'',email:''});
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h3>Edit Contact</h3>
                <form onSubmit={this.update}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={(e) => {
                            this.setState({ name: e.target.value });
                        }}
                    />
                    <br />
                    <input
                        // type="text"
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e) => {
                            this.setState({ email: e.target.value });
                        }}
                    />
                    <br />
                    <button>Update</button>
                    &nbsp;<button onClick={(e)=>{e.preventDefault(); this.props.history.push('/')}}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default EditContact;
