import React from 'react';

import ReactDOM from 'react-dom'
import ProductDetail from './productDetail'
import { MemoryRouter as Router } from 'react-router-dom';


describe("all test for productDetails component", ()=>{
  it('renders the productDetailscomponent without crashing!', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Router><ProductDetail></ProductDetail></Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})