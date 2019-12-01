import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { AppContext } from './App';

export default function SearchNav() {
  const context = useContext(AppContext);
  const { searchDataState } = context;

  const renderSearchNav = () => {
    // conditionally render based on searchDataState
    if (searchDataState.currentPage !== undefined) {
      return (
        <ReactPaginate
          pageCount={Number(searchDataState.totalPages)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          previousLabel="<"
          // previousClassName="navPage"
          // previousLinkClassName={}
          nextLabel=">"
          // nextClassName="navPage"
          // nextLinkClassName={}
          breakLabel="..."
          // breakClassName={}
          // breakLinkClassName={}
          pageClassName="navPage"
          // pageLinkClassName={}
          activeClassName="currentPage"
          // activeLinkClassName={}
          // disabledClassName={}
          // onPageChange={}
          // disableInitialCallback={true}
          // hrefBuilder={}
        />
      );
    }
  };
  const Pagination = styled.div`
    li {
      display: inline-block;
    }
    .currentPage {
      text-decoration: underline;
    }
    .navPage {
      height: 20px;
      width: 20px;

      border: 1px solid black;
      padding: 5px;

      text-alignment: middle;
    }
  `;
  return (
    <Pagination>
      {renderSearchNav()}
    </Pagination>
  );
}
