import useFetch from "../hooks/useFetch";

export default function Form({ newProduct, setNewProduct, submitNewProduct }) {
  const [loading, categories] = useFetch("/categories");
  const [load2, authors] = useFetch("/users");

  function inputHandler(e) {
    const { value, name } = e.target;
    const inputForm = { ...newProduct };

    inputForm[name] = value;
    inputForm.slug = inputForm.name.replace(" ", "-");

    // console.log(inputForm);
    // console.log("====================================");
    // console.log(newProduct);

    setNewProduct(inputForm);
  }

  return (
    <form
      onSubmit={submitNewProduct}
      className="container flex flex-col gap-6 w-1/2"
    >
      <input
        type="text"
        name="name"
        onChange={inputHandler}
        value={newProduct.name}
        placeholder="Input Product Name"
      />
      <input
        type="text"
        name="description"
        onChange={inputHandler}
        value={newProduct.description}
        placeholder="Input Product Description"
      />
      <input
        type="number"
        name="price"
        onChange={inputHandler}
        value={newProduct.price}
        placeholder="Input Product Price"
      />
      <input
        type="text"
        name="mainImg"
        onChange={inputHandler}
        value={newProduct.mainImg}
        placeholder="Input Product Image URL"
      />
      <select
        name="category"
        onChange={inputHandler}
        value={newProduct.categoryId}
      >
        <option disabled selected>
          -- Pick your Category --
        </option>
        {categories.map((el) => (
          <option value={el.id}>{el.name}</option>
        ))}
      </select>
      <select
        name="authorId"
        onChange={inputHandler}
        value={newProduct.authorId}
      >
        <option disabled selected>
          -- Pick your Author --
        </option>

        {authors.map((el) => (
          <option value={el.id}>
            {el.username} / {el.email}
          </option>
        ))}
      </select>
      <button type="submit">Add New Product</button>
    </form>
  );
}
