import React, { Component, Fragment } from 'react';


class Body extends Component {
  render() { 
    const { content } = this.props;
    return (  
      <Fragment>
        {content}
      </Fragment>
    );
  }
}
 
export default Body;