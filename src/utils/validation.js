export const validateCaptainStep1 = (data) => {
  const errors = {};

  // Full Name
  if (!data.full_name.trim()) {
    errors.full_name = "Full name is required.";
  } else if (data.full_name.trim().length < 3) {
    errors.full_name = "Full name must be at least 3 characters.";
  }

  // Gender
  if (!data.gender) {
    errors.gender = "Please select your gender.";
  }

  // Phone
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\d{10}$/.test(data.phone)) {
    errors.phone = "Phone number must contain exactly 10 digits.";
  }

  // Email (optional)
  if (
    data.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  return errors;
};

export const validateCaptainStep2 = (data) => {
  const errors = {};

  if (!data.church_branch.trim()) {
    errors.church_branch = "Church Name is required.";
  }

  if (!data.zone.trim()) {
    errors.zone = "Zone is required.";
  }

  return errors;
};

export const validateCaptainStep3 = (data) => {
  const errors = {};

  if (!data.target) {
    errors.target = "Recruitment target is required.";
  } else if (Number(data.target) < 15) {
    errors.target = "Minimum recruitment target is 15 people.";
  }

  return errors;
};
