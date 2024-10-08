import React from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "../css/categories.css";
import { IoIosPhonePortrait } from "react-icons/io";
import category from "../Category";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
function Categories() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 gh">
            <div className="flash">
              <div className="flash-center"></div>
            </div>
            <span>Categories</span>
          </div>
        </div>

        <div className="row">
          <div className="bnm">
            <div className="col-lg-6">
              <h1>Browse By Category</h1>
            </div>

            <div className="col-lg-6">
              <div className="arrow">
                <FaRegArrowAltCircleLeft />
                <FaRegArrowAltCircleRight />
              </div>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="row">
            {category.map(() => {
              return (
                <div className="col-lg-2 col-md-6 col-sm-6">
                  <SwiperSlide>
                    <div className="category">
                      <div className="sub-cat">
                        {<IoIosPhonePortrait />}
                        <span className="sec">Phones</span>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Categories;
