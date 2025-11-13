console.log("✅ Script IndexNow Blogger chargé !");

const HOST = "martouba.blogspot.com"; // 🔁 Remplace par ton nom de domaine complet sans https://
const KEY = "258e84be5f074805b04fc3e376349631"; // 🔑 Clé IndexNow
const ENDPOINT = "https://indexnow-proxy.marrtouba-tn.workers.dev/";

// Cette fonction notifie IndexNow de la nouvelle URL
async function notifyIndexNow(url) {
  try {
    console.log("🚀 Envoi de l'URL à IndexNow :", url);
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        urlList: [url]
      })
    });
    console.log("📦 Réponse IndexNow :", await response.text());
  } catch (e) {
    console.error("⚠️ Erreur IndexNow :", e.message);
  }
}

// Détection automatique des pages Blogger
document.addEventListener("DOMContentLoaded", () => {
  const url = window.location.href;

  // Exclut les pages statiques
  if (url.includes("/p/")) {
    console.log("⏩ Page statique ignorée :", url);
    return;
  }

  // Envoie automatique pour les articles
  if (url.includes(".blogspot.com/") || url.includes("/20")) {
    notifyIndexNow(url);
  }
});

