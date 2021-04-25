import TagSpot from "app/components/atoms/TagSpot";
import * as React from "react";
import styled from "styled-components/macro";

interface Props {}

export function Sidebar(props: Props) {
  const random_tags: Array<string> = ["Python","Java",'GO',"Scala","HTML","CSS","JS","JAVAX","Jupyter","SQL","Database"];
  return <Div>
    <section className="pb-3 mr-3">
      <TagSpot random_tags={random_tags} />
      <TagSpot random_tags={random_tags} />
      <TagSpot random_tags={random_tags} />
      <TagSpot random_tags={random_tags} />
    </section>
  </Div>;
}

const Div = styled.div``;