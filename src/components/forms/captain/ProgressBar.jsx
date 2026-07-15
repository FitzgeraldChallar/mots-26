export default function ProgressBar({ step }) {
  const steps = [
    "Personal",
    "Church",
    "Target",
  ];

  return (
    <div className="mb-12">

      <div className="flex items-center">

        {steps.map((title, index) => {
          const current = index + 1;

          return (
            <div
              key={title}
              className="flex-1 flex items-center"
            >
              <div className="flex flex-col items-center">

                <div
                  className={`
                    w-14
                    h-14
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-lg
                    font-bold
                    transition-all

                    ${
                      current < step
                        ? "bg-green-600 text-white"
                        : current === step
                        ? "bg-[#D4AF37] text-black shadow-lg"
                        : "bg-gray-200 text-gray-500"
                    }
                  `}
                >
                  {current < step ? "✓" : current}
                </div>

                <span className="mt-3 text-sm font-semibold">
                  {title}
                </span>

              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-4 rounded-full ${
                    current < step
                      ? "bg-green-600"
                      : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}