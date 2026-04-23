/* Shared language switcher — used by all pages */
(function () {
  const STORAGE_KEY = 'mone-lang';

  function applyLang(lang) {
    document.querySelectorAll('.t[data-' + lang + ']').forEach(function (el) {
      el.innerHTML = el.getAttribute('data-' + lang);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
  }

  window.setLang = function (lang) {
    applyLang(lang);
  };

  // On page load, restore saved language (default: 'en')
  document.addEventListener('DOMContentLoaded', function () {
    var saved = localStorage.getItem(STORAGE_KEY) || 'en';
    applyLang(saved);
  });
})();
