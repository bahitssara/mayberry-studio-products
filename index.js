(() => {
  // testing JS file readability
    const mobileNav = document.getElementById('mobile-nav');

    function homePageAnimations(){
      gsap.fromTo('.home-page__intro--copy', {opacity: 0}, {opacity:1, duration: 5});
    }

    function navToggle(){
      const navLinks = document.getElementById('navigation-links');
      if(navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        gsap.to('#navigation-links', {right: -400, duration: 1, ease: Power1.easeOut});
      } else {
        navLinks.classList.add('active');
        gsap.to('#navigation-links', {right: 0, duration: 1,ease: Power1.easeOut});
      }
    }

    mobileNav.addEventListener('click', navToggle);


    //excecute functions
    homePageAnimations();
    // navToggle();
})();
