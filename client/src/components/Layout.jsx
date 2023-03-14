import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container p-4">
      <Outlet />
    </div>
  );
}
