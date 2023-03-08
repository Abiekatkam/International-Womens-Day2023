import React from "react";
import background from "../assets/background.jpg";
import MaryKom from "../assets/marykom.png";
import ChavviMehta from "../assets/chavvi_mehta.png";
import KiranBedi from "../assets/KiranBedi.png";
import SunitaNarian from "../assets/sunita_narain.png";

const Cards = () => {
  return (
    <div className="home__stories-container">
      <div className="home__stories-container__content">
        <div className="person">
          <div className="person__container">
            <img className="person__object" src={background} alt="" />
            <img className="person__img" src={MaryKom} alt="person_image" />
          </div>
        </div>

        <div className="home__stories-container__content-description">
          <h1 className="home__stories-container__content-description__headline">
            Mary Kom
          </h1>
          <p className="home__stories-container__content-description__paragraph">
            A renowned boxer and Olympic medalist, Mary Kom has been a role
            model for young girls in India and has been actively involved in
            promoting sports among women.
          </p>
        </div>
      </div>

      <div className="home__stories-container__content">
        <div className="person">
          <div className="person__container">
            <img className="person__object" src={background} alt="" />
            <img className="person__img1" src={KiranBedi} alt="person_image" />
          </div>
        </div>

        <div className="home__stories-container__content-description">
          <h1 className="home__stories-container__content-description__headline">
            Kiran Bedi
          </h1>
          <p className="home__stories-container__content-description__paragraph">
            India's first female IPS officer, she has been an advocate for
            women's rights and empowerment throughout her career.
          </p>
        </div>
      </div>

      <div className="home__stories-container__content">
        <div className="person">
          <div className="person__container">
            <img className="person__object" src={background} alt="" />
            <img
              className="person__img2"
              src={ChavviMehta}
              alt="person_image"
            />
          </div>
        </div>

        <div className="home__stories-container__content-description">
          <h1 className="home__stories-container__content-description__headline">
            Chhavi Rajawat
          </h1>
          <p className="home__stories-container__content-description__paragraph">
            The youngest sarpanch (village head) in India, Chhavi Rajawat has
            been working to promote women's education and empowerment in rural
            India.
          </p>
        </div>
      </div>

      <div className="home__stories-container__content">
        <div className="person">
          <div className="person__container">
            <img className="person__object" src={background} alt="" />
            <img
              className="person__img3"
              src={SunitaNarian}
              alt="person_image"
            />
          </div>
        </div>

        <div className="home__stories-container__content-description">
          <h1 className="home__stories-container__content-description__headline">
            Sunita Narain
          </h1>
          <p className="home__stories-container__content-description__paragraph">
            An environmentalist and director general of the Centre for Science
            and Environment, Sunita Narain has been a strong advocate for
            women's empowerment and has spoken out on issues related to gender
            equality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
