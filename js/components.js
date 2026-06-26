// Minimal components script: injects a simple header and footer into placeholders
(function(){
  function createNav(){
    return `\n<nav class="container" style="padding:1rem 0;">\n  <div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;">\n    <a href="index.html" style="font-weight:700;color:var(--text-body);">AS-Bewerbung.ch</a>\n    <div style="display:flex;gap:0.75rem;align-items:center">\n      <a href="interview-check.html" class="btn btn-primary">Interview-Check</a>\n      <a href="faq.html" class="btn btn-secondary">FAQ</a>\n    </div>\n  </div>\n</nav>\n`;
  }
  function createFooter(){
    return `\n<footer style="padding:2rem 0;border-top:1px solid var(--border);background:#fff;color:var(--text-muted);">\n  <div class="container">\n    <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap">\n      <div>© ${new Date().getFullYear()} AS-Bewerbung.ch</div>\n      <div style="font-size:0.9rem">\n        <a href="impressum.html">Impressum</a> · <a href="datenschutz.html">Datenschutz</a>\n      </div>\n    </div>\n  </div>\n</footer>\n`;
  }

  document.addEventListener('DOMContentLoaded', function(){
    var nav = document.getElementById('nav-placeholder');
    if(nav) nav.innerHTML = createNav();
    var footer = document.getElementById('footer-placeholder');
    if(footer) footer.innerHTML = createFooter();
  });
})();
