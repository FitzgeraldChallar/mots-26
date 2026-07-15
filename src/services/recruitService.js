import api from "./api";

export const lookupCaptain = async (captainCode) => {
  const response = await api.get(
    `/captains/lookup/${captainCode}/`
  );

  return response.data;
};

export const registerRecruit = async (data) => {
  const response = await api.post(
    "/recruits/register/",
    data
  );

  return response.data;
};
