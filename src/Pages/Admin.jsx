import React, { useEffect, useState } from "react";
import "./Admin.css";
import Img from "../Images/laptop.png";
import axios from "axios";
import toast from "react-hot-toast";
import screen from "../Images/IMG_20210424_051144_475.jpg";
import demi from "../Images/Screenshot (7).png";

const Admin = () => {
  const [projects, setprojects] = useState("");
  const [loading, setloading] = useState(false);
  const [loadingD, setloadingD] = useState(false);
  const [name, setname] = useState("");
  const [des, setdes] = useState("");
  const [url, seturl] = useState("");
  const [file, setfile] = useState("");

  const source = axios.CancelToken.source(); // Create a cancel token source

  const getallprojects = async () => {
    try {
      const res = await axios.get("/make/getallprojects", {
        cancelToken: source.token, // Pass the cancel token to the request
      });
      setprojects(res.data.allprojects);
      console.log(res.data.allprojects);
    } catch (err) {
      if (axios.isCancel(err)) {
        // Request was canceled, no need to handle
      } else {
        console.error(err);
        toast.error("Something went wrong");
      }
    }
  };
  useEffect(() => {
    getallprojects();
    // Return the cleanup function
    return () => {
      source.cancel("Cannot get projects for you"); // Cancel the request when the component is unmounted
    };
  }, []);

  const newTab = (r) => {
    window.open(r);
  };

  const HandleDelete = async (id, dew) => {
    setloadingD(true);
    try {
      const res = await axios.delete(`/make/deleteproject?id=${id}&dew=${dew}`);
      getallprojects();
      toast.success(res.data.message);
      setloadingD(false);
    } catch (error) {
      toast.error(error.message || "Failed to delete message");
      setloadingD(false);
    }
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("des", des);
      formData.append("url", url);
      formData.append("fi", file);
      const res = await axios.post("/make/makePro", formData);
      toast.success("Project Uploaded successfully");
      getallprojects();
      setloading(false);
      setdes("");
      setname("");
      seturl("");
      setfile("");
    } catch (error) {
      console.log(error.message);
      toast.error("something went wrong");
      setloading(false);
    }
  };

  return (
    <div className="admin-container-section">
      <div className="hading-section">
        <h1>Admin Page</h1>
      </div>
      <div className="form1">
        <form onSubmit={HandleSubmit} className="admin-form">
          <input
            type="text"
            onChange={(e) => {
              setname(e.target.value);
            }}
            value={name}
            required
            placeholder="Enter Project Name"
          />
          <textarea
            required
            value={des}
            onChange={(e) => {
              setdes(e.target.value);
            }}
            placeholder="Enter Description"
          ></textarea>
          <input
            type="text"
            value={url}
            onChange={(e) => {
              seturl(e.target.value);
            }}
            required
            placeholder="Enter Project Url"
          />
          <div class="mb-3">
            <input
              onChange={(e) => {
                setfile(e.target.files[0]);
              }}
              required
              className="form-control"
              type="file"
              id="formFile"
            />
          </div>
          <button type="submit">
            {loading ? "Loading" : "Create Project"}
          </button>
        </form>
      </div>
      <div className="projects-section">
        {projects &&
          projects.map((res) => (
            <div key={res._id} className="projects-container">
              <div className="img-project-con">
                <img src={Img} alt="img" className="img-project-A" />
                <img src={screen} alt="screen" className="screen-project" />
                <img
                  src={res.images.url}
                  alt="screen"
                  className="F-screen-project"
                />
              </div>
              <div className="text-project-con">
                <h3>{res.name}</h3>
                <p>{res.description}</p>
                <div className="btn-admin-con">
                  <button
                    onClick={() => {
                      HandleDelete(res._id, res.images.url);
                    }}
                  >
                    {loadingD ? "loading" : "Delete"}
                  </button>
                  <button
                    onClick={() => {
                      newTab(res.Url);
                    }}
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Admin;
