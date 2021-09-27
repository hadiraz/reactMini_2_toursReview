import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';

function Index(){
  return(
      <App/>
  )
}

ReactDOM.render(
    <Index />
  , document.querySelector('#root')
);