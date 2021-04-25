import React from 'react';
import styled from 'styled-components/macro';
import { Navbar } from 'app/components/templates/Navbar';
import { Helmet } from 'react-helmet-async';
import { Footer } from 'app/components/templates/Footer';

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function BasePage(props: Props) {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Helmet>
      <Header> <Navbar /> </Header>
      <MainArea className="container-fluid"> {props.children} </MainArea>
      <PageFooter className="bg-dark text-light p-2 position-relative"> <Footer /></PageFooter>
    </>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 60px;
`;

const MainArea = styled.main`
  position: relative;
  top: 60px;
  max-width: 1350px;
  min-height: 100vh;
`;

const PageFooter = styled.footer`
  top: 90px;
  display: flex;
  justify-content: center;
`;
