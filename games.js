// List of games with name, URL, and logo placeholder
const games = [
  { name: "Minecraft", url: "https://ihackforfree02.github.io/Precision-Client-For-EaglerCraft/", logo: "" },
  { name: "Time Shooter", url: "https://schoolaccountforme.github.io/Time-Shooter-3-SWAT/", logo: "" },
  { name: "1v1.LOL", url: "https://ihackforfree02.github.io/1v1.lol/", logo: "" },
  { name: "2048", url: "https://schoolaccountforme.github.io/2048/", logo: "" },
  { name: "Gun Spin", url: "https://ihackforfree02.github.io/GunSpin/", logo: "" },
  { name: "Polytrack", url: "https://ihackforfree02.github.io/polytrack.3/", logo: "" },
  { name: "Stickman Hook", url: "https://ihackforfree02.github.io/Stickman-Hook/", logo: "" },
  { name: "Cluster Rush", url: "https://ihackforfree02.github.io/cluster/", logo: "" },
  { name: "Cookie Clicker", url: "https://ihackforfree02.github.io/cookie-clicker/", logo: "" },
  { name: "CSGO Clicker", url: "https://ezunblocktheopps.github.io/ezunblocktheopp.github.io/", logo: "" },
  { name: "Dogeminer", url: "https://amazingwebsitesupersigma.github.io/dogeminer/", logo: "" }
];

// Populate homepage
function displayGames() {
  const grid = document.getElementById("game-grid");
  grid.innerHTML = "";
  games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    const img = document.createElement("img");
    // Try official logos first
    img.src = game.logo || `https://via.placeholder.com/160x120.png?text=${encodeURIComponent(game.name)}`;
    img.alt = game.name;

    const title = document.createElement("p");
    title.textContent = game.name;

    card.appendChild(img);
    card.appendChild(title);
    card.addEventListener("click", () => {
      window.open(game.url, "_blank");
    });

    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", displayGames);
