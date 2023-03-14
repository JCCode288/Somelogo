function TableProducts({ items }) {
  const products = [...items];
  return (
    <table className="table-auto hover:table-fixed focus:table-fixed">
      <thead className="p-2">
        <tr className="border-b-4 border-red-500">
          <th className="text-center px-2">No.</th>
          <th className="text-center px-2">Name</th>
          <th className="text-center px-2">Description</th>
          <th className="text-center px-2">Price</th>
          <th className="text-center px-2">Image</th>
          <th className="text-center px-2">Category</th>
          <th className="text-center px-2">Author</th>
          <th className="text-center px-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((el, index) => {
          delete el.slug;
          return (
            <tr className="relative align-middle" key={el.id}>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50">
                {++index}
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 text-center">
                {el.name}
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 text-justify">
                {el.description}
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 text-center">
                {el.price}
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50">
                <div className="container flex justify-center">
                  <img
                    src={el.mainImg}
                    alt="el.name"
                    className="w-1/2 justify-center hover:scale-150 ease-linear duration-150 rounded-sm hover:border-4 hover:border-red-500 hover:z-10"
                  />
                </div>
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 text-center">
                {el.categoryId}
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 text-center">
                {el.authorId}
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 text-center">
                <button className="flex h-fit w-fit p-2 border-[1px] rounded hover:bg-red-600 hover:text-white duration-150 ease-in mb-2">
                  Delete
                </button>
                <button className="flex h-fit w-fit p-2 border-[1px] rounded hover:bg-red-600 hover:text-white duration-150 ease-in">
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableProducts;
