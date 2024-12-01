import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewContact } from '../../redux/contacts/slices';
import dataContacts from '../../data/dataContacts.json';

import './AddContactStyle.css';

function Add() {
    const [newContact, setNewContact] = useState({
        name: '',
        surname: '',
        tel: '',
        address: '',
        isFavorite: false,
        id: uuidv4()
    })

    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault();
        if(newContact.name &&
           newContact.surname &&
           newContact.tel &&
           newContact.address
        ) {
            dispatch(addNewContact(newContact))
        }
        setNewContact({
            name: '',
            surname: '',
            tel: '',
            address: '',
            isFavorite: false,
            id: uuidv4()
        })
    }

    const btnDelete = useRef();

    const handleAddMyContacts = () => {
        dataContacts.forEach(item => {
            const myContact = () => {
                return {
                    ...item,
                    isFavorite: false,
                    id: uuidv4()
                }
            }
            dispatch(addNewContact(myContact()))
        });
        btnDelete.current.disabled = true;
    }

    return(
        <div className="add">
            <h1>New contact</h1>
            <form className="add-form" onSubmit={handleForm}>
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="text" value={newContact.name} onChange={(e) => {
                        setNewContact({...newContact, name: e.target.value})
                    }}/>
                </div>
                <div>
                    <label htmlFor="">Surname:</label>
                    <input type="text" value={newContact.surname} onChange={(e) => {
                        setNewContact({...newContact, surname: e.target.value})
                    }}/>
                </div>
                <div>
                    <label htmlFor="">Tel:</label>
                    <input type="text" value={newContact.tel} onChange={(e) => {
                        setNewContact({...newContact, tel: e.target.value})
                    }}/>
                </div>
                <div>
                    <label htmlFor="">Address:</label>
                    <input type="text" value={newContact.address} onChange={(e) => {
                        setNewContact({...newContact, address: e.target.value})
                    }}/>
                </div>
                <div className="buttons">
                    <button type="submit" className="add-button">
                        Add contact
                    </button>
                    <button 
                        type="button"               className="add-button-list" onClick={() => {
                            handleAddMyContacts()
                        }}
                        ref={btnDelete}    
                    >
                        Add my list
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Add;