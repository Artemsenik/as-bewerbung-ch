// Minimal site script: faq toggles and simple form UI feedback
document.addEventListener('DOMContentLoaded', function(){
  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(function(btn){
    btn.addEventListener('click', function(){
      var parent = btn.parentElement;
      var answer = parent.querySelector('.faq-answer');
      if(!answer) return;
      var open = answer.style.display === 'block';
      answer.style.display = open ? 'none' : 'block';
      var icon = btn.querySelector('.faq-icon');
      if(icon) icon.textContent = open ? '+' : '−';
    });
  });

  // Simple form success toggle for the interview-check form (client-side only)
  var form = document.getElementById('interview-check-form');
  if(form){
    form.addEventListener('submit', function(e){
      // allow normal submit to Formspree; show success message immediately for UX
      var success = document.getElementById('form-success');
      var error = document.getElementById('form-error');
      if(success) success.style.display = 'block';
      if(error) error.style.display = 'none';
    });
  }
});
