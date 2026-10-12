/* Apple-style footer accordion (active below 1024px only) */
(function () {
  var footer = document.querySelector('.footer-wrapper');
  if (!footer) return;
  var mq = window.matchMedia('(max-width: 1023px)');
  var buttons = footer.querySelectorAll('.footer-heading');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!mq.matches) return; // desktop: headings are plain text
      var section = btn.closest('.footer-section');
      var open = !section.classList.contains('is-open');
      section.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  function reset() {
    footer.querySelectorAll('.footer-section').forEach(function (s) {
      s.classList.remove('is-open');
    });
    buttons.forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
  }
  if (mq.addEventListener) mq.addEventListener('change', reset);
  else mq.addListener(reset);
})();