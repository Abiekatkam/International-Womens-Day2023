import React from "react";
import Navbar from "../components/Navbar";
import womens from "../assets/womens_day1.png";

import womens_day from "../assets/womens1.png";
import womens_day1 from "../assets/womens.png";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <section className="home__hero">
        <Navbar />
        <div className="home__hero-content section__padding">
          <img
            src={womens}
            alt="womens_day"
            className="home__hero-content__image"
          />
          <div className="home__hero-content__description">
            <span className="home__hero-content__description-paragraph">
              Wishing all the amazing women out there a very happy and
              empowering
            </span>
            <h1 className="home__hero-content__description-headline">
              International Women's Day!
            </h1>
          </div>
        </div>
      </section>

      <section className="home__quotes">
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <p className="home__quotes-paragraph">
          Women are an integral part of our society, and their contributions are
          immeasurable. They play a critical role in shaping our families,
          communities, and the world at large. Women bring unique perspectives,
          experiences, and strengths that are essential for achieving a fair and
          just society. Women have made significant strides in various fields,
          including science, politics, business, and the arts, despite facing
          systemic barriers and discrimination. Celebrating and uplifting women
          is not only a moral imperative but also a key to building a better,
          more equitable future for all.
        </p>
      </section>

      <section className="home__stories">
        <div className="waves_black">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill1"
            ></path>
          </svg>
        </div>

        <h3 className="home__stories-headline">
          <span>W</span>omen's <span>E</span>mpowerment
        </h3>

        <div className="border__line_style" />

        <Cards />
      </section>

      <section className="home__essay">
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <img src={womens_day} className="home__essay-image" alt="womens" />

        <p className="home__essay-paragraph">
          Women are the embodiment of strength, resilience, and grace. They have
          overcome countless challenges throughout history and continue to do so
          today. Despite facing discrimination, inequality, and oppression,
          women rise up to the occasion and make their voices heard. They are
          daughters, sisters, mothers, and friends, who nurture and support
          those around them. Women bring love, compassion, and empathy to the
          world, and their contributions are immeasurable. Their unbreakable
          spirit and unwavering determination inspire us all to strive for a
          better tomorrow. We must continue to uplift and empower women, for
          they are the backbone of society and the true warriors of our time.
        </p>
      </section>

      <section className="home__shorts">
        <div className="home__shorts-description">
          <img
            src={womens_day1}
            alt="womens_day"
            className="home__shorts-description__image"
          />

          <p className="home__shorts-description__paragraph">
            To all the women who have paved the way for future generations, and
            to all those who continue to fight for equality and justice, I wish
            you a very Happy International Women's Day!
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
