import { useState } from "react";
import { useNavigate } from "react-router-dom";

import RecruitProgressBar from "./RecruitProgressBar";
import CaptainLookupStep from "./CaptainLookupStep";
import RecruitDetailsStep from "./RecruitDetailsStep";
import RecruitSuccessStep from "./RecruitSuccessStep";

import Button from "../../ui/Button";

export default function RecruitForm() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [captain, setCaptain] = useState(null);

  const [recruit, setRecruit] = useState(null);

  function continueWithoutCaptain() {
    setCaptain(null);
    setStep(3);
  }

  return (
    <>
      {/* Show the progress bar only after the user chooses to continue as a recruit */}
      {step >= 2 && <RecruitProgressBar step={step - 1} />}

      {/* Leadership Choice */}

      {step === 1 && (
        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-8 text-center">
          <h2 className="text-3xl font-bold text-purple-900">
            Become a Captain?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Captains help mobilize others to attend the Move of the Spirit
            event. If you would like to serve as a Captain, we'll take you to
            the Captain Registration Form. Otherwise, you can continue your
            registration as an attendee.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => navigate("/captain-register")}>
              Yes, I Want to be a Captain
            </Button>

            <Button
              variant="outline"
              onClick={() => setStep(2)}
            >
              No, Continue as Attendee
            </Button>
          </div>
        </div>
      )}

      {/* Verify Captain */}

      {step === 2 && (
        <CaptainLookupStep
          captain={captain}
          setCaptain={setCaptain}
          nextStep={() => setStep(3)}
          skipCaptain={continueWithoutCaptain}
        />
      )}

      {/* Recruit Details */}

      {step === 3 && (
        <RecruitDetailsStep
          captain={captain}
          previousStep={() => setStep(2)}
          onSuccess={(response) => {
            setRecruit(response);
            setStep(4);
          }}
        />
      )}

      {/* Success */}

      {step === 4 && (
        <RecruitSuccessStep
          recruit={recruit}
        />
      )}
    </>
  );
}