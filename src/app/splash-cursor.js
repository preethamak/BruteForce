// Simple splash cursor effect for the whole site
// Add <script src="/splash-cursor.js"></script> to your _app or _document
(function() {
  const splash = document.createElement('div');
  splash.style.position = 'fixed';
  splash.style.pointerEvents = 'none';
  splash.style.zIndex = 9999;
  splash.style.width = '60px';
  splash.style.height = '60px';
  splash.style.borderRadius = '50%';
  splash.style.background = 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0.12) 60%, transparent 100%)';
  splash.style.transition = 'transform 0.15s cubic-bezier(.4,2,.6,1), opacity 0.3s';
  splash.style.opacity = '0.7';
  splash.style.transform = 'scale(0.7)';
  document.body.appendChild(splash);

  document.addEventListener('mousemove', e => {
    splash.style.left = (e.clientX - 30) + 'px';
    splash.style.top = (e.clientY - 30) + 'px';
    splash.style.opacity = '0.7';
    splash.style.transform = 'scale(1)';
  });
  document.addEventListener('mousedown', () => {
    splash.style.transform = 'scale(1.3)';
    splash.style.opacity = '1';
  });
  document.addEventListener('mouseup', () => {
    splash.style.transform = 'scale(1)';
    splash.style.opacity = '0.7';
  });
})();
