import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "../components";
import { fetchCategory } from "../store/actions/actionCreator";

export default function CategoryDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoryId = useParams().id;

  useEffect(() => {
    dispatch(fetchCategory(categoryId));
  }, []);

  const { category, categoryLoading } = useSelector(
    (state) => state.categories
  );

  console.log(category);

  const post = {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  };

  return (
    <>
      <button
        className="py-2 px-4 border-2 border-red-500 m-4 rounded-3xl hover:bg-red-500 hover:text-white hover:font-bold duration-100 hover:translate-x-[-1rem] active:translate-x-[-1rem] w-fit"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <div className="bg-white py-16 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Category
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              {category.name}
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {category.Products?.map((el) => {
              return <Card product={el} key={el.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
