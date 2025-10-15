// Display game cards
function displayGames() {
  const grid = document.getElementById('game-grid');
  games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `<img src="${game.logo}" alt="${game.name}"><p>${game.name}</p>`;
    card.onclick = () => window.location.href = game.url;
    grid.appendChild(card);
  });
}
document.addEventListener('DOMContentLoaded', displayGames);

// Chat toggle
function toggleChat() {
  const chat = document.getElementById('chat-widget');
  chat.style.display = (chat.style.display === 'none' || chat.style.display === '') ? 'block' : 'none';
}
