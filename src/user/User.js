import React, { Component } from 'react';

class User extends Component {
    render() {
        let {id, name, username, email} = this.props.user;
        return (
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{id}. {name} {username}</h4>
                        <p class="card-text">
                            {email}
                        </p>
                </div>
            </div>
        );
    }
}

export default User;
