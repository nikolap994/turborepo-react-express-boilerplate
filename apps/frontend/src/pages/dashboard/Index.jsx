import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await fetch("/api/token/validate", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          if (response.status === 401) {
            localStorage.removeItem("token");
            navigate("/login");
            return;
          }

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const fetchData = async () => {
            try {
              const dashboardData = await fetch("/api/dashboard", {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              });

              if (!dashboardData.ok) {
                throw new Error("Network response was not ok");
              }

              const data = await dashboardData.json();
              setDashboardData(data);
            } catch (error) {
              console.error("Error fetching dashboard data:", error);
            }
          };

          fetchData();
        } catch (error) {
          console.error("Error validating token:", error);
        }
      } else {
        navigate("/login");
      }
    };

    validateToken();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <main className="p-8">
        <h1 className="text-2xl font-bold text-emerald-900 mb-4">Dashboard</h1>
        <div>{dashboardData.title}</div>
      </main>
    </div>
  );
}
