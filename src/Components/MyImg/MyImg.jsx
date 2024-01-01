import React from 'react'
import './MyImg.css'
export default function MyImg() {
  return (
    <section className="d-none d-lg-block col-4 my-img-container">
      <img
        className="my-img"
        src="/images/saeid-shojaei.png"
        alt="Saeid Shojaei"
      />
    </section>
  );
}
