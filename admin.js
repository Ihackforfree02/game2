// Admin Access Check
function isAdmin() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const current = localStorage.getItem("currentUser");
  if (!current) return false;
  const user = users.find(u => u.username === current || u.email === current);
  return user && user.admin;
}

// Grant admin if email or code
function checkAdminAccess(input) {
  const emails = ["cameronjhannaway@gmail.com", "cameron.hannaway274@education.nsw.gov.au"];
  const code = "02022012";

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const current = localStorage.getItem("currentUser");
  const user = users.find(u => u.username === current || u.email === current);
  if (!user) return false;

  if (emails.includes(input) || input === code) {
    user.admin = true;
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  }
  return false;
}

// User Search
function searchUsers(query) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  return users.filter(u => u.username.includes(query) || u.email.includes(query));
}

// Send Email (EmailJS example)
function sendEmail(to, subject, message) {
  // Requires EmailJS setup
  emailjs.send("service_id", "template_id", {
    to_email: to,
    subject: subject,
    message: message
  }).then(() => alert("Email sent!")).catch(err => alert("Error sending email: " + err));
}

// Display all users in admin table
function displayUsers(users) {
  const tbody = document.getElementById("admin-table-body");
  tbody.innerHTML = "";
  users.forEach(u => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${u.fullname}</td>
      <td>${u.email}</td>
      <td>${u.username}</td>
      <td>${u.admin ? "Yes" : "No"}</td>
    `;
    tbody.appendChild(row);
  });
}
