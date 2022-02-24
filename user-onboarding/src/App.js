import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import schema from './userSchema';
import * as yup from 'yup';
import axios from 'axios';

const initialValues = {
  name: '',
  email: '',
  password: '',
  tos: false
}

const initialErrors = {
  name: '',
  email: '',
  password: '',
  tos: ''
} 


function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialErrors)

  const postNewUser = () => {
    axios.post('https://reqres.in/api/users')
      .then(res => {
        setUsers([res.data, ...users]);
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues, [name]: value
    })
  }

  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        submit={postNewUser}
        errors={formErrors}
      />
      { 
        users.map(user => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
