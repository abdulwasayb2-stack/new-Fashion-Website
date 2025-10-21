document.addEventListener('DOMContentLoaded', function () {
  function goBack(e) {
    e && e.preventDefault && e.preventDefault();
    // If browser history has entries, go back; otherwise navigate to index
    try {
      if (window.history && window.history.length > 1) {
        window.history.back();
      } else {
        // fallback to homepage
        window.location.href = 'index.html';
      }
    } catch (err) {
      window.location.href = 'index.html';
    }
  }

  // Attach to any back-button elements
  var buttons = document.querySelectorAll('.back-button');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', goBack);
    // allow keyboard activation
    btn.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' || ev.key === ' ') goBack(ev);
    });
  });
});
