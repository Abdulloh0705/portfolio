import React from 'react';
import "./pages.scss";
import { useDispatch, useSelector } from 'react-redux';
import { setOffset, setskip } from '../../service/store'; 
import ReactPaginate from 'react-paginate';

const Pages = () => {
  const dispatch = useDispatch();
  const page = useSelector ((state)=> state.page.page);
  const handlePageChange = ({ selected }) => {
    
    dispatch(setOffset(selected)); 
    dispatch(setskip(selected * 12)); 
  };

  return (
    <>
      <ReactPaginate
        className="paginate"
        pageCount={page}  
        previousLabel={'<<'}
        nextLabel={'>>'}
        pageLinkClassName="paginate_link"
        activeLinkClassName="paginate_active"
        previousClassName="paginate_prev"
        nextClassName="paginate_next"
        onPageChange={handlePageChange} 
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
      />
    </>
  );
};

export default Pages;
