export default function Card() {
  return (
    <div className=" max-w-sm bg-[#fefefe] border border-gray-400 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/450524/item/idgoods_67_450524.jpg?width=750"
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
      </div>
    </div>
  );
}
