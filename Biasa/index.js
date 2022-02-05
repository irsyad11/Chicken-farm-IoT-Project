// Ambil Semua Elemen Video
const videos = Array.from(document.querySelectorAll("[data-duration]"));
console.log(videos);
// Pilih Hanya JAvascript lanjutan
let jsLanjut = videos
  .filter((video) => video.textContent.includes("Javascript Lanjutan"))
  // Ambil Durasi Masing" Video
  .map((item) => item.dataset.duration)
  // Ubah Durasi Menjadi int, ubah menit jadi detik
  .map((waktu) => {
    const parts = waktu
      .split(":")
      // ubah durasi dari string ke float
      .map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);
// Ubah Format jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;
// simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jmVideo = videos.filter((video) =>
  video.textContent.includes("Javascript Lanjutan")
).length;

const pJmVideo = document.querySelector(".jumlah-video");

pJmVideo.textContent = `${jmVideo} Video`;

console.log(detik);
console.log(jmVideo);
