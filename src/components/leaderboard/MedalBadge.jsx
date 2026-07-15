export default function MedalBadge({ rank }) {
  if (rank === 1) {
    return (
      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">
        🥇
      </div>
    );
  }

  if (rank === 2) {
    return (
      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-xl shadow-lg">
        🥈
      </div>
    );
  }

  if (rank === 3) {
    return (
      <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-white text-xl shadow-lg">
        🥉
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold shadow-lg">
      #{rank}
    </div>
  );
}