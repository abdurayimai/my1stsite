/* Mavzuni sahifa chizilishidan OLDIN o'rnatadi.
   Shuning uchun bu fayl <head> da "defer"siz ulanadi —
   aks holda sayt bir lahza oq bo'lib "chaqnab" ketadi. */
(function () {
  var saqlangan = null;
  try { saqlangan = localStorage.getItem('theme'); } catch (e) {}

  var tizim = window.matchMedia &&
              window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Tanlov saqlangan bo'lsa — o'sha, bo'lmasa tizim sozlamasi
  document.documentElement.dataset.theme = saqlangan || (tizim ? 'dark' : 'light');

  // "js" belgisi. CSS bo'limlarni FAQAT shu belgi bo'lganda yashiradi,
  // shuning uchun JS o'chirilgan bo'lsa matn oddiy ko'rinadi.
  // Aynan shu faylda qo'yiladi, chunki u sahifa chizilishidan oldin
  // ishlaydi — aks holda bo'limlar bir lahza ko'rinib ketardi.
  document.documentElement.classList.add('js');
})();
