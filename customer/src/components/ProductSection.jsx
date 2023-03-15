import Card from "./Card";

export default function ProductSection() {
  let test = [];
  for (let i = 0; i < 10; i++) {
    test.push({ id: i + 1, mainImg: "" });
  }
  return (
    <div className="container grid grid-cols-4 gap-6 p-8">
      {test.map((el) => {
        return <Card />;
      })}
    </div>
  );
}
