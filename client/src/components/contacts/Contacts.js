import React, { Fragment, useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
  const contactContext = useContext(ContactContext)

  const { contacts, filtered } = contactContext

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>
  }

  const showContacts = filtered !== null ? filtered : contacts

  return (
    <Fragment>
      {showContacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} />
      ))}
    </Fragment>
  )
}

export default Contacts
