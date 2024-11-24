import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-blue-500 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Food Recipe App</h1>
        <nav className="flex space-x-4">
          <Link
            to="/"
            className="text-white hover:text-red-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className="text-white hover:text-red-500 transition duration-300"
          >
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
};
