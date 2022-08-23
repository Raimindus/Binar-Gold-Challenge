import React, { Component } from "react";
import Slider from "react-slick";
import style from "../css/carousel.module.css";

function Next(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "black",
        borderRadius: 10,
      }}
      onClick={onClick}
    />
  );
}

function Prev(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "black",
        borderRadius: 10,
      }}
      onClick={onClick}
    />
  );
}

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "394px",
      slidesToShow: 1,
      slideToScroll: 1,
      speed: 500,
      nextArrow: <Next className={style.next} />,
      prevArrow: <Prev className={style.prev} />,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className={style.wrapper}>
            <img
              className={style.carousel1}
              src={require("../img/carousel1.png")}
              alt="pic1"
            />
            <div className={style.wrapper2}>
              <img
                className={style.rate}
                src={require("../img/Rate.png")}
                alt="pic1"
              />
              <p className={style.text1}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p className={style.text2}>John Dee 32, Bromo</p>
            </div>
          </div>
          <div className={style.wrapper}>
            <img
              className={style.carousel1}
              src={require("../img/carousel2.png")}
              alt="pic2"
            />
            <div className={style.wrapper2}>
              <img
                className={style.rate}
                src={require("../img/Rate.png")}
                alt="pic2"
              />
              <p className={style.text1}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p className={style.text2}>John Dee 32, Bromo</p>
            </div>
          </div>
          <div className={style.wrapper}>
            <img
              className={style.carousel1}
              src={require("../img/carousel3.png")}
              alt="pic3"
            />
            <div className={style.wrapper2}>
              <img
                className={style.rate}
                src={require("../img/Rate.png")}
                alt="pic3"
              />
              <p className={style.text1}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p className={style.text2}>John Dee 32, Bromo</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
