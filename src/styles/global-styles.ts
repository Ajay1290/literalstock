import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html{scroll-behavior: smooth;}
:root{
    --theme-primary: #343a40 !important;
    --theme-secondary: rgb(255,240,240) !important;

}
html, body, #literalstock-app{
    height: 100%;
}
body{background: rgb(255,240,240) !important;color: #333333 !important;}
a:active, a:focus {outline: 0;border: none;}
:focus {outline: 0 !important;border: none !important;}

.bookelf-logo{font-size: 28px;font-weight: 600;color: white;font-family: 'Source Sans Pro';}
.bookelf-logo:hover{text-decoration: none;color: gainsboro;}


/* Book Page*/
.img_cover_wrap{height: 165px;width: 110px;border-radius: 1em;}

/* New Book Pg */
#the-canvas{display: inline-block;height: 350px;width: 100%;border: 1px solid;border-radius: 5px;}
#the-canvas1{height: 350px;width: 230px;border:solid;}
#progress_bar {margin: 1em 0 0.5em 0; padding: 3px;border-radius: 1em;border: 1px solid ;font-size: 14px;width: 100%;display: inline-block;-moz-transition: opacity 1s linear;-o-transition: opacity 1s linear;-webkit-transition: opacity 1s linear;}
#progress_bar.loading {display: block;opacity: 1.0;}
#progress_bar > .percent {background-color: rgba(12,12,112,0.8);border-radius: 1em;color: white;text-align: center;height: auto;width: 0%;}
/* Book Page*/
.img_cover_wrap{height: 165px;width: 110px;border-radius: 1em;}

/* New Book Pg */
#the-canvas{display: inline-block;height: 350px;width: 100%;border: 1px solid;border-radius: 5px;}
#the-canvas1{height: 350px;width: 230px;border:solid;}
#progress_bar {margin: 1em 0 0.5em 0; padding: 3px;border-radius: 1em;border: 1px solid ;font-size: 14px;width: 100%;display: inline-block;-moz-transition: opacity 1s linear;-o-transition: opacity 1s linear;-webkit-transition: opacity 1s linear;}
#progress_bar.loading {display: block;opacity: 1.0;}
#progress_bar > .percent {background-color: rgba(12,12,112,0.8);border-radius: 1em;color: white;text-align: center;height: auto;width: 0%;}
                  
/* Owl Modifications */
.owl-prev, .owl-next{
    position: absolute;
    height: 80px;
    width: 35px;
    padding: 10px 5px !important;
    top: 40%;
    background-color: #fff !important;
    font-size: 35px !important;
    color: rgba(10,20,30,0.9);
    border: 1px rgba(10,20,30,0.9) !important;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12);
}
.owl-prev.disabled,.owl-next.disabled{background-color: rgba(0,0,0,0.1) !important;}
.owl-prev{left: 0;}.owl-next{right: 0;}
`;
