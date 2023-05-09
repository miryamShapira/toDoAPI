import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

axios.interceptors.response.use(
    (res) => {
       // Add configurations here
       if (res.status === 200) {
          console.log('Posted Successfully');
       }
       return res;
    },
    (err) => {
        console.log('Posted Unsuccessfully:',err);
       return Promise.reject(err);
    }
 );
ReactDOM.render(<App />, document.getElementById('root'));