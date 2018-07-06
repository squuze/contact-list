import {combineReducers} from 'redux';
import ContactReducers from './contact';

const allReducers = combineReducers({
  contacts: ContactReducers
});

export default allReducers;
