import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel({ product }) {
  let array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i + 1);
  }
  return (
    <div className="container flex justify-center z-10 shadow-sm">
      <Swiper
        slidesPerView={3}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        className="text-center h-full"
      >
        {array.map((el) => {
          return (
            <SwiperSlide>
              <img src={product?.mainImg} alt={product?.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
