import { URL } from "./api-variables";
import { content } from "./api-variables";

export default async function ApiCall(id = "") {
  try {
    const response = await fetch(`${URL}/${id}`, content);
    // console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error while fetching data");
  }
}
