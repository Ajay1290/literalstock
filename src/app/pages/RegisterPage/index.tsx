import { FormWithError } from "app/components/molecules/FormWithError";
import * as React from "react";
import styled from "styled-components/macro";

interface Props {}

export function RegisterPage(props: Props) {
  const form = {username:{}, email:{}, password:{} };

  return (
    <LoginWrapper>
      <LoginInnerWrapper>
        <LoginWhiteWrapper>                
          <BrandLogoF>LiteralStock</BrandLogoF>
          <LoginInnerWhiteWrapper method="POST" action="/register">
            <div className="mx-3">
              <h5 className="f-28 text-left px-3 pb-0">Sign Up</h5>
              <hr className="sw-hr mt-1" />
              <div className="mx-4 mb-4">

                <div className="my-3">
                  <div className="w-100 text-left">
                    <label className="d-inline-block f-12">Username </label>
                  </div>
                  <FormWithError field={form.username} label="Username" />
                </div>

                <div className="my-3">
                  <div className="w-100 text-left">
                    <label className="d-inline-block f-12">Email </label>
                  </div>
                  <FormWithError field={form.email} label="Email" />
                </div>

                <div className="my-3">
                  <div className="w-100 text-left">
                    <label className="d-inline-block f-12">Password </label>
                  </div>
                  <FormWithError field={form.password} label="Password" />
                </div>

                <div className="my-3">
                  <div className="w-100 text-left">
                    <label className="d-inline-block f-12">Confirm Password </label>
                  </div>
                  <FormWithError field={form.password} label="Confirm Password" />
                </div>

                <button className="mt-4 sw-btn d-inline-block w-100 p-2">
                  <span className="sw-btn-ripple"></span>
                    Sign Up
                </button>                          
                <p className="f-12 mt-2 px-5">
                  By clicking Sign Up, you agree to our Terms and have read and acknowledge our Privacy Statement.
                </p>
                <hr className="sw-hr pb-3" />
                <h6 className="pb-2">Already have an Account ?</h6>
                <a href="/login">
                  <span className="sw-btn sw-btn-outline d-inline-block w-100">
                    <span className="sw-btn-ripple"></span>
                      Sign In
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
  margin: 2em 0 0.2em 0;
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