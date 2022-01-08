import React, { useState, useEffect } from 'react';
import SingleContact from './SingleContact';
import AddContact from './AddContact';

const axios = require('axios');

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(async () => {
    const res = await axios.get('localhost:8080/api/contacts');
    console.log(res);
    setContacts(res.json());
    // fetch('localhost:8080/api/contacts')
    //   .then((res) => res.json())
    //   .then((data) => setContacts(data));
  }, []);
  return (
    <div>
      <div className='row'>
        <AddContact />
      </div>
      <div className='row'>
        {contacts.map((item) => (
          <SingleContact key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
