import React from 'react';

import Header from './header'
import ReactDOM from 'react-dom'

import { MemoryRouter as Router } from 'react-router-dom';


describe("all test for app component", ()=>{
  it('renders the component without crashing!', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Router><Header></Header></Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})