import api from "./api";

export async function getCaptainDashboard(captainCode) {
  const response = await api.get(
    `/captains/dashboard/${captainCode}/`
  );

  return response.data;
}
