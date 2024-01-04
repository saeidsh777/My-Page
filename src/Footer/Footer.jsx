import React from "react";
import "./Footer.css";
import { Envelope, Phone, PinMap } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer mt-5">
      <div className="row w-100 align-items-center">
        <div className="col-6">
          <ul className="m-0">
            <li className="d-flex align-items-center gap-2">
              <PinMap className="gray-t-2" />
              <p className="m-0 gray-t-2">Tehran - IRAN</p>
            </li>
            <li className="d-flex align-items-center gap-2">
              <Envelope className="gray-t-2" />
              <p className="m-0 gray-t-2">Saeidshojaei71@gmail.com</p>
            </li>
            <li className="d-flex align-items-center gap-2">
              <Phone className="gray-t-2" />
              <p className="m-0 gray-t-2">+98-9126758409</p>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-end ">
            <Link to="/" className="footer-logo gray-t">SSH</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
