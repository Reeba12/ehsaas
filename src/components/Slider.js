import React from "react";
// import "./App.css";
import { Carousel, CarouselItem } from "react-bootstrap";
import slid1 from "../images/volunteers_social_services.jpg";
import slid2 from "../images/slid2.jfif";
import slid3 from "../images/human-771601_1280-1024x683.jpg";
import slid4 from "../images/slid4.jpg";
const Slider = () => {
  return (
    <>
      <Carousel fade className="text-primary" style={{ height: "500px" }}>
        <Carousel.Item style={{ height: "800px" }}>
          <img className="d-block w-100 h-50" src={slid1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item style={{ height: "800px" }}>
          <img className="d-block w-100 h-50" src={slid2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item style={{ height: "800px" }}>
          <img className="d-block w-100 h-50" src={slid3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item style={{ height: "800px" }}>
          <img className="d-block w-100 h-50" src={slid4} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
      <div className="para ">
        <div className="container text-center">
          <h2 className="fw-900">
            <strong> INTRO</strong>
            <b>DUCTION</b>
          </h2>
          <hr />
          <p className="mr-5 ml-5 pl-4 pr-4">
            Established in May 1999 by famous spiritual and religious scholar
            Maulana Bashir Ahmed Farooqui, Saylani Welfare International Trust
            was built on the fundamentals of breaking the cycle of poverty,
            alleviating the financial troubles of the poor, giving people a
            chance to live a dignified life and spreading happiness. <br />
            <br />
            We are an organization that believes in lighting up the lives of
            underprivileged people across the world. We endeavor to provide the
            best quality services in areas including food, education, medical
            and social welfare free of cost to people living in the dark. With
            over 60 different sectors, we feed thousands of hungry people each
            day, hundreds more are given the hope of life through medical health
            care, many are educated to become leaders of tomorrow and several
            are given the opportunity to stand on their feet. <br />
            <br />
            Today, we are proud to say that our physical presence extends
            throughout Pakistan with a vast network of 125 branches operating in
            major cities including Karachi, Lahore, Islamabad, Rawalpindi,
            Hyderabad and Faisalabad. Apart from Pakistan, we have overseas
            offices in the UK, USA and UAE as well. Our worldwide branches are
            operating under the guidance of a team of over 2,000 working
            professionals who help almost 125,000 people on a daily basis.{" "}
            <br />
            <br />
            We strongly believe that a little help goes a long way and our work
            would not be possible without the generous support of our valuable
            donors. Our local and international donors have graciously lent us a
            hand by supporting our causes and enabling us to serve the needs of
            people in need.
          </p>
        </div>
      </div>
    </>
  );
};

export default Slider;
