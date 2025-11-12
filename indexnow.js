console.log("✅ IndexNow Blogger chargé !");
// 🚀 Auto IndexNow pour Blogger - Version stable 2025
(function() {
  // === CONFIGURATION ===
  const HOST = "martouba.blogspot.com"; // 🔧 ton domaine Blogger
  const KEY = "258e84be5f074805b04fc3e376349631";      // 🔧 ta clé IndexNow Bing
  const ENDPOINT = "https://api.indexnow.org/indexnow"; // Serveur IndexNow officiel

document.addEventListener("DOMContentLoaded", () => {
  console.log("🔄 Vérification de l’article...");
  const url = window.location.href;
  if (url.includes("/p/")) return; // Ne pas indexer les pages statiques
  notifyIndexNow(url);
});

async function notifyIndexNow(url) {
  try {
    console.log("🚀 Envoi à IndexNow :", url);
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        urlList: [url]
      })
    });
    console.log("📦 Réponse :", await response.text());
  } catch (e) {
    console.error("⚠️ Erreur IndexNow :", e.message);
  }
}
