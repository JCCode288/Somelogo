function NavBar({ setPage }) {
  return (
    <nav className="flex">
      <ul className="flex">
        <li
          className="cursor-pointer mx-2"
          onClick={() => setPage("dashboard")}
        >
          dashboard
        </li>
        <li className="cursor-pointer mx-2" onClick={() => setPage("products")}>
          products
        </li>
        <li
          className="cursor-pointer mx-2"
          onClick={() => setPage("categories")}
        >
          categories
        </li>
        <li className="cursor-pointer mx-2" onClick={() => setPage("login")}>
          login
        </li>
        <li className="cursor-pointer mx-2" onClick={localStorage.clear()}>
          logout
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
