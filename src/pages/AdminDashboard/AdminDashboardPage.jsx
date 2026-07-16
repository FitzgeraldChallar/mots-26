import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  UserPlus,
  UserCheck,
  UserRoundPlus,
  Church,
  TrendingUp,
  Trophy,
  Clock,
} from "lucide-react";

import MainLayout from "../../components/layout/MainLayout";
import Button from "../../components/ui/Button";
import { logout } from "../../services/authService";
import { getDashboard } from "../../services/dashboardService";

export default function AdminDashboardPage() {
  const navigate = useNavigate();

  const [dashboard, setDashboard] = useState(null);
  console.log("Dashboard:", dashboard);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboard();
        setDashboard(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  function handleLogout() {
    logout();
    navigate("/admin-login");
  }

  const stats = [
    {
      title: "Total Captains",
      value: dashboard?.total_captains ?? 0,
      icon: <Users className="text-purple-700" size={28} />,
    },
    {
      title: "Total Registrations",
      value: dashboard?.total_recruits ?? 0,
      icon: <UserPlus className="text-green-700" size={28} />,
    },
    {
      title: "Through Captains",
      value: dashboard?.captain_registrations ?? 0,
      icon: <UserCheck className="text-blue-700" size={28} />,
    },
    {
      title: "Independent",
      value: dashboard?.independent_registrations ?? 0,
      icon: <UserRoundPlus className="text-orange-600" size={28} />,
    },
    {
      title: "Churches Represented",
      value: dashboard?.churches ?? 0,
      icon: <Church className="text-yellow-600" size={28} />,
    },
    {
      title: "Event Progress",
      value: `${dashboard?.progress ?? 0}%`,
      icon: <TrendingUp className="text-emerald-700" size={28} />,
    },
  ];

  return (
    <MainLayout>
      <section className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}

          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 mb-10">

            <div>

              <h1 className="text-4xl font-bold text-purple-900">
                Admin Dashboard
              </h1>

              <p className="text-gray-600 mt-2">
                Welcome to the Move of the Spirit Administration Portal.
              </p>

            </div>

            <Button
              variant="outline"
              onClick={handleLogout}
            >
              Logout
            </Button>

          </div>

          {/* Statistic Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">

            {stats.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl shadow-lg p-6"
              >
                <div className="flex justify-between items-center">

                  <div>

                    <p className="text-gray-500 font-medium">
                      {item.title}
                    </p>

                    <h2 className="text-4xl font-bold text-purple-900 mt-3">

                      {loading ? "--" : item.value}

                    </h2>

                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">

                    {item.icon}

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Bottom Grid */}

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Top Captains */}

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <div className="flex items-center gap-3 mb-6">

                <Trophy
                  className="text-yellow-500"
                  size={28}
                />

                <h2 className="text-2xl font-bold text-purple-900">
                  Top Captains
                </h2>

              </div>

              {loading ? (

                <p className="text-gray-500">
                  Loading...
                </p>

              ) : dashboard?.top_captains?.length ? (

                <div className="space-y-4">

                  {dashboard.top_captains.map((captain, index) => (

                    <div
                      key={captain.captain_code}
                      className="flex justify-between items-center border-b pb-3"
                    >

                      <div>

                        <p className="font-semibold">

                          #{index + 1} {captain.full_name}

                        </p>

                        <p className="text-sm text-gray-500">

                          {captain.church_branch}

                        </p>

                      </div>

                      <div className="text-right">

                        <p className="font-bold text-purple-700">

                          {captain.recruit_count}

                        </p>

                        <p className="text-xs text-gray-500">
                          recruits
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              ) : (

                <p className="text-gray-500">
                  No captain data available.
                </p>

              )}

            </div>

            {/* Recent Recruits */}

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <div className="flex items-center gap-3 mb-6">

                <Clock
                  className="text-blue-600"
                  size={28}
                />

                <h2 className="text-2xl font-bold text-purple-900">
                  Recent Registrations
                </h2>

              </div>

              {loading ? (

                <p className="text-gray-500">
                  Loading...
                </p>

              ) : dashboard?.recent_recruits?.length ? (

                <div className="space-y-4">

                  {dashboard.recent_recruits.map((recruit, index) => (

                    <div
                      key={index}
                      className="border-b pb-3"
                    >

                      <p className="font-semibold">

                        {recruit.full_name}

                      </p>

                      {recruit.captain__full_name ? (
                        <>
                          <p className="text-sm text-gray-500">
                            Captain: {recruit.captain__full_name}
                          </p>

                          <p className="text-sm text-gray-500">
                            {recruit.captain__captain_code}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm italic text-orange-600">
                          Independent Registration
                        </p>
                      )}

                    </div>

                  ))}

                </div>

              ) : (

                <p className="text-gray-500">
                  No registrations yet.
                </p>

              )}

            </div>

          </div>

          {/* Church Statistics */}

          <div className="mt-10 bg-white rounded-3xl shadow-lg p-6">

            <h2 className="text-2xl font-bold text-purple-900 mb-6">
              Church Statistics
            </h2>

            {loading ? (

              <p className="text-gray-500">
                Loading...
              </p>

            ) : dashboard?.church_statistics?.length ? (

              <div className="space-y-4">

                {dashboard.church_statistics.map((church) => (

                  <div
                    key={church.church_branch}
                  >

                    <div className="flex justify-between mb-2">

                      <span className="font-medium">

                        {church.church_branch}

                      </span>

                      <span className="font-bold text-purple-700">

                        {church.recruits}

                      </span>

                    </div>

                    <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">

                      <div
                        className="h-full bg-purple-700 rounded-full"
                        style={{
                          width: `${
                            dashboard.total_recruits > 0
                              ? (church.recruits /
                                  dashboard.total_recruits) *
                                100
                              : 0
                          }%`,
                        }}
                      />

                    </div>

                  </div>

                ))}

              </div>

            ) : (

              <p className="text-gray-500">
                No church statistics available.
              </p>

            )}

          </div>

        </div>
      </section>
    </MainLayout>
  );
}