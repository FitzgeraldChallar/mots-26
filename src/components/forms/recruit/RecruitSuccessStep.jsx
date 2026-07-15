import { CheckCircle2, Home, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../ui/Button";

export default function RecruitSuccessStep({ recruit }) {
  return (
    <div className="text-center">

      <div className="mx-auto w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">

        <CheckCircle2
          size={60}
          className="text-green-600"
        />

      </div>

      <h2 className="mt-8 text-4xl font-bold text-purple-900">
        Registration Successful!
      </h2>

      <p className="mt-4 text-gray-600 leading-7">

        Thank you

        <strong> {recruit?.full_name} </strong>

        for registering for

        <strong> Move of the Spirit 2026.</strong>

      </p>

      <div className="mt-8 rounded-3xl bg-purple-50 border border-purple-100 p-6">

        <p className="text-lg">
          Your registration has been received successfully.
        </p>

        <p className="mt-3 text-gray-500">
          We look forward to worshipping with you this November.
        </p>

      </div>

      <div className="mt-10 flex flex-col gap-4">

        <Button
          onClick={() => window.location.reload()}
          className="w-full"
        >
          <UserPlus size={18} />

          Register Another Person
        </Button>

        <Link to="/" className="w-full">

          <Button
            variant="outline"
            className="w-full"
          >
            <Home size={18} />

            Back Home
          </Button>

        </Link>

      </div>

    </div>
  );
}