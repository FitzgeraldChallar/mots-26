import { useEffect, useState } from "react";
import { Search, XCircle } from "lucide-react";

import Button from "../../ui/Button";
import LoadingSpinner from "../../ui/LoadingSpinner";
import CaptainCard from "../../cards/CaptainCard";
import { lookupCaptain } from "../../../services/recruitService";

export default function CaptainLookupStep({
  captain,
  setCaptain,
  nextStep,
  skipCaptain,
}) {
  const [captainCode, setCaptainCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!captainCode.trim()) {
      setCaptain(null);
      setError("");
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");

        const response = await lookupCaptain(
          captainCode.trim().toUpperCase()
        );

        setCaptain(response);
      } catch (err) {
        setCaptain(null);
        setError("Captain not found. Please check the code and try again.");
      } finally {
        setLoading(false);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [captainCode, setCaptain]);

  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h2 className="text-3xl font-bold text-purple-900">
          Verify Your Captain
        </h2>

        <p className="mt-2 text-gray-500">
          Enter the Captain Code you received from your Captain.
        </p>

      </div>

      {/* Captain Code */}

      <div>

        <label className="block mb-2 font-semibold text-gray-700">
          Captain Code
        </label>

        <div className="relative">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={captainCode}
            onChange={(e) =>
              setCaptainCode(e.target.value.toUpperCase())
            }
            placeholder="MOS26-XXXXX"
            className="
              w-full
              rounded-2xl
              border
              border-gray-300
              pl-12
              pr-5
              py-4
              text-base
              outline-none
              transition-all
              duration-300
              focus:border-purple-700
              focus:ring-4
              focus:ring-purple-100
            "
          />

        </div>

      </div>

      {/* Loading */}

      {loading && (

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 flex justify-center">

          <LoadingSpinner
            text="Checking Captain..."
            size="w-5 h-5"
          />

        </div>

      )}

      {/* Captain Card */}

      {!loading && captain && (
        <CaptainCard captain={captain} />
      )}

      {/* Error */}

      {!loading && error && (

        <div className="rounded-2xl border border-red-300 bg-red-50 p-5">

          <div className="flex items-center gap-3">

            <XCircle
              size={22}
              className="text-red-600 shrink-0"
            />

            <span className="font-medium text-red-700">
              {error}
            </span>

          </div>

        </div>

      )}

      {/* Continue Button */}

      <div className="space-y-6">

  {/* Continue with verified captain */}

  <div className="flex justify-end">

    <Button
      disabled={!captain}
      onClick={nextStep}
    >
      Continue →
    </Button>

  </div>

  {/* Continue without captain */}

  <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center">

    <h3 className="text-lg font-bold text-gray-800">
      Don't have a Captain Code?
    </h3>

    <p className="mt-2 text-gray-600">
      You can still register for Move of the Spirit 2026 even if you were
      not invited by a captain.
    </p>

    <Button
      variant="outline"
      className="mt-5"
      onClick={skipCaptain}
    >
      Continue Without Captain
    </Button>

  </div>

</div>

    </div>
  );
}
