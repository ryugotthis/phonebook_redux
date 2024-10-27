import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: 'SEARCH_BY_NAME', payload: { keyword } });
  };

  return (
    <form className="contact-list" onSubmit={searchByName}>
      <input
        type="text"
        placeholder="name"
        onChange={(event) => setKeyword(event.target.value)}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
