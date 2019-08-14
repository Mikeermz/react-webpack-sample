import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import Items from '../../../constants/menu';

export class NavbarView extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        {
          Items && Items.map( (element) => (
              <Menu.Item key={element.title}>
                <Link to={element.path}> {element.title} </Link>
              </Menu.Item>
            )
          )
        }
      </Menu>
    );
  }
}
 
export default NavbarView;
