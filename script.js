const quotes = [
  "Kamu itu seperti wifi, hadirnya bikin hidupku terhubung.",
  "Aku nggak butuh kopi, karena senyummu sudah bikin aku melek setiap hari.",
  "Kalau aku jadi matematika, kamu solusi dari semua masalahku.",
  "Cintaku ke kamu itu kayak limit tak terhingga, nggak bisa dihitung!",
  "Mau jadi alarm nggak? Biar aku bangun selalu inget kamu.",
  "Kalau kamu bintang, aku rela jadi langitnya.",
  "Aku nggak bisa jadi Superman, tapi aku bisa jadi 'Supermanis' buat kamu.",
  "Nggak usah jadi astrolog, aku udah tau jodohku itu kamu.",
  "Kamu kayak charger, deket kamu bikin aku full energi.",
  "Kalau makan nggak kenyang, mungkin aku harus makan cinta kamu."
];

const btnRayu = document.getElementById('btnRayu');
const quoteDiv = document.getElementById('quote');

btnRayu.addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDiv.textContent = quotes[randomIndex];
});