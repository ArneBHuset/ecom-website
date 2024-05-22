const URL = "https://v2.api.noroff.dev/online-shop";

export default async function ApiCall() {
  try {
    const request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(URL, request);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error while fetching data");
  }
}
