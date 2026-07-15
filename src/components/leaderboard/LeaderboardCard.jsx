import { motion } from "framer-motion";
import { Users } from "lucide-react";

import MedalBadge from "./MedalBadge";

export default function LeaderboardCard({ captain }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
        bg-white
        rounded-3xl
        shadow-lg
        border
        border-gray-100
        p-6
      "
    >
      <div className="flex items-start gap-5">

        <MedalBadge rank={captain.rank} />

        <div className="flex-1">

          <h2 className="text-2xl font-bold text-purple-900">
            {captain.full_name}
          </h2>

          <p className="text-gray-600">
            {captain.church_branch}
          </p>

          <p className="text-gray-500">
            {captain.zone}
          </p>

          <p className="mt-2 text-sm text-gray-500">
            {captain.captain_code}
          </p>

          <div className="mt-5">

            <div className="flex justify-between mb-2 text-sm">

              <span>
                Recruitment Progress
              </span>

              <strong>
                {captain.recruit_count} / {captain.target}
              </strong>

            </div>

            <div className="h-3 rounded-full bg-gray-200 overflow-hidden">

              <div
                className="h-full rounded-full bg-linear-to-r from-yellow-400 to-purple-700 transition-all duration-700"
                style={{
                  width: `${captain.progress}%`,
                }}
              />

            </div>

            <div className="flex justify-between items-center mt-3">

              <span className="flex items-center gap-2 text-gray-600">

                <Users size={16} />

                Progress

              </span>

              <strong>
                {captain.progress}%
              </strong>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}