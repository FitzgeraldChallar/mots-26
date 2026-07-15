import { useState } from "react";

import Button from "../../ui/Button";
import { validateCaptainStep2 } from "../../../utils/validation";

export default function ChurchStep({
  data,
  updateForm,
  nextStep,
  previousStep,
}) {
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const validationErrors = validateCaptainStep2(data);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    nextStep();
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
        Church Information
      </h2>

      {/* Church Branch */}

      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Church Name
        </label>

        <input
          type="text"
          value={data.church_branch}
          onChange={(e) => {
            updateForm({
              church_branch: e.target.value,
            });

            setErrors((prev) => ({
              ...prev,
              church_branch: "",
            }));
          }}
          className={inputClass("church_branch")}
        />

        {errors.church_branch && (
          <p className="mt-2 text-sm text-red-600">
            {errors.church_branch}
          </p>
        )}
      </div>

      {/* Zone */}

      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Church Community
        </label>

        <input
          type="text"
          value={data.zone}
          onChange={(e) => {
            updateForm({
              zone: e.target.value,
            });

            setErrors((prev) => ({
              ...prev,
              zone: "",
            }));
          }}
          className={inputClass("zone")}
        />

        {errors.zone && (
          <p className="mt-2 text-sm text-red-600">
            {errors.zone}
          </p>
        )}
      </div>

      {/* Address */}

      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Church Full Address <span className="text-gray-400">(Optional)</span>
        </label>

        <input
          type="text"
          value={data.address}
          onChange={(e) =>
            updateForm({
              address: e.target.value,
            })
          }
          className={inputClass("address")}
        />
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
          onClick={handleNext}
          className="w-full sm:w-auto"
        >
          Continue →
        </Button>

      </div>

    </div>
  );
}