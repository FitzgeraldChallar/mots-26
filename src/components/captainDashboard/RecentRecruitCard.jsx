import { User } from "lucide-react";

export default function RecentRecruitCard({
  recruit,
}) {
  const date = new Date(
    recruit.created_at
  ).toLocaleDateString();

  return (
    <div className="flex items-center justify-between p-4 rounded-2xl border">

      <div className="flex items-center gap-4">

        <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center">

          <User size={18} />

        </div>

        <div>

          <h3 className="font-semibold">
            {recruit.full_name}
          </h3>

          <p className="text-sm text-gray-500">
            {date}
          </p>

        </div>

      </div>

    </div>
  );
}
