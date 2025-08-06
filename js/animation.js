window.initAnimations = () => {
  if (window.Rellax) {
    new Rellax('.rellax');
  }

  gsap.from(".title", { duration: 1, y: -50, opacity: 0 });
  gsap.from(".subtitle", { duration: 1, y: 50, opacity: 0, delay: 0.5 });

  
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});
};
