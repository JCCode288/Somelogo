import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Carousel({ product }) {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="container flex items-center z-10 shadow-sm w-full">
      <Swiper
        slidesPerView={2}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        className=""
      >
        {products.map((el) => {
          return (
            <SwiperSlide>
              <Link to={`/detail/${el.id}`}>
                <img src={el?.mainImg} alt={el?.name} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
