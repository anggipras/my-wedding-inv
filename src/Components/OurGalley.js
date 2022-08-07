import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import "../App.css";
import { ClickHeader } from "../Util/HeaderMethod";
import MediaQuery from "../Util/MediaQuery";

function OurGallery({ currentId }) {
  useEffect(() => {
    var galleryTop = new Swiper(".gallery-top", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      loopedSlides: 4,
      autoplay: {
        delay: 2000,
      },
    });
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: "auto",
      touchRatio: 0.2,
      slideToClickedSlide: true,
      loop: true,
      loopedSlides: 4,
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        360: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 5,
        },
      },
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
  }, []);

  useEffect(() => {
    if (currentId != null) {
      ClickHeader(currentId.evt);
    }
  }, [currentId]);

  const heightBottomSwiper = () => {
    return MediaQuery().isMobile ? "5rem" : "10rem";
  };

  return (
    <div
      id="gallery"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
        }}
      >
        <div class="swiper-container gallery-top">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="swiper-slide-container">
                <img
                  style={{ height: "20rem" }}
                  src={require("../Assets/photo1.jpg")}
                  alt=""
                />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-container">
                <img
                  style={{ height: "20rem" }}
                  src={require("../Assets/photo2.jpg")}
                  alt=""
                />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-container">
                <img
                  style={{ height: "20rem" }}
                  src={require("../Assets/photo3.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        <div class="swiper-container gallery-thumbs">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="swiper-slide-container">
                <img
                  style={{ height: heightBottomSwiper() }}
                  src={require("../Assets/photo1.jpg")}
                  alt=""
                />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-container">
                <img
                  style={{ height: heightBottomSwiper() }}
                  src={require("../Assets/photo2.jpg")}
                  alt=""
                />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-container">
                <img
                  style={{ height: heightBottomSwiper() }}
                  src={require("../Assets/photo3.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurGallery;
