/* Progressive enhancement : events analytics placeholder */
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('[data-event]').forEach(function(el){
    el.addEventListener('click', function(){
      // [À COMPLÉTER : envoyer événement Plausible/Umami]
      console.log('event', el.dataset.event);
    });
  });
});
