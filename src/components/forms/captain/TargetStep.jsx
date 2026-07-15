import { useState } from "react";

import Button from "../../ui/Button";
import { validateCaptainStep3 } from "../../../utils/validation";
import LoadingSpinner from "../../ui/LoadingSpinner";

export default function TargetStep({
  data,
  updateForm,
  previousStep,
  submitRegistration,
  loading,
}) {
  const [errors, setErrors] = useState({});

  const targetOptions = [15, 20, 30, 50, 75, 100];

  const encouragement = {
    15: "A great place to start your recruitment journey.",
    20: "Wonderful! Every soul counts.",
    30: "You're helping expand the reach of the event.",
    50: "Outstanding commitment to the vision.",
    75: "Leadership-level commitment. Keep going!",
    100: "Incredible faith! Believe God for a mighty harvest.",
  };

  const handleSubmit = () => {
    const validationErrors = validateCaptainStep3(data);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    submitRegistration();
  };

  const inputClass = (field) => `
    w-full
    rounded-2xl
    border
    px-5
    py-4
    text-base
    min-h-14
    outline-none
    transition-all
    duration-300
    focus:ring-4
    ${
      errors[field]
        ? "border-red-500 focus:ring-red-100"
        : "border-gray-300 focus:border-purple-600 focus:ring-purple-100"
    }
  `;

  return (
    <div className="space-y-8">

      <h2 className="text-3xl font-bold">
        Recruitment Target
      </h2>

      {/* Target Selection */}

      <div className="space-y-6">

        <div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Choose Your Recruitment Target
          </h3>

          <p className="text-gray-500">
            Select the number of people you are trusting God to bring.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {targetOptions.map((option) => (

            <button
              key={option}
              type="button"
              onClick={() => {
                updateForm({
                  target: option,
                });

                setErrors((prev) => ({
                  ...prev,
                  target: "",
                }));
              }}
              className={`
                rounded-2xl
                border-2
                p-6
                transition-all
                duration-200
                cursor-pointer
                hover:scale-105
                active:scale-95

                ${
                  data.target === option
                    ? "bg-purple-900 border-purple-900 text-white shadow-xl"
                    : "bg-white border-gray-200 hover:border-purple-700"
                }
              `}
            >

              <div className="text-4xl font-bold">
                {option}
              </div>

              <div className="text-sm mt-2">
                People
              </div>

            </button>

          ))}

        </div>

        {/* Custom Target */}

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Or Enter Your Own Target
          </label>

          <input
            type="number"
            min="15"
            value={data.target || ""}
            onChange={(e) => {
              updateForm({
                target: Number(e.target.value),
              });

              setErrors((prev) => ({
                ...prev,
                target: "",
              }));
            }}
            className={inputClass("target")}
          />

          {errors.target && (
            <p className="mt-2 text-sm text-red-600">
              {errors.target}
            </p>
          )}

        </div>

        {/* Encouragement */}

        {data.target >= 15 && (

          <div className="rounded-2xl bg-yellow-50 border border-yellow-300 p-5">

            <p className="font-semibold text-yellow-800">

              ✨{" "}

              {encouragement[data.target] ??
                "Thank you for committing to help bring people to this life-changing event."}

            </p>

          </div>

        )}

      </div>

      {/* Review Card */}

      <div className="rounded-2xl bg-purple-50 border border-purple-100 p-6 shadow-sm">

        <h3 className="text-2xl font-bold text-purple-900 mb-6">
          🎉 You're Almost There!
        </h3>

        <p className="text-gray-600 mb-6">
          Please review your information before submitting your registration.
        </p>

        <div className="space-y-6">

          {/* Personal */}

          <div>

            <h4 className="font-bold text-lg text-purple-800 mb-3">
              👤 Personal Information
            </h4>

            <div className="grid sm:grid-cols-2 gap-3 text-gray-700">

              <p><strong>Name:</strong> {data.full_name}</p>

              <p><strong>Gender:</strong> {data.gender}</p>

              <p><strong>Phone:</strong> {data.phone}</p>

              <p><strong>Email:</strong> {data.email || "-"}</p>

            </div>

          </div>

          {/* Church */}

          <div>

            <h4 className="font-bold text-lg text-purple-800 mb-3">
              ⛪ Church Information
            </h4>

            <div className="grid sm:grid-cols-2 gap-3 text-gray-700">

              <p><strong>Church:</strong> {data.church_branch}</p>

              <p><strong>Zone:</strong> {data.zone}</p>

              <p><strong>Occupation:</strong> {data.occupation || "-"}</p>

              <p><strong>Address:</strong> {data.address || "-"}</p>

            </div>

          </div>

          {/* Commitment */}

          <div className="rounded-xl bg-white border border-purple-200 p-5">

            <h4 className="font-bold text-lg text-purple-800 mb-3">
              🎯 Recruitment Commitment
            </h4>

            <div className="text-4xl font-extrabold text-purple-900">
              {data.target || 0}
            </div>

            <p className="text-lg text-gray-700">
              People
            </p>

            {data.target >= 15 && (

              <p className="mt-4 text-yellow-700 font-semibold">

                ✨{" "}

                {encouragement[data.target] ??
                  "Thank you for supporting the vision of Move of the Spirit 2026."}

              </p>

            )}

          </div>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 pt-4">

        <Button
          type="button"
          variant="outline"
          onClick={previousStep}
          className="w-full sm:w-auto"
        >
          ← Back
        </Button>

        <Button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full sm:w-auto"
        >
          {loading ? (
            <LoadingSpinner text="Creating Captain..." />
          ) : (
            "Register as Captain"
          )}
        </Button>

      </div>

    </div>
  );
}