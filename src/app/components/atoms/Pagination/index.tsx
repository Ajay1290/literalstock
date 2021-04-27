import * as React from "react";
import styled from "styled-components/macro";

export function Pagination({ data, RenderComponent, perPage, style={}, query }) {
  const [pages] = React.useState(Math.ceil(data.length / perPage));
  const [currentPage, setCurrentPage] = React.useState(1);

  function goToNextPage() {if(currentPage < pages) setCurrentPage((page) => page + 1);}

  function goToPreviousPage() {if(currentPage > pages) setCurrentPage((page) => page - 1);}

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * perPage - perPage;
    const endIndex = startIndex + perPage;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pages) * pages;
    return new Array(pages).fill("").map((_, idx) => start + idx + 1);
  };

  return (
    <div style={style}>
      <span className="f-14 mx-2">
        Results for search - <u className="b-3">{query}</u>
        <span className="text-muted ml-2 f-12">
          (About { data.length } books on { currentPage } of { pages } Pages)
        </span> 
      </span>
      <div>
        {getPaginatedData().map((d, idx) => <RenderComponent key={idx} book={d} />)}
      </div>

      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage <= 1 ? 'disabled' : ''}`}>
            <Button onClick={goToPreviousPage} className="page-link">
              Previous
            </Button>
          </li>
          {getPaginationGroup().map((item, index) => (
            <li className={`page-item ${currentPage === item ? 'active' : null}`}>
              <Button key={index} onClick={changePage} className='page-link'>
                {item}
              </Button>
            </li>
          ))}
          <li className={`page-item ${currentPage >= pages ? 'disabled' : ''}`}>
            <Button onClick={goToNextPage} className="page-link">
              Next
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const Button = styled.button``;
