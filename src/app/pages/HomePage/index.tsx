import * as React from 'react';
import { BasePage } from '../BasePage';
import { Sidebar } from 'app/components/templates/Sidebar';
import { BookCarsouel } from 'app/components/molecules/BookCarsouel';

export function HomePage() {
  const [newArrivals, setNewArriavals] = React.useState([
    { title:"Ajay"},
    { title:"Ajay"},
    { title:"Ajay"},
    { title:"Ajay"},
    { title:"Ajay"},
    { title:"Ajay"},
    { title:"Ajay"},
    { title:"Ajay"}
  ]);

  return (
    <BasePage title="Home" description="lorem">
      <section className="sw-row">
        <aside className="sw-col-3 my-3">
          <Sidebar />
        </aside>
        <section className="sw-col-9 px-0 pt-2 mt-2">
          <BookCarsouel title="New Arrivals" data={newArrivals} />
          <BookCarsouel title="Trending" data={newArrivals} />
          <BookCarsouel title="Most Downloaded" data={newArrivals} />
          <BookCarsouel title="Most Searched" data={newArrivals} />
          <BookCarsouel title="Editor's Choice" data={newArrivals} />
          <BookCarsouel title="New Inspiring" data={newArrivals} />
        </section>
      </section>
    </BasePage>
  );
}
