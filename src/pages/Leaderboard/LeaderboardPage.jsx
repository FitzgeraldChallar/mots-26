import { useEffect, useMemo, useState } from "react";

import MainLayout from "../../components/layout/MainLayout";
import LeaderboardCard from "../../components/leaderboard/LeaderboardCard";
import { getLeaderboard } from "../../services/leaderboardService";

export default function LeaderboardPage() {
  const [captains, setCaptains] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [churchFilter, setChurchFilter] = useState("");
  const [zoneFilter, setZoneFilter] = useState("");

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const data = await getLeaderboard();
        setCaptains(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, []);

  const churches = useMemo(
    () => [...new Set(captains.map((c) => c.church_branch))].sort(),
    [captains]
  );

  const zones = useMemo(
    () => [...new Set(captains.map((c) => c.zone))].sort(),
    [captains]
  );

  const filteredCaptains = useMemo(() => {
    return captains.filter((captain) => {
      const matchesSearch =
        captain.full_name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        captain.captain_code
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesChurch =
        !churchFilter ||
        captain.church_branch === churchFilter;

      const matchesZone =
        !zoneFilter ||
        captain.zone === zoneFilter;

      return (
        matchesSearch &&
        matchesChurch &&
        matchesZone
      );
    });
  }, [captains, search, churchFilter, zoneFilter]);

  // Assign ranks on the frontend based on the
  // order already returned by the backend.
  const rankedCaptains = useMemo(() => {
    return filteredCaptains.map((captain, index) => ({
      ...captain,
      rank: index + 1,
    }));
  }, [filteredCaptains]);

  return (
    <MainLayout>
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <h1 className="text-5xl font-bold text-purple-900">
              🏆 Leaderboard
            </h1>

            <p className="mt-4 text-gray-600">
              Every Captain is making a difference.
            </p>

          </div>

          {/* Filters */}

          <div className="grid gap-4 md:grid-cols-3 mb-10">

            <input
              placeholder="Search captain..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                rounded-2xl
                border
                border-gray-300
                px-5
                py-4
                outline-none
                focus:border-purple-700
                focus:ring-4
                focus:ring-purple-100
              "
            />

            <select
              value={churchFilter}
              onChange={(e) => setChurchFilter(e.target.value)}
              className="
                rounded-2xl
                border
                border-gray-300
                px-5
                py-4
                outline-none
                focus:border-purple-700
                focus:ring-4
                focus:ring-purple-100
              "
            >
              <option value="">
                All Churches
              </option>

              {churches.map((church) => (
                <option
                  key={church}
                  value={church}
                >
                  {church}
                </option>
              ))}

            </select>

            <select
              value={zoneFilter}
              onChange={(e) => setZoneFilter(e.target.value)}
              className="
                rounded-2xl
                border
                border-gray-300
                px-5
                py-4
                outline-none
                focus:border-purple-700
                focus:ring-4
                focus:ring-purple-100
              "
            >
              <option value="">
                All Zones
              </option>

              {zones.map((zone) => (
                <option
                  key={zone}
                  value={zone}
                >
                  {zone}
                </option>
              ))}

            </select>

          </div>

          {/* Leaderboard */}

          {loading ? (
            <p className="text-center text-gray-500">
              Loading leaderboard...
            </p>
          ) : rankedCaptains.length === 0 ? (
            <p className="text-center text-gray-500">
              No captains found.
            </p>
          ) : (
            <div className="grid gap-6">
              {rankedCaptains.map((captain) => (
                <LeaderboardCard
                  key={captain.captain_code}
                  captain={captain}
                />
              ))}
            </div>
          )}

        </div>

      </section>
    </MainLayout>
  );
}