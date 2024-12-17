const stateKey = "spotify_auth_state";
const client_id = "3fce480a81aa4d239b334c29d7682ca2"; // Your client id
const redirect_uri = "http://localhost:5173"; // Your redirect uri
const scope = "user-read-private user-read-email";

function generateRandomString(length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function getHashParams() {
  const hashParams = {};
  let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

export function redirectToSpotifyAuth() {
  const state = generateRandomString(16);
  localStorage.setItem(stateKey, state);

  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  url += "&state=" + encodeURIComponent(state);

  window.location.href = url;
}

export function getAccessToken() {
  const params = getHashParams();
  const access_token = params.access_token;
  const state = params.state;
  const storedState = localStorage.getItem(stateKey);

  if (access_token && state === storedState) {
    localStorage.removeItem(stateKey);
    localStorage.setItem("spotify_access_token", access_token);
    return access_token;
  } else {
    console.log("Need to authenticate with Spotify");
    redirectToSpotifyAuth();
    return null;
  }
}

export async function makeAuthenticatedRequest(url, options = {}) {
  const access_token = localStorage.getItem("spotify_access_token");
  if (!access_token) {
    console.log("No access token available");
    return;
  }

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  return response.json();
}
