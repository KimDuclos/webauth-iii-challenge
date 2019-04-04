import React from 'react';
// import axios from 'axios';

import axiosAuth from './axiosAuth';

class Users extends React.Component {
    state = {
        users: []
    };
    render() {
        return (
            <>
                <h2>User List</h2>
                <>
                {this.state.users.map(users => (
                    <h3 key={users.id}>
                        Username: {users.username} | Dept: {users.department}
                    </h3>
                ))}

                </>
            </>
        );
    }
    componentDidMount = () => {
        axiosAuth()
        .get('http://localhost:5000/api/users')
        .then(res => {
            this.setState({ users: res.data });
        })
        .catch(error => {
            console.log('Users Error', error);
        });
    };
}

export default Users;