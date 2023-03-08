import React from "react";

const Footer = () => {
  return (
    <div className="footer__container">
      <h1 className="footer__container-headline">
        Happy International Women's Day
      </h1>
      <div className="footer__container-description">
        <p className="footer__container-description__paragraph">
          @2023 Copyright issued by Abiekatkam
        </p>

        <a
          href="https://github.com/AbieKatkam"
          className="footer__container-description__link"
          target="_blank"
          rel="noreferrer"
        >
          Follow me on Github
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
