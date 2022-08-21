import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "../css/footer.module.css";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiTwitch,
} from "react-icons/fi";

const Footer = () => (
  <footer>
    <div className={style.wrap}>
      <div className={style.wrap1}>
        <p className={style.text}>
          Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
        </p>
        <p class={style.text}>binarcarrental@gmail.com</p>
        <p class={style.text}>081-233-334-808</p>
      </div>

      <div className={style.wrap1}>
        <Navbar>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className={style.nav1}>
                <Nav.Link href="#services">Our Services</Nav.Link>
                <Nav.Link href="#why">Why Us</Nav.Link>
                <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                <Nav.Link href="#ask">FAQ</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className={style.wrap1}>
        <div className={style.wraptext}>
          <p>Connect with Us</p>
        </div>
        <div>
          <FiFacebook className={style.wrapicon} Fi-lg></FiFacebook>
          <FiInstagram className={style.wrapicon}></FiInstagram>
          <FiTwitter className={style.wrapicon}></FiTwitter>
          <FiMail className={style.wrapicon}></FiMail>
          <FiTwitch className={style.wrapicon}></FiTwitch>
        </div>
      </div>

      <div className={style.wrap1}>
        <div className={style.copyright1}>
          &copy;<b>Copyright Binar 2022</b>
        </div>
        <div className={style.copyright2}></div>
      </div>
    </div>
  </footer>
);

export default Footer;
