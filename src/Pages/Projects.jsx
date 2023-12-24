import React, { useEffect, useState } from "react";
import "./Projects.css";
import Laptop from "../Images/laptop.png";
import demo from "../Images/Screenshot (7).png";
import Plx from "react-plx";
import toast from "react-hot-toast";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

const Projects = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [Projects, setProjects] = useState("");
  const [loading, setloading] = useState(false);
  const newTab = (u) => {
    window.open(u);
  };
  const GetallProjects = async () => {
    setloading(true);
    try {
      const { data } = await axios.get("/make/getallprojects");
      setProjects(data.allprojects);
      setloading(false);
    } catch (error) {
      console.log(error.message);
      toast("something went worng", {
        style: {
          backgroundColor: "black",
          color: "white",
        },
      });
      setloading(false);
    }
  };
  useEffect(() => {
    GetallProjects();
  }, []);

  // console.log(Projects[0].name);

  const parallaxData = [
    {
      start: 0,
      end: 2500,
      ease: "ease",
      properties: [
        {
          startValue: isMobile ? 0 : 0,
          endValue: isMobile ? 2 : 1,
          property: "scale",
        },
      ],
    },
  ];

  return (
    <div className="ProjectsContainer">
      <Plx parallaxData={parallaxData}>
        <h1 className="projectstitle">Here are some of my projects</h1>
      </Plx>

      {Projects &&
        Projects.map((res) => (
          <div key={res._id} className="all-container">
            <div className="projects">
              <div className="Laptop">
                <img src={Laptop} alt="Laptop" className="laptop" />
                <div className="LaptopScreen">
                  <img
                    src={res.images.url}
                    alt="screen"
                    className="laptopApp"
                  />
                </div>
              </div>
            </div>
            <div className="projectdetail">
              <h1 className="projectTitle">{res.name}</h1>
              <p className="projectDesc">{res.description}</p>
              <button
                onClick={() => {
                  newTab(res.Url);
                }}
                className="projectButton"
              >
                See more
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Projects;
