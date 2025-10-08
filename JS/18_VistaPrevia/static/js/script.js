document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("main-iframe");
  const mainTitle = document.getElementById("main-title");
  const mainMeta = document.getElementById("main-meta");
  const videoItems = document.querySelectorAll(".video-small");

  // Extrae ID de YouTube desde URL o devuelve mismo si ya es ID
  function extractYouTubeID(input) {
    if (!input) return null;
    const maybeId = input.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(maybeId)) return maybeId;

    const patterns = [
      /(?:youtube\.com\/.*v=)([a-zA-Z0-9_-]{11})/,
      /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
      /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/
    ];

    for (const p of patterns) {
      const m = input.match(p);
      if (m && m[1]) return m[1];
    }

    const fallback = input.match(/([a-zA-Z0-9_-]{11})/);
    return fallback ? fallback[1] : null;
  }

  // Construye URL embed con autoplay
  function buildEmbedUrl(videoId) {
    // autoplay=1 para reproducir al cargar (algunos navegadores requieren mute para autoplay)
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  }

  // Cambia el iframe principal y la info
  function changeMainVideoFromItem(item) {
    const raw = item.getAttribute("data-video");
    const id = extractYouTubeID(raw);
    if (!id) {
      console.warn("YouTube ID inválido para:", raw);
      return;
    }

    // selección visual
    document.querySelectorAll(".video-small").forEach(v => v.classList.remove("selected"));
    item.classList.add("selected");

    // setear src del iframe principal
    iframe.setAttribute("src", buildEmbedUrl(id));

    // actualizar título y meta si existen
    const title = item.getAttribute("data-title") || item.querySelector(".video-title")?.textContent || "Untitled";
    const meta = item.getAttribute("data-meta") || "";
    mainTitle.textContent = title;
    mainMeta.textContent = meta;
  }

  // Añadir listeners a cada item (capturamos clicks sobre toda la tarjeta + overlay)
  videoItems.forEach(item => {
    const overlay = item.querySelector(".thumb-overlay");
    const title = item.querySelector(".video-title");

    // Click en overlay (esto captura clicks sobre el iframe)
    if (overlay) overlay.addEventListener("click", () => changeMainVideoFromItem(item));

    // Click en el contenedor (por si se da click en espacio alrededor)
    item.addEventListener("click", (e) => {
      // evitar doble llamada si overlay ya lo llamó
      if (e.target.classList.contains("thumb-overlay")) return;
      changeMainVideoFromItem(item);
    });

    // Click directo en el título
    if (title) title.addEventListener("click", () => changeMainVideoFromItem(item));

    // Hacer accesible con teclado
    item.setAttribute("tabindex", "0");
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        changeMainVideoFromItem(item);
      }
    });
  });
});
