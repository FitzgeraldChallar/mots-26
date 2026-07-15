import MainLayout from "../../components/layout/MainLayout";
import RecruitForm from "../../components/forms/recruit/RecruitForm";

export default function RecruitRegistrationPage() {
  return (
    <MainLayout>
      <section className="py-20">

        <div className="max-w-3xl mx-auto px-6">

          <RecruitForm />

        </div>

      </section>
    </MainLayout>
  );
}