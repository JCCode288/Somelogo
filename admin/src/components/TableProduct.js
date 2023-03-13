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
                    className="w-1/2 justify-center "
                  />
                </div>
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 text-center">
                {el.categoryId}
              </td>
              <td className="p-2 border-b-[1px] border-red-500 border-opacity-50 text-center">
                {el.authorId}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableProducts;
