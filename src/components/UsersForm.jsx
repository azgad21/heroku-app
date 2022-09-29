import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const UsersForm = ({ getUsers, userSelected, deselectUser}) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        if (userSelected) {
            reset(userSelected)
        }
    }, [userSelected])

    const submit = (data) => {
        if (userSelected) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
                .then(() => getUsers())
        } else {

            axios.post('https://users-crud1.herokuapp.com/users/', data)
                .then(() => getUsers())
                .catch(error => console.log(error.response))
        }
        clear()
    }

    const clear = () => {
        reset({
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            birthday:''
        })
        deselectUser()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1>Users Form</h1>
            <div className="input-container">
                <label htmlFor="email">E-mail</label>
                <input type="text" id='email'{...register('email')} />
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="text" id='password'{...register('password')} />
            </div>
            <div className="input-container">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id='first-name'{...register('first_name')} />
            </div>
            <div className="input-container">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id='last-name'{...register('last_name')} />
            </div>
            <div className="input-container">
                <label htmlFor="birthday">Birthday</label>
                <input type="date" id='birthday'{...register('birthday')} />
            </div>
            <button>
                Submit
            </button>
            <button onClick={clear} type='button'>
                Clear
            </button>
        </form>
    )
}

export default UsersForm
