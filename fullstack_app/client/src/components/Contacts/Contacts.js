import React, { useState, useEffect } from 'react';
import SingleContact from './SingleContact';
import AddContact from './AddContact';

const axios = require('axios');

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(async () => {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
    const res = await axios.get('localhost:8080/api/contacts', config);
    console.log(res);
    setContacts(res.json());
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
