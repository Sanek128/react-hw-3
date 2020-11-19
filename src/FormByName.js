import React, { Component } from 'react';
import { ApiService } from './services/Api-service';
import User from './user/User';

class FormByName extends Component {
    
    api = new ApiService();
    state = {users: [], user: [], lostUser: ''};
    
    async componentDidMount() {
        this.setState({users: await this.api.getUsers()});
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.onFormSubmit}>
                    <span>Enter user Name  </span>
                    <input type="text" placeholder={'USER NAME'} onChange = {this.onInputUserId}/>
                </form>
                <div>
                    {
                        this.state.users.map(user => (<User user={user} key={user.id}/>))
                    }
                </div>
            </div>
        );
    }
    onFormSubmit = (event) => {
        event.preventDefault();
    };

    onInputUserId = (event) => {
        let usersArray = this.state.users;
        let userName = event.target.value;
        if (userName) {
            let userFilteredByName = usersArray.filter(user => user.name.toLowerCase().includes(userName.toLowerCase()));
            this.setState({users: userFilteredByName})
        }
    }
}

export default FormByName;