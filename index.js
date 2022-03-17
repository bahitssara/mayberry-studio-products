(() => {
  // testing JS file readability

    function homePageAnimations(){
      gsap.fromTo(".home-page__intro--copy", {opacity: 0}, {opacity:1, duration: 5})
    }



    //excecute functions
    homePageAnimations();
})();
