// ==========================================
// DATA AWAL
// ==========================================

const categories = [
    {
        nama: "Pagi",
        deskripsi: "Kosakata dan aktivitas pada pagi hari",
        gambar: "pagi.png",
        kosakata: [
            // Pertahankan kosakata folder Manga di sini
        ]
    },
    {
        nama: "Siang",
        deskripsi: "Kosakata dan aktivitas pada siang hari",
        gambar: "siang.png",
        kosakata: [
            // Pertahankan kosakata folder Anime di sini
        ]
    },
    {
        nama: "Malam",
        deskripsi: "Kosakata dan aktivitas pada malam hari",
        gambar: "malam.png",
        kosakata: [
            // Pertahankan kosakata folder Migii di sini
        ]
    }
]


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
        console.log("Data Local Storage tidak valid.");
    }
}


// ==========================================
// ELEMENT
// ==========================================

const categoryList =
    document.getElementById("categoryList");

const vocabularySection =
    document.getElementById("vocabularySection");

const vocabularyList =
    document.getElementById("vocabularyList");

const backButton =
    document.getElementById("backButton");

const searchInput =
    document.getElementById("searchInput");

const addVocabularyButton =
    document.getElementById("addVocabularyButton");

const addVocabularyForm =
    document.getElementById("addVocabularyForm");

const saveVocabularyButton =
    document.getElementById("saveVocabularyButton");

const cancelVocabularyButton =
    document.getElementById("cancelVocabularyButton");

const kanjiInput =
    document.getElementById("kanjiInput");

const onyomiInput =
    document.getElementById("onyomiInput");

const kunyomiInput =
    document.getElementById("kunyomiInput");

const romajiInput =
    document.getElementById("romajiInput");

const artiInput =
    document.getElementById("artiInput");

const goresanInput =
    document.getElementById("goresanInput");


// ==========================================
// VARIABEL
// ==========================================

let currentCategoryIndex = null;


// ==========================================
// SIMPAN DATA
// ==========================================

function simpanData() {

    localStorage.setItem(
        "nihongoStudyData",
        JSON.stringify(categories)
    );

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

                <small>
                    ${category.kosakata.length} kosakata
                </small>

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

    currentCategoryIndex =
        index;

    categoryList.style.display =
        "none";

    vocabularySection.style.display =
        "block";

    searchInput.value = "";

    addVocabularyForm.style.display =
        "none";

    tampilkanVocabulary(
        categories[index].kosakata
    );

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
            categories[
                currentCategoryIndex
            ].kosakata.indexOf(item);


        const card =
            document.createElement("div");

        card.className =
            "vocabulary";


        card.innerHTML = `

            <h3>
                ${item.kanji}
            </h3>

            <p>
                <strong>Onyomi:</strong>
                ${item.onyomi || "-"}
            </p>

            <p>
                <strong>Kunyomi:</strong>
                ${item.kunyomi || "-"}
            </p>

            <p>
                <strong>Romaji:</strong>
                ${item.romaji || "-"}
            </p>

            <p>
                <strong>Arti:</strong>
                ${item.arti || "-"}
            </p>

            <p>
                <strong>Jumlah goresan:</strong>
                ${item.goresan || "-"}
            </p>

            <div class="vocabulary-actions">

                <button class="edit-button">
                    ✏️ Edit
                </button>

                <button class="delete-button">
                    🗑️ Hapus
                </button>

            </div>
        `;


        // ==================================
        // TOMBOL EDIT
        // ==================================

        card.querySelector(
            ".edit-button"
        ).addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                tampilkanFormEdit(
                    card,
                    item,
                    originalIndex
                );

            }
        );


        // ==================================
        // TOMBOL HAPUS
        // ==================================

        card.querySelector(
            ".delete-button"
        ).addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                hapusVocabulary(
                    originalIndex
                );

            }
        );


        vocabularyList.appendChild(card);

    });

}


// ==========================================
// FORM EDIT
// ==========================================

function tampilkanFormEdit(
    card,
    item,
    index
) {

    card.innerHTML = `

        <h3>
            ✏️ Edit Kosakata
        </h3>

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

        <input
            class="edit-goresan"
            type="number"
            value="${item.goresan || ""}"
            placeholder="Jumlah goresan"
            min="1"
        >

        <br><br>

        <button class="save-edit-button">
            💾 Simpan Perubahan
        </button>

        <button class="cancel-edit-button">
            Batal
        </button>
    `;


    // ==================================
    // SIMPAN EDIT
    // ==================================

    card.querySelector(
        ".save-edit-button"
    ).addEventListener(
        "click",
        function() {

            const kanji =
                card.querySelector(
                    ".edit-kanji"
                ).value.trim();

            const onyomi =
                card.querySelector(
                    ".edit-onyomi"
                ).value.trim();

            const kunyomi =
                card.querySelector(
                    ".edit-kunyomi"
                ).value.trim();

            const romaji =
                card.querySelector(
                    ".edit-romaji"
                ).value.trim();

            const arti =
                card.querySelector(
                    ".edit-arti"
                ).value.trim();

            const goresan =
                card.querySelector(
                    ".edit-goresan"
                ).value.trim();


            if (
                kanji === "" ||
                romaji === "" ||
                arti === "" ||
                goresan === ""
            ) {

                alert(
                    "Kanji, Romaji, Arti, dan Jumlah goresan wajib diisi!"
                );

                return;
            }


            categories[
                currentCategoryIndex
            ].kosakata[index] = {

                kanji: kanji,

                onyomi: onyomi,

                kunyomi: kunyomi,

                romaji: romaji,

                arti: arti,

                goresan: Number(goresan)

            };


            simpanData();


            tampilkanVocabulary(
                categories[
                    currentCategoryIndex
                ].kosakata
            );


            tampilkanKategori();


            alert(
                "Kosakata berhasil diperbarui!"
            );

        }
    );


    // ==================================
    // BATAL EDIT
    // ==================================

    card.querySelector(
        ".cancel-edit-button"
    ).addEventListener(
        "click",
        function() {

            tampilkanVocabulary(
                categories[
                    currentCategoryIndex
                ].kosakata
            );

        }
    );

}


// ==========================================
// TAMBAH VOCABULARY
// ==========================================

addVocabularyButton.addEventListener(
    "click",
    function() {

        addVocabularyForm.style.display =
            "block";

        kanjiInput.focus();

    }
);


// ==========================================
// SIMPAN VOCABULARY BARU
// ==========================================

saveVocabularyButton.addEventListener(
    "click",
    function() {

        if (currentCategoryIndex === null) {

            alert(
                "Silakan buka folder terlebih dahulu."
            );

            return;
        }


        const kanji =
            kanjiInput.value.trim();

        const onyomi =
            onyomiInput.value.trim();

        const kunyomi =
            kunyomiInput.value.trim();

        const romaji =
            romajiInput.value.trim();

        const arti =
            artiInput.value.trim();

        const goresan =
            goresanInput.value.trim();


        if (
            kanji === "" ||
            romaji === "" ||
            arti === "" ||
            goresan === ""
        ) {

            alert(
                "Kanji, Romaji, Arti, dan Jumlah goresan wajib diisi!"
            );

            return;
        }


        categories[
            currentCategoryIndex
        ].kosakata.push({

            kanji: kanji,

            onyomi: onyomi,

            kunyomi: kunyomi,

            romaji: romaji,

            arti: arti,

            goresan: Number(goresan)

        });


        simpanData();


        tampilkanVocabulary(
            categories[
                currentCategoryIndex
            ].kosakata
        );


        tampilkanKategori();


        resetForm();


        alert(
            "Kosakata berhasil ditambahkan!"
        );

    }
);


// ==========================================
// HAPUS VOCABULARY
// ==========================================

function hapusVocabulary(index) {

    const vocabulary =
        categories[
            currentCategoryIndex
        ].kosakata[index];


    const yakin =
        confirm(
            `Apakah kamu yakin ingin menghapus "${vocabulary.kanji}"?`
        );


    if (!yakin) {

        return;

    }


    categories[
        currentCategoryIndex
    ].kosakata.splice(
        index,
        1
    );


    simpanData();


    tampilkanVocabulary(
        categories[
            currentCategoryIndex
        ].kosakata
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

    goresanInput.value = "";

    addVocabularyForm.style.display =
        "none";

}


// ==========================================
// BATAL TAMBAH
// ==========================================

cancelVocabularyButton.addEventListener(
    "click",
    function() {

        resetForm();

    }
);


// ==========================================
// KEMBALI
// ==========================================

backButton.addEventListener(
    "click",
    function() {

        vocabularySection.style.display =
            "none";

        categoryList.style.display =
            "block";

        searchInput.value = "";

        currentCategoryIndex =
            null;

        resetForm();

    }
);


// ==========================================
// SEARCH
// ==========================================

searchInput.addEventListener(
    "input",
    function() {

        const keyword =
            searchInput.value
                .toLowerCase()
                .trim();


        // Jika pencarian kosong

        if (keyword === "") {

            if (
                currentCategoryIndex !== null
            ) {

                tampilkanVocabulary(
                    categories[
                        currentCategoryIndex
                    ].kosakata
                );

            }
            else {

                tampilkanKategori();

                vocabularySection.style.display =
                    "none";

                categoryList.style.display =
                    "block";

            }

            return;

        }


        // ==================================
        // CARI SEMUA VOCABULARY
        // ==================================

        const hasilPencarian = [];


        categories.forEach(
            function(category, categoryIndex) {

                category.kosakata.forEach(
                    function(item, vocabularyIndex) {

                        const cocok =

                            (item.kanji || "")
                                .toLowerCase()
                                .includes(keyword)

                            ||

                            (item.onyomi || "")
                                .toLowerCase()
                                .includes(keyword)

                            ||

                            (item.kunyomi || "")
                                .toLowerCase()
                                .includes(keyword)

                            ||

                            (item.romaji || "")
                                .toLowerCase()
                                .includes(keyword)

                            ||

                            (item.arti || "")
                                .toLowerCase()
                                .includes(keyword);


                        if (cocok) {

                            hasilPencarian.push({

                                item:
                                    item,

                                categoryIndex:
                                    categoryIndex,

                                vocabularyIndex:
                                    vocabularyIndex

                            });

                        }

                    }
                );

            }
        );


        // ==================================
        // TAMPILKAN HASIL
        // ==================================

        categoryList.style.display =
            "none";

        vocabularySection.style.display =
            "block";

        addVocabularyForm.style.display =
            "none";

        vocabularyList.innerHTML = "";


        if (
            hasilPencarian.length === 0
        ) {

            vocabularyList.innerHTML = `
                <p class="empty-message">
                    Kosakata tidak ditemukan.
                </p>
            `;

            return;
        }


        hasilPencarian.forEach(
            function(result) {

                const item =
                    result.item;

                const card =
                    document.createElement("div");

                card.className =
                    "vocabulary";


                card.innerHTML = `

                    <h3>
                        ${item.kanji}
                    </h3>

                    <p>
                        <strong>Onyomi:</strong>
                        ${item.onyomi || "-"}
                    </p>

                    <p>
                        <strong>Kunyomi:</strong>
                        ${item.kunyomi || "-"}
                    </p>

                    <p>
                        <strong>Romaji:</strong>
                        ${item.romaji || "-"}
                    </p>

                    <p>
                        <strong>Arti:</strong>
                        ${item.arti || "-"}
                    </p>

                    <p>
                        <strong>Jumlah goresan:</strong>
                        ${item.goresan || "-"}
                    </p>

                    <small>
                        📁
                        ${categories[
                            result.categoryIndex
                        ].nama}
                    </small>

                    <div class="vocabulary-actions">

                        <button class="edit-button">
                            ✏️ Edit
                        </button>

                        <button class="delete-button">
                            🗑️ Hapus
                        </button>

                    </div>
                `;


                // ==================================
                // EDIT DARI SEARCH
                // ==================================

                card.querySelector(
                    ".edit-button"
                ).addEventListener(
                    "click",
                    function(event) {

                        event.stopPropagation();

                        currentCategoryIndex =
                            result.categoryIndex;

                        tampilkanFormEdit(
                            card,
                            item,
                            result.vocabularyIndex
                        );

                    }
                );


                // ==================================
                // HAPUS DARI SEARCH
                // ==================================

                card.querySelector(
                    ".delete-button"
                ).addEventListener(
                    "click",
                    function(event) {

                        event.stopPropagation();

                        currentCategoryIndex =
                            result.categoryIndex;

                        hapusVocabulary(
                            result.vocabularyIndex
                        );

                    }
                );


                vocabularyList.appendChild(card);

            }
        );

    }
);


// ==========================================
// JALANKAN WEBSITE
// ==========================================

tampilkanKategori();