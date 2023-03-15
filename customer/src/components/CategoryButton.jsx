export default function CategoryButton({ category }) {
  return (
    <button className="py-2 px-4 border-[1px] flex flex-none w-fit h-fit rounded-3xl border-red-500 hover:text-red-500 duration-100 ease-in hover:scale-105">
      {category?.name}
    </button>
  );
}
