import { useState } from "react";

import Button from "../ui/Button";

export default function CaptainLookup({
  onLookup,
}) {
  const [code, setCode] = useState("");

  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-center text-purple-900">
        Captain Dashboard
      </h2>

      <p className="text-gray-500 mt-4 text-center">
        Enter your Captain Code
      </p>

      <input
        value={code}
        onChange={(e) =>
          setCode(
            e.target.value.toUpperCase()
          )
        }
        placeholder="MOS26-XXXXX"
        className="
          w-full
          rounded-2xl
          border
          mt-8
          p-4
          outline-none
          focus:ring-4
          focus:ring-purple-100
          focus:border-purple-700
        "
      />

      <Button
        className="w-full mt-6"
        onClick={() =>
          onLookup(code)
        }
      >
        View Dashboard
      </Button>

    </div>
  );
}