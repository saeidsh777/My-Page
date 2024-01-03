/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Home.css";
import { Quote } from "react-bootstrap-icons";
import LineH from "../../Components/LineH/LineH";
import SkillBox from "../../Components/SkillBox/SkillBox";
import ProjectBox from "../../Components/ProjectBox/ProjectBox";
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
              FRONT-END DEVELOPER <br />
              (React JS)
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
            <br /> i’m Web Developer based in <br /> TEHRAN / IRAN
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

        <LineH title="Hard Skills" />

        {/* Start Skills */}
        <section className="skills">
          <div className="row">
            <div className="col-12 col-lg-6 mb-4">
              <SkillBox title="HTML" progress={98} />
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <SkillBox title="CSS" progress={98} />
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <SkillBox title="Bootstrap" progress={98} />
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <SkillBox title="JavaScript" progress={90} />
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <SkillBox title="React JS" progress={85} />
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <SkillBox title="Redux" progress={50} />
            </div>
          </div>
        </section>
        {/* End Skills */}

        <LineH title="Projects" />

        {/* Start Projects */}
        <section className="projects" id="projects">
          <div className="row">
            <div className="col-12 col-lg-6 mb-4">
              <ProjectBox
                srcImg="/images/job.png"
                title="Job Project"
                label={["React", "Bootstrap"]}
                urlProject="https://marvelous-dusk-e0c0b1.netlify.app/"
              />
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <ProjectBox
                srcImg="/images/pet.png"
                title="Pet Project"
                label={["React", "Bootstrap"]}
                urlProject="https://superb-vacherin-7935a5.netlify.app/"
              />
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <ProjectBox
                srcImg="/images/pet.png"
                title="Pet Project"
                label={["React", "Bootstrap"]}
                urlProject="https://superb-vacherin-7935a5.netlify.app/"
              />
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <ProjectBox
                srcImg="/images/job.png"
                title="Job Project"
                label={["React", "Bootstrap"]}
                urlProject="https://marvelous-dusk-e0c0b1.netlify.app/"
              />
            </div>
          </div>
        </section>
        {/* End Projects */}
      </div>
    </section>
  );
}
