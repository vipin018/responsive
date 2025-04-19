window.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('text');
    const splitText = new SplitText(text, { type: 'chars' });
  
    // Animate text on load
    gsap.from(splitText.chars, {
      yPercent: 50,
      opacity: 0,
      scale: 0.5,
      stagger: 0.05,
      duration: 1,
      ease: 'bounce.out',
    });
  
    // Navbar hover text anim
    const navLinks = document.querySelectorAll('nav ul li');
  
    navLinks.forEach(link => {
      const split = new SplitText(link, { type: 'chars' });
  
      link.addEventListener('mouseenter', () => {
        gsap.fromTo(
          split.chars,
          { yPercent: -100, opacity: 0, scale: 0.5 },
          {
            yPercent: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.05,
            duration: 0.6,
            ease: 'power4.out',
          }
        );
      });
  
      link.addEventListener('mouseleave', () => {
        gsap.to(split.chars, {
          yPercent: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.05,
          duration: 0.4,
          ease: 'power1.inOut',
        });
      });
    });
  });
  