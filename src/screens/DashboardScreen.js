// src/pages/Dashboard.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as userAction from '../actions/userAction';

import Order from '../components/OrderComponent';
import Navbar from '../components/NavComponent';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      pizza: '',
      size: '',
      toppings: '',
      location: '',
      quantity: '',
    };
  };

  handlePizzaChange = event => {
    this.setState({
      pizza: event.target.value,
    });
  };

  handleSizeChange = event => {
    this.setState({
      size: event.target.value,
    });
  };

  handleQuantityChange = event => {
    this.setState({
      quantity: event.target.value,
    });
  };

  handleToppingsChange = event => {
    this.setState({
      toppings: event.target.value,
    });
  };

  handleLocationChange = event => {
    this.setState({
      location: event.target.value,
    });
  };

  render () {
    return (
      <div className="hero is-other-background is-fullheight">
        <div className="hero-head">
          <Navbar/>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-two-quarters">
                    <h2 className="heading is-size-7">Check Out Your Choice</h2>
                    <hr/>
                    <form>
                      <div className="field">
                        <label className="label heading">Pizzaria</label>
                        <div className="control has-icons-left">
                          <select className="input" type="text" name="pizza" onChange={ this.handlePizzaChange }>
                           <option value="">- Please Select -</option>
                            <option value="Beverly Hills">Beverly Hills</option>
                            <option value="Pizza Presto De Nuit">Pizza Presto De Nuit</option>
                            <option value="O' Mil Pates">O' Mil Pates</option>
                            <option value="Mississipi">Mississipi</option>
                            <option value="Pizza Max">Pizza Max</option>
                            <option value="Food Corner">Food Corner</option>
                            <option value="Pizza Punch By Night">Pizza Punch By Night</option>
                            <option value="Napoli Pizza">Napoli Pizza</option>
                          </select>
                          <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label heading">Portion</label>
                        <div className="control has-icons-left">
                          <select className="input" type="text" name="size" onChange={ this.handleSizeChange }>
                            <option value="">- Please Select -</option>
                            <option value="Junior">Junior</option>
                            <option value="Senior">Senior</option>
                            <option value="Mega">Mega</option>
                          </select>
                          <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label heading">Toppings</label>
                        <div className="control has-icons-left">
                          <select className="input" type="text" name="toppings" onChange={ this.handleToppingsChange }>
                            <option value="">- Please Select -</option>
                            <option value="Onions">Onions</option>
                            <option value="Extra cheese">Extra cheese</option>
                            <option value="Pepperoni">Pepperoni</option>
                            <option value="Bacon">Bacon</option>
                            <option value="Mushrooms">Mushrooms</option>
                            <option value="Green peppers">Green peppers</option>
                          </select>
                          <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label heading">Number</label>
                        <div className="control has-icons-left">
                          <input className="input" type="text" placeholder="" name="quantity" onChange={ this.handleQuantityChange } />
                          <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label heading">Delivery Location</label>
                        <div className="control has-icons-left">
                          <input className="input" type="text" placeholder="" name="location" onChange={ this.handleLocationChange } />
                          <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                      </div>
                    </form>
              </div>
              <div className="column is-two-quarters">
                <Order pizza={this.state.pizza} size={this.state.size} location={this.state.location}
                toppings={this.state.toppings} quantity={this.state.quantity}></Order>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: user => dispatch(userAction.createUser(user)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
