import React, { useState, useEffect } from 'react';
import { useNavigate, navigate } from 'react-router-dom';

const Search = (props) => {

  const handleSubmitSearch = evt => {
    evt.preventDefault()
    props.handleSubmitSearch()
  }
  
  return ( 
    <>
    <form className="" onSubmit={handleSubmitSearch}>
            <input className="" onChange={props.handleSetSearch} name="query" type="search" placeholder="Search" aria-label="Search" />
          </form> 
    </>
   );
}
 
export default Search;