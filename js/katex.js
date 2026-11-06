function renderKaTeX() {
  renderMathInElement(document.body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false }, // Catches MkDocs generic inline output
      { left: "\\[", right: "\\]", display: true }   // Catches MkDocs generic display-mode output
    ],
    throwOnError: false
  });
}

document.addEventListener("DOMContentLoaded", renderKaTeX);

// Support MkDocs Material instant loading / SPA page navigation
if (typeof document$ !== "undefined") {
  document$.subscribe(renderKaTeX);
}
