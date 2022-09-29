import axios from 'axios'
import React from 'react'

const UsersList = ({users, selectUser, getUsers}) => {

    const deleteUser = (id) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getUsers())
    }
 
    return (
        <div>
            <h1>Users List</h1>
            <ul className='users-list'>
                {
                    users.map(user => (
                        <li key={user.id}>
                            {user.first_name} {user.last_name}
                            <div><b>E-mail: </b>{user.email}</div>
                            <div><b>Birthday: </b>{user.birthday}</div>
                            <button onClick={() => selectUser(user)}>
                                Edit
                            </button>
                            <button onClick={() => deleteUser(user.id)}>
                                Delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UsersList
