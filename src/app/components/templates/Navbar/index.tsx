import * as React from 'react';
import styled from 'styled-components/macro';
import { useQuery } from 'utils';

interface Props {}

interface User {
  name: string;
  is_authenticated: boolean;
}

export function Navbar(props: Props) {
  const current_user: User = { name: 'Ajay', is_authenticated: false };
  const query = useQuery();
  const [searchValue, setSearchValue] = React.useState(query.get('q') || "");

  return (
    <Div>
      <div className="sw-navbar p-2">
        <div className="sw-navbar-nav">
          <a href="/" className="sw-navbar-link">
            <div className="sw-navbar-logo bookelf-logo b-2">LiteralStock</div>
          </a>
        </div>

        <div className="sw-navbar-nav ml-auto">
          <SearchBarForm action="/search">
            <SearchbarInput
              type="search"
              name="q"
              value={searchValue}
              onChange={(e => {setSearchValue(e.target.value)})}
              placeholder="Search..."/>
            <SearchBtn>Search</SearchBtn>
          </SearchBarForm>
        </div>

        <div className="sw-navbar-nav ml-auto">
          {!current_user.is_authenticated ? (
            <>
              <a href="/login" className="sw-navbar-link">
                <div className="sw-navbar-item">Login</div>
              </a>
              <a href="/register" className="sw-navbar-link">
                <div className="sw-navbar-item">Sign Up</div>
              </a>
            </>
          ) : (
            <a href="/" title={`${current_user.name}'s Profile`} className="sw-navbar-link mx-2">
              User
            </a>
          )}
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div``;

const SearchBarForm = styled.form`
  position: relative;
`;

const SearchbarInput = styled.input`
  border: none;
  outline: none;
  width: 600px;
  display: inline-block;
  border-radius: 3px;
  padding: 8px 10px;
  font: 0.91em sans-serif;
`;

const SearchBtn = styled.button`
  position: absolute;
  right: 0;
  border: none;
  outline: none;
  bottom: 0;
  height: 100%;
  padding: 5px 20px;
  border-radius: 0 3px 3px 0;
`;
