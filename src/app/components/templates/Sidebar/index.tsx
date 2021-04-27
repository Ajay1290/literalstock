import TagSpot from "app/components/atoms/TagSpot";
import { Tags } from "app/struct";
import { tag } from "app/struct/values";
import * as React from "react";
import styled from "styled-components/macro";

interface Props {}

export function Sidebar(props: Props) {
  const random_tags: Array<Tags> = [tag,tag,tag,tag,tag,tag,tag,tag,tag,tag,tag,tag,tag];
  return <Div>
    <section className="pb-3 mr-3">
      <TagSpot tags={random_tags} />
      <TagSpot tags={random_tags} />
      <TagSpot tags={random_tags} />
      <TagSpot tags={random_tags} />
    </section>
  </Div>;
}

const Div = styled.div``;