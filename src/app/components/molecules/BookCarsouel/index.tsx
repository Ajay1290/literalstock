/* eslint-disable import/first */
import * as React from "react";
import { Book } from 'app/struct';
import $ from 'jquery';
globalThis.jQuery = $
globalThis.$ = $;

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

interface Props {
  title: string;
  data: Array<any>;
}

export function BookCarsouel(props: Props) {
  return <div className="bg-white mb-3 p-2 mr-2 rounded border">
    <h2 className="h3 p-2 mb-0 pb-0">{props.title}</h2>
    <hr className="m-1 mb-3 p-0 border" />				
    <OwlCarousel className='owl-theme' items={5} loop={false}
      margin={10} nav lazyLoad>
      {props.data.map((book : Book) => (
        <div className="item ">
          <a title={`${ book.title }`} href="/book/1">
            <img className="img-thumbnail" style={{ height: 320, width: 220 }} alt={`${ book.title }`}
              src="https://raw.githubusercontent.com/Ajay1290/booksite/master/manager/static/src/IMAGES/book_look.jpg" />	
          </a>
        </div>
      ))}
    </OwlCarousel>
  </div>;
}
