# ✍️ Typewriter Text Effect (Caret Destekli)

Bu proje, HTML, CSS ve JavaScript kullanılarak geliştirilmiş  
**harf harf yazma → bekleme → harf harf silme** animasyonunu içerir.

Özel olarak:
- Metin alt satıra geçtiğinde
- Caret (yanıp sönen çizgi) **uzamaz**
- Her zaman **son satırın sonunda**
- Gerçek input `focus` caret’i gibi davranır

---

## 🚀 Özellikler

- ⌨️ Harf harf yazma (Typewriter Effect)
- ❌ Harf harf silme
- 🔁 Birden fazla metinle döngü
- 📐 Satır kırıldığında bozulmayan caret
- ⚡ Saf JavaScript (kütüphane yok)
- 📱 Responsive uyumlu

---

## 🧠 Çalışma Mantığı

1. Metinler bir **dizi (array)** içinde tutulur
2. Aktif metin karakter karakter yazılır
3. Yazma tamamlanınca kısa bir bekleme olur
4. Metin silinir
5. Bir sonraki metne geçilir
6. Caret, `::after` pseudo-element ile çizildiği için
   her zaman **son satırda** kalır

