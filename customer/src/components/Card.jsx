import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <Link
      to={`/detail/${product?.id}`}
      className="hover:scale-105 hover:shadow-md duration-100 ease-out"
    >
      <div className="max-w-sm bg-[#fefefe] rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg"
          src={product?.mainImg}
          alt={product?.name}
        />
        <div className="p-5">
          <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
            {product?.name}
          </h5>
        </div>
      </div>
    </Link>
  );
}
