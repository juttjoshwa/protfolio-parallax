import React from "react";
import Plx from "react-plx";
import { useMediaQuery } from "react-responsive";

const BackEnd = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const parallaxData = [
    {
      start: 0,
      end: 2100,
      properties: [
        {
          startValue: isMobile ? 280 : 300,
          endValue: -100,
          property: "translateX",
        },
      ],
    },
  ];
  return (
    <div className="job2Container purpul">
      <Plx parallaxData={parallaxData}>
        <h2 className="title1">& Back-End developer</h2>
      </Plx>
    </div>
  );
};

export default BackEnd;
