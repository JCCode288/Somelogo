import { Outlet } from "react-router-dom";
import { Carousel } from "../components";

export default function Landing() {
  return (
    <div className="container">
      <div className="container">
        <Carousel />
        <Outlet />
      </div>
    </div>
  );
}
