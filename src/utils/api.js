const baseUrl = process.env.NODE_ENV === "production" 
  ? "https://api.whattowearexpress.twilightparadox.com"
  : "http://localhost:3001";

function getItems() {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

function addItem({ name, imageUrl, weather }) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

function deleteItem(id) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

function signup(userData) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

function signin(userData) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

function getCurrentUser(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  );
}

function likeBtn(itemId, token) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  );
}

function disLikeBtn(itemId, token) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  );
}

function editProfileBtn(data, token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  );
}

export { getItems, addItem, deleteItem, signup, signin, getCurrentUser, likeBtn, disLikeBtn, editProfileBtn };
