const jogosPGSoft = [
  "Mahjong Ways", "Fortune Tiger", "Starlight Princess", "Wild Bandito",
  "Lucky Neko", "Caishen Wins", "Treasure of Aztec", "Jurassic Kingdom",
  "Queen of Bounty", "Leprechaun Riches", "Ganesha Gold", "Gem Saviour",
  "Dragon Hatch", "Piggy Gold", "Phoenix Rises", "Double Fortune"
];

function gerarStatus() {
  const status = ["🔥 PAGANDO", "⚠️ EM TESTE", "❌ NÃO RECOMENDADO"];
  return status[Math.floor(Math.random() * status.length)];
}

function gerarValor() {
  return (Math.random() * 150).toFixed(2).replace(".", ",");
}

function carregarJogos() {
  const container = document.getElementById("gamesContainer");
  jogosPGSoft.forEach(nome => {
    const div = document.createElement("div");
    div.className = "game-card";
    div.innerHTML = `
      <h3>${nome}</h3>
      <p>Status: <strong>${gerarStatus()}</strong></p>
      <p>Último ganho: <strong>R$${gerarValor()}</strong></p>
    `;
    container.appendChild(div);
  });
}

carregarJogos();
