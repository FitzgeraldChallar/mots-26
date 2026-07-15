export default function LoadingSpinner({
  text = "Loading...",
  size = "w-5 h-5",
}) {
  return (
    <span className="inline-flex items-center justify-center gap-3">

      <span
        className={`
          ${size}
          border-2
          border-white
          border-t-transparent
          rounded-full
          animate-spin
        `}
      />

      <span>{text}</span>

    </span>
  );
}