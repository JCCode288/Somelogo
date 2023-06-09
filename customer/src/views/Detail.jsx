import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProduct } from "../store/actions/actionCreator";
import { Spinner } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import currency from "../helpers/currency";
import { EffectCards, Navigation, Pagination } from "swiper";
import { Swal } from "sweetalert2/dist/sweetalert2";

export default function Detail() {
  let { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProduct(id)).catch((err) =>
      Swal.fire("Error", err.message, "error")
    );
  }, []);

  const { product, productLoading } = useSelector((state) => state.products);

  return (
    <>
      {productLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <button
            className="py-2 px-4 border-2 border-red-500 m-4 rounded-3xl hover:bg-red-500 hover:text-white hover:font-bold duration-100 hover:translate-x-[-1rem] active:translate-x-[-1rem]"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <div className="container flex flex-row">
            <div className="container p-4  md:max-w-[50vw]">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                effect="cards"
                modules={[Navigation, Pagination, EffectCards]}
                pagination={{ clickable: true }}
                navigation={{ clickable: true }}
              >
                <SwiperSlide key={product?.id}>
                  <img src={product?.mainImg} alt={product?.name} />
                </SwiperSlide>
                {product?.Images?.map((el) => {
                  return (
                    <SwiperSlide key={el.id}>
                      <img src={el.imgUrl} alt={el.name} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="container flex flex-col justify-center p-6">
              <h4 className="font-semibold text-2xl text-center">
                {product?.name}
              </h4>
              <div className="container flex flex-col mx-16 my-8">
                <h4 className="text-gray-800 flex w-1/2 my-4 text-lg font-semibold">
                  Description
                </h4>
                <p className="text-gray-800 flex w-1/2 my-2">
                  {product?.description}
                </p>
                <div className="container flex flex-col w-full mt-8 text-gray-800">
                  <h4 className="text-lg">Author</h4>
                  <strong className="text-xl">
                    {product?.Author?.username}
                  </strong>
                </div>
                <div className="container flex flex-col w-full mt-8 text-gray-800">
                  <h4 className="text-lg">Category</h4>
                  <strong className="text-xl">{product?.Category?.name}</strong>
                </div>
                <div className="container flex w-full mt-8 text-gray-800">
                  <h4 className="">Price: {currency(product?.price)}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
