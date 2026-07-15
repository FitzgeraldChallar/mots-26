import { useState } from 'react';
import toast from 'react-hot-toast';
import PersonalStep from './captain/PersonalStep';
import ChurchStep from './captain/ChurchStep';
import TargetStep from './captain/TargetStep';
import ProgressBar from './captain/ProgressBar';
import SuccessStep from './captain/SuccessStep';
import { registerCaptain } from '../../services/captainService';

export default function CaptainForm() {
  const initialFormData = {
    full_name: '',
    gender: '',
    phone: '',
    email: '',
    church_branch: '',
    zone: '',
    occupation: '',
    address: '',
    target: '',
  };

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [captain, setCaptain] = useState(null);
  const [formData, setFormData] = useState(initialFormData);

  const nextStep = () => setStep((prev) => prev + 1);
  const previousStep = () => setStep((prev) => prev - 1);

  const updateForm = (values) => {
    setFormData((prev) => ({
      ...prev,
      ...values,
    }));
  };

  const submitRegistration = async () => {
    try {
      setLoading(true);
      const response = await registerCaptain(formData);
      setCaptain(response);
      toast.success('Registration successful!');
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.log(error.response.data);
        if (typeof error.response.data === 'object') {
          // Display each validation error in its own toast message
          Object.entries(error.response.data).forEach(([field, messages]) => {
            const msg = Array.isArray(messages) ? messages.join(', ') : messages;
            toast.error(`${field}: ${msg}`);
          });
        } else {
          toast.error(error.response.data);
        }
      } else {
        toast.error('Something went wrong.');
      }
    } finally {
      setLoading(false);
    }
  };

  const registerAnother = () => {
    setCaptain(null);
    setStep(1);
    setFormData(initialFormData);
  };

  if (captain) {
    return (
      <SuccessStep captain={captain} onRegisterAnother={registerAnother} />
    );
  }

  return (
    <>
      <ProgressBar step={step} />
      {step === 1 && (
        <PersonalStep data={formData} updateForm={updateForm} nextStep={nextStep} />
      )}
      {step === 2 && (
        <ChurchStep data={formData} updateForm={updateForm} nextStep={nextStep} previousStep={previousStep} />
      )}
      {step === 3 && (
        <TargetStep data={formData} updateForm={updateForm} previousStep={previousStep} submitRegistration={submitRegistration} loading={loading} />
      )}
    </>
  );
}
