import React from "react";
import { BookCard } from "app/components/molecules/BookCard";
import { Book } from "app/struct";
import { BasePage } from "../BasePage";
import styled from "styled-components";
import TagSpot from "app/components/atoms/TagSpot";
import { Tabs } from "app/components/atoms/Tabs";
import { FormWithError } from "app/components/molecules/FormWithError";

interface User {
  name: string;
  is_authenticated: boolean;
}


const spreader = ({ list }) => {
  return (
    list.map( (item, index) => (
      <>
        <a href="/">{item.name}</a>
        {list.length - 1 > index ? (", ") : false}
      </>
    ))
  )
}

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


export function BookPage() {
  const current_user: User = { name: 'Ajay', is_authenticated: false };
  const random_tags: Array<string> = ["Python","Java",'GO',"Scala","HTML","CSS","JS","JAVAX","Jupyter","SQL","Database"];
  const tabs = {"All": [book, book, book, book], "Related": [book, book], "User": [book, book]};
  return <BasePage title="Book Page" description="SDDD">
    <div className="sw-container-fluid">
      <div className="sw-row">
        <div className="sw-col-lg-9 sw-col-md-12 pr-0">
          <BookSection />
          <div className="sw-row">
            <div className="sw-col-12">
              <div className="sw-content-section bg-white p-3 h-100 border">
                <Tabs tabs={tabs} />
              </div>
            </div>
          </div>
        </div>
        <div className="sw-col-lg-3 sw-col-md-12 pl-3  my-3">
          <div className="row">
            <div className="col-12">
              <div className="sw-content-section m-0 h-100">
                {current_user.is_authenticated ? (
                  <AuthorsYouMayLike random_authors={[]} />
                ) : (
                  <SignUpForm />
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="sw-content-section m-0 h-100">
                <TagSpot random_tags={random_tags} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BasePage>;
}

const SignUpForm = () => {
  const form = {username:{}, email:{}, password:{}};
  return(
    <>
      <div className="sw-form bg-white border p-3 rounded mb-3">
        <form method="POST" action="">
          <h4 className="mb-1 d-inline-block f-20 sharp-txt">Create a Account</h4>
          <div className="my-1">
            <div className="w-100 text-left">
              <label className="d-inline-block f-12 mb-0">Username </label>
            </div>
            <FormWithError field={form.username} label="username" />
          </div>
          <div className="my-1">
            <div className="w-100 text-left">
              <label className="d-inline-block f-12 mb-0">Email </label>
            </div>
            <FormWithError field={form.email} label="email" />
          </div>
          <div className="my-1">
            <div className="w-100 text-left">
              <label className="d-inline-block f-12 mb-0">Password </label>
            </div>
            <FormWithError field={form.password} label="password" />
          </div>
          <div className="my-1">
            <div className="w-100 text-left">
              <label className="d-inline-block f-12 mb-0">Confirm Password</label>
            </div>
            <FormWithError field={form.password} label="password" />
          </div>
          <div className="my-1">
            <button type="submit" className="f-14 my-2 sw-btn d-inline-block w-100">
              <span className="sw-btn-ripple"></span>
                Sign Up
            </button>                                              
          </div>
        </form>
        <div className="f-10 text-center mb-2">
            By continuing, you agree to BookElf's <a href="/">Conditions of Use</a> and <a href="/">Privacy Notice</a>. 
        </div>
        <span className="f-12 my-5">
          Already Have An Account?
          <a className="ml-2" href="{{ url_for('users.login') }}">Sign In</a>
        </span>
      </div>
    </>
  );
}

const AuthorsYouMayLike = ({random_authors}) => {
  return(
    <div className="bg-white rounded p-3 bordered mb-3">
      <h4 className="mb-0 d-inline-block f-20 sharp-txt">Authors You May Like </h4>
      <p className="text-muted mt-1 mb-2 mx-1 f-12">
        Browse new books by new authors to explore the beautiful creation of author.
      </p>
      {random_authors.map((author) => (
        <>
          {!author.image_file ? (
            <img alt="" className="my-1 mr-1" src="/" 
              style={{height: 60, width: 60, borderRadius: '50%'}} />
          ): (
            <img alt="" className="my-1 mr-1" src="/" 
              style={{height: 60, width: 60, borderRadius: '50%'}} />
          )}
          <a className="mr-2" href="/">
            {author.name}
          </a>
          <br />
        </>
      ))}
    </div>

  )
}



const BookSection = () => {
  return (
    <div className="sw-row my-3">
      <div className="sw-col-12">
        <div className="sw-content-section bg-white border rounded p-3 h-100">
          <div className="sw-row">
            <div className="sw-col-lg-3 sw-col-12 text-center">
              <ThumbnailImage className="img-thumbnail" alt={book.title} src={book.image.path} />
            </div>

            <div className="sw-col-lg-9 sw-col-12">
              <h1 className="f-20 article-title">{ book.title }</h1>
              <hr className="mt-0 mb-2" />
              <div className="sw-row f-14 my-1">
                <div className="sw-col-lg-6 sw-col-md-6 sw-col-12 f-12">
                  <div className="sw-row">
                    <div className="sw-col-lg-3 sw-col-5"> <label>Uploader</label> </div>
                    <div className="sw-col-lg-5 sw-col-7">
                      <a className="mr-2" href="/">{ book.user.username }</a>
                    </div>
                  </div>
                  {book.authors ? (
                    <div className="sw-row">
                      <div className="sw-col-lg-3 sw-col-5 "> <label>Authors</label> </div>
                      <div className="sw-col-lg-9 sw-col-7 "> {spreader({ list:book.authors })} </div>
                    </div>
                  ) : false }
                  {book.categories ? (
                    <div className="sw-row">
                      <div className="sw-col-lg-3 sw-col-5"> <label>Categories</label> </div>
                      <div className="sw-col-lg-5 sw-col-7"> {spreader({ list:book.categories })}</div>
                    </div>
                  ) : false }
                  {book.isbn10 ? (
                    <div className="sw-row">
                      <div className="sw-col-lg-3 sw-col-5"> <label>Isbn10</label> </div>
                      <div className="sw-col-lg-5 sw-col-7"> <span>{ book.isbn10 }</span> </div>
                    </div>
                  ) : false}
                  {book.isbn13 ? (
                    <div className="sw-row">
                      <div className="sw-col-lg-3 sw-col-5"> <label>Isbn13</label> </div>
                      <div className="sw-col-lg-5 sw-col-7"> <span>{ book.isbn13 }</span> </div>
                    </div>
                  ) : false }
                  <div className="sw-row">
                    <div className="sw-col-lg-3 sw-col-5"> <label>Downloads</label> </div>
                    <div className="sw-col-lg-5 sw-col-7"> <span>{ book.downloads }</span> </div>
                  </div>
                </div>
                <div className="sw-col-lg-6 sw-col-md-6 sw-col-12 f-12"> 
                  <div className="sw-row">
                    <div className="sw-col-lg-3 sw-col-5"> <label>Date</label> </div>
                    <div className="sw-col-lg-5 sw-col-7">
                      <span className="text-muted">{ book.upload_date.toLocaleDateString() }</span>
                    </div>
                  </div>
                  {book.publishers ? (
                    <div className="sw-row">
                      <div className="sw-col-lg-3 sw-col-5"> <label>Publisher</label> </div>
                      <div className="sw-col-lg-5 sw-col-7"> {spreader({ list:book.publishers })} </div>
                    </div>
                  ) : false}
                  <div className="sw-row">
                    <div className="sw-col-lg-3 sw-col-5"> <label>Pages</label> </div>
                    <div className="sw-col-lg-5 sw-col-7"> <span>{ book.pages }</span> </div>
                  </div>
                  <div className="sw-row">
                    <div className="sw-col-lg-3 sw-col-5 "> <label>FileSize</label> </div>
                    <div className="sw-col-lg-5 sw-col-7"> <span>PDF, { book.size } MB</span> </div>
                  </div>
                  {book.language ? (
                    <div className="sw-row">
                      <div className="sw-col-lg-3 sw-col-5"> <label>Language</label> </div>
                      <div className="sw-col-lg-5 sw-col-7"> <span>{ book.language }</span> </div>
                    </div>
                  ) : false}
                </div>
              </div>
              <div className="sw-row f-14 ">
                <div className="sw-col-12">
                  <span className="mr-2"><label>Categories</label></span>
                  <span>
                    {book.tags.map( tag => (
                      <a className={`mx-1 px-2 b-1 f-12 badge badge-${tag.color}`} href="/"> 
                        { tag.name }
                      </a>
                    ))}
                  </span>
                </div>
              </div>

              <div className="w-100">
                <a className="btn btn-outline-info btn-sm mr-auto" id="download_btn" href="/"
                  target="blank" >
                  Download
                </a>
                <button type="button" className="btn btn-outline-info  btn-sm m-1" data-toggle="modal"
                  data-target="#PDFModal">Look Inside</button>
              </div>
              <hr className="mt-2 mb-2" />

              <div className="sw-row mx-auto w-100 ">
                <div className="mx-auto w-100 ">
                  <span><big>{ book.pg_views }</big> views </span>
                </div>
                <div className="sw-col-12 my-2 p-0">
                  <p className="article-content f-14 my-auto">{ book.description }</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

const ThumbnailImage = styled.img`
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: .25rem;
  height: 280px;
  width: 180px;
  padding: 5px;
`;