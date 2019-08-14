import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../global/logo';
import Counter from '../../global/counter'

import LogodeReact from './coco.jpg';
import Alan from './Alan.jpg';



const headerView = ({ saludo }) => (
  <header className="App-header">
    <Logo clasedelLogo="App-logo"  imagenDelLogo={LogodeReact}/>
    <Logo clasedelLogo="App-logo-Alan" imagenDelLogo={Alan}/>
    <Counter/>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      {saludo}
    </a>
  </header>
);

headerView.propTypes = {
  saludo: PropTypes.string.isRequired
};

export default headerView;
