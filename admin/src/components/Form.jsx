import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Form({
  setProduct,
  submitMethods,
  pageLegend,
  newProduct,
}) {
  const categories = useSelector((state) => state.categories.categories);
  const path = useLocation().pathname;
  const editProduct = useSelector((state) => state.products.product);

  useEffect(() => {
    if (path.match(/(edit)/gi)) {
      const Images = {};

      editProduct.Images?.forEach((el, index) => {
        Images[`image${++index}`] = el.imgUrl;
      });

      const newProduct = { ...editProduct, Images };

      setProduct(newProduct);
    } else {
      setProduct({ Images: {}, categoryId: 0 });
    }
  }, [editProduct]);

  function inputHandler(e) {
    const { value, name } = e.target;
    const inputForm = { ...newProduct };

    if (name.match(/(image)/gi)) {
      inputForm.Images[name] = value;
    } else {
      inputForm[name] = value;
    }

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
        placeholder="Input Product Main Image URL"
      />
      <input
        className="p-2 border-2 rounded-sm focus:outline-red-500 focus:scale-110 duration-75"
        type="text"
        name="image1"
        onChange={inputHandler}
        value={newProduct?.Images?.image1}
        placeholder="Input Product Image URL"
      />
      <input
        className="p-2 border-2 rounded-sm focus:outline-red-500 focus:scale-110 duration-75"
        type="text"
        name="image2"
        onChange={inputHandler}
        value={newProduct?.Images?.image2}
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
