export default function clearSessionStorage() {
  sessionStorage.clear();
  console.log("Session storage cleared");
  window.location.reload();
}
