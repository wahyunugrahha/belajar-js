// Buat token acak
const token = ~~[Math.random() * 1234567];

// Array gambar
const pictures = ["1.jpg", "2.jpg", "3.jpg"];

// Fungsi login dengan Promise
function login(username) {
  console.log("Processing Token Now...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validasi username
      if (username != "wahyu_nugraha") reject("Sorry, Wrong Username");
      // Kirim token jika username benar
      resolve({ token });
    }, 200);
  });
}

// Fungsi getUser dengan Promise
function getUser(token) {
  console.log("Processing ApiKEY Now...");
  return new Promise((resolve, reject) => {
    // Validasi token
    if (!token) reject("Token Tidak Ada");

    // Kirim apiKey setelah delay
    setTimeout(() => {
      resolve({ apiKey: "xyz12345" });
    }, 500);
  });
}

// Fungsi getPicture dengan Promise
function getPicture(apiKey) {
  console.log("Processing Pictures Now...");
  return new Promise((resolve, reject) => {
    // Validasi apiKey
    if (!apiKey) reject("Tidak Ada APIKEY");

    // Kirim gambar setelah delay
    setTimeout(() => {
      resolve({ pic: pictures });
    }, 5000);
  });
}

// Eksekusi Promise chain
const user = login("wahyu_nugraha");

user
  .then(function (response) {
    const { token } = response;

    // Lanjutkan ke getUser setelah login sukses
    getUser(token)
      .then(function (response) {
        const { apiKey } = response;

        // Lanjutkan ke getPicture setelah dapat apiKey
        getPicture(apiKey).then(function (response) {
          const { pic } = response;

          // Tampilkan hasil gambar
          console.log(pic);
        });
      })
      // Tangkap error dari getUser
      .catch((err) => console.log(err));
  })
  // Tangkap error dari login
  .catch((err) => console.log(err));
