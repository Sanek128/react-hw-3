export class ApiService {
    _users = 'https://jsonplaceholder.typicode.com/users';
    _posts = 'https://jsonplaceholder.typicode.com/posts';

    async getUsers(){
        return (await fetch(this._users)).json()
    }

    async getUserById(id) {
        return (await fetch(`${this._users}/${id}`)).json();
    }

}