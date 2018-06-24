import React, { Component } from 'react';
import Aux from '../Aux';
import { Modal } from 'react-bootstrap';

const withErrorAxios = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    }

    componentWillMount() {
      this.reqInerceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInerceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error });
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInerceptor);
      axios.interceptors.response.eject(this.resInerceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} onHide={this.errorConfirmedHandler}>
            <Modal.Header closeButton>
              <Modal.Title>Error!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{this.state.error ? this.state.error.message : null}</p>
            </Modal.Body>
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
}

export default withErrorAxios;