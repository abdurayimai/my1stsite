# Loyiha: Abdurayim Abduraximov — vizitka sayt

Bir sahifali shaxsiy sayt. Egasi — Abdurayim Abduraximov, targetolog.
Maqsad: mijoz saytga kirib, tajribasiga ishonch hosil qilsin va bog'lansin.
Barcha matn — o'zbek tilida (lotin). Ohang: professional, ishonchli, ortiqcha
va'dasiz. Auditoriya — biznes egalari, texnik odamlar emas.

## Fayl tuzilishi

- `index.html` — tuzilma va matn
- `style.css` — barcha uslublar
- `theme.js` — mavzuni sahifa chizilishidan oldin o'rnatadi (`defer` QO'YMA)
- `script.js` — qolgan barcha JS (`defer` bilan)
- `assets/` — rasmlar; `assets/asl-logolar/` — asl nusxalar, TEGINMA

## Texnik chegaralar

- Kutubxona, framework, build vositasi, CDN havolasi YO'Q. Sof HTML/CSS/JS.
- Sayt `file://` orqali, internetsiz ham to'liq ochilishi kerak.
- Yechim eng oddiy usulda bo'lsin. Ikki qator CSS yetadigan joyga JS yozma.

## Uslub

- Ranglar FAQAT `style.css` boshidagi `:root` va `:root[data-theme="dark"]`
  bloklarida. Qoida: CSS ichida qattiq rang yozilmaydi, `var(--...)` ishlatiladi.
- Iliq qaymoq/oltin palitra. Hero polosasi ikkala mavzuda ham to'q rangda qoladi.
- Matn kontrasti kamida 4.5 (yirik sarlavhalar uchun 3.0). O'zgartirgach o'lchab ko'r.
- Mobil (375px) va kompyuter (1280px) — ikkalasida ham tekshir.

## Ish qoidalari

- Ish boshlashdan oldin nima qilishingni qisqa aytib o't, keyin qil.
- Kichik qadamlar bilan ishla, har qadamdan keyin natijani tekshir.
- Mijoz nomlari, natijalar, raqamlar — O'YLAB TOPMA. Bilmasang, so'ra.
- `index.html` da `—`, `→`, `·`, `©` belgilari bor. Tahrirdan keyin ular
  buzilmaganini tekshir (perl/iconv UTF-8 ni buzishi mumkin).
- Parol, API kalit, token yozma — sayt statik, ularga ehtiyoj yo'q.
