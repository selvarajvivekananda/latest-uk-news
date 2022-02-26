import React, { useEffect, useState } from 'react';
import ApiService from '../../services';
import Body from '../Body';
import Header from '../Header';
import Load from '../Load';

//Display component - to Display the latest news
const LandingPage = () => {
  //Using react hooks to persist and make api call
  const [state, setState] = useState({ data: {}, isLoading: true });

  useEffect(() => {
    ApiService.getLatestNews().then(({ data }) => {
      setState({ data, isLoading: false });
      document.title = 'UK News App' // To update the page title
    });
  }, []);

  //Object destructing
  const { data: { articles = [] } } = state;
  //Loader
  if (state.isLoading) {
    return (
      <Load loading />
    );
  }

  return (
    <div>
      <Header></Header>
      <Body newsArticles={articles} />
    </div>
  );
};

export default LandingPage;