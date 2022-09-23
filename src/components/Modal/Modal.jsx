import { createPortal } from 'react-dom';
import { ModalStyle, Backdrop } from './Modal.styled';
import React, { Component } from 'react';
const modalRoot = document.querySelector('#modal--root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  closeMouseClick = e => {
    if (e.target === e.currentTarget) {
      return this.props.onClick();
    }
  };

  handleClose = e => {
    if (e.code === 'Escape') {
      return this.props.onClick();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <Backdrop onClick={this.closeMouseClick}>
        <ModalStyle>
          <img src={children} width="768" alt="" />
        </ModalStyle>
      </Backdrop>,
      modalRoot
    );
  }
}
