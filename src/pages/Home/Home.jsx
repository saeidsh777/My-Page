import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <section className="home scroll-y col-12 col-lg-8">
      {/* Start Banner */}
      <section className="home-banner d-flex flex-column mx-auto align-items-center">
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

        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam iusto
          corporis consequatur, minima laboriosam error provident iste velit
          quos, ex adipisci. Voluptates a expedita assumenda odit veritatis
          soluta alias ex.
        </div>
      </section>
      {/* End Banner */}
    </section>
  );
}
