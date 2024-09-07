import { Link, useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <nav className="bg-emerald-900 text-white p-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Homepage
        </Link>
        <div>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
            className="px-4 py-2 hover:bg-emerald-700 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
