import TagSpot from "app/components/atoms/TagSpot";
import { BookCard } from "app/components/molecules/BookCard";
import { tag } from "app/struct/values";
import * as React from "react";
import { useParams } from "react-router";
import styled from "styled-components/macro";

interface Props {}

export function TagPage(props: Props) {
  const random_tags = [];
  const books_by_tag = [];
  const params = useParams();

  return(
    <div className="row mt-3">
      <div className="col-3">
        {/* <!-- Tags Sidebar --> */}
        <div className="row mb-2">
          <div className="col-12">
            <TagSpot tags={random_tags} />
          </div>
        </div>


        {/* <!-- Tags Sidebar --> */}
        <div className="row my-2">
          <div className="col-12">
            <TagSpot tags={random_tags} />
          </div>
        </div>


        {/* <!-- Tags Sidebar --> */}
        <div className="row my-2">
          <div className="col-12">
            <TagSpot tags={random_tags} />
          </div>
        </div>
      </div>

      <div className="col-7">
        <h1 className="mb-md-4 f-28 sharp-txt">
          Books by Tag - <span className="badge px-3 badge-{{ tag.color }}">{ tag.name }</span>
        </h1>
        {books_by_tag.map(book => <BookCard book={book} />)}
      </div>

      <div className="col-2 pl-0">
        <div className="sw-content-section rounded p-2">
          <h1 className="f-20">Tag - { tag.name }</h1>
          <p className="m-2">Books - { tag } </p>
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
}

const Div = styled.div``;
