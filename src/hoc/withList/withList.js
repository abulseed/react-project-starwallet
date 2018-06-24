import React, { Component } from 'react';

const withListGroup = (WrappedComponent) => {
  return class extends Component {
    render() {
      return this.props.list.map((item, index) => {
        item.id = index;
        return <WrappedComponent {...item} {...this.props} key={index} />;
      })
    }
  }
};

export default withListGroup;