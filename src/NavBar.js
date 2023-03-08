import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        HEADPHONES
      </a>
      <a className="menu-item" href="/pizzas">
        SPEAKERS
      </a>
      <a className="menu-item" href="/desserts">
        EARPHONES
      </a>
    </Menu>
  );
};