import React from "react";

import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid ">
        <footer className="footer d-flex flex-wrap justify-content-between align-items-center p-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="text-muted">&copy; 2021 Wanta Sushi</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3 text-muted">
              <BsWhatsapp />
            </li>
            <li className="ms-3 text-muted">
              <BsInstagram />
            </li>
            <li className="ms-3 text-muted">
              <BsFacebook />
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
