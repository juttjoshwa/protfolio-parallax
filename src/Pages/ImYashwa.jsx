import React from "react";
import { motion as m } from "framer-motion";
import Plx from "react-plx";
import { useMediaQuery } from "react-responsive";

const ImYashwa = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const parallaxData = [
    {
      start: 0,
      end: 1000,
      ease: "ease",
      properties: [
        {
          startValue: isMobile ? 140 : 300,
          endValue: isMobile ? 0 : 2,
          property: "translateX",
        },
      ],
    },
  ];

  return (
    <div className="nameContainer">
      <Plx parallaxData={parallaxData}>
        <m.h2 className="name">I'm Yashwa</m.h2>
      </Plx>
    </div>
  );
};

export default ImYashwa;
