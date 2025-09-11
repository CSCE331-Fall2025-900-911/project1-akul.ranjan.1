(function () {
  const KEY = 'bgColor';

  function apply(color) {
    document.body.style.backgroundColor = color;
    try { localStorage.setItem(KEY, color); } catch (_) {}
  }

  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem(KEY);
    if (saved) document.body.style.backgroundColor = saved;

    document.querySelectorAll('[data-color]').forEach(btn => {
      btn.addEventListener('click', () => apply(btn.dataset.color));
    });

    const reset = document.getElementById('bg-reset');
    if (reset) reset.addEventListener('click', () => {
      document.body.style.backgroundColor = '';
      try { localStorage.removeItem(KEY); } catch (_) {}
    });
  });
})();
