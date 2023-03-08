import React from "react";
import Flip from "../components/Flip";
import Footer from "../components/Footer";

import {
  MotherData,
  SisterData,
  FriendData,
  DaughterData,
  WifeData,
} from "../Utils/Data.js";

const Gems = () => {
  return (
    <section className="about__container">
      <div className="about__container-content">
        <p className="about__container-content__title">
          The precious gems of Life
        </p>

        <div className="about__container-content__boxes">
          <Flip data={MotherData} />
          <Flip data={SisterData} />
          <Flip data={FriendData} />
          <Flip data={WifeData} />
          <Flip data={DaughterData} />
        </div>

        <p className="about__container-content__paragraph">
          Dear men, let us work together to empower the women in our lives. Let
          us listen to their voices, support their dreams, and celebrate their
          achievements. Let us stand up against gender inequality,
          discrimination, and violence. Let us be allies and advocates for
          women's rights and equality. Let us create a world where women can
          thrive, lead, and make a positive impact. Remember, gender equality is
          not just a women's issue, it's a human issue. Let us all do our part
          to empower women and build a better world for all.
        </p>
      </div>
      <Footer />
    </section>
  );
};

export default Gems;
