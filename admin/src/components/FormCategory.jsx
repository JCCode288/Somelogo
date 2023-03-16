export default function FormCategory({
  newCategory,
  setCategory,
  submitMethods,
  pageLegend,
}) {
  function inputHandler(e) {
    const { value, name } = e.target;
    const inputForm = { ...newCategory };

    inputForm[name] = value;
    inputForm.slug = inputForm.name.replace(" ", "-");

    setCategory(inputForm);
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
        value={newCategory.name}
        placeholder="Input Product Name"
      />
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
