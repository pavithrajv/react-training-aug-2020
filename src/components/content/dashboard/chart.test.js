import React from 'react';

import ReactDOM from 'react-dom'

import { MemoryRouter as Router } from 'react-router-dom';
import ChartComponent from './chart';


describe("all test for productDetails component", ()=>{
  it('renders the productDetailscomponent without crashing!', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Router><ChartComponent></ChartComponent></Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})