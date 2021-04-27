import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {}

export function Footer(props: Props) {
  return (
    <FooterArea className="sw-row p-3">
      <div className="sw-col-3">
        <a href="/" className="bookelf-logo f-34 d-inline-block b-1">
          LiteralStock{' '}
          <span className="f-14" style={{ marginLeft: -5 }}>.in</span>
        </a>
        <p className="f-14 px-1">
          Browse your need of book on LiteralStock or Join LiteralStock and share your
          books with people to spread true knowledge and made accessible it for
          people of the world.
        </p>
      </div>
      <div className="sw-col-6 border-right">
        <div className="d-flex align-items-center f-14 border-bottom justify-content-center p-3">
          <a className="text-light mx-2" href="/" title="Explore books on LiteralStock.in">
            Explore
          </a>
          <a className="text-light mx-2" href="/" title="Upload Books on LiteralStock.in">
            Upload Book
          </a>
          <a className="text-light mx-2" href="/" title="Read Privacy Policy of LiteralStock.in">
            Privacy Policy
          </a>
          <a className="text-light mx-2" href="/">
            DMCA 2257
          </a>
        </div>
      </div>

      <div className="sw-col-3 text-light">
        <h5 className="f-20 border-bottom pb-2 px-2">&#9888; Cautions</h5>
        <p className="f-12 p-3">
          We do not promote any kind of hate or adult content from our platform
          nor our intention is to infringement of copyright law of any material
          from any nation. Our only mission is to spread true knowledge and made
          accessible it for people of the world.
        </p>
      </div>
    </FooterArea>
  );
}

const FooterArea = styled.div`
  max-width: 1350px;
`;
