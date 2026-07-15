export default function DashboardStat({
  title,
  value,
  color = "purple",
}) {
  const colors = {
    purple: "bg-purple-100 text-purple-900",
    yellow: "bg-yellow-100 text-yellow-900",
    green: "bg-green-100 text-green-900",
  };

  return (
    <div
      className={`
        rounded-3xl
        p-6
        shadow-lg
        ${colors[color]}
      `}
    >
      <p className="text-sm font-medium opacity-80">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-3">
        {value}
      </h2>
    </div>
  );
}