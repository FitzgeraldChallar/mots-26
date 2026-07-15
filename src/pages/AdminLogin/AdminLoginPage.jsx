import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import Button from "../../components/ui/Button";
import { login } from "../../services/authService";

export default function AdminLoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState(
    localStorage.getItem("last_admin") || ""
  );

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      await login(username, password);

      localStorage.setItem("last_admin", username);

      navigate("/admin-dashboard");

    } catch (err) {
      console.error(err);

      setError("Invalid username or password.");

    } finally {
      setLoading(false);
    }
  }

  return (
    <MainLayout>
      <section className="min-h-[80vh] flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

          <h1 className="text-3xl font-bold text-purple-900 text-center">
            Administrator Login
          </h1>

          <p className="mt-3 text-center text-gray-500">
            Sign in to access the Admin Dashboard.
          </p>

          <form
            onSubmit={handleLogin}
            className="mt-8 space-y-6"
          >

            <div>

              <label className="block mb-2 font-semibold">
                Username
              </label>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-300
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-purple-700
                  focus:ring-4
                  focus:ring-purple-100
                "
                required
              />

            </div>

            <div>

              <label className="block mb-2 font-semibold">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-300
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-purple-700
                  focus:ring-4
                  focus:ring-purple-100
                "
                required
              />

            </div>

            {error && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-red-700 text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Login"}
            </Button>

          </form>

        </div>

      </section>
    </MainLayout>
  );
}