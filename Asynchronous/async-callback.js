// Membuat token acak dengan membulatkan hasil perkalian acak
const token = ~~[Math.random() * 1234567];

// Array gambar yang akan dikirimkan nantinya
const pictures = ["1.jpg", "2.jpg", "3.jpg"];

// Fungsi login yang menerima username dan callback
function login(username, callback) {
  console.log("Processing Token Now...");

  // Simulasi proses asynchronous (misalnya login ke server)
  setTimeout(() => {
    // Setelah 200ms, panggil callback dengan data token dan username
    callback({ token, username });
  }, 200);
}

// Fungsi getUser yang menerima token dan callback
function getUser(token, callback) {
  console.log("Processing ApiKEY Now...");

  // Jika token valid, lanjutkan ke proses berikutnya
  if (token)
    setTimeout(() => {
      // Setelah 500ms, panggil callback dengan data apiKey
      callback({ apiKey: "xyz12345" });
    }, 500);
}

// Fungsi getPicture yang menerima apiKey dan callback
function getPicture(apiKey, callback) {
  console.log("Processing Pictures Now...");

  // Jika apiKey valid, lanjutkan ke proses berikutnya
  if (apiKey)
    setTimeout(() => {
      // Setelah 5000ms (5 detik), panggil callback dengan data gambar
      callback({ pic: pictures });
    }, 5000);
}

// Mulai alur asynchronous dengan login
login("wahyu_nugraha", function (response) {
  const { token } = response; // Ambil token dari response login

  // Gunakan token untuk mendapatkan apiKey
  getUser(token, function (response) {
    const { apiKey } = response; // Ambil apiKey dari response getUser

    // Gunakan apiKey untuk mendapatkan daftar gambar
    getPicture(apiKey, function (response) {
      const { pic } = response; // Ambil gambar dari response getPicture

      // Tampilkan gambar di konsol
      console.log(pic);
    });
  });
});
