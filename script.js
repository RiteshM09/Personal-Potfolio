
// nav bar scroll effect
const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 60) {
    navEl.classList.add('navbar-scrolled');
  }
  else if (window.scrollY < 60) {
    navEl.classList.remove('navbar-scrolled');
  }
});




// fixed back-to-top button 
 
document.addEventListener('scroll', () =>{
    const toTopButton = document.querySelector('.back-to-top');

    if(window.scrollY > 200)
    {
        toTopButton.classList.add('show');
    }
    else{
        toTopButton.classList.remove('show');
    }

});

document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// hides the navbar  when clicks .
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        // Only collapse if menu is open (visible on smaller screens)
        if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: true
          });
          bsCollapse.hide();
        }
      });
    });
  });

