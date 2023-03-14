import useFetch from "../hooks/useFetch";

export default function Form({
  newProduct,
  setProduct,
  submitMethods,
  pageLegend,
}) {
  const [loading, categories] = useFetch("/categories");
  const [load2, authors] = useFetch("/users");

  function inputHandler(e) {
    const { value, name } = e.target;
    const inputForm = { ...newProduct };

    inputForm[name] = value;
    inputForm.slug = inputForm.name.replace(" ", "-");

    setProduct(inputForm);
  }

  return (
    <form
      onSubmit={submitMethods}
      className="container flex flex-col gap-6 w-1/2 p-4 border-2 rounded-sm shadow-md"
    >
      <legend className="text-center text-3xl p-4 border-b-4 border-black drop-shadow-md font-semibold">
        {pageLegend}
      </legend>
      <input
        className="p-2 border-2 rounded-sm focus:outline-red-500 focus:scale-110 duration-75"
        type="text"
        name="name"
        onChange={inputHandler}
        value={newProduct.name}
        placeholder="Input Product Name"
      />
      <input
        className="p-2 border-2 rounded-sm focus:outline-red-500 focus:scale-110 duration-75"
        type="text"
        name="description"
        onChange={inputHandler}
        value={newProduct.description}
        placeholder="Input Product Description"
      />
      <input
        className="p-2 border-2 rounded-sm focus:outline-red-500 focus:scale-110 duration-75"
        type="number"
        name="price"
        onChange={inputHandler}
        value={newProduct.price}
        placeholder="Input Product Price"
      />
      <input
        className="p-2 border-2 rounded-sm focus:outline-red-500 focus:scale-110 duration-75"
        type="text"
        name="mainImg"
        onChange={inputHandler}
        value={newProduct.mainImg}
        placeholder="Input Product Image URL"
      />
      <select
        className="duration-75 p-2 bg-white cursor-pointer"
        name="categoryId"
        onChange={inputHandler}
        value={newProduct.categoryId ? newProduct.categoryId : "default"}
      >
        <option disabled value={"default"}>
          -- Pick your Category --
        </option>
        {categories.map((el) => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
      <select
        className="p-2 bg-white cursor-pointer"
        name="authorId"
        onChange={inputHandler}
        value={newProduct.authorId ? newProduct.authorId : "default"}
      >
        <option disabled value={"default"}>
          -- Pick your Author --
        </option>

        {authors.map((el) => (
          <option key={el.id} value={el.id}>
            {el.username} / {el.email}
          </option>
        ))}
      </select>
      <div className="container mt-8 flex w-full justify-center">
        <button
          type="submit"
          className="p-2 border-[1px] w-fit shadow-sm hover:shadow-lg 
          hover:border-red-500 active:shadow-xl ease-linear transition delay-75 duration-75"
        >
          {pageLegend}
        </button>
      </div>
    </form>
  );
}
