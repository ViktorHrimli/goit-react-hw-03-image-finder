import React, { Component } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { animateScroll as scroll } from 'react-scroll';
import { Box } from 'CommonStyle/Common.styled';
import { FormSerch } from './Form/Form';
import { Gallery } from './ImageGallery/ImageGallery';
import { ApiServise } from './api/Api';
import { Modal } from './Modal/Modal';
import { LoadMoreBtn } from './Button/Button';

export class App extends Component {
  state = {
    showModal: false,
    showSpiner: false,
    serchQuery: '',
    page: 1,
    data: [],
    largePage: '',
  };

  async componentDidUpdate(_, prevState) {
    const { serchQuery, page } = this.state;
    if (prevState.page !== page || prevState.serchQuery !== serchQuery) {
      this.setState({ showSpiner: !this.state.showSpiner });
      await ApiServise(serchQuery, this.apiDataService, page);
      this.setState({ showSpiner: !this.state.showSpiner });
    }
  }

  handeClick = e => {
    e.preventDefault();
    this.setState({
      largePage: e.currentTarget.name,
      showModal: !this.state.showModal,
    });
  };

  apiDataService = (hits, totalHits) => {
    this.setState(prevState => ({ data: prevState.data.concat(hits) }));

    if (totalHits === 0) {
      return toast.error(
        'Sorry, there are no images matching your search query. Please try again.',
        {
          theme: 'dark',
        }
      );
    }

    if (totalHits < 12 && hits.length === 0) {
      return toast.warn(
        'Were sorry, but youve reached the end of search results.',
        {
          theme: 'dark',
        }
      );
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleSubmit = inputQuery => {
    this.setState({
      serchQuery: inputQuery,
      page: 1,
      data: [],
    });
  };

  handleClickLoadMoreBtn = e => {
    this.setState({ page: this.state.page + 1 });
    scroll.scrollMore(1150, {
      smooth: true,
    });
  };

  render() {
    const { data, largePage, showModal, showSpiner } = this.state;

    return (
      <Box display="flex" flexDirection="column" alignItems="center" pb={5}>
        <FormSerch onSubmit={this.handleSubmit} />
        <Gallery onOpenModal={this.handeClick} data={data} />
        {data.length > 0 && (
          <LoadMoreBtn onClick={this.handleClickLoadMoreBtn}></LoadMoreBtn>
        )}
        {/*  */}
        {showModal && <Modal onClick={this.toggleModal}>{largePage}</Modal>}
        {showSpiner && <ClipLoader color="#00BFFF" size={100} />}
        <ToastContainer autoClose={3000} />
      </Box>
    );
  }
}
