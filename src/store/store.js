import {createStore} from 'redux';
import reducer from './reducer';

const initialState = {
    userName: 'Username',
    currentOrigin: 'None'
     }

export const store = createStore(reducer, initialState);
