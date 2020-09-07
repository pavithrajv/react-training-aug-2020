import React from 'react';

import Navbar from './navbar'
import ReactDOM from 'react-dom'

import { MemoryRouter as Router } from 'react-router-dom';


describe("all test for app component", ()=>{
  it('renders the component without crashing!', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Router><Navbar></Navbar></Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})