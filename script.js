// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// If autoplay fails (some browsers), try to play on first user interaction
const v = document.getElementById("bgVideo");
if (v) {
  const tryPlay = async () => {
    try { await v.play(); }
    catch { /* ignore */ }
    window.removeEventListener("pointerdown", tryPlay);
    window.removeEventListener("keydown", tryPlay);
  };
  window.addEventListener("pointerdown", tryPlay, { once: true });
  window.addEventListener("keydown", tryPlay, { once: true });
}
