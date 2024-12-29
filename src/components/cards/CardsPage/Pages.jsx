import React from 'react'
import "./pages.scss"
import ReactPaginate from 'react-paginate'
const Pages = () => {
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
        marginPagesDisplayed={1}
      />
    </>

  )
}

export default Pages
