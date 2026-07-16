import { useState } from "react";
import toast from "react-hot-toast";

import Button from "../../ui/Button";
import { registerRecruit } from "../../../services/recruitService";
import LoadingSpinner from "../../ui/LoadingSpinner";

export default function RecruitDetailsStep({
  captain,
  previousStep,
  onSuccess,
}) {
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    captain_code: captain?.captain_code || "",
    full_name: "",
    gender: "",
    age: "",
    phone: "",
    church: "",
    community: "",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validate = () => {
    const e = {};

    if (!formData.full_name.trim())
      e.full_name = "Full name is required.";

    if (!formData.gender)
      e.gender = "Please select your gender.";

    if (!formData.age || Number(formData.age) < 5)
      e.age = "Please enter a valid age.";

    if (!/^\d{10}$/.test(formData.phone))
      e.phone = "Phone number must contain exactly 10 digits.";

    if (!formData.church.trim())
      e.church = "Church name is required.";

    if (!formData.community.trim())
      e.community = "Community is required.";

    return e;
  };

  const submit = async () => {
    const validation = validate();

    if (Object.keys(validation).length) {
      setErrors(validation);
      toast.error("Please correct the errors in the form.");
      return;
    }

    try {
      setLoading(true);

      const response = await registerRecruit(formData);

      toast.success("Registration successful!");
      onSuccess(response);

    } catch (err) {
      console.error(err);

      if (err.response && err.response.data) {
        if (typeof err.response.data === "object") {
          Object.entries(err.response.data).forEach(([field, messages]) => {
            const msg = Array.isArray(messages)
              ? messages.join(", ")
              : messages;

            toast.error(`${field}: ${msg}`);
          });
        } else {
          toast.error(err.response.data);
        }
      } else {
        toast.error("Registration failed.");
      }
    } finally {
      setLoading(false);
    }
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
transition
${
  errors[field]
    ? "border-red-500"
    : "border-gray-300 focus:border-purple-700 focus:ring-4 focus:ring-purple-100"
}
`;

  return (
    <div className="space-y-8">

      {/* Captain Information */}

      {captain ? (
        <div className="rounded-2xl bg-green-50 border border-green-300 p-5">

          <h3 className="font-bold text-green-700">
            Registering Under
          </h3>

          <p className="mt-2 text-lg font-semibold">
            {captain.full_name}
          </p>

          <p>{captain.church_branch}</p>

        </div>
      ) : (
        <div className="rounded-2xl bg-blue-50 border border-blue-300 p-5">

          <h3 className="font-bold text-blue-700">
            Independent Registration
          </h3>

          <p className="mt-2 text-gray-700">
            You are registering without a Captain. Your registration will
            still be recorded for the event.
          </p>

        </div>
      )}

      {/* Registration Form */}

      <div className="space-y-5">

        <div>
          <label className="font-semibold">Full Name</label>

          <input
            className={inputClass("full_name")}
            value={formData.full_name}
            onChange={(e) =>
              updateField("full_name", e.target.value)
            }
          />

          {errors.full_name && (
            <p className="text-red-600 text-sm mt-2">
              {errors.full_name}
            </p>
          )}
        </div>

        <div>
          <label className="font-semibold">Gender</label>

          <select
            className={inputClass("gender")}
            value={formData.gender}
            onChange={(e) =>
              updateField("gender", e.target.value)
            }
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          {errors.gender && (
            <p className="text-red-600 text-sm mt-2">
              {errors.gender}
            </p>
          )}
        </div>

        <div>
          <label className="font-semibold">Age</label>

          <input
            type="number"
            className={inputClass("age")}
            value={formData.age}
            onChange={(e) =>
              updateField("age", e.target.value)
            }
          />

          {errors.age && (
            <p className="text-red-600 text-sm mt-2">
              {errors.age}
            </p>
          )}
        </div>

        <div>
          <label className="font-semibold">Phone Number</label>

          <input
            className={inputClass("phone")}
            value={formData.phone}
            onChange={(e) =>
              updateField("phone", e.target.value)
            }
          />

          {errors.phone && (
            <p className="text-red-600 text-sm mt-2">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="font-semibold">Church</label>

          <input
            className={inputClass("church")}
            value={formData.church}
            onChange={(e) =>
              updateField("church", e.target.value)
            }
          />

          {errors.church && (
            <p className="text-red-600 text-sm mt-2">
              {errors.church}
            </p>
          )}
        </div>

        <div>
          <label className="font-semibold">Community</label>

          <input
            className={inputClass("community")}
            value={formData.community}
            onChange={(e) =>
              updateField("community", e.target.value)
            }
          />

          {errors.community && (
            <p className="text-red-600 text-sm mt-2">
              {errors.community}
            </p>
          )}
        </div>

      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between">

        <Button
          variant="outline"
          onClick={previousStep}
          className="w-full sm:w-auto"
        >
          ← Back
        </Button>

        <Button
          onClick={submit}
          disabled={loading}
          className="w-full sm:w-auto"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <LoadingSpinner text="Registering..." />
            </span>
          ) : (
            "Complete Registration"
          )}
        </Button>

      </div>

    </div>
  );
}