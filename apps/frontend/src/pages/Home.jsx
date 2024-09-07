import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-emerald-600">
        Welcome to the Home Page
      </h1>
      <div className="mt-8 space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
