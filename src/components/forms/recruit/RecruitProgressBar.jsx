import { Check } from "lucide-react";

export default function RecruitProgressBar({ step }) {
  const steps = [
    "Verify Captain",
    "Your Information",
    "Complete",
  ];

  return (
    <div className="mb-10">

      <div className="flex items-center justify-between">

        {steps.map((title, index) => {
          const current = index + 1;
          const completed = step > current;
          const active = step === current;

          return (
            <div
              key={title}
              className="flex-1 flex items-center"
            >
              <div className="flex flex-col items-center">

                <div
                  className={`
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    font-bold
                    transition-all
                    duration-300

                    ${
                      completed
                        ? "bg-green-600 text-white"
                        : active
                        ? "bg-purple-900 text-white"
                        : "bg-gray-200 text-gray-500"
                    }
                  `}
                >
                  {completed ? (
                    <Check size={20} />
                  ) : (
                    current
                  )}
                </div>

                <p
                  className={`
                    mt-3
                    text-sm
                    font-medium
                    text-center

                    ${
                      active
                        ? "text-purple-900"
                        : "text-gray-500"
                    }
                  `}
                >
                  {title}
                </p>

              </div>

              {index < steps.length - 1 && (
                <div
                  className={`
                    flex-1
                    h-1
                    mx-3
                    rounded

                    ${
                      completed
                        ? "bg-green-500"
                        : "bg-gray-200"
                    }
                  `}
                />
              )}

            </div>
          );
        })}

      </div>

    </div>
  );
}