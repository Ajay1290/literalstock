import * as React from "react";
import { Book } from "app/struct";

interface Props {
  book: Book;
}

export function BookCard(props: Props) {
  return(
    <article className="sw-content-section bg-white media border p-2 my-3 rounded mx-1">
      <div className="im_co_wrap mr-md-3"> 
        <img className="img-thumbnail img_cover_wrap" alt={props.book.title} src={props.book.image.path} />
      </div>

      <div className="media-body">
        <div className="article-metadata">
          <a className="mr-2" href="/">{ props.book.user.username }</a>
          <small className="text-muted"> { props.book.upload_date.toLocaleDateString() }</small>
          <span className="ml-2">
            {props.book.tags.map( tag => (
              <a className={`mx-1 px-2 sharp-txt b-1 f-12 badge badge-${tag.color}`} href="/"> 
                {tag.name } 
              </a>
            ))}
          </span>
        </div>
        <hr className="my-1 mx-1" />
        <a className="f-18 b-3 article-title" href="/"> { props.book.title } </a>
        <div className="f-14">
          Downloads: { props.book.downloads } | 
          File: PDF, { props.book.size } MB | 
          Pages: { props.book.pages } | 
          Authors: {props.book.authors.map( (author, index) => (
            <>
              <a href="/">{author.name}</a>
              {props.book.authors.length - 1 > index ? (", ") : false}
            </>
          ))}
        </div>                                        
        <p className="article-content mt-1 f-14"> { props.book.description } </p>
      </div>
    </article>
  );
}
