// Membuat token acak dengan cara cepat (~~ membulatkan ke bawah)
const token = ~~[Math.random() * 1234567];

// Array gambar sebagai data statis
const pictures = ["1.jpg", "2.jpg", "3.jpg"];

// Fungsi login yang mengembalikan Promise
function login(username) {
  console.log("Processing Token Now...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validasi username
      if (username != "wahyu_nugraha") reject("Sorry, Wrong Username");
      // Kirim token jika username valid
      resolve({ token });
    }, 200);
  });
}

// Fungsi getUser yang mengembalikan apiKey jika token valid
function getUser(token) {
  console.log("Processing ApiKEY Now...");
  return new Promise((resolve, reject) => {
    if (!token) reject("Token Tidak Ada");
    setTimeout(() => {
      resolve({ apiKey: "xyz12345" });
    }, 500);
  });
}

// Fungsi getPicture yang mengembalikan array gambar jika apiKey valid
function getPicture(apiKey) {
  console.log("Processing Pictures Now...");
  return new Promise((resolve, reject) => {
    if (!apiKey) reject("Tidak Ada APIKEY");
    setTimeout(() => {
      resolve({ pic: pictures });
    }, 5000);
  });
}

// Fungsi async utama untuk menjalankan seluruh alur login -> getUser -> getPicture
async function userDisplay() {
  try {
    // Tunggu hasil login
    const { token } = await login("wahyu_nugraha");

    // Tunggu hasil getUser
    const { apiKey } = await getUser(token);

    // Tunggu hasil getPicture
    const { pic } = await getPicture(apiKey);

    // Tampilkan hasil akhir
    console.log(`
    Halo ${token}, Selamat Datang
    Apikey anda adalah ${apiKey}
    Berhasil Memuat gambar ${pic}`);
  } catch (err) {
    // Menangani error di salah satu proses async
    console.log(err);
  }
}

// Menjalankan fungsi utama
userDisplay();
