/* =========================================
   DATA JIKAN
========================================= */

const jikanHours = [
    { jepang: "いちじ", romaji: "Ichi-ji", arti: "Pukul 1" },
    { jepang: "にじ", romaji: "Ni-ji", arti: "Pukul 2" },
    { jepang: "さんじ", romaji: "San-ji", arti: "Pukul 3" },
    { jepang: "よじ", romaji: "Yo-ji", arti: "Pukul 4" },
    { jepang: "ごじ", romaji: "Go-ji", arti: "Pukul 5" },
    { jepang: "ろくじ", romaji: "Roku-ji", arti: "Pukul 6" },
    { jepang: "しちじ", romaji: "Shichi-ji", arti: "Pukul 7" },
    { jepang: "はちじ", romaji: "Hachi-ji", arti: "Pukul 8" },
    { jepang: "くじ", romaji: "Ku-ji", arti: "Pukul 9" },
    { jepang: "じゅうじ", romaji: "Juu-ji", arti: "Pukul 10" },
    { jepang: "じゅういちじ", romaji: "Juuichi-ji", arti: "Pukul 11" },
    { jepang: "じゅうにじ", romaji: "Juunii-ji", arti: "Pukul 12" }
];

const jikanMinutes = [
    { jepang: "いっぷん", romaji: "Ippun", arti: "1 menit" },
    { jepang: "にふん", romaji: "Ni-fun", arti: "2 menit" },
    { jepang: "さんぷん", romaji: "San-pun", arti: "3 menit" },
    { jepang: "よんぷん", romaji: "Yon-pun", arti: "4 menit" },
    { jepang: "ごふん", romaji: "Go-fun", arti: "5 menit" },
    { jepang: "ろっぷん", romaji: "Roppun", arti: "6 menit" },
    { jepang: "ななふん", romaji: "Nana-fun", arti: "7 menit" },
    { jepang: "はっぷん", romaji: "Happun", arti: "8 menit" },
    { jepang: "きゅうふん", romaji: "Kyuu-fun", arti: "9 menit" },
    { jepang: "じゅっぷん", romaji: "Juppun", arti: "10 menit" },
    { jepang: "じゅうごふん", romaji: "Juu-go-fun", arti: "15 menit" },
    { jepang: "さんじゅっぷん", romaji: "Sanjuppun", arti: "30 menit" },
    { jepang: "よんじゅうごふん", romaji: "Yonjuugo-fun", arti: "45 menit" }
];


/* =========================================
   DATA KOSAKATA PAGI
========================================= */

const materiPagiTambahan = [
    {
        kanji: "おきます",
        onyomi: "",
        kunyomi: "",
        romaji: "Okimasu",
        arti: "Bangun tidur",
        goresan: 0
    },
    {
        kanji: "かおをあらいます",
        onyomi: "",
        kunyomi: "",
        romaji: "Kao o araimasu",
        arti: "Mencuci muka",
        goresan: 0
    },
    {
        kanji: "はをみがきます",
        onyomi: "",
        kunyomi: "",
        romaji: "Ha o migakimasu",
        arti: "Menggosok gigi",
        goresan: 0
    },
    {
        kanji: "シャワーをあびます",
        onyomi: "",
        kunyomi: "",
        romaji: "Shawaa o abimasu",
        arti: "Mandi",
        goresan: 0
    },
    {
        kanji: "あさごはんをたべます",
        onyomi: "",
        kunyomi: "",
        romaji: "Asagohan o tabemasu",
        arti: "Sarapan",
        goresan: 0
    },
    {
        kanji: "コーヒーをのみます",
        onyomi: "",
        kunyomi: "",
        romaji: "Koohii o nomimasu",
        arti: "Minum kopi",
        goresan: 0
    },
    {
        kanji: "ふくをきます",
        onyomi: "",
        kunyomi: "",
        romaji: "Fuku o kimasu",
        arti: "Memakai pakaian",
        goresan: 0
    },
    {
        kanji: "さんぽします",
        onyomi: "",
        kunyomi: "",
        romaji: "Sanpo shimasu",
        arti: "Berjalan-jalan",
        goresan: 0
    },
    {
        kanji: "ジョギングします",
        onyomi: "",
        kunyomi: "",
        romaji: "Jogingu shimasu",
        arti: "Melakukan jogging",
        goresan: 0
    },
    {
        kanji: "がっこうへいきます",
        onyomi: "",
        kunyomi: "",
        romaji: "Gakkou e ikimasu",
        arti: "Pergi ke sekolah",
        goresan: 0
    }
];


/* =========================================
   DATA KOSAKATA SIANG
========================================= */

const materiSiangTambahan = [
    {
        kanji: "ひるごはんをたべます",
        onyomi: "",
        kunyomi: "",
        romaji: "Hirugohan o tabemasu",
        arti: "Makan siang",
        goresan: 0
    },
    {
        kanji: "べんきょうします",
        onyomi: "",
        kunyomi: "",
        romaji: "Benkyou shimasu",
        arti: "Belajar",
        goresan: 0
    },
    {
        kanji: "はたらきます",
        onyomi: "",
        kunyomi: "",
        romaji: "Hatarakimasu",
        arti: "Bekerja",
        goresan: 0
    },
    {
        kanji: "ともだちとはなします",
        onyomi: "",
        kunyomi: "",
        romaji: "Tomodachi to hanashimasu",
        arti: "Berbicara dengan teman",
        goresan: 0
    },
    {
        kanji: "ほんをよみます",
        onyomi: "",
        kunyomi: "",
        romaji: "Hon o yomimasu",
        arti: "Membaca buku",
        goresan: 0
    },
    {
        kanji: "おちゃをのみます",
        onyomi: "",
        kunyomi: "",
        romaji: "Ocha o nomimasu",
        arti: "Minum teh",
        goresan: 0
    },
    {
        kanji: "そうじします",
        onyomi: "",
        kunyomi: "",
        romaji: "Souji shimasu",
        arti: "Membersihkan",
        goresan: 0
    },
    {
        kanji: "りょうりします",
        onyomi: "",
        kunyomi: "",
        romaji: "Ryouri shimasu",
        arti: "Memasak",
        goresan: 0
    },
    {
        kanji: "テレビをみます",
        onyomi: "",
        kunyomi: "",
        romaji: "Terebi o mimasu",
        arti: "Menonton televisi",
        goresan: 0
    },
    {
        kanji: "ひるねします",
        onyomi: "",
        kunyomi: "",
        romaji: "Hirune shimasu",
        arti: "Tidur siang",
        goresan: 0
    }
];


/* =========================================
   DATA KOSAKATA MALAM
========================================= */

const materiMalamTambahan = [
    {
        kanji: "ばんごはんをたべます",
        onyomi: "",
        kunyomi: "",
        romaji: "Bangohan o tabemasu",
        arti: "Makan malam",
        goresan: 0
    },
    {
        kanji: "テレビをみます",
        onyomi: "",
        kunyomi: "",
        romaji: "Terebi o mimasu",
        arti: "Menonton televisi",
        goresan: 0
    },
    {
        kanji: "おふろにはいります",
        onyomi: "",
        kunyomi: "",
        romaji: "Ofuro ni hairimasu",
        arti: "Mandi berendam",
        goresan: 0
    },
    {
        kanji: "はをみがきます",
        onyomi: "",
        kunyomi: "",
        romaji: "Ha o migakimasu",
        arti: "Menggosok gigi",
        goresan: 0
    },
    {
        kanji: "べんきょうします",
        onyomi: "",
        kunyomi: "",
        romaji: "Benkyou shimasu",
        arti: "Belajar",
        goresan: 0
    },
    {
        kanji: "おんがくをききます",
        onyomi: "",
        kunyomi: "",
        romaji: "Ongaku o kikimasu",
        arti: "Mendengarkan musik",
        goresan: 0
    },
    {
        kanji: "ほんをよみます",
        onyomi: "",
        kunyomi: "",
        romaji: "Hon o yomimasu",
        arti: "Membaca buku",
        goresan: 0
    },
    {
        kanji: "ねます",
        onyomi: "",
        kunyomi: "",
        romaji: "Nemasu",
        arti: "Tidur",
        goresan: 0
    },
    {
        kanji: "にっきをかきます",
        onyomi: "",
        kunyomi: "",
        romaji: "Nikki o kakimasu",
        arti: "Menulis buku harian",
        goresan: 0
    },
    {
        kanji: "ともだちにでんわします",
        onyomi: "",
        kunyomi: "",
        romaji: "Tomodachi ni denwa shimasu",
        arti: "Menelepon teman",
        goresan: 0
    }
];


/* =========================================
   MATERI BUNPOU JIKAN
========================================= */

const materiBunpou = [
    {
        judul: "Menyatakan Waktu Melakukan Aktivitas",
        nomor: "01",

        kalimat: "わたしは ろくじに たべます。",
        romaji: "Watashi wa roku-ji ni tabemasu.",
        arti: "Saya makan pada pukul enam.",

        pola: "Subjek + は + Waktu + に + Kata Kerja",

        penjelasan: [
            {
                bagian: "わたし",
                romaji: "Watashi",
                arti: "Saya",
                warna: "#2563EB"
            },
            {
                bagian: "は",
                romaji: "Wa",
                arti: "Penanda topik",
                warna: "#DC2626"
            },
            {
                bagian: "ろくじ",
                romaji: "Roku-ji",
                arti: "Pukul enam",
                warna: "#D97706"
            },
            {
                bagian: "に",
                romaji: "Ni",
                arti: "Partikel penanda waktu",
                warna: "#DC2626"
            },
            {
                bagian: "たべます",
                romaji: "Tabemasu",
                arti: "Makan",
                warna: "#16A34A"
            }
        ],

        contoh: [
            {
                kalimat: "わたしは しちじに おきます。",
                romaji: "Watashi wa shichi-ji ni okimasu.",
                arti: "Saya bangun pukul tujuh."
            },
            {
                kalimat: "わたしは はちじに がっこうへ いきます。",
                romaji: "Watashi wa hachi-ji ni gakkou e ikimasu.",
                arti: "Saya pergi ke sekolah pukul delapan."
            }
        ],

        catatan: "Partikel に digunakan setelah keterangan waktu yang spesifik untuk menunjukkan kapan suatu aktivitas dilakukan."
    },

    {
        judul: "Menanyakan Waktu",
        nomor: "02",

        kalimat: "なんじに おきますか。",
        romaji: "Nanji ni okimasu ka.",
        arti: "Pukul berapa kamu bangun?",

        pola: "なんじ + に + Kata Kerja + か",

        penjelasan: [
            {
                bagian: "なんじ",
                romaji: "Nanji",
                arti: "Pukul berapa",
                warna: "#2563EB"
            },
            {
                bagian: "に",
                romaji: "Ni",
                arti: "Partikel penanda waktu",
                warna: "#DC2626"
            },
            {
                bagian: "おきます",
                romaji: "Okimasu",
                arti: "Bangun tidur",
                warna: "#16A34A"
            },
            {
                bagian: "か",
                romaji: "Ka",
                arti: "Penanda kalimat tanya",
                warna: "#D97706"
            }
        ],

        contoh: [
            {
                kalimat: "なんじに ねますか。",
                romaji: "Nanji ni nemasu ka.",
                arti: "Pukul berapa kamu tidur?"
            },
            {
                kalimat: "なんじに がっこうへ いきますか。",
                romaji: "Nanji ni gakkou e ikimasu ka.",
                arti: "Pukul berapa kamu pergi ke sekolah?"
            }
        ],

        catatan: "なんじ (Nanji) digunakan untuk menanyakan pukul berapa suatu kegiatan dilakukan."
    },

    {
        judul: "Menyebutkan Jam Sekarang",
        nomor: "03",

        kalimat: "いま ろくじです。",
        romaji: "Ima roku-ji desu.",
        arti: "Sekarang pukul enam.",

        pola: "いま + Keterangan Waktu + です",

        penjelasan: [
            {
                bagian: "いま",
                romaji: "Ima",
                arti: "Sekarang",
                warna: "#2563EB"
            },
            {
                bagian: "ろくじ",
                romaji: "Roku-ji",
                arti: "Pukul enam",
                warna: "#D97706"
            },
            {
                bagian: "です",
                romaji: "Desu",
                arti: "Kopula / bentuk sopan",
                warna: "#16A34A"
            }
        ],

        contoh: [
            {
                kalimat: "いま しちじです。",
                romaji: "Ima shichi-ji desu.",
                arti: "Sekarang pukul tujuh."
            },
            {
                kalimat: "いま くじです。",
                romaji: "Ima ku-ji desu.",
                arti: "Sekarang pukul sembilan."
            }
        ],

        catatan: "いま (Ima) berarti sekarang. です (Desu) digunakan untuk mengakhiri kalimat nominal dalam bentuk sopan."
    }
];


/* =========================================
   DATA FOLDER
========================================= */

let categories = [
    {
        nama: "Pagi",
        deskripsi: "Kosakata dan aktivitas pada pagi hari",
        gambar: "pagi.png",
        kosakata: materiPagiTambahan
    },
    {
        nama: "Siang",
        deskripsi: "Kosakata dan aktivitas pada siang hari",
        gambar: "siang.png",
        kosakata: materiSiangTambahan
    },
    {
        nama: "Malam",
        deskripsi: "Kosakata dan aktivitas pada malam hari",
        gambar: "malam.png",
        kosakata: materiMalamTambahan
    },
    {
        nama: "Jikan",
        deskripsi: "Materi pembelajaran bahasa Jepang tentang waktu",
        gambar: "biji.jpg",
        kosakata: []
    },
    {
        nama: "Bunpou Jikan",
        deskripsi: "Materi tata bahasa bahasa Jepang tentang waktu",
        gambar: "berak.jpg",
        kosakata: []
    }
];


/* =========================================
   PENYIMPANAN DATA LAMA
========================================= */

const savedData = localStorage.getItem("nihongoStudyData");

if (savedData) {
    try {
        const oldCategories = JSON.parse(savedData);

        if (Array.isArray(oldCategories)) {
            categories.forEach(category => {
                const oldCategory = oldCategories.find(
                    old => old.nama === category.nama
                );

                if (
                    oldCategory &&
                    Array.isArray(oldCategory.kosakata)
                ) {
                    category.kosakata = oldCategory.kosakata;
                }
            });
        }
    } catch (error) {
        console.error("Gagal membaca data lama:", error);
    }
}


/* =========================================
   TAMBAHKAN MATERI BARU TANPA MENGHAPUS DATA
========================================= */

function tambahkanMateriJikaBelumAda(namaFolder, daftarMateri) {
    const folder = categories.find(
        category => category.nama === namaFolder
    );

    if (!folder) return;

    daftarMateri.forEach(materi => {
        const sudahAda = folder.kosakata.some(
            item => item.kanji === materi.kanji
        );

        if (!sudahAda) {
            folder.kosakata.push(materi);
        }
    });
}

tambahkanMateriJikaBelumAda("Pagi", materiPagiTambahan);
tambahkanMateriJikaBelumAda("Siang", materiSiangTambahan);
tambahkanMateriJikaBelumAda("Malam", materiMalamTambahan);


function simpanData() {
    localStorage.setItem(
        "nihongoStudyData",
        JSON.stringify(categories)
    );
}

simpanData();


/* =========================================
   ELEMENT HTML
========================================= */

const categoryList = document.getElementById("categoryList");
const vocabularySection = document.getElementById("vocabularySection");
const vocabularyList = document.getElementById("vocabularyList");
const backButton = document.getElementById("backButton");
const searchInput = document.getElementById("searchInput");

let currentCategoryIndex = null;
let currentBunpouIndex = 0;


/* =========================================
   CSS KHUSUS WHITEBOARD BUNPOU
   CSS DIMASUKKAN LANGSUNG MELALUI JAVASCRIPT
========================================= */

function pasangStyleBunpou() {
    if (document.getElementById("bunpouWhiteboardStyle")) return;

    const style = document.createElement("style");

    style.id = "bunpouWhiteboardStyle";

    style.textContent = `
        .bunpou-container {
            width: 100%;
            margin: 25px auto;
        }

        .bunpou-heading {
            text-align: center;
            margin-bottom: 20px;
        }

        .bunpou-heading h2 {
            margin-bottom: 8px;
        }

        .whiteboard {
            background: #ffffff;
            color: #222;
            border: 2px solid #d1d5db;
            border-radius: 12px;
            padding: 35px;
            min-height: 450px;
            box-shadow: 5px 5px 0 rgba(0,0,0,0.12);
        }

        .whiteboard-label {
            display: inline-block;
            background: #f3f4f6;
            color: #555;
            padding: 7px 14px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .whiteboard-title {
            text-align: center;
            font-size: 23px;
            color: #222;
            margin-bottom: 25px;
        }

        .whiteboard-sentence {
            text-align: center;
            font-size: clamp(22px, 4vw, 34px);
            color: #2563eb;
            font-weight: bold;
            line-height: 1.8;
            margin: 25px 0 12px;
            overflow-wrap: anywhere;
        }

        .whiteboard-romaji {
            text-align: center;
            font-size: 18px;
            color: #444;
            margin-bottom: 12px;
        }

        .whiteboard-meaning {
            text-align: center;
            font-size: 18px;
            color: #555;
            margin-bottom: 25px;
        }

        .whiteboard-divider {
            border: none;
            border-top: 1px dashed #bbb;
            margin: 25px 0;
        }

        .whiteboard-section-title {
            font-size: 20px;
            color: #dc2626;
            margin-bottom: 15px;
        }

        .whiteboard-pattern {
            background: #fff7ed;
            border-left: 5px solid #dc2626;
            padding: 18px;
            border-radius: 6px;
            text-align: center;
            font-size: clamp(17px, 3vw, 22px);
            font-weight: bold;
            line-height: 1.7;
            color: #222;
        }

        .bunpou-explanation {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 12px;
        }

        .bunpou-word {
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
        }

        .bunpou-word-jp {
            font-size: 23px;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .bunpou-word-romaji {
            color: #555;
            font-size: 14px;
            margin-bottom: 5px;
        }

        .bunpou-word-meaning {
            color: #333;
            font-size: 14px;
        }

        .bunpou-example {
            background: #f0fdf4;
            border-left: 4px solid #16a34a;
            border-radius: 6px;
            padding: 15px;
            margin-bottom: 12px;
        }

        .bunpou-example-jp {
            color: #166534;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 6px;
            line-height: 1.6;
        }

        .bunpou-example-romaji {
            color: #444;
            margin-bottom: 5px;
        }

        .bunpou-example-meaning {
            color: #555;
        }

        .bunpou-note {
            background: #eff6ff;
            border-left: 4px solid #2563eb;
            padding: 15px;
            border-radius: 6px;
            line-height: 1.7;
            color: #333;
        }

        .bunpou-navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            margin-top: 25px;
        }

        .bunpou-navigation button {
            background: #222;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 7px;
            cursor: pointer;
            font-family: inherit;
            font-size: 14px;
        }

        .bunpou-navigation button:hover:not(:disabled) {
            background: #9e1b1b;
        }

        .bunpou-navigation button:disabled {
            opacity: 0.35;
            cursor: not-allowed;
        }

        .bunpou-page-number {
            font-weight: bold;
            color: #555;
            white-space: nowrap;
        }

        @media (max-width: 600px) {
            .whiteboard {
                padding: 20px 15px;
                min-height: 400px;
            }

            .whiteboard-title {
                font-size: 19px;
            }

            .bunpou-navigation button {
                padding: 10px 12px;
                font-size: 12px;
            }
        }
    `;

    document.head.appendChild(style);
}

pasangStyleBunpou();


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[char];
    });
}


/* =========================================
   MENAMPILKAN FOLDER
========================================= */

function renderCategories() {
    categoryList.style.display = "grid";
    vocabularySection.style.display = "none";

    categoryList.innerHTML = "";

    categories.forEach((category, index) => {
        const card = document.createElement("div");

        card.className = "category-card";

        let jumlahMateri = category.nama === "Jikan"
            ? jikanHours.length + jikanMinutes.length
            : category.nama === "Bunpou Jikan"
                ? materiBunpou.length
                : category.kosakata.length;

        card.innerHTML = `
            <img
                src="${escapeHTML(category.gambar)}"
                alt="${escapeHTML(category.nama)}"
                class="category-image"
            >

            <div class="category-content">
                <h3>${escapeHTML(category.nama)}</h3>

                <p>${escapeHTML(category.deskripsi)}</p>

                <span>${jumlahMateri} Materi</span>
            </div>
        `;

        card.addEventListener("click", () => {
            openCategory(index);
        });

        categoryList.appendChild(card);
    });
}


/* =========================================
   MEMBUKA FOLDER
========================================= */

function openCategory(index) {
    currentCategoryIndex = index;

    const category = categories[index];

    categoryList.style.display = "none";
    vocabularySection.style.display = "block";

    if (searchInput) {
        searchInput.style.display = "none";
    }

    if (category.nama === "Jikan") {
        renderJikanTable();
    } else if (category.nama === "Bunpou Jikan") {
        currentBunpouIndex = 0;
        renderBunpouBoard();
    } else {
        renderVocabulary(category.kosakata);
    }
}


/* =========================================
   TABEL JIKAN
========================================= */

function createJikanTable(title, data) {
    let rows = "";

    data.forEach(item => {
        rows += `
            <tr>
                <td>${escapeHTML(item.jepang)}</td>
                <td>${escapeHTML(item.romaji)}</td>
                <td>${escapeHTML(item.arti)}</td>
            </tr>
        `;
    });

    return `
        <div class="jikan-table-container">
            <h3>${escapeHTML(title)}</h3>

            <table class="jikan-table">
                <thead>
                    <tr>
                        <th>Bahasa Jepang</th>
                        <th>Romaji</th>
                        <th>Arti</th>
                    </tr>
                </thead>

                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    `;
}


function renderJikanTable() {
    vocabularySection.innerHTML = `
        <button id="backButton">← Kembali ke Folder</button>

        <h2>Jikan (時間)</h2>

        <p>Materi pembelajaran tentang penyebutan waktu dalam bahasa Jepang.</p>

        <div class="jikan-grid">
            ${createJikanTable("Jam (時)", jikanHours)}

            ${createJikanTable("Menit (分)", jikanMinutes)}
        </div>
    `;

    document.getElementById("backButton").addEventListener("click", kembaliKeFolder);
}


/* =========================================
   WHITEBOARD BUNPOU JIKAN
========================================= */

function renderBunpouBoard() {
    const materi = materiBunpou[currentBunpouIndex];

    if (!materi) return;

    const penjelasanHTML = materi.penjelasan.map(item => `
        <div class="bunpou-word">
            <div
                class="bunpou-word-jp"
                style="color: ${escapeHTML(item.warna)}"
            >
                ${escapeHTML(item.bagian)}
            </div>

            <div class="bunpou-word-romaji">
                ${escapeHTML(item.romaji)}
            </div>

            <div class="bunpou-word-meaning">
                ${escapeHTML(item.arti)}
            </div>
        </div>
    `).join("");

    const contohHTML = materi.contoh.map(item => `
        <div class="bunpou-example">
            <div class="bunpou-example-jp">
                ${escapeHTML(item.kalimat)}
            </div>

            <div class="bunpou-example-romaji">
                ${escapeHTML(item.romaji)}
            </div>

            <div class="bunpou-example-meaning">
                ${escapeHTML(item.arti)}
            </div>
        </div>
    `).join("");

    vocabularySection.innerHTML = `
        <button id="backButton">← Kembali ke Folder</button>

        <div class="bunpou-container">

            <div class="bunpou-heading">
                <h2>Bunpou Jikan (文法・時間)</h2>
                <p>Materi tata bahasa bahasa Jepang tentang waktu</p>
            </div>

            <div class="whiteboard">

                <div class="whiteboard-label">
                    MATERI ${escapeHTML(materi.nomor)}
                </div>

                <h3 class="whiteboard-title">
                    ${escapeHTML(materi.judul)}
                </h3>

                <div class="whiteboard-sentence">
                    ${escapeHTML(materi.kalimat)}
                </div>

                <div class="whiteboard-romaji">
                    ${escapeHTML(materi.romaji)}
                </div>

                <div class="whiteboard-meaning">
                    ${escapeHTML(materi.arti)}
                </div>

                <hr class="whiteboard-divider">

                <h3 class="whiteboard-section-title">
                    Pola Kalimat
                </h3>

                <div class="whiteboard-pattern">
                    ${escapeHTML(materi.pola)}
                </div>

                <hr class="whiteboard-divider">

                <h3 class="whiteboard-section-title"
                    style="color:#16a34a;">
                    Penjelasan Kalimat
                </h3>

                <div class="bunpou-explanation">
                    ${penjelasanHTML}
                </div>

                <hr class="whiteboard-divider">

                <h3 class="whiteboard-section-title"
                    style="color:#16a34a;">
                    Contoh Kalimat
                </h3>

                ${contohHTML}

                <hr class="whiteboard-divider">

                <h3 class="whiteboard-section-title"
                    style="color:#2563eb;">
                    Catatan
                </h3>

                <div class="bunpou-note">
                    ${escapeHTML(materi.catatan)}
                </div>

            </div>

            <div class="bunpou-navigation">

                <button
                    id="previousBunpou"
                    ${currentBunpouIndex === 0 ? "disabled" : ""}
                >
                    ← Sebelumnya
                </button>

                <span class="bunpou-page-number">
                    ${currentBunpouIndex + 1} / ${materiBunpou.length}
                </span>

                <button
                    id="nextBunpou"
                    ${currentBunpouIndex === materiBunpou.length - 1 ? "disabled" : ""}
                >
                    Selanjutnya →
                </button>

            </div>

        </div>
    `;

    document.getElementById("backButton").addEventListener(
        "click",
        kembaliKeFolder
    );

    document.getElementById("previousBunpou").addEventListener(
        "click",
        () => {
            if (currentBunpouIndex > 0) {
                currentBunpouIndex--;
                renderBunpouBoard();
            }
        }
    );

    document.getElementById("nextBunpou").addEventListener(
        "click",
        () => {
            if (currentBunpouIndex < materiBunpou.length - 1) {
                currentBunpouIndex++;
                renderBunpouBoard();
            }
        }
    );
}


/* =========================================
   MENAMPILKAN KOSAKATA
========================================= */

function renderVocabulary(vocabulary) {
    vocabularySection.innerHTML = `
        <button id="backButton">← Kembali ke Folder</button>

        <h2>${escapeHTML(categories[currentCategoryIndex].nama)}</h2>

        <div id="vocabularyList"></div>
    `;

    const list = document.getElementById("vocabularyList");

    if (!vocabulary || vocabulary.length === 0) {
        list.innerHTML = `
            <p>Belum ada materi dalam folder ini.</p>
        `;
        return;
    }

    vocabulary.forEach(item => {
        const card = document.createElement("div");

        card.className = "vocabulary-card";

        card.innerHTML = `
            <h3>${escapeHTML(item.kanji)}</h3>

            <p>
                <strong>Onyomi:</strong>
                ${escapeHTML(item.onyomi || "-")}
            </p>

            <p>
                <strong>Kunyomi:</strong>
                ${escapeHTML(item.kunyomi || "-")}
            </p>

            <p>
                <strong>Romaji:</strong>
                ${escapeHTML(item.romaji || "-")}
            </p>

            <p>
                <strong>Arti:</strong>
                ${escapeHTML(item.arti || "-")}
            </p>

            <p>
                <strong>Jumlah goresan:</strong>
                ${escapeHTML(item.goresan ?? "-")}
            </p>
        `;

        list.appendChild(card);
    });

    document.getElementById("backButton").addEventListener(
        "click",
        kembaliKeFolder
    );
}


/* =========================================
   KEMBALI KE DAFTAR FOLDER
========================================= */

function kembaliKeFolder() {
    vocabularySection.style.display = "none";
    categoryList.style.display = "grid";

    if (searchInput) {
        searchInput.style.display = "block";
        searchInput.value = "";
    }

    currentCategoryIndex = null;

    renderCategories();
}


/* =========================================
   PENCARIAN KOSAKATA
========================================= */

function searchVocabulary(keyword) {
    const query = keyword.toLowerCase().trim();

    if (query === "") {
        renderCategories();
        return;
    }

    categoryList.style.display = "none";
    vocabularySection.style.display = "block";

    let hasil = [];

    categories.forEach(category => {
        if (category.nama === "Jikan") return;

        category.kosakata.forEach(item => {
            const teks = [
                item.kanji,
                item.onyomi,
                item.kunyomi,
                item.romaji,
                item.arti
            ].join(" ").toLowerCase();

            if (teks.includes(query)) {
                hasil.push({
                    ...item,
                    folder: category.nama
                });
            }
        });
    });

    jikanHours.concat(jikanMinutes).forEach(item => {
        const teks = [
            item.jepang,
            item.romaji,
            item.arti
        ].join(" ").toLowerCase();

        if (teks.includes(query)) {
            hasil.push({
                kanji: item.jepang,
                romaji: item.romaji,
                arti: item.arti,
                folder: "Jikan"
            });
        }
    });

    vocabularySection.innerHTML = `
        <button id="backButton">← Kembali ke Folder</button>

        <h2>Hasil Pencarian</h2>

        <div id="vocabularyList"></div>
    `;

    const list = document.getElementById("vocabularyList");

    if (hasil.length === 0) {
        list.innerHTML = `
            <p>Tidak ditemukan kosakata yang sesuai.</p>
        `;
    } else {
        hasil.forEach(item => {
            const card = document.createElement("div");

            card.className = "vocabulary-card";

            card.innerHTML = `
                <small>${escapeHTML(item.folder)}</small>

                <h3>${escapeHTML(item.kanji)}</h3>

                <p>
                    <strong>Romaji:</strong>
                    ${escapeHTML(item.romaji)}
                </p>

                <p>
                    <strong>Arti:</strong>
                    ${escapeHTML(item.arti)}
                </p>
            `;

            list.appendChild(card);
        });
    }

    document.getElementById("backButton").addEventListener(
        "click",
        kembaliKeFolder
    );
}


/* =========================================
   EVENT LISTENER
========================================= */

if (searchInput) {
    searchInput.addEventListener("input", function () {
        searchVocabulary(this.value);
    });
}

if (backButton) {
    backButton.addEventListener("click", kembaliKeFolder);
}


/* =========================================
   TAMPILKAN FOLDER SAAT WEBSITE DIBUKA
========================================= */

renderCategories();