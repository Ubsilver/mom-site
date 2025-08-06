async function loadComponent(selector, path) {
  const el = document.querySelector(selector);
  const res = await fetch(path);
  const html = await res.text();
  el.innerHTML = html;
}

function highlightActiveLink() {
  const links = document.querySelectorAll(".nav a");
  const currentFile = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkFile = link.getAttribute("href").split("/").pop();
    if (linkFile === currentFile || (linkFile === "index.html" && currentFile === "")) {
      link.classList.add("active");
    }
  });
}

// Сначала загружаем только header и сразу выделяем активную ссылку
loadComponent("#header", "../components/header.html").then(() => {
  highlightActiveLink();
});

// Загружаем остальные компоненты
Promise.all([
  loadComponent("#hero", "./components/hero.html"),
  loadComponent("#line", "./components/line.html"),
  loadComponent("#why", "./components/why.html"),
  loadComponent("#aboutme", "./components/aboutme.html"),
  loadComponent("#footer", "../components/footer.html"),
  loadComponent("#useful", "./components/useful.html"),
  loadComponent("#otzivi", "./components/otzivi.html"),
  loadComponent("#rabota", "./components/rabota.html"),
  loadComponent("#result", "./components/result.html"),
  loadComponent("#link", "./components/link.html"),
]).then(() => {
  if (typeof window.initAnimations === "function") {
    window.initAnimations();
    
  }
  
});

$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});