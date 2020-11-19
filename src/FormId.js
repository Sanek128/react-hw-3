import React, { Component } from 'react';
import { ApiService } from './services/Api-service';
import User from './user/User';

class FormId extends Component {
    
    api = new ApiService();
    state = {users: [], user: [], lostUser: ''};
    
    async componentDidMount() {
        this.setState({users: await this.api.getUsers()});
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.onFormSubmit}>
                    <span>Enter user ID  </span>
                    <input type="number" placeholder={'USER ID'} onChange = {this.onInputUserId}/>
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
        let userId = +event.target.value;
        if ((userId >= 1) && (userId <= 10)) {
            let userFilteredById = usersArray.filter(user => {return user.id === userId});
            this.setState({users: userFilteredById})
        }
    }
}

export default FormId;