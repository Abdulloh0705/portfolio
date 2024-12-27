import React from 'react'
import "./pages.scss"
import ReactPaginate from 'react-paginate'
const Pages = () => {
  return (
    <>
      <ReactPaginate
       breakLabel="..."
       nextLabel="next >"
       onPageChange={handlePageClick}
       pageRangeDisplayed={5}
       pageCount={pageCount}
       previousLabel="< previous"
       renderOnZeroPageCount={null}
      />
    </>
    
  )
}

export default Pages
