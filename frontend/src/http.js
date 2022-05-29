const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
  "Content-Type": "application/json",
};

export async function get(url) {
  return fetch(url, {
    headers,
  })
    .then((response) => response.json())
    .catch((e) => console.error(e));
}

export async function post(url, body) {
  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .catch((e) => console.error(e));
}
