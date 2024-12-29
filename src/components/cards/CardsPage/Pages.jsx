import React from 'react'
import "./pages.scss"
import "./page.js"
import ReactPaginate from 'react-paginate'
const Pages = () => {
  const handleClick = (pag) => {
    console.log(pag);
  }
  return (
    <>
      <ReactPaginate
        className='paginate'
        pageCount={8}
        previousLabel={'<<'}
        nextLabel={'>>'}
        pageLinkClassName='paginate_link'
        activeLinkClassName='paginate_active'
        previousClassName='paginate_prev'
        nextClassName='paginate_next'
        onPageChange={handleClick}
        marginPagesDisplayed={1}
      />
    </>

  )
}

export default Pages
