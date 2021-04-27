import { Pagination } from "app/components/atoms/Pagination";
import { BookCard } from "app/components/molecules/BookCard";
import { Book } from "app/struct";
import * as React from "react";
import { useState } from "react";
import styled from "styled-components/macro";
import { useQuery } from "utils";
import { BasePage } from "../BasePage";

interface Props {}

const book: Book = {
  id          : 1,
  title       : "Exercitation est ullamco nulla duis mollit excepteur irure do adipisicing.",
  description : "Ullamco minim reprehenderit quis dolore culpa do non tempor. Anim duis nisi consectetur anim cillum sit do magna labore. Nisi quis ea qui et id. Culpa voluptate mollit amet dolor qui id ullamco aute dolore ea est dolore deserunt. Qui adipisicing Lorem tempor anim dolor qui sunt aute.",
  upload_date : new Date(2020,2,2),
  size        : "20.03",
  pages       : 100,
  isbn13      : "012-34567890123",
  isbn10      : "01234567890",
  language    : "English",
  downloads   : 12,
  pg_views    : 10001231,
  post_status : "Live",
  user        : { id: 1, username: "Ajay" },
  image       : { id: 1, path:'https://raw.githubusercontent.com/Ajay1290/booksite/master/manager/static/src/IMAGES/book_look.jpg', book_id: 1 },
  file        : { id: 1, path:'', book_id: 1 },
  tags        : [{ id: 1, name:'Python', color:"info", categories:{ id:1, name:"Maths" } }],
  authors     : [{ id: 1, name:'Ajay Patil', categories:{ id:1, name:"Maths" }, content:"", pg_views:10, image:{id:1, path:'', author_id:1} },
    { id: 1, name:'Ajay Patil', categories:{ id:1, name:"Maths" }, content:"", pg_views:10, image:{id:1, path:'', author_id:1} }],
  comments    : [{ id: 1, book_id: 1, content:"", user_id:1 }],
  reports     : [{ id: 1, book_id: 1, problem:"", describe:"", user_id:1 }],
  categories  : [{ id: 1, name:'Computer Science' }],
  publishers  : [{ id: 1, name:"Made O'Reily" }]
};

export function SearchPage(props: Props) {
  const books = [book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book, book];
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  let query = useQuery();

  return(
    <BasePage title="Search" description="Search Page">
      <div className="row mt-3">
        <div className="col-9 mx-auto">
          <Pagination data={books} RenderComponent={BookCard} perPage={perPage} query={query.get('q')} />
          {/* {books.map(book => <BookCard book={book} />)} */}
        </div>
      </div>    
    </BasePage>
  );
}

const Div = styled.div``;
