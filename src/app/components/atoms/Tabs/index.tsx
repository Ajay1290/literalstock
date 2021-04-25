import * as React from "react";
import { BookCard } from "app/components/molecules/BookCard";
import { Book } from "app/struct";

interface Tab{
  [key: string]: Array<Book>
}

export function Tabs(props: any) {
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {Object.keys(props.tabs).map((tab, i) => (
            <a href={`#${tab}`} className={`nav-link ${i === 0?'active':false}`} 
              id={`${tab}`} data-bs-toggle="tab" data-bs-target={`#nav-${tab}`}>
              {tab}
            </a>
          ))}
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {Object.keys(props.tabs).map((tab, i) => (
          <div className={`tab-pane fade ${i === 0?'show active':false}`} id={`nav-${tab}`} role="tabpanel">
            {props.tabs[tab].map(b => (<BookCard book={b} />))}
          </div>
        ))}
      </div>
    </>
  );
}
