import { Tags } from "app/struct";
import * as React from "react";
import styled from "styled-components/macro";

export default function TagSpot({ tags, title="Tags You May Like", description="Explore Books by tags to browse more realted books." }) {
  return(
    <section className="bg-white border mb-3 p-3 rounded">
      <h3 className="h4">{title}</h3>        
      <p className='text-muted f-14'>{description}</p>
      <ul className="list-group">
        {tags.map( (tag : Tags) => (
          <a title={`Books by ${tag.name}`} href={`/tag/${tag.name}`}>
            <li className="list-group-item list-group-item-light btn category_side">
              {tag.name}
            </li>
          </a>
        ))}
      </ul>
    </section>
  )
}
