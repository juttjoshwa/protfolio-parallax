import React from "react";
import Plx from "react-plx";
import { useMediaQuery } from "react-responsive";

const FrontEnd = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const parallaxData = [
    {
      start: 0,
      end: 1500,
      ease: "easeOutSine",
      properties: [
        {
          startValue: isMobile ? -300 : -1000,
          endValue: 200,
          property: "translateX",
        },
      ],
    },
  ];
  return (
    <div className="job1Container dark">
      <Plx parallaxData={parallaxData}>
        <h2 className="title1">Front-End developer</h2>
      </Plx>
    </div>
  );
};

export default FrontEnd;
