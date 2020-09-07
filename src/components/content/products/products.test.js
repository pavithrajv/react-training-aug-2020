import React from 'react';

import ReactDOM from 'react-dom'
import ProductComponent from './products'
import { MemoryRouter as Router } from 'react-router-dom';


describe("all test for products component", ()=>{
  it('renders the productcomponent without crashing!', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Router><ProductComponent></ProductComponent></Router>, div)
    ReactDOM.unmountComponentAtNode(div)
  }),
  it('renders the productcomponent table without crashing!', ()=>{
    const div = document.createElement('div')
    const table = document.createElement('table')
    ReactDOM.render(<Router><ProductComponent><div><table></table></div></ProductComponent></Router>, div)
    ReactDOM.unmountComponentAtNode(table)
  }),
  it('renders the productcomponent table head without crashing!', ()=>{
    const div = document.createElement('div')
    const table = document.createElement('table')
    const th = document.createElement('th')
    ReactDOM.render(<Router><ProductComponent><div><table><th></th></table></div></ProductComponent></Router>, div)
    ReactDOM.unmountComponentAtNode(th)
  })




})