import React, { Component } from 'react';
import { Box } from 'CommonStyle/Common.styled';
import { FormSerch } from './Form/Form';
import { Gallery } from './ImageGallery/ImageGallery';
import { ApiServise } from './api/Api';
import { Modal } from './Modal/Modal';
// import { LoadMoreBtn } from './Button/Button';

export class App extends Component {
  state = {
    showModal: false,
    serchQuery: '',
    page: 1,
    data: [],
    largePage: '',
  };

  componentDidUpdate(prevProps, prevState) {}

  handeClick = e => {
    e.preventDefault();
    this.setState({
      largePage: e.currentTarget.name,
      showModal: !this.state.showModal,
    });
  };

  apiDataService = ({ data }) => {
    this.setState({ data: data || [] });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleSubmit = inputQuery => {
    this.setState({ serchQuery: inputQuery });
    ApiServise(inputQuery, this.apiDataService, this.state.page);
  };

  render() {
    const { data, largePage, showModal } = this.state;

    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <FormSerch onSubmit={this.handleSubmit} />
        <Gallery onOpenModal={this.handeClick} data={data}></Gallery>
        {showModal && <Modal onClick={this.toggleModal}>{largePage}</Modal>}
      </Box>
    );
  }
}
