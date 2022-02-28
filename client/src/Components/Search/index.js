import React, { useEffect, useState } from 'react';
import './index.css';
import SearchField from 'react-search-field';
import Header from '../Header';
import ApiService from '../../services';
import Body from '../Body';
import Load from '../Load';

const Search = () => {
  //Using react hooks here to persist the state and make the api call  
  const [state, setState] = useState({ keyword: '', data: {}, isLoading: false });
  useEffect(() => {
    state.keyword && ApiService.getSearchedNews(state.keyword).then(({ data }) => {
      setState({ data, isLoading: false, keyword: state.keyword });
    });
  }, [state.keyword]); //To update the data with new News when keyword gets changed/ Search happens

  const onClick = (keyword) => {
    if (keyword.trim() !== '') setState({ keyword, isLoading: true });
  };

  //Enable Load component when true
  if (state.isLoading) {
    return (
      <Load loading />
    );
  }
  //object Destructuring
  const { data: { articles = [] }, keyword = '' } = state;
  return (
    <div>
      <Header></Header>
      <div style={{ paddingTop: "40px" }}>
        <SearchField
          classNames="search"
          placeholder="Search..."
          onSearchClick={onClick}
          onEnter={onClick}
        />
      </div>
      {/* Reuseable Component */}
      {articles && <Body newsArticles={articles} keyword={keyword} />}
    </div>
  );
};

export default Search;