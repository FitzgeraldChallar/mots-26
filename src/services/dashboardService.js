import api from "./api";

export async function getDashboard() {
  const token = localStorage.getItem("access");

  const response = await api.get("/dashboard/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
