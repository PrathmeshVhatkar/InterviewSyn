import { BASE_API_URL } from "../constant";

export async function getUserData() {
  const data = await fetch(BASE_API_URL);
  const response = await data.json();
  return response;
}

export async function editUserData(id, userData) {
  const data = await fetch(`${BASE_API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application-json",
    },
    body: JSON.stringify(userData),
  });

  const response = await data.json();
  return response;
}

export async function addUserData(userData) {
  const data = await fetch(BASE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application-json",
    },
    body: JSON.stringify(userData),
  });

  const response = await data.json();
  return response;
}

export async function deleteUserData(id) {
  const data = await fetch(`${BASE_API_URL}/${id}`, {
    method: "DELETE",
  });
  const response = await data.json();
  return response;
}
