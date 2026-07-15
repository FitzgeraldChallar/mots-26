export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-[#D4AF37] text-black hover:bg-yellow-400 border-2 border-yellow-300 shadow-2xl",

    secondary:
      "bg-purple-900 text-white hover:bg-purple-800 shadow-xl",

    outline:
      "border border-purple-900 text-purple-900 bg-white hover:bg-purple-900 hover:text-white transition-all duration-300",
  };

  return (
    <button
      {...props}
      className={`
        px-6
        py-3
        rounded-xl
        font-semibold
        cursor-pointer
        transition-all
        duration-300
        hover:scale-105
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}