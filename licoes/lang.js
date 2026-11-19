/* NB ANP prep · idioma das lições: usa a mesma escolha dos flipcards (localStorage anp_lang) */
(function(){
  var L = 'pt'; try { L = localStorage.getItem('anp_lang') === 'es' ? 'es' : 'pt'; } catch (e) {}
  var h = document.documentElement; h.className = (h.className + ' lang-' + L).trim(); h.lang = L === 'es' ? 'es' : 'pt-BR';
  window.ANP_LANG = L;
  window.anpTrocarIdioma = function(ev){ if (ev) ev.preventDefault(); try { localStorage.setItem('anp_lang', L === 'es' ? 'pt' : 'es'); } catch (e) {} location.reload(); };
})();
