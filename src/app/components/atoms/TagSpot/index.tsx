import * as React from "react";
import styled from "styled-components/macro";

export default function TagSpot({ random_tags }) {
  return(
    <section className="bg-white border mb-3 p-3 rounded">
      <h3 className="h4 ">Programming Tags</h3>        
      <p className='text-muted f-14'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, voluptas.
      </p>
      <ul className="list-group">
        {random_tags.map( (tag : string) => (
          <a 
            title={`Books by ${tag}`} 
            href="{{ url_for('tags.tag', tag_id=tag.id, t=tag.name) }}">
            <li className="list-group-item list-group-item-light btn category_side">
              {tag}
            </li>
          </a>
        ))}
      </ul>
    </section>
  )
}


const Div = styled.div``;
