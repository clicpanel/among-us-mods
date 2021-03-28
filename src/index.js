import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import './assets/styles/main.css';

let root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

render(<App />, root);