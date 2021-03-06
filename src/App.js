import React from 'react';
import { Container } from 'react-bootstrap'
import Menu from './components/Menu';
import FormAddTweet from './components/FormAddTweet';

//redux
import { Provider } from 'react-redux'
import store from './store'
import Modal from './components/Modal';
import TweetList from './components/TweetList';

const App = () => {
  return (
    <Provider store={store}>
      <Menu />
      <Container className='mt-5'>
        <h1 className='text-center'>TWEETS</h1>
        <TweetList />
      </Container>
      <Modal>
        <FormAddTweet />
      </Modal>
    </Provider>
  );
}

export default App;
