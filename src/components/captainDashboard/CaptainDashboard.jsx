import DashboardStat from "./DashboardStat";
import RecentRecruitCard from "./RecentRecruitCard";
import Button from "../ui/Button";
import toast from "react-hot-toast";

export default function CaptainDashboard({
  captain,
  onSwitchCaptain,
}) {
  const copyCode = async () => {
    await navigator.clipboard.writeText(
      captain.captain_code
    );

    toast.success("Captain code copied.");
  };

  const shareWhatsApp = () => {
    const text =
      `Join me for Move of the Spirit 2026!\n\n` +
      `Register using my Captain Code:\n\n${captain.captain_code}`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
  };

  return (
    <div className="space-y-10">

      <div>

        <h1 className="text-4xl font-bold text-purple-900">
          Welcome,
          {" "}
          {captain.full_name}
        </h1>

        <p className="text-gray-500 mt-2">
          {captain.captain_code}
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <DashboardStat
          title="Target"
          value={captain.target}
        />

        <DashboardStat
          title="Recruits"
          value={captain.recruit_count}
          color="green"
        />

        <DashboardStat
          title="Progress"
          value={`${captain.progress}%`}
          color="yellow"
        />

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex justify-between mb-3">

          <span>Recruitment Progress</span>

          <strong>
            {captain.recruit_count} / {captain.target}
          </strong>

        </div>

        <div className="h-4 rounded-full bg-gray-200 overflow-hidden">

          <div
            className="h-full rounded-full bg-linear-to-r from-yellow-400 to-purple-700"
            style={{
              width: `${captain.progress}%`,
            }}
          />

        </div>

      </div>

      <div>

        <h2 className="text-2xl font-bold mb-5">
          Recent Recruits
        </h2>

        <div className="space-y-4">

          {captain.recent_recruits.map(
            (recruit) => (
              <RecentRecruitCard
                key={
                  recruit.created_at +
                  recruit.full_name
                }
                recruit={recruit}
              />
            )
          )}

        </div>

      </div>

      <div className="grid sm:grid-cols-3 gap-4">

        <Button onClick={copyCode}>
          Copy Captain Code
        </Button>

        <Button
          variant="secondary"
          onClick={shareWhatsApp}
        >
          Share WhatsApp
        </Button>

        <Button
          variant="outline"
          onClick={onSwitchCaptain}
        >
          Switch Captain
        </Button>

      </div>

    </div>
  );
}