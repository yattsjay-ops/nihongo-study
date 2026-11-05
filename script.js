// ==========================================
// DATA AWAL
// ==========================================

const categories = [
    {
        nama: "Pagi",
        deskripsi: "Kosakata dan aktivitas pada pagi hari",
        gambar: "pagi.png",
        kosakata: []
    },
    {
        nama: "Siang",
        deskripsi: "Kosakata dan aktivitas pada siang hari",
        gambar: "siang.png",
        kosakata: []
    },
    {
        nama: "Malam",
        deskripsi: "Kosakata dan aktivitas pada malam hari",
        gambar: "malam.png",
        kosakata: []
    }
];


// ==========================================
// LOAD LOCAL STORAGE
// ==========================================

const dataTersimpan = localStorage.getItem("nihongoStudyData");

if (dataTersimpan) {
    try {
        const data = JSON.parse(dataTersimpan);

        if (Array.isArray(data)) {
            const pengaturanKategori = [
                {
                    nama: "Pagi",
                    deskripsi: "Kosakata dan aktivitas pada pagi hari",
                    gambar: "pagi.png"
                },
                {
                    nama: "Siang",
                    deskripsi: "Kosakata dan aktivitas pada siang hari",
                    gambar: "siang.png"
                },
                {
                    nama: "Malam",
                    deskripsi: "Kosakata dan aktivitas pada malam hari",
                    gambar: "malam.png"
                }
            ];

            categories.length = 0;

            pengaturanKategori.forEach((pengaturan, index) => {
                const dataLama = data[index] || {};

                categories.push({
                    ...pengaturan,
                    kosakata: Array.isArray(dataLama.kosakata)
                        ? dataLama.kosakata
                        : []
                });
            });

            localStorage.setItem(
                "nihongoStudyData",
                JSON.stringify(categories)
            );
        }
    } catch (error) {
        console.log("Data Local Storage tidak valid:", error);
    }
}


// ==========================================
// ELEMENT
// ==========================================

const categoryList = document.getElementById("categoryList");
const vocabularySection = document.getElementById("vocabularySection");
const vocabularyList = document.getElementById("vocabularyList");
const backButton = document.getElementById("backButton");
const searchInput = document.getElementById("searchInput");

const addVocabularyButton = document.getElementById("addVocabularyButton");
const addVocabularyForm = document.getElementById("addVocabularyForm");
const saveVocabularyButton = document.getElementById("saveVocabularyButton");
const cancelVocabularyButton = document.getElementById("cancelVocabularyButton");

const kanjiInput = document.getElementById("kanjiInput");
const onyomiInput = document.getElementById("onyomiInput");
const kunyomiInput = document.getElementById("kunyomiInput");
const romajiInput = document.getElementById("romajiInput");
const artiInput = document.getElementById("artiInput");


// ==========================================
// VARIABEL
// ==========================================

let currentCategoryIndex = null;


// ==========================================
// SIMPAN DATA
// ==========================================

function simpanData() {
    try {
        localStorage.setItem(
            "nihongoStudyData",
            JSON.stringify(categories)
        );

        console.log("Data berhasil disimpan:", categories);
        return true;

    } catch (error) {
        console.error("Gagal menyimpan data:", error);
        alert("Gagal menyimpan kosakata. Periksa Console untuk melihat penyebabnya.");
        return false;
    }
}

// ==========================================
// KUIS INTERAKTIF
// ==========================================

const openQuizButton = document.getElementById("openQuizButton");
const quizSection = document.getElementById("quizSection");
const backFromQuizButton = document.getElementById("backFromQuizButton");
const quizCategorySelect = document.getElementById("quizCategorySelect");
const startQuizButton = document.getElementById("startQuizButton");
const quizCard = document.getElementById("quizCard");
const quizProgress = document.getElementById("quizProgress");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const nextQuizButton = document.getElementById("nextQuizButton");
const quizResult = document.getElementById("quizResult");

let quizQuestions = [];
let quizPool = [];
let quizCurrentIndex = 0;
let quizScore = 0;
let quizAnswered = false;


// ==========================================
// ACAK DATA
// ==========================================

function acakData(data) {
    return [...data].sort(() => Math.random() - 0.5);
}


// ==========================================
// ISI PILIHAN KATEGORI
// ==========================================

function isiPilihanKategori() {
    quizCategorySelect.innerHTML =
        '<option value="all">Semua Kategori</option>';

    categories.forEach(function(category, index) {
        const option = document.createElement("option");

        option.value = index;
        option.textContent = category.nama;

        quizCategorySelect.appendChild(option);
    });
}

isiPilihanKategori();


// ==========================================
// BUKA MENU KUIS
// ==========================================

openQuizButton.addEventListener("click", function() {
    categoryList.style.display = "none";
    vocabularySection.style.display = "none";
    quizSection.style.display = "block";
    searchInput.style.display = "none";

    quizCard.style.display = "none";
    quizResult.style.display = "none";
});


// ==========================================
// KEMBALI DARI KUIS
// ==========================================

backFromQuizButton.addEventListener("click", function() {
    quizSection.style.display = "none";

    categoryList.style.display = "grid";
    searchInput.style.display = "block";

    quizCard.style.display = "none";
    quizResult.style.display = "none";
});


// ==========================================
// MULAI KUIS
// ==========================================

startQuizButton.addEventListener("click", function() {
    const pilihan = quizCategorySelect.value;

    if (pilihan === "all") {
        quizPool = categories.flatMap(function(category) {
            return category.kosakata;
        });
    } else {
        quizPool = categories[Number(pilihan)].kosakata;
    }

    quizPool = quizPool.filter(function(item) {
        return item.kanji && item.arti;
    });

    const artiUnik = [...new Set(
        quizPool.map(item => item.arti)
    )];

    if (artiUnik.length < 3) {
        alert("Tambahkan minimal 3 kosakata dengan arti berbeda untuk memulai kuis.");
        return;
    }

    quizQuestions = acakData(quizPool).slice(
        0,
        Math.min(5, quizPool.length)
    );

    quizCurrentIndex = 0;
    quizScore = 0;

    quizResult.style.display = "none";
    quizCard.style.display = "block";

    tampilkanSoal();
});


// ==========================================
// TAMPILKAN SOAL
// ==========================================

function tampilkanSoal() {
    quizAnswered = false;

    const soal = quizQuestions[quizCurrentIndex];

    quizProgress.textContent =
        "Soal " + (quizCurrentIndex + 1) +
        " dari " + quizQuestions.length;

    quizQuestion.textContent = soal.kanji;
    quizFeedback.textContent = "";
    quizOptions.innerHTML = "";

    nextQuizButton.style.display = "none";

    const pilihanSalah = [...new Set(
        quizPool
            .map(item => item.arti)
            .filter(arti => arti && arti !== soal.arti)
    )];

    const pilihanJawaban = acakData([
        soal.arti,
        ...acakData(pilihanSalah).slice(0, 3)
    ]);

    pilihanJawaban.forEach(function(jawaban) {
        const button = document.createElement("button");

        button.className = "quiz-option";
        button.textContent = jawaban;

        button.addEventListener("click", function() {
            periksaJawaban(button, jawaban, soal.arti);
        });

        quizOptions.appendChild(button);
    });
}


// ==========================================
// PERIKSA JAWABAN
// ==========================================

function periksaJawaban(button, jawaban, jawabanBenar) {
    if (quizAnswered) return;

    quizAnswered = true;

    const semuaPilihan =
        quizOptions.querySelectorAll(".quiz-option");

    semuaPilihan.forEach(function(option) {
        option.disabled = true;

        if (option.textContent === jawabanBenar) {
            option.classList.add("correct");
        }
    });

    if (jawaban === jawabanBenar) {
        quizScore++;
        quizFeedback.textContent = "Benar! 🎉";
    } else {
        button.classList.add("incorrect");

        quizFeedback.textContent =
            "Belum tepat. Jawaban yang benar adalah: " +
            jawabanBenar;
    }

    nextQuizButton.textContent =
        quizCurrentIndex === quizQuestions.length - 1
            ? "Lihat Hasil"
            : "Soal Berikutnya";

    nextQuizButton.style.display = "inline-block";
}


// ==========================================
// SOAL BERIKUTNYA
// ==========================================

nextQuizButton.addEventListener("click", function() {
    quizCurrentIndex++;

    if (quizCurrentIndex < quizQuestions.length) {
        tampilkanSoal();
    } else {
        tampilkanHasilKuis();
    }
});


// ==========================================
// HASIL KUIS
// ==========================================

function tampilkanHasilKuis() {
    quizCard.style.display = "none";
    quizResult.style.display = "block";

    const totalSoal = quizQuestions.length;
    const jumlahSalah = totalSoal - quizScore;
    const nilai = Math.round((quizScore / totalSoal) * 100);

    quizResult.innerHTML = `
        <h2>🎉 Kuis Selesai!</h2>
        <h1>${nilai}</h1>
        <p>Nilai kamu</p>
        <p>✅ Jawaban benar: ${quizScore}</p>
        <p>❌ Jawaban salah: ${jumlahSalah}</p>
        <p>📚 Total soal: ${totalSoal}</p>

        <button id="ulangKuisButton">
            🔄 Ulangi Kuis
        </button>
    `;

    document.getElementById("ulangKuisButton")
        .addEventListener("click", function() {
            startQuizButton.click();
        });
}


// ==========================================
// TAMPILKAN KATEGORI
// ==========================================

function tampilkanKategori() {
    categoryList.innerHTML = "";

    categories.forEach(function(category, index) {
        const folder = document.createElement("div");

        folder.className = "category";

        folder.innerHTML = `
            <img
                src="${category.gambar}"
                alt="Ilustrasi ${category.nama}"
                class="category-image"
            >

            <div class="category-content">
                <h2>${category.nama}</h2>
                <p>${category.deskripsi}</p>
                <small>${category.kosakata.length} kosakata</small>
            </div>
        `;

        folder.addEventListener("click", function() {
            bukaKategori(index);
        });

        categoryList.appendChild(folder);
    });
}


// ==========================================
// BUKA KATEGORI
// ==========================================

function bukaKategori(index) {
    currentCategoryIndex = index;

    categoryList.style.display = "none";
    vocabularySection.style.display = "block";

    searchInput.value = "";

    addVocabularyForm.style.display = "none";

    tampilkanVocabulary(categories[index].kosakata);
}


// ==========================================
// TAMPILKAN VOCABULARY
// ==========================================

function tampilkanVocabulary(data) {
    vocabularyList.innerHTML = "";

    if (data.length === 0) {
        vocabularyList.innerHTML = `
            <p class="empty-message">
                Belum ada kosakata di folder ini.
            </p>
        `;
        return;
    }

    data.forEach(function(item) {
        const originalIndex =
            categories[currentCategoryIndex].kosakata.indexOf(item);

        const card = document.createElement("div");
        card.className = "vocabulary";

        card.innerHTML = `
            <h3>${item.kanji || ""}</h3>

            <p><strong>Onyomi:</strong> ${item.onyomi || "-"}</p>

            <p><strong>Kunyomi:</strong> ${item.kunyomi || "-"}</p>

            <p><strong>Romaji:</strong> ${item.romaji || "-"}</p>

            <p><strong>Arti:</strong> ${item.arti || "-"}</p>

            <div class="vocabulary-actions">
                <button class="edit-button">✏️ Edit</button>
                <button class="delete-button">🗑️ Hapus</button>
            </div>
        `;

        card.querySelector(".edit-button").addEventListener("click", function(event) {
            event.stopPropagation();

            tampilkanFormEdit(card, item, originalIndex);
        });

        card.querySelector(".delete-button").addEventListener("click", function(event) {
            event.stopPropagation();

            hapusVocabulary(originalIndex);
        });

        vocabularyList.appendChild(card);
    });
}


// ==========================================
// FORM EDIT
// ==========================================

function tampilkanFormEdit(card, item, index) {
    card.innerHTML = `
        <h3>✏️ Edit Kosakata</h3>

        <input
            class="edit-kanji"
            type="text"
            value="${item.kanji || ""}"
            placeholder="Kanji"
        >

        <input
            class="edit-onyomi"
            type="text"
            value="${item.onyomi || ""}"
            placeholder="Onyomi"
        >

        <input
            class="edit-kunyomi"
            type="text"
            value="${item.kunyomi || ""}"
            placeholder="Kunyomi"
        >

        <input
            class="edit-romaji"
            type="text"
            value="${item.romaji || ""}"
            placeholder="Romaji"
        >

        <input
            class="edit-arti"
            type="text"
            value="${item.arti || ""}"
            placeholder="Arti"
        >

        <br><br>

        <button class="save-edit-button">
            💾 Simpan Perubahan
        </button>

        <button class="cancel-edit-button">
            Batal
        </button>
    `;

    // SIMPAN EDIT
    card.querySelector(".save-edit-button").addEventListener("click", function() {
        const kanji = card.querySelector(".edit-kanji").value.trim();
        const onyomi = card.querySelector(".edit-onyomi").value.trim();
        const kunyomi = card.querySelector(".edit-kunyomi").value.trim();
        const romaji = card.querySelector(".edit-romaji").value.trim();
        const arti = card.querySelector(".edit-arti").value.trim();

        if (kanji === "" || romaji === "" || arti === "") {
            alert("Kanji, Romaji, dan Arti wajib diisi!");
            return;
        }

        categories[currentCategoryIndex].kosakata[index] = {
            kanji: kanji,
            onyomi: onyomi,
            kunyomi: kunyomi,
            romaji: romaji,
            arti: arti
        };

        simpanData();

        tampilkanVocabulary(
            categories[currentCategoryIndex].kosakata
        );

        tampilkanKategori();

        alert("Kosakata berhasil diperbarui!");
    });

    // BATAL EDIT
    card.querySelector(".cancel-edit-button").addEventListener("click", function() {
        tampilkanVocabulary(
            categories[currentCategoryIndex].kosakata
        );
    });
}


// ==========================================
// TAMBAH VOCABULARY
// ==========================================

addVocabularyButton.addEventListener("click", function() {
    addVocabularyForm.style.display = "block";
    kanjiInput.focus();
});


// ==========================================
// SIMPAN VOCABULARY BARU
// ==========================================

saveVocabularyButton.addEventListener("click", function() {
    if (currentCategoryIndex === null) {
        alert("Silakan buka folder terlebih dahulu.");
        return;
    }

    const kanji = kanjiInput.value.trim();
    const onyomi = onyomiInput.value.trim();
    const kunyomi = kunyomiInput.value.trim();
    const romaji = romajiInput.value.trim();
    const arti = artiInput.value.trim();

    if (kanji === "" || romaji === "" || arti === "") {
        alert("Kanji, Romaji, dan Arti wajib diisi!");
        return;
    }

    categories[currentCategoryIndex].kosakata.push({
        kanji: kanji,
        onyomi: onyomi,
        kunyomi: kunyomi,
        romaji: romaji,
        arti: arti
    });

    simpanData();

    tampilkanVocabulary(
        categories[currentCategoryIndex].kosakata
    );

    tampilkanKategori();

    resetForm();

    alert("Kosakata berhasil ditambahkan!");
});


// ==========================================
// HAPUS VOCABULARY
// ==========================================

function hapusVocabulary(index) {
    const vocabulary =
        categories[currentCategoryIndex].kosakata[index];

    const yakin = confirm(
        `Apakah kamu yakin ingin menghapus "${vocabulary.kanji}"?`
    );

    if (!yakin) return;

    categories[currentCategoryIndex].kosakata.splice(index, 1);

    simpanData();

    tampilkanVocabulary(
        categories[currentCategoryIndex].kosakata
    );

    tampilkanKategori();
}


// ==========================================
// RESET FORM TAMBAH
// ==========================================

function resetForm() {
    kanjiInput.value = "";
    onyomiInput.value = "";
    kunyomiInput.value = "";
    romajiInput.value = "";
    artiInput.value = "";

    addVocabularyForm.style.display = "none";
}


// ==========================================
// BATAL TAMBAH
// ==========================================

cancelVocabularyButton.addEventListener("click", function() {
    resetForm();
});


// ==========================================
// KEMBALI
// ==========================================

backButton.addEventListener("click", function() {
    vocabularySection.style.display = "none";
    categoryList.style.display = "grid";

    searchInput.value = "";
    currentCategoryIndex = null;

    resetForm();
});


// ==========================================
// SEARCH
// ==========================================

searchInput.addEventListener("input", function() {
    const keyword = searchInput.value.toLowerCase().trim();

    if (keyword === "") {
        vocabularySection.style.display = "none";
        addVocabularyForm.style.display = "none";

        if (currentCategoryIndex !== null) {
            tampilkanVocabulary(
                categories[currentCategoryIndex].kosakata
            );

            vocabularySection.style.display = "block";
            categoryList.style.display = "none";
        } else {
            tampilkanKategori();
            categoryList.style.display = "grid";
        }

        return;
    }

    const hasilPencarian = [];

    categories.forEach(function(category, categoryIndex) {
        category.kosakata.forEach(function(item, vocabularyIndex) {
            const cocok =
                (item.kanji || "").toLowerCase().includes(keyword) ||
                (item.onyomi || "").toLowerCase().includes(keyword) ||
                (item.kunyomi || "").toLowerCase().includes(keyword) ||
                (item.romaji || "").toLowerCase().includes(keyword) ||
                (item.arti || "").toLowerCase().includes(keyword);

            if (cocok) {
                hasilPencarian.push({
                    item: item,
                    categoryIndex: categoryIndex,
                    vocabularyIndex: vocabularyIndex
                });
            }
        });
    });

    categoryList.style.display = "none";
    vocabularySection.style.display = "block";
    addVocabularyForm.style.display = "none";

    vocabularyList.innerHTML = "";

    if (hasilPencarian.length === 0) {
        vocabularyList.innerHTML = `
            <p class="empty-message">
                Kosakata tidak ditemukan.
            </p>
        `;
        return;
    }

    hasilPencarian.forEach(function(result) {
        const item = result.item;
        const card = document.createElement("div");

        card.className = "vocabulary";

        card.innerHTML = `
            <h3>${item.kanji || ""}</h3>

            <p><strong>Onyomi:</strong> ${item.onyomi || "-"}</p>

            <p><strong>Kunyomi:</strong> ${item.kunyomi || "-"}</p>

            <p><strong>Romaji:</strong> ${item.romaji || "-"}</p>

            <p><strong>Arti:</strong> ${item.arti || "-"}</p>

            <small>
                📁 ${categories[result.categoryIndex].nama}
            </small>

            <div class="vocabulary-actions">
                <button class="edit-button">✏️ Edit</button>
                <button class="delete-button">🗑️ Hapus</button>
            </div>
        `;

        // EDIT DARI SEARCH
        card.querySelector(".edit-button").addEventListener("click", function(event) {
            event.stopPropagation();

            currentCategoryIndex = result.categoryIndex;

            tampilkanFormEdit(
                card,
                item,
                result.vocabularyIndex
            );
        });

        // HAPUS DARI SEARCH
        card.querySelector(".delete-button").addEventListener("click", function(event) {
            event.stopPropagation();

            currentCategoryIndex = result.categoryIndex;

            hapusVocabulary(result.vocabularyIndex);
        });

        vocabularyList.appendChild(card);
    });
});


// ==========================================
// JALANKAN WEBSITE
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    tampilkanKategori();
    categoryList.style.display = "grid";
});
