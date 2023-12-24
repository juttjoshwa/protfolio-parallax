import React, { useEffect, useRef } from "react";
import "./Hero.css";
import HeroImg from "../Images/person.png";
import Projects from "./Projects";
import Footer from "./Footer";
import { motion as m, useScroll, useTransform } from "framer-motion";
import ImYashwa from "./ImYashwa";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  let translateYBack = useTransform(scrollY, [0, 500], ["0%", "50%"]);
  let translateYText = useTransform(scrollY, [0, 800], ["0%", "30%"]);

  return (
    <div className="HeroContainer">
      <div className="sulate">
        <div className="sulateTextContainer">
          <m.h1 style={{ x: translateYText }} className="sulateText">
            Hi
          </m.h1>
        </div>
        <m.div className="sulateImgContainer">
          <m.img
            style={{ y: translateYBack, overflow: "hidden" }}
            src={HeroImg}
            alt="hero"
            className="sulateImg"
          />
        </m.div>
      </div>
      <ImYashwa />
      <FrontEnd />
      <BackEnd />
      <Projects />
      <Footer />
    </div>
  );
};

export default Hero;
