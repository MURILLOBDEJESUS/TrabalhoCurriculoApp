// ------------------------------
// Interações e animações do currículo
// ------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach(el => appearOnScroll.observe(el));

  // Formulário de contato (exemplo simples)
  const form = document.querySelector("#contato form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Mensagem enviada com sucesso!");
      form.reset();
    });
  }

  // Verifica se o PDF do currículo está disponível e mostra fallback se não
  const cvIframe = document.getElementById('cv-iframe');
  const cvFallback = document.getElementById('cv-fallback');
  const downloadCv = document.getElementById('download-cv');
  const cvDownloadLink = document.getElementById('cv-download-link');

  if (cvIframe) {
    // Tenta detectar erro de carregamento usando timeout + mensagem amigável
    let loaded = false;
    cvIframe.addEventListener('load', () => { loaded = true; });
    setTimeout(() => {
      if (!loaded) {
        if (cvFallback) cvFallback.style.display = 'block';
        if (downloadCv) downloadCv.setAttribute('href', 'MURILO_Curriculo.pdf');
        if (cvDownloadLink) cvDownloadLink.setAttribute('href', 'MURILO_Curriculo.pdf');
      }
    }, 900);
  }
});
