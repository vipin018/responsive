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
  
    // ✅ Magnetic Button Fix
    const btn = document.getElementById("magneticBtn");
  
    if (btn) {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
  
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.4,
          ease: "power3.out"
        });
      });
  
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.4)"
        });
      });
    }
  });
  
  // 🔥 Parallax Image
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    document.querySelector('img').style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });
  