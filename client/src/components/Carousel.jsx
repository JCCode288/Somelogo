import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  let array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i + 1);
  }
  return (
    <div className="container flex justify-center h-[60vh]">
      <Swiper
        slidesPerView={3}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        className="text-center h-full"
      >
        {array.map((el) => {
          return (
            <SwiperSlide className="">
              <img
                src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/450524/item/idgoods_67_450524.jpg?width=750"
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
