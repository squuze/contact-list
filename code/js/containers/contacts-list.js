import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ContactList extends Component {
  showList(){
    return this.props.contacts.map((contact) => {
      return(
        <li key={contact.contact.email}>{contact.general.firstName + ' ' + contact.general.lastName}</li>
      );
    });
  }
  render(){
    return(
      <ul>
        {this.showList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return{
    contacts: state.contacts
  };
}

export default connect(mapStateToProps)(ContactList);
