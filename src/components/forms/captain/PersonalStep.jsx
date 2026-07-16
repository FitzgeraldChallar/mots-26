import { useState } from "react";
import Button from "../../ui/Button";
import { validateCaptainStep1 } from "../../../utils/validation";

export default function PersonalStep({
  data,
  updateForm,
  nextStep,
}) {
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const validationErrors = validateCaptainStep1(data);

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
        Personal Information
      </h2>

      {/* Full Name */}

      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Full Name
        </label>

        <input
          type="text"
          value={data.full_name}
          onChange={(e) => {
            updateForm({
              full_name: e.target.value,
            });

            setErrors((prev) => ({
              ...prev,
              full_name: "",
            }));
          }}
          className={inputClass("full_name")}
        />

        {errors.full_name && (
          <p className="mt-2 text-sm text-red-600">
            {errors.full_name}
          </p>
        )}
      </div>

      {/* Gender */}

      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Gender
        </label>

        <select
          value={data.gender}
          onChange={(e) => {
            updateForm({
              gender: e.target.value,
            });

            setErrors((prev) => ({
              ...prev,
              gender: "",
            }));
          }}
          className={inputClass("gender")}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        {errors.gender && (
          <p className="mt-2 text-sm text-red-600">
            {errors.gender}
          </p>
        )}
      </div>

      {/* NEW - Age Range */}

      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Age Range
        </label>

        <select
          value={data.age_range}
          onChange={(e) => {
            updateForm({
              age_range: e.target.value,
            });

            setErrors((prev) => ({
              ...prev,
              age_range: "",
            }));
          }}
          className={inputClass("age_range")}
        >
          <option value="">Select Age Range</option>
          <option value="12-18">12 - 18</option>
          <option value="19-26">19 - 26</option>
          <option value="27-35">27 - 35</option>
          <option value="36-50">36 - 50</option>
          <option value="51-75">51 - 75</option>
          <option value="76+">76 and above</option>
        </select>

        {errors.age_range && (
          <p className="mt-2 text-sm text-red-600">
            {errors.age_range}
          </p>
        )}
      </div>

      {/* Occupation */}

      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Occupation <span className="text-gray-400">(Optional)</span>
        </label>

        <input
          type="text"
          value={data.occupation}
          onChange={(e) =>
            updateForm({
              occupation: e.target.value,
            })
          }
          className={inputClass("occupation")}
        />
      </div>

      {/* Phone */}

      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Phone Number
        </label>

        <input
          type="tel"
          inputMode="numeric"
          maxLength={10}
          value={data.phone}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");

            updateForm({
              phone: value,
            });

            setErrors((prev) => ({
              ...prev,
              phone: "",
            }));
          }}
          className={inputClass("phone")}
        />

        {errors.phone && (
          <p className="mt-2 text-sm text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      {/* NEW - WhatsApp */}

      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          WhatsApp Number <span className="text-gray-400">(Optional)</span>
        </label>

        <input
          type="tel"
          inputMode="numeric"
          maxLength={10}
          value={data.whatsapp_number}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");

            updateForm({
              whatsapp_number: value,
            });

            setErrors((prev) => ({
              ...prev,
              whatsapp_number: "",
            }));
          }}
          className={inputClass("whatsapp_number")}
        />
      </div>

      {/* Email */}

      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Email Address (Optional)
        </label>

        <input
          type="email"
          value={data.email}
          onChange={(e) => {
            updateForm({
              email: e.target.value,
            });

            setErrors((prev) => ({
              ...prev,
              email: "",
            }));
          }}
          className={inputClass("email")}
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div className="pt-4 flex justify-end">
        <Button
          type="button"
          onClick={handleNext}
          className="w-full sm:w-auto px-10"
        >
          Continue →
        </Button>
      </div>

    </div>
  );
}