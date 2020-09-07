import React from 'react';

import ReactDOM from 'react-dom'

import { MemoryRouter as Router } from 'react-router-dom';
import DashboardComponent from './dashboard';


describe("all test for productDetails component", ()=>{
  it('renders the productDetailscomponent without crashing!', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Router><DashboardComponent></DashboardComponent></Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})