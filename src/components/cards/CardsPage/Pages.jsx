import React from 'react';
import "./pages.scss";
import { useDispatch } from 'react-redux';
import { setOffset } from './page'; 
import ReactPaginate from 'react-paginate';

const Pages = () => {
  const dispatch = useDispatch();

  const handlePageChange = ({ selected }) => {
    dispatch(setOffset(selected)); 
  };

  return (
    <>
      <ReactPaginate
        className="paginate"
        pageCount={8} 
        previousLabel={'<<'}
        nextLabel={'>>'}
        pageLinkClassName="paginate_link"
        activeLinkClassName="paginate_active"
        previousClassName="paginate_prev"
        nextClassName="paginate_next"
        onPageChange={handlePageChange} 
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
      />
    </>
  );
};

export default Pages;
