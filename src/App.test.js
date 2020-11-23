import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Canvas from '../src/Components/Canvas';
import {ReactComponent as SQUAREICON }from '../src/Images/square';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


