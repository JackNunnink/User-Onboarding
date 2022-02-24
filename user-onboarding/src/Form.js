import React from 'react';

export default function UserForm(props) {

    const { change, submit, errors } = props;
    const { name, email, password, tos } = props.values;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <div>
            <h1>Sign Up Here</h1>
            <p>{errors.name}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.tos}</p>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input 
                        type='text'
                        name='name'
                        value={name}
                        onChange={onChange}
                    />
                </label>
                <label>Email:
                    <input 
                        type='email'
                        name='email'
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label>Password:
                    <input 
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service:
                    <input 
                        type='checkbox'
                        name='tos'
                        checked={tos}
                        onChange={onChange}
                    />
                </label>
                <input type='submit' value='Create a user' />
            </form>
        </div>
    )
}