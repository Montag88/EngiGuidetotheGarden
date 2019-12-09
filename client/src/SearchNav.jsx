import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import Axios from 'axios';
import { AppContext } from './App';

export default function SearchNav() {
  const context = useContext(AppContext);
  const { searchDataState, setSearch, setSearchData } = context;

  const handlePageChange = (event) => {
    Axios.get('http://localhost:3000/api/search/', {
      params: {
        q: searchDataState.q,
        pageNumber: event.selected + 1,
      },
    })
      .then(({ data }) => {
        setSearch(data.plantResults);
        setSearchData(data.searchData);
      });
  };

  const renderSearchNav = () => {
    // conditionally render based on searchDataState
    if (searchDataState.currentPage !== undefined) {
      return (
        <ReactPaginate
          pageCount={Number(searchDataState.totalPages)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          initialPage={Number(searchDataState.currentPage) - 1}
          previousLabel="previous"
          // previousClassName="navPage"
          // previousLinkClassName={}
          nextLabel="next"
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
          onPageChange={handlePageChange}
          disableInitialCallback
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
