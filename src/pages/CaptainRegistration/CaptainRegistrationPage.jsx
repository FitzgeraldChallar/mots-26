import MainLayout from "../../components/layout/MainLayout";
import CaptainForm from "../../components/forms/CaptainForm";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaptainRegistrationPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-linear-to-br from-purple-50 via-white to-yellow-50 py-20 px-6">

        <div className="max-w-5xl mx-auto">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 font-medium mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="bg-white rounded-4xl shadow-2xl border border-purple-100 overflow-hidden">

            <div className="bg-linear-to-r from-purple-900 via-purple-800 to-purple-700 px-10 py-10">

              <h1 className="text-5xl font-bold text-white">
                Become a Captain
              </h1>

              <p className="mt-4 text-purple-100 text-lg">
                Help mobilize people for Move of the Spirit, 2026.
              </p>

            </div>

            <div className="px-10 py-10">

              <CaptainForm />

            </div>

          </div>

        </div>

      </section>
    </MainLayout>
  );
}