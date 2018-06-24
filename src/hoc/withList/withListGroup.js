import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

const withListGroup = (WrappedComponent) => {
  return class extends Component {
    render() {
      return this.props.list.map((item, index) => {
        item.id = index;
        return <ListGroupItem key={index}><WrappedComponent {...item} {...this.props} /></ListGroupItem>;
      })
    }
  }
};

export default withListGroup;