import React, { Component } from 'react';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
    };
    
    add = (e) =>{
        e.preventDefault();
        if(this.state.name ==='' || this.state.email === ''){
            alert('Please fill out all the required fields.');
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:'',email:''});
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h3>Add Contact</h3>
                <form onSubmit={this.add}>
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
                    <button type='submit'>Save</button>
                    &nbsp;<button onClick={(e)=>{e.preventDefault(); this.props.history.push('/')}}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default AddContact;
