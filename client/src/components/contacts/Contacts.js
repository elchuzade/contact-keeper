import React, { Fragment, useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'
import Spinner from '../layout/Spinner'

const Contacts = () => {
  const contactContext = useContext(ContactContext)

  const { contacts, filtered, getContacts, loading } = contactContext

  useEffect(() => {
    getContacts()
    // eslint-disable-next-line
  }, [])

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>
  }

  const showContacts = filtered !== null ? filtered : contacts

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <Fragment>
          {showContacts !== null &&
            showContacts.map((contact, index) => (
              <ContactItem key={index} contact={contact} />
            ))}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  )
}

export default Contacts
