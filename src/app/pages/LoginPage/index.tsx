import { FormWithError } from "app/components/molecules/FormWithError";
import * as React from "react";
import styled from "styled-components/macro";

export function LoginPage() {
  const form = {username:{}, email:{}, password:{}, identity:{}, remember:{}};

  return (
    <LoginWrapper>
      <LoginInnerWrapper>
        <LoginWhiteWrapper>                
          <BrandLogoF>LiteralStock</BrandLogoF>
          <LoginInnerWhiteWrapper method="POST" action="/login">
            <div className="mx-3">
              <h5 className="f-28 text-left px-3 pb-0">Login</h5>
              <hr className="sw-hr mt-1" />
              <div className="mx-4 mb-4">
                <div className="my-3">
                  <label className="w-100 text-left f-12">Username or Email</label>
                  <FormWithError field={form.identity} label="Username or Email" />
                </div>
                <div className="my-3">
                  <div className="w-100 text-left">
                    <label className="d-inline-block f-12">Password </label>
                    <a href="/" className="float-right d-inline-block f-12 mt-1">
                      Forgot Password ?
                    </a>
                  </div>
                  <FormWithError field={form.password} label="Password" />
                </div>
                <button className="mt-4 sw-btn d-inline-block w-100 p-2">
                  <span className="sw-btn-ripple"></span>
                    Sign In
                </button>                          
                <p className="f-12 mt-2 px-5">
                  By clicking Sign in, you agree to our Terms and have read and acknowledge our IN Privacy Statement.
                </p>
                <hr className="sw-hr pb-3" />
                <h6 className="pb-2">New to LiteralStock?</h6>
                <a href="/register">
                  <span className="sw-btn sw-btn-outline d-inline-block w-100">
                    <span className="sw-btn-ripple"></span>
                      Sign Up
                  </span>  
                </a>                                             
              </div>                        
            </div>                    
          </LoginInnerWhiteWrapper>
          <div className="d-flex justify-content-between f-12 mt-1 w-100 px-2">
            <a href="/" className="">Home</a>
            <div className="float-right">
              <a href="/" className="mr-2">Privacy</a>
              <a href="/" className="ml-2">Terms</a>         
            </div>                               
          </div>                
        </LoginWhiteWrapper>            
      </LoginInnerWrapper>
    </LoginWrapper>
  );
}


const LoginWrapper = styled.div`
  display: flex !important;
  text-align: center !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100%;
`;

const LoginInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 550px;
`;

const LoginWhiteWrapper = styled.div`
  margin: 0px 0 35px 0;            
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
`;

const BrandLogoF = styled.h1`
  font-family: 'Merriweather', serif;
  text-decoration: none;
  font-weight: bolder;
  color: rgb(28,28,22);
  margin: 2em 0 0.5em 0;
`;

const LoginInnerWhiteWrapper = styled.form`
  background-color: #fff;            
  border: 1px solid #dadce0;
  border-radius: 4px;
  padding: 25px 15px; 
  width: 450px;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px #dadce0;
`;