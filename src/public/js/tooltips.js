document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".book-header strong");

  titles.forEach(title => {
    const fullText = title.textContent.trim();

    // se o texto está maior do que o espaço disponível → está cortado
    if (title.scrollWidth > title.clientWidth) {
      title.setAttribute("title", fullText); // tooltip nativo
    }
  });
});
