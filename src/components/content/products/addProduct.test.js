import React from 'react';

import ReactDOM from 'react-dom'

import { MemoryRouter as Router } from 'react-router-dom';
import addProduct from './addProduct'


describe("all test for productDetails component", ()=>{
  it('renders the productDetailscomponent without crashing!', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Router><addProduct></addProduct></Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})