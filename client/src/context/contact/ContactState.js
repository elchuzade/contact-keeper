import React, { useReducer } from 'react'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: '5eb44c791ba7e5a68344c4ce',
        type: 'personal',
        name: 'Farida',
        email: 'farida@gmail.com',
        phone: '333-333-33-33',
        user: '5eb4496cb61f38a45c10483c',
        date: '1588874361400'
      },
      {
        id: '5eb44c791ba7e5a68344c4pk',
        type: 'professional',
        name: 'Orkhan',
        email: 'orkhan@gmail.com',
        phone: '222-222-22-22',
        user: '5eb4496cb61f38a45c1048nj',
        date: '1588874361400'
      },
      {
        id: '5eb44c791ba7e5a68344c4kg',
        type: 'professional',
        name: 'Turan',
        email: 'turan@gmail.com',
        phone: '111-111-11-11',
        user: '5eb4496cb61f38a45c1048ir',
        date: '1588874361400'
      }
    ],
    current: null
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Add Contact
  const addContact = contact => {
    contact.id = Date.now
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  // Update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact })
  }

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }

  // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
