import api from "./api";

export const registerCaptain = async (data) => {
  const response = await api.post("/captains/register/", data);
  return response.data;
};
