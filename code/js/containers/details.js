import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
  render(){
    if(!this.props.contact){
      return (<p> </p>);
    }
    return (
      <li>
      <div className = "detailsUser">
        <img className="contact-image" src={this.props.contact.general.avatar} width="128px" height="128px" />
        <div className = "titleUser">
          <div className="nameUser">{this.props.contact.general.firstName + " " +this.props.contact.general.lastName}</div>
          <div className ="companyUser">{this.props.contact.job.company}</div>
          <div>{this.props.contact.job.title}</div>
          <div>Email : {this.props.contact.contact.email}</div>
          <div>Phone : {this.props.contact.contact.phone}</div>
          <div>Street : {this.props.contact.address.street}</div>
          <div>City : {this.props.contact.address.city}</div>
          <div>zipCode : {this.props.contact.address.zipCode}</div>
          <div>Country : {this.props.contact.address.country}</div>
        </div>
        </div>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return{
    contact: state.active
  };
}

export default connect(mapStateToProps)(Details);
