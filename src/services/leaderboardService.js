import api from "./api";

export async function getLeaderboard() {
  const response = await api.get("/captains/leaderboard/");

  return response.data;
}