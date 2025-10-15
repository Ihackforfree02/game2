// SHA-256 hash helper
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Signup
async function signup() {
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!fullname || !email || !username || !password) return alert("Fill all fields!");

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find(u => u.username === username || u.email === email)) return alert("Account exists!");

  const hash = await hashPassword(password);
  users.push({ fullname, email, username, password: hash, admin: false });
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", username);
  alert("Signed up!");
  window.location.href = "index.html";
}

// Login
async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const hash = await hashPassword(password);
  const user = users.find(u => (u.username === username || u.email === username) && u.password === hash);

  if (!user) return alert("Invalid credentials!");

  localStorage.setItem("currentUser", user.username);
  alert("Logged in!");
  window.location.href = "index.html";
}

// Auto-login
document.addEventListener("DOMContentLoaded", () => {
  const current = localStorage.getItem("currentUser");
  if (current) {
    window.location.href = "index.html";
  }
});
