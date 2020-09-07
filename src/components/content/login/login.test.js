import React from 'react';

import ReactDOM from 'react-dom'

import { MemoryRouter as Router } from 'react-router-dom';
import LoginComponent from './login';
import { render } from '@testing-library/react';


describe("all test for login component", ()=>{
  it('renders the login component without crashing!', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Router><LoginComponent></LoginComponent></Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('checks for placeholders',()=>{
    const{getByPlaceholderText}=render(
      <Router><LoginComponent></LoginComponent></Router>
    )
      getByPlaceholderText("Enter username")
      getByPlaceholderText("enter password")
    
  })

})