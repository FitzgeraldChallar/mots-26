import { useEffect, useState } from "react";

import MainLayout from "../../components/layout/MainLayout";
import CaptainLookup from "../../components/captainDashboard/CaptainLookup";
import CaptainDashboard from "../../components/captainDashboard/CaptainDashboard";
import { getCaptainDashboard } from "../../services/captainDashboardService";

export default function CaptainDashboardPage() {
  const [captain, setCaptain] = useState(null);

  const [loading, setLoading] = useState(true);

  async function loadDashboard(code) {
    try {
      setLoading(true);

      const data = await getCaptainDashboard(code);

      setCaptain(data);

      localStorage.setItem(
        "captain_code",
        data.captain_code
      );

    } catch (error) {
      console.error(error);

      alert("Captain not found.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const savedCode =
      localStorage.getItem("captain_code");

    if (savedCode) {
      loadDashboard(savedCode);
    } else {
      setLoading(false);
    }
  }, []);

  function switchCaptain() {
    localStorage.removeItem("captain_code");

    setCaptain(null);
  }

  return (
    <MainLayout>

      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6">

          {loading ? (

            <div className="text-center py-20">

              <p className="text-gray-500">
                Loading dashboard...
              </p>

            </div>

          ) : captain ? (

            <CaptainDashboard
              captain={captain}
              onSwitchCaptain={switchCaptain}
            />

          ) : (

            <CaptainLookup
              onLookup={loadDashboard}
            />

          )}

        </div>

      </section>

    </MainLayout>
  );
}

