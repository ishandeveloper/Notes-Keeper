import React from "react";

const year=new Date().getFullYear();

function Footer() {
  return (
    <div>
      <footer class="blue lighten-4 page-footer">
          <div class="blue lighten-2 footer-copyright">
            <div class="container white-text text-lighten-2 ">
            <center>
            <a class="white-text text-lighten-2 middle" href="https://ishandeveloper.com">Made with ♥ by <b>ishandeveloper</b></a>
            </center>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default Footer;
