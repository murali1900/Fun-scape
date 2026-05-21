// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { 
    if (e.isIntersecting) e.target.classList.add('visible'); 
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Anti-Copy Shield (Optional but helps hide code from basic users)
document.addEventListener('contextmenu', event => event.preventDefault()); // Disables right-click

document.onkeydown = function(e) {
    if(e.keyCode == 123) { return false; } // Disables F12
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; } // Disables Inspect
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { return false; } // Disables Inspect shortcut
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; } // Disables Console
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; } // Disables View Source
};
