import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/LandingPage";
import CaptainRegistrationPage from "../pages/CaptainRegistration/CaptainRegistrationPage";
import RecruitRegistrationPage from "../pages/RecruitRegistration/RecruitRegistrationPage";
import LeaderboardPage from "../pages/Leaderboard/LeaderboardPage";
import CaptainDashboardPage from "../pages/CaptainDashboard/CaptainDashboardPage";
import AdminLoginPage from "../pages/AdminLogin/AdminLoginPage";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import AdminDashboardPage from "../pages/AdminDashboard/AdminDashboardPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route
          path="/captain-register"
          element={<CaptainRegistrationPage />}
        />

        <Route
          path="/register"
          element={<RecruitRegistrationPage />}
        />

        <Route
          path="/leaderboard"
          element={<LeaderboardPage />}
        />

        <Route
          path="/captain"
          element={<CaptainDashboardPage />}
        />

        <Route
         path="/admin-login"
         element={<AdminLoginPage />}
        />

        <Route
         path="/admin-dashboard"
         element={
          <ProtectedRoute>
            <AdminDashboardPage />
          </ProtectedRoute>
         }
       />

      </Routes>

    </BrowserRouter>
  );
}