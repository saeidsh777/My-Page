/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Home.css";
import { Quote } from "react-bootstrap-icons";
import LineH from "../../Components/LineH/LineH";
export default function Home() {
  return (
    <section className="home scroll-y col-12 col-lg-8">
      <div className="container-c">
        
        {/* Start Banner */}
        <section className="home-banner d-flex flex-column align-items-center">
          <div className="line-v"></div>
          <div className="box-banner-title d-flex flex-column align-items-center">
            <span className="mt-4 d-block text-center label-1">
              HELLO! MY NAME IS
            </span>
            <h1 className="banner-title text-center my-4">
              Saeid <br /> Shojaei
            </h1>
            <span className="mt-5 d-block text-center label-1">
              UI/UX DESIGNER
            </span>
            <div className="banner-img-container mt-4">
              <img
                className="banner-img"
                src="/images/saeid-shojaei.png"
                alt="saeid"
              />
            </div>
          </div>
        </section>
        {/* End Banner */}

        {/* Start About */}
        <section className="about mt-6">
          <h2 className="text-center title-1">
            Hi! My name is Saeid,
            <br /> i’m Web Developer based in <br /> Tehran
          </h2>
          <div className="mt-4 quote">
            <Quote className="white-t" />
          </div>
          <p className="mt-4 text-center gray-t-2 w-75 mx-auto">
            I am a passionate and dedicated UI/UX designer with a strong focus
            on creating exceptional user experiences. I thrive on transforming
            complex ideas into intuitive and visually appealing designs. With a
            keen eye for detail and a user-centered approach, I strive to
            deliver impactful solutions that engage and delight users. Let's
            collaborate to bring your digital products to life!
          </p>
        </section>
        {/* End About */}

        <LineH title="Services"/>
      </div>
    </section>
  );
}
