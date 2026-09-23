// ==========================================
// DATA AWAL
// ==========================================

const categories = [
    {
        nama: "Manga",
        deskripsi: "Kanji looting dari Manga",
        kosakata: [
            {
                kanji: "学校",
                hiragana: "がっこう",
                romaji: "Gakkou",
                arti: "Sekolah"
            },
            {
                kanji: "先生",
                hiragana: "せんせい",
                romaji: "Sensei",
                arti: "Guru"
            },
            {
                kanji: "学生",
                hiragana: "がくせい",
                romaji: "Gakusei",
                arti: "Pelajar"
            }
        ]
    },

    {
        nama: "Anime",
        deskripsi: "Lootingan Kanji dari anime",
        kosakata: [
            {
                kanji: "山",
                hiragana: "やま",
                romaji: "Yama",
                arti: "Gunung"
            },
            {
                kanji: "川",
                hiragana: "かわ",
                romaji: "Kawa",
                arti: "Sungai"
            },
            {
                kanji: "木",
                hiragana: "き",
                romaji: "Ki",
                arti: "Pohon"
            }
        ]
    },

    {
        nama: "Migii",
        deskripsi: "Kanji yang ada di Migii",
        kosakata: [
            {
                kanji: "水",
                hiragana: "みず",
                romaji: "Mizu",
                arti: "Air"
            },
            {
                kanji: "火",
                hiragana: "ひ",
                romaji: "Hi",
                arti: "Api"
            },
            {
                kanji: "家",
                hiragana: "いえ",
                romaji: "Ie",
                arti: "Rumah"
            }
        ]
    }
];


// ==========================================
// LOAD DATA DARI LOCAL STORAGE
// ==========================================

const dataTersimpan =
    localStorage.getItem("nihongoStudyData");

if (dataTersimpan) {

    try {

        const data =
            JSON.parse(dataTersimpan);

        categories.length = 0;

        data.forEach(function(category) {

            categories.push(category);

        });

    } catch (error) {

        console.log(
            "Data Local Storage tidak valid."
        );

    }
}


// ==========================================
// ELEMENT HTML
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

const hiraganaInput =
    document.getElementById("hiraganaInput");

const romajiInput =
    document.getElementById("romajiInput");

const artiInput =
    document.getElementById("artiInput");


// ==========================================
// VARIABEL
// ==========================================

let currentCategoryIndex = null;

let editingIndex = null;


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
// TAMPILKAN FOLDER
// ==========================================

function tampilkanKategori() {

    categoryList.innerHTML = "";

    categories.forEach(function(category, index) {

        const folder =
            document.createElement("div");

        folder.className = "category";

        folder.innerHTML = `
            <h2>📁 ${category.nama}</h2>

            <p>
                ${category.deskripsi}
            </p>

            <small>
                ${category.kosakata.length}
                kosakata
            </small>
        `;


        folder.addEventListener(
            "click",
            function() {

                bukaKategori(index);

            }
        );


        categoryList.appendChild(folder);

    });

}


// ==========================================
// BUKA FOLDER
// ==========================================

function bukaKategori(index) {

    currentCategoryIndex = index;

    categoryList.style.display =
        "none";

    vocabularySection.style.display =
        "block";


    // Kosongkan search

    searchInput.value = "";


    // Tampilkan vocabulary

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
            <p>
                Belum ada kosakata di folder ini.
            </p>
        `;

        return;

    }


    data.forEach(function(item) {

        // Cari index asli vocabulary
        // di kategori aktif

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
                ${item.hiragana}
            </p>

            <p>
                ${item.romaji}
            </p>

            <p>
                ${item.arti}
            </p>

            <div class="vocabulary-actions">

                <button
                    class="edit-button"
                >
                    ✏️ Edit
                </button>

                <button
                    class="delete-button"
                >
                    🗑️ Hapus
                </button>

            </div>

        `;


        // ==================================
        // TOMBOL EDIT
        // ==================================

        const editButton =
            card.querySelector(
                ".edit-button"
            );


        editButton.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                editVocabulary(
                    originalIndex
                );

            }
        );


        // ==================================
        // TOMBOL HAPUS
        // ==================================

        const deleteButton =
            card.querySelector(
                ".delete-button"
            );


        deleteButton.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                deleteVocabulary(
                    originalIndex
                );

            }
        );


        vocabularyList.appendChild(card);

    });

}


// ==========================================
// TOMBOL TAMBAH
// ==========================================

addVocabularyButton.addEventListener(
    "click",
    function() {

        // Pastikan mode tambah

        editingIndex = null;


        // Kosongkan form

        kanjiInput.value = "";

        hiraganaInput.value = "";

        romajiInput.value = "";

        artiInput.value = "";


        // Tampilkan form

        addVocabularyForm.style.display =
            "block";


        // Ubah tulisan tombol

        saveVocabularyButton.textContent =
            "Simpan";


        kanjiInput.focus();

    }
);


// ==========================================
// EDIT VOCABULARY
// ==========================================

function editVocabulary(index) {

    const vocabulary =
        categories[
            currentCategoryIndex
        ].kosakata[index];


    // Simpan index yang sedang diedit

    editingIndex = index;


    // Masukkan data lama ke form

    kanjiInput.value =
        vocabulary.kanji;

    hiraganaInput.value =
        vocabulary.hiragana;

    romajiInput.value =
        vocabulary.romaji;

    artiInput.value =
        vocabulary.arti;


    // Tampilkan form

    addVocabularyForm.style.display =
        "block";


    // Ubah tombol Simpan

    saveVocabularyButton.textContent =
        "Update";


    kanjiInput.focus();

}


// ==========================================
// SIMPAN / UPDATE VOCABULARY
// ==========================================

saveVocabularyButton.addEventListener(
    "click",
    function() {

        const kanji =
            kanjiInput.value.trim();

        const hiragana =
            hiraganaInput.value.trim();

        const romaji =
            romajiInput.value.trim();

        const arti =
            artiInput.value.trim();


        // ==================================
        // CEK INPUT
        // ==================================

        if (
            kanji === "" ||
            hiragana === "" ||
            romaji === "" ||
            arti === ""
        ) {

            alert(
                "Semua kolom harus diisi!"
            );

            return;

        }


        // ==================================
        // MODE EDIT
        // ==================================

        if (editingIndex !== null) {

            categories[
                currentCategoryIndex
            ].kosakata[
                editingIndex
            ] = {

                kanji: kanji,

                hiragana: hiragana,

                romaji: romaji,

                arti: arti

            };


            alert(
                "Kosakata berhasil diperbarui!"
            );

        }


        // ==================================
        // MODE TAMBAH
        // ==================================

        else {

            categories[
                currentCategoryIndex
            ].kosakata.push({

                kanji: kanji,

                hiragana: hiragana,

                romaji: romaji,

                arti: arti

            });


            alert(
                "Kosakata berhasil ditambahkan!"
            );

        }


        // ==================================
        // SIMPAN
        // ==================================

        simpanData();


        // ==================================
        // UPDATE TAMPILAN
        // ==================================

        tampilkanVocabulary(
            categories[
                currentCategoryIndex
            ].kosakata
        );


        tampilkanKategori();


        // Tetap berada di folder

        categoryList.style.display =
            "none";

        vocabularySection.style.display =
            "block";


        // ==================================
        // RESET FORM
        // ==================================

        kanjiInput.value = "";

        hiraganaInput.value = "";

        romajiInput.value = "";

        artiInput.value = "";


        addVocabularyForm.style.display =
            "none";


        editingIndex = null;


        saveVocabularyButton.textContent =
            "Simpan";

    }
);


// ==========================================
// HAPUS VOCABULARY
// ==========================================

function deleteVocabulary(index) {

    const vocabulary =
        categories[
            currentCategoryIndex
        ].kosakata[index];


    // Konfirmasi

    const yakin =
        confirm(
            `Apakah kamu yakin ingin menghapus "${vocabulary.kanji}"?`
        );


    if (!yakin) {

        return;

    }


    // Hapus vocabulary

    categories[
        currentCategoryIndex
    ].kosakata.splice(
        index,
        1
    );


    // Simpan

    simpanData();


    // Tampilkan ulang

    tampilkanVocabulary(
        categories[
            currentCategoryIndex
        ].kosakata
    );


    // Update jumlah kosakata

    tampilkanKategori();


    // Tetap di folder

    categoryList.style.display =
        "none";

    vocabularySection.style.display =
        "block";


    alert(
        "Kosakata berhasil dihapus!"
    );

}


// ==========================================
// TOMBOL BATAL
// ==========================================

cancelVocabularyButton.addEventListener(
    "click",
    function() {

        kanjiInput.value = "";

        hiraganaInput.value = "";

        romajiInput.value = "";

        artiInput.value = "";


        addVocabularyForm.style.display =
            "none";


        editingIndex = null;


        saveVocabularyButton.textContent =
            "Simpan";

    }
);


// ==========================================
// TOMBOL KEMBALI
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


        editingIndex =
            null;


        addVocabularyForm.style.display =
            "none";

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


        // ==================================
        // KALAU SEARCH KOSONG
        // ==================================

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

            return;

        }


        // ==================================
        // CARI SEMUA VOCABULARY
        // ==================================

        const hasilPencarian = [];


        categories.forEach(
            function(category) {

                category.kosakata.forEach(
                    function(item) {

                        const cocok =

                            item.kanji
                                .toLowerCase()
                                .includes(keyword)

                            ||

                            item.hiragana
                                .toLowerCase()
                                .includes(keyword)

                            ||

                            item.romaji
                                .toLowerCase()
                                .includes(keyword)

                            ||

                            item.arti
                                .toLowerCase()
                                .includes(keyword);


                        if (cocok) {

                            hasilPencarian.push(
                                item
                            );

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


        // Karena hasil pencarian bisa
        // berasal dari banyak folder,
        // sementara Edit/Hapus menggunakan
        // kategori aktif, kita tampilkan
        // hasil dari kategori yang sesuai
        // jika ada.

        vocabularyList.innerHTML = "";


        if (
            hasilPencarian.length === 0
        ) {

            vocabularyList.innerHTML = `
                <p>
                    Kosakata tidak ditemukan.
                </p>
            `;

            return;

        }


        hasilPencarian.forEach(
            function(item) {

                const card =
                    document.createElement("div");

                card.className =
                    "vocabulary";


                // Cari lokasi asli item

                let categoryIndex = null;

                let vocabularyIndex = null;


                categories.forEach(
                    function(category, cIndex) {

                        const vIndex =
                            category.kosakata
                                .indexOf(item);


                        if (vIndex !== -1) {

                            categoryIndex =
                                cIndex;

                            vocabularyIndex =
                                vIndex;

                        }

                    }
                );


                card.innerHTML = `

                    <h3>
                        ${item.kanji}
                    </h3>

                    <p>
                        ${item.hiragana}
                    </p>

                    <p>
                        ${item.romaji}
                    </p>

                    <p>
                        ${item.arti}
                    </p>

                    <small>
                        📁 ${categories[
                            categoryIndex
                        ].nama}
                    </small>

                    <div class="vocabulary-actions">

                        <button
                            class="edit-button"
                        >
                            ✏️ Edit
                        </button>

                        <button
                            class="delete-button"
                        >
                            🗑️ Hapus
                        </button>

                    </div>

                `;


                // ==================================
                // EDIT DARI SEARCH
                // ==================================

                const editButton =
                    card.querySelector(
                        ".edit-button"
                    );


                editButton.addEventListener(
                    "click",
                    function(event) {

                        event.stopPropagation();


                        // Jadikan folder asal
                        // sebagai folder aktif

                        currentCategoryIndex =
                            categoryIndex;


                        editVocabulary(
                            vocabularyIndex
                        );

                    }
                );


                // ==================================
                // HAPUS DARI SEARCH
                // ==================================

                const deleteButton =
                    card.querySelector(
                        ".delete-button"
                    );


                deleteButton.addEventListener(
                    "click",
                    function(event) {

                        event.stopPropagation();


                        currentCategoryIndex =
                            categoryIndex;


                        deleteVocabulary(
                            vocabularyIndex
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