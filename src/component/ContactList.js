import React from 'react';
import SingleContact from './SingleContact'

class ContactList extends React.Component {
  state = {
    contactList: [
      {
        id: 1,
        name: 'Toto'
      },
      {
        id: 2,
        name: 'Titi'
      },
    ]
  }

  constructor(props) {
    super(props)
    this.handleDeleteContact = this.handleDeleteContact.bind(this)
  }

  handleDeleteContact(id) {
    console.log('Le parent demande a ce qu\'on supprime le contact dont l\'id est : ', id)

    const newContactList = [...this.state.contactList]
    newContactList.splice(id, 1)
    console.log(newContactList)

    // this.setState({
    //   contactList: newContactList
    // })
  }

  render() {
    const contactComponents = this.state.contactList.map((contact, index) => {
      return <SingleContact
        name={contact.name}
        id={index}
        onDelete={this.handleDeleteContact}
      />
    })

    return (
      <div className="ContactList" >
        {contactComponents}
      </div>
    );
  }
}

export default ContactList;
