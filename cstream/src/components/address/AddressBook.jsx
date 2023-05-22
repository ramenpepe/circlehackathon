import React, { useState } from 'react';
import './AddressBook.css';

const AddressBook = ({contacts, setContacts}) => {

  const [name, setName] = useState('');
  const [chain, setChain] = useState('');
  const [address, setAddress] = useState('');
  const [editingContact, setEditingContact] = useState(null);
  const supportedChains = ['Ethereum', 'Algorand', 'Solana', 'Stellar', 'Avalanche', 'Hedera'];

  const handleAddContact = () => {
    if (name && chain && address) {
      const newContact = { name, chain, address };
      setContacts([...contacts, newContact]);
      setName('');
      setChain('');
      setAddress('');
    } else {
      console.error('Please fill in all the required fields.');
    }
  };

  const handleEditContact = (contact) => {
    setEditingContact(contact);
    setName(contact.name);
    setChain(contact.chain);
    setAddress(contact.address);
  };

  const handleUpdateContact = () => {
    if (name && chain && address && editingContact) {
      const updatedContacts = contacts.map((contact) =>
        contact === editingContact ? { ...contact, name, chain, address } : contact
      );
      setContacts(updatedContacts);
      setEditingContact(null);
      setName('');
      setChain('');
      setAddress('');
    } else {
      console.error('Please fill in all the required fields.');
    }
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div className="address-book-container">
      <h2>Address Book</h2>

      <div className="contact-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={chain} onChange={(e) => setChain(e.target.value)}>
          <option value="">Select Chain</option>
          {supportedChains.map((chain, index) => (
            <option key={index} value={chain}>
              {chain}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {editingContact ? (
          <button onClick={handleUpdateContact}>Update Contact</button>
        ) : (
          <button onClick={handleAddContact}>Add Contact</button>
        )}
      </div>

      <div className="contact-list">
        {contacts.map((contact, index) => (
          <div className="contact" key={index} onClick={() => handleEditContact(contact)}>
            <div className="contact-info">
              <p>Name: {contact.name}</p>
              <p>Chain: {contact.chain}</p>
              <p>Address: {contact.address}</p>
            </div>
            <button onClick={() => handleDeleteContact(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressBook;
