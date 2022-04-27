import React from "react";
import GoogleButton from "react-google-button";
import { API } from "../backend";

const Home = () => {
  return (
    <div className="container d-flex vh-100 vw-100 justify-content-center align-items-center">
      <div>
        <h1 className="text-center" style={{ fontSize: "3rem" }}>
          WYZR Challenge
        </h1>
        <div className="d-flex mt-2 justify-content-center">
          <a href={`${API}/auth/google`}>
            <GoogleButton />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
