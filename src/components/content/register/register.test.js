import React from 'react';

import ReactDOM from 'react-dom'

import { MemoryRouter as Router } from 'react-router-dom';
import RegisterComponent from './register';


describe("all test for register component", ()=>{
  it('renders the register component without crashing!', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Router><RegisterComponent></RegisterComponent></Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  

})