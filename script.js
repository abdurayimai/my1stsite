// Footer'dagi yilni avtomatik yangilab turadi
document.getElementById('y').textContent = new Date().getFullYear();

/* ---------- Mavzu almashtirish ---------- */
// Mavzuning o'zi theme.js da o'rnatiladi, bu yerda faqat tugma ishlaydi.

const tugma = document.getElementById('theme-toggle');

if (tugma) {
  const yorliqniYangilash = () => {
    const qorongi = document.documentElement.dataset.theme === 'dark';
    tugma.setAttribute('aria-label', qorongi ? 'Yorug\' mavzuga o\'tish' : 'Qorong\'i mavzuga o\'tish');
    tugma.setAttribute('aria-pressed', String(qorongi));

    // Mobil brauzer paneli rangi ham mavzuga moslashsin.
    // Sahifa tepasida hero polosasi turadi — shuning uchun uning rangi.
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', qorongi ? '#2b1a11' : '#f5e6cf');
  };

  yorliqniYangilash();

  tugma.addEventListener('click', () => {
    const yangi = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = yangi;
    try { localStorage.setItem('theme', yangi); } catch (e) {}
    yorliqniYangilash();
  });
}

/* ---------- Rasm zaxirasi ---------- */
// Agar assets/rasm-hero.jpg fayli topilmasa, rasm o'rniga
// bosh harflar ("AA") ko'rinib turadi — sayt buzilmaydi.

// Hero fotosi va "Ishlarim" kartalaridagi rasmlar uchun bir xil qoida.
document.querySelectorAll('#photo, .work-img').forEach((img) => {
  const olibTashla = () => img.remove();

  // Rasm skript ishga tushishidan oldin ham yuklanib ulgurishi mumkin,
  // shuning uchun ikkala holatni ham tekshiramiz.
  if (img.complete && img.naturalWidth === 0) {
    olibTashla();
  } else {
    img.addEventListener('error', olibTashla);
  }
});

/* ---------- Logotiplar ---------- */
/* HTML da logolar ".png" deb yozilgan. Agar fayl boshqa formatda
   saqlangan bo'lsa (jpg, jpeg, webp, svg) — shu variantlarni navbat
   bilan sinab ko'ramiz. Hech biri topilmasa, o'rnida tartib raqami
   ko'rinib turadi va sayt buzilmaydi. */

const KENGAYTMALAR = ['png', 'jpg', 'jpeg', 'webp', 'svg'];

document.querySelectorAll('img.logo').forEach((img) => {
  let navbat = 0;

  const keyingisiniSina = () => {
    navbat += 1;
    if (navbat < KENGAYTMALAR.length) {
      // Masalan "assets/rasm3.png" -> "assets/rasm3.jpg"
      img.src = img.src.replace(/\.[^.\/]+$/, '.' + KENGAYTMALAR[navbat]);
    } else {
      img.remove();   // hech qaysi format topilmadi — raqam ko'rinadi
    }
  };

  img.addEventListener('error', keyingisiniSina);

  // Skript ishga tushgunicha yuklanib ulgurgan bo'lishi mumkin
  if (img.complete && img.naturalWidth === 0) keyingisiniSina();
});
