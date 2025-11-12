console.log("✅ IndexNow Blogger chargé !");
// 🚀 Auto IndexNow pour Blogger - Version stable 2025
(function() {
  // === CONFIGURATION ===
  const HOST = "martouba.blogspot.com"; // 🔧 ton domaine Blogger
  const KEY = "258e84be5f074805b04fc3e376349631";      // 🔧 ta clé IndexNow Bing
  const ENDPOINT = "https://api.indexnow.org/indexnow"; // Serveur IndexNow officiel

  // Fonction : envoyer l’URL actuelle à IndexNow
  async function envoyerIndexNow(url) {
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          host: HOST,
          key: KEY,
          urlList: [url]
        })
      });
      console.log("📢 IndexNow envoyé :", await res.text());
    } catch (e) {
      console.warn("🚫 Erreur IndexNow :", e.message);
    }
  }

  // === LOGIQUE ===
  const urlActuelle = window.location.href;
  if (urlActuelle.includes("/20")) { // les articles Blogger contiennent /20xx/
    const cleCache = "indexnow_" + urlActuelle;
    if (!localStorage.getItem(cleCache)) {
      localStorage.setItem(cleCache, Date.now());
      envoyerIndexNow(urlActuelle);
    } else {
      console.log("⏩ Déjà envoyé :", urlActuelle);
    }
  }
})();
