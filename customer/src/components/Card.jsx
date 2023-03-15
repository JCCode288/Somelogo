export default function Card({ product }) {
  return (
    <div className=" max-w-sm bg-[#fefefe] border border-gray-400 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
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
  );
}
