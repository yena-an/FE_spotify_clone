export const getAccessToken = async () => {
  const res = await fetch("http://localhost:3001/api/token");

  if (!res.ok) {
    throw new Error("Failed to get access token");
  }

  const data = await res.json();
  return data.access_token;
};
