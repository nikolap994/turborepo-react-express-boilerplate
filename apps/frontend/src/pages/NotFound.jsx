import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-emerald-600">404</h1>
      <p className="text-xl text-gray-700 mt-4">Page Not Found</p>
      <p className="text-gray-500 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
