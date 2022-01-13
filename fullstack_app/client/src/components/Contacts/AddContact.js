import React, { useState } from 'react';
import axios from 'axios';

const AddContact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const { firstName, lastName, email } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        host: '104.236.174.88',
        port: 3128,
      },
    };

    const contact = JSON.stringify({ firstName, lastName, email });
    try {
      await axios.post('http://localhost:8080/api/contacts', contact);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='row'>
      <form className='col s12' onSubmit={(e) => onSubmit(e)}>
        <div className='row'>
          <div className='input-field col s6'>
            <input
              placeholder='First Name'
              name='firstName'
              type='text'
              value={firstName}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='input-field col s6'>
            <input
              placeholder='Last Name'
              name='lastName'
              type='text'
              value={lastName}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='input-field col s6'>
            <input
              placeholder='Email'
              name='email'
              type='text'
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <button
            className='waves-effect waves-light btn'
            type='submit'
            name='action'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
