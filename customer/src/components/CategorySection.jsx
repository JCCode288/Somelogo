import { Card } from "../components";

export default function CategorySection({ category }) {
  return (
    <div className="bg-white py-16 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Category
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {category?.name}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {category.Products.length ? (
            category.Products?.map((el) => {
              return <Card product={el} key={el.id} />;
            })
          ) : (
            <h1 className="text-3xl font-semibold">No Products Found</h1>
          )}
        </div>
      </div>
    </div>
  );
}
