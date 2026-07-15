import { useState } from "react";

import RecruitProgressBar from "./RecruitProgressBar";
import CaptainLookupStep from "./CaptainLookupStep";
import RecruitDetailsStep from "./RecruitDetailsStep";
import RecruitSuccessStep from "./RecruitSuccessStep";

export default function RecruitForm() {
  const [step, setStep] = useState(1);

  const [captain, setCaptain] = useState(null);

  const [recruit, setRecruit] = useState(null);

  return (
    <>
      <RecruitProgressBar step={step} />

      {step === 1 && (
        <CaptainLookupStep
          captain={captain}
          setCaptain={setCaptain}
          nextStep={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <RecruitDetailsStep
          captain={captain}
          previousStep={() => setStep(1)}
          onSuccess={(response) => {
            setRecruit(response);
            setStep(3);
          }}
        />
      )}

      {step === 3 && (
        <RecruitSuccessStep
          recruit={recruit}
        />
      )}
    </>
  );
}