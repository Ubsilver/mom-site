
function initWorkflowSlider() {
  const slides = document.querySelectorAll(".workflow__slide");
  const stepNum = document.getElementById("step-number");
  const prevBtn = document.querySelector(".workflow__prev");
  const nextBtn = document.querySelector(".workflow__next");

  if (!slides.length) return;

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    const step = slides[index].getAttribute("data-step");
    if (stepNum) stepNum.textContent = step;
  }

  prevBtn?.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
    alert('gg');
  });

  nextBtn?.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  showSlide(current);
}

// вызов после загрузки компонента `#rabota`
  initWorkflowSlider();
