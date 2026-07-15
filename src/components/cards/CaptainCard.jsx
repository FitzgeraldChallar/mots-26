import { motion } from "framer-motion";
import { CheckCircle, Users } from "lucide-react";

export default function CaptainCard({ captain }) {
  const progress =
    captain.target > 0
      ? Math.min(
          (captain.recruit_count / captain.target) * 100,
          100
        )
      : 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        rounded-3xl
        bg-linear-to-r
        from-green-50
        to-emerald-50
        border
        border-green-200
        shadow-lg
        p-6
      "
    >
      <div className="flex items-center gap-3 mb-5">
        <CheckCircle
          size={28}
          className="text-green-600"
        />

        <div>
          <h3 className="font-bold text-xl text-green-700">
            Captain Verified
          </h3>

          <p className="text-sm text-gray-500">
            Recruiting under this captain
          </p>
        </div>
      </div>

      <div className="space-y-2">

        <h2 className="text-2xl font-bold text-purple-900">
          {captain.full_name}
        </h2>

        <p className="text-gray-600">
          {captain.church_branch}
        </p>

        <p className="text-gray-500">
          {captain.zone}
        </p>

      </div>

      <div className="mt-6 rounded-2xl bg-white p-4 border">

        <div className="flex justify-between text-sm mb-2">
          <span>Captain Code</span>

          <strong>{captain.captain_code}</strong>
        </div>

        <div className="flex justify-between text-sm">
          <span>Recruitment</span>

          <strong>
            {captain.recruit_count} / {captain.target}
          </strong>
        </div>

        <div className="mt-4 h-3 rounded-full bg-gray-200 overflow-hidden">

          <div
            className="h-full rounded-full bg-linear-to-r from-yellow-400 to-purple-700 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="flex items-center justify-between mt-3 text-sm">

          <span className="flex items-center gap-2">
            <Users size={16} />
            Progress
          </span>

          <strong>
            {progress.toFixed(0)}%
          </strong>

        </div>

      </div>
    </motion.div>
  );
}