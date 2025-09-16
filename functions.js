(function(){
  const KEY_BG = 'bgColor';
  const KEY_THEME = 'site_theme_href';
  function applyBg(c){ document.body.style.backgroundColor = c; try{ localStorage.setItem(KEY_BG, c); }catch(_){} }
  document.addEventListener('DOMContentLoaded', () => {
    const savedBg = localStorage.getItem(KEY_BG);
    if (savedBg) document.body.style.backgroundColor = savedBg;
    document.querySelectorAll('[data-color]').forEach(b => b.addEventListener('click', () => applyBg(b.dataset.color)));
    const reset = document.getElementById('bg-reset');
    if (reset) reset.addEventListener('click', () => { document.body.style.backgroundColor = ''; try{ localStorage.removeItem(KEY_BG);}catch(_){}; });

    if (!location.pathname.toLowerCase().endsWith('genai.html')) {
      const link = document.getElementById('theme');
      const btn = document.getElementById('styleToggle');
      if (link) {
        const savedHref = localStorage.getItem(KEY_THEME);
        if (savedHref && savedHref !== link.getAttribute('href')) link.setAttribute('href', savedHref);
        if (btn) btn.addEventListener('click', () => {
          const classic = 'css/style-classic.css';
          const alt = 'css/style-alt.css';
          const next = link.getAttribute('href').includes('style-alt') ? classic : alt;
          link.setAttribute('href', next);
          try{ localStorage.setItem(KEY_THEME, next); }catch(_){}
        });
      }
    }
  });
})();
