// ==========================================
// KONFIGURASI SUPABASE
// ==========================================

const SUPABASE_URL =
    "https://wlitjnrhtusqndpicerk.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_NMY1WdcdPq6_GgrDv2nxEw_PIYsCyaF";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


// ==========================================
// DATA PRODUK
// ==========================================

const products = {

    pulsa: [

        {
            name: "Telkomsel 10.000",
            price: 15000,
            code: "S10",
            icon: "📱"
        },

        {
            name: "Telkomsel 15.000",
            price: 20000,
            code: "S15",
            icon: "📱"
        },

        {
            name: "Telkomsel 20.000",
            price: 25000,
            code: "S20",
            icon: "📱"
        },

        {
            name: "Telkomsel 25.000",
            price: 30000,
            code: "S25",
            icon: "📱"
        },

        {
            name: "Telkomsel 30.000",
            price: 35000,
            code: "S30",
            icon: "📱"
        },

        {
            name: "Telkomsel 50.000",
            price: 55000,
            code: "S50",
            icon: "📱"
        },

        {
            name: "Telkomsel 100.000",
            price: 105000,
            code: "S100",
            icon: "📱"
        }

    ],


    ewallet: [

        {
            name: "DANA",
            price: 0,
            code: "DANA",
            icon: "💳",
            custom: true
        },

        {
            name: "OVO",
            price: 0,
            code: "OVO",
            icon: "💳",
            custom: true
        },

        {
            name: "GoPay",
            price: 0,
            code: "GOPAY",
            icon: "💳",
            custom: true
        },

        {
            name: "LinkAja",
            price: 0,
            code: "LINKAJA",
            icon: "💳",
            custom: true
        },

        {
            name: "ShopeePay",
            price: 0,
            code: "SHOPEEPAY",
            icon: "💳",
            custom: true
        }

    ],


    pln: [

        {
            name: "Token PLN 20.000",
            price: 25000,
            code: "PLN20",
            icon: "⚡"
        },

        {
            name: "Token PLN 50.000",
            price: 55000,
            code: "PLN50",
            icon: "⚡"
        },

        {
            name: "Token PLN 100.000",
            price: 105000,
            code: "PLN100",
            icon: "⚡"
        }

    ]

};


// ==========================================
// VARIABEL
// ==========================================

let currentCategory = "pulsa";

let selectedProduct = null;


// ==========================================
// ELEMENT HTML
// ==========================================

const productGrid =
    document.getElementById(
        "productGrid"
    );

const emptyState =
    document.getElementById(
        "emptyState"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );

const categoryTitle =
    document.getElementById(
        "categoryTitle"
    );


// ==========================================
// FORMAT RUPIAH
// ==========================================

function formatRupiah(number) {

    return new Intl.NumberFormat(
        "id-ID",
        {

            style: "currency",

            currency: "IDR",

            minimumFractionDigits: 0

        }

    ).format(number);

}


// ==========================================
// HITUNG ADMIN EWALLET
// ==========================================

function calculateAdmin(nominal) {

    if (nominal <= 100000) {

        return 5000;

    }

    if (nominal <= 300000) {

        return 7000;

    }

    if (nominal <= 500000) {

        return 10000;

    }

    if (nominal <= 1000000) {

        return 15000;

    }

    return 0;

}


// ==========================================
// TAMPILKAN PRODUK
// ==========================================

function renderProducts() {

    const searchValue =

        searchInput.value
            .toLowerCase()
            .trim();


    const filteredProducts =

        products[currentCategory].filter(

            product =>

                product.name
                    .toLowerCase()
                    .includes(searchValue)

                ||

                product.code
                    .toLowerCase()
                    .includes(searchValue)

        );


    productGrid.innerHTML = "";


    categoryTitle.textContent =

        currentCategory === "pulsa"

            ? "Pulsa"

            : currentCategory === "ewallet"

                ? "E-Wallet"

                : "Token PLN";


    if (

        filteredProducts.length === 0

    ) {

        emptyState.style.display =
            "block";

        return;

    }


    emptyState.style.display =
        "none";


    filteredProducts.forEach(

        product => {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "product-card";


            const priceDisplay =

                product.custom

                    ? "Nominal Bebas"

                    : formatRupiah(
                        product.price
                    );


            card.innerHTML = `

                <div class="product-top">

                    <div class="product-icon">

                        ${product.icon}

                    </div>

                    <span class="available">

                        ● Tersedia

                    </span>

                </div>


                <h3>

                    ${product.name}

                </h3>


                <div class="product-price">

                    ${priceDisplay}

                </div>


                <div class="product-meta">

                    <div class="product-code">

                        Kode:

                        <strong>

                            ${product.code}

                        </strong>

                    </div>


                    <button

                        class="order-btn"

                        type="button"

                    >

                        Pesan

                    </button>

                </div>

            `;


            card

                .querySelector(
                    ".order-btn"
                )

                .addEventListener(

                    "click",

                    () => {

                        openOrderModal(

                            product.name,

                            product.price,

                            product.code,

                            product.icon,

                            product.custom

                        );

                    }

                );


            productGrid.appendChild(
                card
            );

        }

    );

}


// ==========================================
// KATEGORI
// ==========================================

document

    .querySelectorAll(
        ".category-card"
    )

    .forEach(

        card => {


            card.addEventListener(

                "click",

                () => {


                    document

                        .querySelectorAll(
                            ".category-card"
                        )

                        .forEach(

                            item => {

                                item.classList.remove(
                                    "active"
                                );

                            }

                        );


                    card.classList.add(
                        "active"
                    );


                    currentCategory =

                        card.dataset.category;


                    renderProducts();


                    document

                        .getElementById(
                            "produk"
                        )

                        .scrollIntoView({

                            behavior:
                                "smooth"

                        });

                }

            );

        }

    );


// ==========================================
// PENCARIAN
// ==========================================

searchInput.addEventListener(

    "input",

    renderProducts

);


// ==========================================
// MODAL
// ==========================================

const modalOverlay =

    document.getElementById(
        "modalOverlay"
    );

const closeModal =

    document.getElementById(
        "closeModal"
    );

const orderForm =

    document.getElementById(
        "orderForm"
    );

const paymentMethod =

    document.getElementById(
        "paymentMethod"
    );

const paymentInfo =

    document.getElementById(
        "paymentInfo"
    );

const cashUploadBox =

    document.getElementById(
        "cashUploadBox"
    );

const debtUploadBox =

    document.getElementById(
        "debtUploadBox"
    );

const paymentProof =

    document.getElementById(
        "paymentProof"
    );

const selfieProof =

    document.getElementById(
        "selfieProof"
    );


// ==========================================
// BUKA MODAL
// ==========================================

function openOrderModal(

    name,

    price,

    code,

    icon,

    custom

) {


    selectedProduct = {

        name,

        price,

        code,

        icon,

        custom

    };


    document.getElementById(

        "modalProductName"

    ).textContent = name;


    document.getElementById(

        "modalProductPrice"

    ).textContent =

        custom

            ? "Nominal Bebas"

            : formatRupiah(
                price
            );


    document.getElementById(

        "modalProductCode"

    ).textContent = code;


    document.getElementById(

        "modalIcon"

    ).textContent = icon;


    addCustomNominalInput(
        custom
    );


    modalOverlay.classList.add(
        "active"
    );

}


// ==========================================
// NOMINAL BEBAS EWALLET
// ==========================================

function addCustomNominalInput(

    custom

) {


    const oldBox =

        document.getElementById(
            "customNominalBox"
        );


    if (oldBox) {

        oldBox.remove();

    }


    if (!custom) {

        return;

    }


    const paymentLabel =

        paymentMethod.parentElement;


    const nominalBox =

        document.createElement(
            "div"
        );


    nominalBox.id =
        "customNominalBox";


    nominalBox.innerHTML = `

        <label>

            Nominal E-Wallet

            <input

                type="number"

                id="customNominal"

                placeholder="Contoh: 37000"

                min="1000"

                max="1000000"

                required

            >

        </label>


        <div

            id="customPriceInfo"

            class="payment-info"

        >

            Masukkan nominal untuk menghitung harga jual.

        </div>

    `;


    paymentLabel.parentNode.insertBefore(

        nominalBox,

        paymentLabel

    );


    document

        .getElementById(
            "customNominal"
        )

        .addEventListener(

            "input",

            updateCustomPrice

        );

}


// ==========================================
// UPDATE HARGA EWALLET
// ==========================================

function updateCustomPrice() {


    const input =

        document.getElementById(
            "customNominal"
        );


    const info =

        document.getElementById(
            "customPriceInfo"
        );


    if (!input) {

        return;

    }


    const nominal =

        Number(
            input.value
        );


    if (!nominal) {

        info.innerHTML =

            "Masukkan nominal untuk menghitung harga jual.";

        return;

    }


    const admin =

        calculateAdmin(
            nominal
        );


    const total =

        nominal + admin;


    info.innerHTML = `

        Nominal:

        <strong>

            ${formatRupiah(
                nominal
            )}

        </strong>


        <br>


        Biaya Admin:

        <strong>

            ${formatRupiah(
                admin
            )}

        </strong>


        <br>


        Total:

        <strong>

            ${formatRupiah(
                total
            )}

        </strong>

    `;

}


// ==========================================
// METODE PEMBAYARAN
// ==========================================

paymentMethod.addEventListener(

    "change",

    () => {


        cashUploadBox.style.display =
            "none";


        debtUploadBox.style.display =
            "none";


        paymentProof.required =
            false;


        selfieProof.required =
            false;


        if (

            paymentMethod.value ===
            "cash"

        ) {


            cashUploadBox.style.display =
                "block";


            paymentProof.required =
                true;


            paymentInfo.innerHTML = `

                💵 <strong>

                    Bayar Cash kepada Ibu Usih / Ira

                </strong>


                <br><br>

                Upload bukti pembayaran.

            `;

        }


        if (

            paymentMethod.value ===
            "debt"

        ) {


            debtUploadBox.style.display =
                "block";


            selfieProof.required =
                true;


            paymentInfo.innerHTML = `

                🧾 <strong>

                    Sistem Hutang

                </strong>


                <br>

                Biaya admin hutang:

                <strong>

                    Rp5.000

                </strong>


                <br>

                Jatuh tempo:

                <strong>

                    1 × 24 jam

                </strong>


                <br>

                Denda:

                <strong>

                    Rp2.000 per hari keterlambatan

                </strong>

            `;

        }

    }

);


// ==========================================
// UPLOAD FILE KE SUPABASE STORAGE
// ==========================================

async function uploadFile(

    file,

    bucket,

    folder

) {


    if (!file) {

        return null;

    }


    const fileExtension =

        file.name

            .split(
                "."
            )

            .pop();


    const fileName =

        `${folder}/${Date.now()}-${crypto.randomUUID()}.${fileExtension}`;


    const {

        data,

        error

    } =

        await supabaseClient

            .storage

            .from(bucket)

            .upload(

                fileName,

                file,

                {

                    cacheControl:
                        "3600",

                    upsert:
                        false

                }

            );


    if (error) {

        throw error;

    }


    return data.path;

}


// ==========================================
// KIRIM PESANAN KE SUPABASE
// ==========================================

orderForm.addEventListener(

    "submit",

    async event => {


        event.preventDefault();


        if (!selectedProduct) {

            alert(
                "Produk belum dipilih."
            );

            return;

        }


        const customerName =

            document

                .getElementById(
                    "customerName"
                )

                .value

                .trim();


        const targetNumber =

            document

                .getElementById(
                    "targetNumber"
                )

                .value

                .trim();


        const method =

            paymentMethod.value;


        let nominal =

            selectedProduct.price;


        let productPrice =

            selectedProduct.price;


        let adminFee = 0;


        let debtFee = 0;


        // NOMINAL EWALLET

        if (

            selectedProduct.custom

        ) {


            const customInput =

                document

                    .getElementById(
                        "customNominal"
                    );


            nominal =

                Number(
                    customInput.value
                );


            if (

                !nominal

                ||

                nominal < 1000

                ||

                nominal > 1000000

            ) {


                alert(

                    "Nominal harus antara Rp1.000 sampai Rp1.000.000."

                );

                return;

            }


            adminFee =

                calculateAdmin(
                    nominal
                );


            productPrice =

                nominal + adminFee;

        }


        // TAMBAHAN HUTANG

        if (

            method === "debt"

        ) {

            debtFee = 5000;

        }


        const totalPrice =

            productPrice + debtFee;


        let paymentProofPath =

            null;


        let selfiePath =

            null;


        try {


            // UPLOAD BUKTI CASH

            if (

                method === "cash"

            ) {


                if (

                    !paymentProof.files[0]

                ) {


                    alert(

                        "Silakan upload bukti pembayaran."

                    );

                    return;

                }


                paymentProofPath =

                    await uploadFile(

                        paymentProof.files[0],

                        "payment-proofs",

                        "payments"

                    );

            }


            // UPLOAD SELFIE HUTANG

            if (

                method === "debt"

            ) {


                if (

                    !selfieProof.files[0]

                ) {


                    alert(

                        "Silakan upload foto selfie."

                    );

                    return;

                }


                selfiePath =

                    await uploadFile(

                        selfieProof.files[0],

                        "debt-selfies",

                        "selfies"

                    );

            }


            // STATUS

            const status =

                method === "debt"

                    ? "menunggu_verifikasi"

                    : "menunggu_verifikasi";


            // JATUH TEMPO 24 JAM

            const dueDate =

                method === "debt"

                    ? new Date(

                        Date.now()

                        +

                        24 * 60 * 60 * 1000

                    ).toISOString()

                    : null;


            // NOMOR ORDER

            const orderNumber =

                "HC-" +

                Date.now();


            // INSERT DATABASE

            const {

                data,

                error

            } =

                await supabaseClient

                    .from(
                        "orders"
                    )

                    .insert({

                        order_number:
                            orderNumber,

                        customer_name:
                            customerName,

                        target_number:
                            targetNumber,

                        product_name:
                            selectedProduct.name,

                        product_code:
                            selectedProduct.code,

                        category:
                            currentCategory,

                        nominal:
                            nominal,

                        product_price:
                            productPrice,

                        admin_fee:
                            adminFee,

                        debt_fee:
                            debtFee,

                        late_fee:
                            0,

                        total_price:
                            totalPrice,

                        payment_method:
                            method,

                        status:
                            status,

                        payment_proof_url:
                            paymentProofPath,

                        selfie_url:
                            selfiePath,

                        due_date:
                            dueDate

                    })

                    .select();


            if (error) {

                throw error;

            }


            alert(

                "Pesanan berhasil dikirim dan tersimpan!"

            );


            closeOrderModal();


        } catch (error) {


            console.error(
                error
            );


            alert(

                "Terjadi kesalahan: "

                +

                error.message

            );

        }

    }

);


// ==========================================
// TUTUP MODAL
// ==========================================

function closeOrderModal() {


    modalOverlay.classList.remove(
        "active"
    );


    orderForm.reset();


    cashUploadBox.style.display =
        "none";


    debtUploadBox.style.display =
        "none";


    paymentProof.required =
        false;


    selfieProof.required =
        false;


    const customBox =

        document.getElementById(

            "customNominalBox"

        );


    if (customBox) {

        customBox.remove();

    }


    paymentInfo.innerHTML =

        "Pilih metode pembayaran untuk melihat informasi.";

}


closeModal.addEventListener(

    "click",

    closeOrderModal

);


modalOverlay.addEventListener(

    "click",

    event => {


        if (

            event.target ===
            modalOverlay

        ) {


            closeOrderModal();

        }

    }

);


// ==========================================
// MENU MOBILE
// ==========================================

const menuBtn =

    document.getElementById(
        "menuBtn"
    );


if (menuBtn) {


    menuBtn.addEventListener(

        "click",

        () => {


            const nav =

                document.querySelector(
                    ".nav"
                );


            nav.classList.toggle(
                "mobile-open"
            );

        }

    );

}


// ==========================================
// MULAI WEBSITE
// ==========================================

renderProducts();
