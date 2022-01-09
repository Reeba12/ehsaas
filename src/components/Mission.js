import React from "react";
import desert from "../images/desert-png.png";
import laptop from "../images/laptop.png";
import liver from "../images/liver.png";
import house from "../images/house.png";

const Mission = () => {
  return (
    <>
      <div className="mission mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-6 col-12 ">
              <h4 className="fw-bolder text-primary">
                MISSION AND UPCOMING PROJECTS
              </h4>
              <hr />
              <div className="row p-4 fw-600">
                <div className="colum col-lg-5 col-md-6 col-sm-6 col-12 m-2 ">
                  <img src={liver} height="40px" width="40px" />
                  <span className="px-3 text-primary fw-bold">HEPATITIS</span>
                </div>
                <div className="colum col-lg-5 col-md-6 col-sm-6 col-12 m-2">
                  <img src={house} height="40px" width="40px" />
                  <span className="px-3 text-primary fw-bold">
                    HOUSING SOCIETY
                  </span>
                </div>
                <div className="colum col-lg-5 col-md-6 col-sm-6 col-12 m-2">
                  <img src={laptop} height="40px" width="40px" />
                  <span className="px-3 text-primary fw-bold">IT LITERACY</span>
                </div>
                <div className="colum col-lg-5 col-md-6 col-sm-6 col-12 m-2">
                  <img src={desert} height="40px" width="40px" />
                  <span className="px-3 text-primary fw-bold">THARPARKAR</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 ">
              <h3 className="fw-bolder text-primary">Upcoming Event</h3>
              <hr />
              <marquee
                behavior="scrolling"
                direction="up"
                className=" pl-1 pr-1"
                style={{ height: "250px" }}
              >
                Saylani Welfare Distributing Ration & Clothes to affected people
                of Balochistan .More Details <br />
                <br />
                Entry Test Accouncement (Graphic Designing & Video
                Editing/Animation Course) On Sunday 3rd March 2019 @ 11:00Am
                Vanue: 4rh Floor, Saylani Welfare International Trust HeadOffice
                Bahadurabad .More Details <br />
                <br />
                Dr Jamil Ahmed (Additional Inspector General of Police) &
                Atiqmir Visit Saylani Welfare International Trust, Saylani Mass
                I.T. Training .More Details <br />
                <br />
                PIAIC Entrance Exam Merit Ranking List Announced.More Details{" "}
                <br />
                <br />
                President of Pakistan (Dr. Arif Alvi) Visited Saylani Welfare
                International Trust HeadOffice Karachi. More Details
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
