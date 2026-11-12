(function () {
  var root = document.documentElement;

  // Light / dark toggle
  var themeBtn = document.getElementById('theme');
  function themeLabel() {
    themeBtn.textContent = root.getAttribute('data-theme') === 'dark' ? 'Light mode' : 'Dark mode';
  }
  themeLabel();
  themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    themeLabel();
  });

  // Event chart: select a bar to see its details
  var bars = document.querySelectorAll('.bar');
  var detail = document.getElementById('detail');
  bars.forEach(function (bar) {
    bar.addEventListener('click', function () {
      bars.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
      bar.setAttribute('aria-pressed', 'true');
      detail.textContent = bar.getAttribute('data-detail');
    });
  });

  // Highlight the current section in the top bar
  var links = document.querySelectorAll('.links a');
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && map[entry.target.id]) {
          links.forEach(function (a) { a.removeAttribute('aria-current'); });
          map[entry.target.id].setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }

  // Copy email
  var copyBtn = document.getElementById('copy');
  copyBtn.addEventListener('click', function () {
    var email = copyBtn.getAttribute('data-email');
    function done(ok) {
      copyBtn.textContent = ok ? 'Copied' : 'Copy failed: ' + email;
      setTimeout(function () { copyBtn.textContent = 'Copy email'; }, 2000);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(function () { done(true); }, function () { done(false); });
    } else {
      done(false);
    }
  });
})();
