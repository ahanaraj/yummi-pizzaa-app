import * as actionTypes from '../actions/types';
import axios from 'axios';
import { history } from '../App';
import { toast } from 'react-toastify';


var express = require('express'),
    router = express.Router(),
    signup = require('../models/users/signup.js');

router.post('/signup', function(req, res) {
  signup.addUser(req, res, function(err, data) {
    if (err) {
      res.json({ 'error': true, 'message': 'Error adding user .. !' });
    } else {
      res.json({ 'success': true, 'message': 'User added succesfully' });
    }
  });
});

module.exports = router;

export const orderTransact = (order) => {
  return (dispatch) => {
    axios.post(`${apiURL}/orders`, order)
      .then(res => {
          dispatch({
            type: actionTypes.CREATE_ORDER,
            payload: res.data.data
          })
          toast('Order Created')
      })
      .catch(error => {
          //TODO: handle the error when implemented
      });
  }
}
