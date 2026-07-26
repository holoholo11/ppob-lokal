// ==========================================
// HOLOCELL - SCRIPT UTAMA
// ==========================================


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
// WHATSAPP ADMIN
// ==========================================

const ADMIN_WHATSAPP = {

    admin1: "639651392132",

    admin2: "6285719431469"

};


// ==========================================
// DATA PRODUK
// ==========================================

const products = {

    pulsa: [

        {
            name: "Telkomsel 10.000",
            price: 15000,
            code: "TSEL10",
            icon: "📱"
        },

        {
            name: "Telkomsel 15.000",
            price: 20000,
            code: "TSEL15",
            icon: "📱"
        },

        {
            name: "Telkomsel 20.000",
            price: 25000,
            code: "TSEL20",
            icon: "📱"
        },

        {
            name: "Telkomsel 25.000",
            price: 30000,
            code: "TSEL25",
            icon: "📱"
        },

        {
            name: "Telkomsel 50.000",
            price: 55000,
            code: "TSEL50",
            icon: "📱"
        },

        {
            name: "Telkomsel 100.000",
            price: 105000,
            code: "TSEL100",
            icon: "📱"
        },


        {
            name: "Indosat 10.000",
            price: 15000,
            code: "ISAT10",
            icon: "📱"
        },

        {
            name: "Indosat 15.000",
            price: 20000,
            code: "ISAT15",
            icon: "📱"
        },

        {
            name: "Indosat 20.000",
            price: 25000,
            code: "ISAT20",
            icon: "📱"
        },

        {
            name: "Indosat 25.000",
            price: 30000,
            code: "ISAT25",
            icon: "📱"
        },

        {
            name: "Indosat 50.000",
            price: 55000,
            code: "ISAT50",
            icon: "📱"
        },

        {
            name: "Indosat 100.000",
            price: 105000,
            code: "ISAT100",
            icon: "📱"
        },


        {
            name: "AXIS 10.000",
            price: 15000,
            code: "AXIS10",
            icon: "📱"
        },

        {
            name: "AXIS 15.000",
            price: 20000,
            code: "AXIS15",
            icon: "📱"
        },

        {
            name: "AXIS 20.000",
            price: 25000,
            code: "AXIS20",
            icon: "📱"
        },

        {
            name: "AXIS 25.000",
            price: 30000,
            code: "AXIS25",
            icon: "📱"
        },

        {
            name: "AXIS 50.000",
            price: 55000,
            code: "AXIS50",
            icon: "📱"
        },

        {
            name: "AXIS 100.000",
            price: 105000,
            code: "AXIS100",
            icon: "📱"
        },


        {
            name: "Tri 10.000",
            price: 15000,
            code: "TRI10",
            icon: "📱"
        },

        {
            name: "Tri 15.000",
            price: 20000,
            code: "TRI15",
            icon: "📱"
        },

        {
            name: "Tri 20.000",
            price: 25000,
            code: "TRI20",
            icon: "📱"
        },

        {
            name: "Tri 25.000",
            price: 30000,
            code: "TRI25",
            icon: "📱"
        },

        {
            name: "Tri 50.000",
            price: 55000,
            code: "TRI50",
            icon: "📱"
        },

        {
            name: "Tri 100.000",
            price: 105000,
            code: "TRI100",
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
    document.getElementById("productGrid");

const emptyState =
    document.getElementById("emptyState");

const searchInput =
    document.getElementById("searchInput");

const categoryTitle =
    document.getElementById("categoryTitle");

const modalOverlay =
    document.getElementById("modalOverlay");

const closeModal =
    document.getElementById("closeModal");

const orderForm =
    document.getElementById("orderForm");

const paymentMethod =
    document.getElementById("paymentMethod");

const paymentInfo =
    document.getElementById("paymentInfo");

const cashUploadBox =
    document.getElementById("cashUploadBox");

const debtUploadBox =
    document.getElementById("debtUploadBox");

const paymentProof =
    document.getElementById("paymentProof");

const selfieProof =
    document.getElementById("selfieProof");


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

        searchInput

            ? searchInput.value
                .toLowerCase()
                .trim()

            : "";


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

                    ${

                        product.custom

                            ? "Nominal Bebas"

                            : formatRupiah(
                                product.price
                            )

                    }

                </div>


                <div class="product-meta">

                    <div class="product-code">

                        Kode:

                        <strong>

                            ${product.code}

                        </strong>

                    </div>


                    <button

                        type="button"

                        class="order-btn"

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
                            product
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

                                item.classList
                                    .remove(
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

if (searchInput) {

    searchInput.addEventListener(

        "input",

        renderProducts

    );

}


// ==========================================
// BUKA MODAL
// ==========================================

function openOrderModal(product) {

    selectedProduct =
        product;


    document.getElementById(
        "modalProductName"
    ).textContent =
        product.name;


    document.getElementById(
        "modalProductPrice"
    ).textContent =

        product.custom

            ? "Nominal Bebas"

            : formatRupiah(
                product.price
            );


    document.getElementById(
        "modalProductCode"
    ).textContent =
        product.code;


    document.getElementById(
        "modalIcon"
    ).textContent =
        product.icon;


    addCustomNominalInput(
        product.custom
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


    const paymentParent =

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


    paymentParent.parentNode.insertBefore(

        nominalBox,

        paymentParent

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
        Number(input.value);


    if (!nominal) {

        info.innerHTML =
            "Masukkan nominal.";

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

            ${formatRupiah(nominal)}

        </strong>


        <br>


        Biaya Admin:

        <strong>

            ${formatRupiah(admin)}

        </strong>


        <br>


        Total:

        <strong>

            ${formatRupiah(total)}

        </strong>

    `;

}


// ==========================================
// METODE PEMBAYARAN
// ==========================================

if (paymentMethod) {

    paymentMethod.addEventListener(

        "change",

        function () {

            cashUploadBox.style.display =
                "none";


            debtUploadBox.style.display =
                "none";


            paymentProof.required =
                false;


            selfieProof.required =
                false;


            if (

                this.value === "cash"

            ) {

                cashUploadBox.style.display =
                    "block";


                paymentProof.required =
                    true;


                paymentInfo.innerHTML = `

                    💵

                    <strong>

                        Bayar Cash kepada Ibu Usih / Ira

                    </strong>


                    <br><br>

                    Upload bukti pembayaran.

                `;

            }


            if (

                this.value === "debt"

            ) {

                debtUploadBox.style.display =
                    "block";


                selfieProof.required =
                    true;


                paymentInfo.innerHTML = `

                    🧾

                    <strong>

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

                        1 x 24 jam

                    </strong>


                    <br>

                    Denda:

                    <strong>

                        Rp2.000 per hari

                    </strong>

                `;

            }

        }

    );

}


// ==========================================
// UPLOAD FILE
// ==========================================

async function uploadFile(

    file,

    bucket,

    folder

) {

    if (!file) {

        return null;

    }


    const extension =

        file.name

            .split(".")

            .pop();


    const fileName =

        `${folder}/${Date.now()}-${Math.random()
            .toString(36)
            .substring(2)}.${extension}`;


    const result =

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


    if (result.error) {

        throw new Error(

            "Upload file gagal: "

            +

            result.error.message

        );

    }


    return result.data.path;

}


// ==========================================
// MEMBUAT PESAN WHATSAPP
// ==========================================

function createWhatsAppMessage(

    orderData,

    orderNumber

) {

    const paymentText =

        orderData.payment_method === "cash"

            ? "Cash"

            : "Hutang";


    return `🔔 PESANAN BARU HOLOCELL


🆔 Order:

${orderNumber}


👤 Pemesan:

${orderData.customer_name}


📦 Produk:

${orderData.product_name}


📱 Nomor Tujuan:

${orderData.target_number}


💰 Nominal:

${formatRupiah(
        orderData.nominal
    )}


💵 Harga Produk:

${formatRupiah(
        orderData.product_price
    )}


🧾 Biaya Admin:

${formatRupiah(
        orderData.admin_fee
    )}


💳 Metode Pembayaran:

${paymentText}


💰 Total:

${formatRupiah(
        orderData.total_price
    )}


📋 Status:

Menunggu Verifikasi


Mohon segera diproses.`;

}


// ==========================================
// PILIH WHATSAPP ADMIN
// ==========================================

function chooseWhatsAppAdmin(

    message

) {

    const oldChoice =

        document.getElementById(
            "whatsappChoice"
        );


    if (oldChoice) {

        oldChoice.remove();

    }


    const choice =

        document.createElement(
            "div"
        );


    choice.id =
        "whatsappChoice";


    choice.innerHTML = `

        <div

            style="

                position:fixed;

                inset:0;

                background:rgba(0,0,0,.55);

                display:flex;

                align-items:center;

                justify-content:center;

                z-index:99999;

            "

        >

            <div

                style="

                    background:white;

                    padding:25px;

                    border-radius:16px;

                    width:90%;

                    max-width:400px;

                    text-align:center;

                    box-shadow:0 10px 30px rgba(0,0,0,.25);

                "

            >

                <h3>

                    📱 Pilih WhatsApp Admin

                </h3>


                <p>

                    Kirim detail pesanan ke:

                </p>


                <button

                    id="sendAdmin1"

                    style="

                        width:100%;

                        padding:13px;

                        margin:6px 0;

                        border:0;

                        border-radius:8px;

                        cursor:pointer;

                    "

                >

                    📱 WhatsApp Admin 1

                </button>


                <button

                    id="sendAdmin2"

                    style="

                        width:100%;

                        padding:13px;

                        margin:6px 0;

                        border:0;

                        border-radius:8px;

                        cursor:pointer;

                    "

                >

                    📱 WhatsApp Admin 2

                </button>


                <button

                    id="cancelWhatsApp"

                    style="

                        width:100%;

                        padding:10px;

                        margin-top:8px;

                        border:0;

                        background:#eee;

                        border-radius:8px;

                        cursor:pointer;

                    "

                >

                    Tutup

                </button>

            </div>

        </div>

    `;


    document.body.appendChild(
        choice
    );


    function openWhatsApp(number) {

        const url =

            "https://wa.me/"

            +

            number

            +

            "?text="

            +

            encodeURIComponent(
                message
            );


        window.open(
            url,
            "_blank"
        );


        choice.remove();

    }


    document

        .getElementById(
            "sendAdmin1"
        )

        .addEventListener(

            "click",

            () => {

                openWhatsApp(

                    ADMIN_WHATSAPP.admin1

                );

            }

        );


    document

        .getElementById(
            "sendAdmin2"
        )

        .addEventListener(

            "click",

            () => {

                openWhatsApp(

                    ADMIN_WHATSAPP.admin2

                );

            }

        );


    document

        .getElementById(
            "cancelWhatsApp"
        )

        .addEventListener(

            "click",

            () => {

                choice.remove();

            }

        );

}


// ==========================================
// KIRIM PESANAN
// ==========================================

if (orderForm) {

    orderForm.addEventListener(

        "submit",

        async function (event) {

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


            if (!customerName) {

                alert(
                    "Nama pemesan wajib diisi."
                );

                return;

            }


            if (!targetNumber) {

                alert(
                    "Nomor tujuan wajib diisi."
                );

                return;

            }


            if (!method) {

                alert(
                    "Pilih metode pembayaran."
                );

                return;

            }


            let nominal =
                selectedProduct.price;


            let productPrice =
                selectedProduct.price;


            let adminFee = 0;


            let debtFee = 0;


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


                const orderNumber =

                    "HC-"

                    +

                    Date.now();


                const dueDate =

                    method === "debt"

                        ? new Date(

                            Date.now()

                            +

                            24 * 60 * 60 * 1000

                        ).toISOString()

                        : null;


                const orderData = {

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
                        "menunggu_verifikasi",

                    payment_proof_url:
                        paymentProofPath,

                    selfie_url:
                        selfiePath,

                    due_date:
                        dueDate

                };


                const result =

                    await supabaseClient

                        .from("orders")

                        .insert(

                            orderData

                        );


                if (result.error) {

                    throw new Error(

                        result.error.message

                    );

                }


                alert(

                    "Pesanan berhasil dikirim!"

                );


                const whatsappMessage =

                    createWhatsAppMessage(

                        orderData,

                        orderNumber

                    );


                chooseWhatsAppAdmin(

                    whatsappMessage

                );


                closeOrderModal();

            }


            catch (error) {

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

}


// ==========================================
// TUTUP MODAL
// ==========================================

function closeOrderModal() {

    if (modalOverlay) {

        modalOverlay.classList.remove(
            "active"
        );

    }


    if (orderForm) {

        orderForm.reset();

    }


    if (cashUploadBox) {

        cashUploadBox.style.display =
            "none";

    }


    if (debtUploadBox) {

        debtUploadBox.style.display =
            "none";

    }


    if (paymentProof) {

        paymentProof.required =
            false;

    }


    if (selfieProof) {

        selfieProof.required =
            false;

    }


    const customBox =

        document.getElementById(

            "customNominalBox"

        );


    if (customBox) {

        customBox.remove();

    }


    if (paymentInfo) {

        paymentInfo.innerHTML =

            "Pilih metode pembayaran.";

    }


    selectedProduct =
        null;

}


if (closeModal) {

    closeModal.addEventListener(

        "click",

        closeOrderModal

    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(

        "click",

        function (event) {

            if (

                event.target ===
                modalOverlay

            ) {

                closeOrderModal();

            }

        }

    );

}


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

        function () {

            const nav =

                document.querySelector(
                    ".nav"
                );


            if (nav) {

                nav.classList.toggle(

                    "mobile-open"

                );

            }

        }

    );

}


// ==========================================
// MULAI
// ==========================================

renderProducts();
