// ==========================================
// HOLOCELL - SCRIPT FINAL PPOB
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
// NOMOR WHATSAPP ADMIN
// ==========================================

const WHATSAPP_ADMIN_1 =
    "6285719431469";

const WHATSAPP_ADMIN_2 =
    "639651392132";


// ==========================================
// DATA PRODUK
// ==========================================

const products = {

    // ==============================
    // PULSA
    // ==============================

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


    // ==============================
    // E-WALLET
    // ==============================

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


    // ==============================
    // TOKEN PLN
    // ==============================

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
// VARIABEL GLOBAL
// ==========================================

let currentCategory =
    "pulsa";

let selectedProduct =
    null;


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
    ).format(number || 0);

}


// ==========================================
// HITUNG BIAYA ADMIN EWALLET
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
// NAMA KATEGORI
// ==========================================

function getCategoryName(category) {

    if (category === "pulsa") {

        return "Pulsa";

    }

    if (category === "ewallet") {

        return "E-Wallet";

    }

    if (category === "pln") {

        return "Token PLN";

    }

    return "Produk";

}


// ==========================================
// RENDER PRODUK
// ==========================================

function renderProducts() {


    if (!productGrid) {

        return;

    }


    const searchValue =

        searchInput

            ? searchInput.value
                .toLowerCase()
                .trim()

            : "";


    const categoryProducts =
        products[currentCategory] || [];


    const filteredProducts =

        categoryProducts.filter(

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


    if (

        filteredProducts.length === 0

    ) {

        if (emptyState) {

            emptyState.style.display =
                "block";

        }

        return;

    }


    if (emptyState) {

        emptyState.style.display =
            "none";

    }


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


            const orderButton =

                card.querySelector(
                    ".order-btn"
                );


            orderButton.addEventListener(

                "click",

                function () {


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
// KATEGORI AKTIF
// ==========================================

document

    .querySelectorAll(

        ".service-card[data-category]"

    )

    .forEach(

        card => {


            card.addEventListener(

                "click",

                function () {


                    const category =

                        card.dataset.category;


                    if (

                        !products[category]

                    ) {

                        return;

                    }


                    document

                        .querySelectorAll(

                            ".service-card"

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
                        category;


                    if (searchInput) {

                        searchInput.value =
                            "";

                    }


                    renderProducts();


                    const productSection =

                        document.getElementById(
                            "produk"
                        );


                    if (productSection) {

                        productSection.scrollIntoView({

                            behavior:
                                "smooth"

                        });

                    }

                }

            );

        }

    );


// ==========================================
// SEARCH
// ==========================================

if (searchInput) {

    searchInput.addEventListener(

        "input",

        function () {

            renderProducts();

        }

    );

}


// ==========================================
// BUKA MODAL ORDER
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

            : formatRupiah(price);


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
// INPUT NOMINAL E-WALLET
// ==========================================

function addCustomNominalInput(

    custom

) {


    const oldBox =

        document.getElementById(

            "customNominalBox"

        );


    if (oldBox) {

        oldBox.innerHTML = "";

    }


    if (!custom) {

        return;

    }


    const paymentGroup =

        paymentMethod.closest(
            ".form-group"
        );


    const nominalBox =

        document.createElement(
            "div"
        );


    nominalBox.id =
        "customNominalBox";


    nominalBox.className =
        "form-group";


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


    paymentGroup.parentNode.insertBefore(

        nominalBox,

        paymentGroup

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


    if (!input || !info) {

        return;

    }


    const nominal =
        Number(input.value);


    if (!nominal) {

        info.innerHTML =

            "Masukkan nominal untuk menghitung harga jual.";

        return;

    }


    const admin =
        calculateAdmin(nominal);


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

            .pop()

            .toLowerCase();


    const fileName =

        `${folder}/${Date.now()}-${crypto.randomUUID()}.${extension}`;


    const uploadResult =

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
                        false,

                    contentType:
                        file.type

                }

            );


    if (

        uploadResult.error

    ) {

        throw uploadResult.error;

    }


    return uploadResult.data.path;

}


// ==========================================
// PESAN WHATSAPP
// ==========================================

function createWhatsAppMessage(

    orderNumber,

    customerName,

    targetNumber,

    productName,

    nominal,

    totalPrice,

    method

) {


    return `📦 PESANAN BARU HOLOCELL

━━━━━━━━━━━━━━━━━━

🧾 Order:

${orderNumber}

👤 Nama:

${customerName}

📱 Nomor Tujuan:

${targetNumber}

🛒 Produk:

${productName}

💰 Nominal:

${formatRupiah(nominal)}

💵 Total Harga:

${formatRupiah(totalPrice)}

💳 Pembayaran:

${method === "cash" ? "Cash" : "Hutang"}

📌 Status:

Menunggu Verifikasi

━━━━━━━━━━━━━━━━━━

Silakan cek pesanan di Dashboard Admin HOLOCELL.`;

}


// ==========================================
// PILIH ADMIN WHATSAPP
// ==========================================

function showWhatsAppChoice(

    message

) {


    const oldModal =

        document.getElementById(

            "whatsappChoiceModal"

        );


    if (oldModal) {

        oldModal.remove();

    }


    const modal =

        document.createElement(
            "div"
        );


    modal.id =
        "whatsappChoiceModal";


    modal.style.cssText = `

        position: fixed;

        inset: 0;

        background: rgba(0,0,0,.65);

        display: flex;

        align-items: center;

        justify-content: center;

        z-index: 99999;

        padding: 20px;

    `;


    modal.innerHTML = `

        <div style="

            background: white;

            width: 100%;

            max-width: 420px;

            padding: 25px;

            border-radius: 16px;

            text-align: center;

        ">

            <div style="

                font-size: 45px;

                margin-bottom: 10px;

            ">

                ✅

            </div>


            <h2>

                Pesanan Berhasil Dikirim!

            </h2>


            <p>

                Kirim detail pesanan ke WhatsApp Admin:

            </p>


            <button

                id="waAdmin1Btn"

                style="

                    width: 100%;

                    padding: 14px;

                    margin-top: 10px;

                    border: none;

                    border-radius: 10px;

                    background: #25D366;

                    color: white;

                    font-weight: bold;

                    cursor: pointer;

                "

            >

                📱 WhatsApp Admin 1

            </button>


            <button

                id="waAdmin2Btn"

                style="

                    width: 100%;

                    padding: 14px;

                    margin-top: 10px;

                    border: none;

                    border-radius: 10px;

                    background: #128C7E;

                    color: white;

                    font-weight: bold;

                    cursor: pointer;

                "

            >

                📱 WhatsApp Admin 2

            </button>


            <button

                id="closeWaChoice"

                style="

                    width: 100%;

                    padding: 12px;

                    margin-top: 15px;

                    border: 1px solid #ddd;

                    border-radius: 10px;

                    background: white;

                    cursor: pointer;

                "

            >

                Tutup

            </button>

        </div>

    `;


    document.body.appendChild(
        modal
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

    }


    document

        .getElementById(
            "waAdmin1Btn"
        )

        .addEventListener(

            "click",

            function () {

                openWhatsApp(
                    WHATSAPP_ADMIN_1
                );

            }

        );


    document

        .getElementById(
            "waAdmin2Btn"
        )

        .addEventListener(

            "click",

            function () {

                openWhatsApp(
                    WHATSAPP_ADMIN_2
                );

            }

        );


    document

        .getElementById(
            "closeWaChoice"
        )

        .addEventListener(

            "click",

            function () {

                modal.remove();

            }

        );

}


// ==========================================
// KIRIM PESANAN
// ==========================================

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
                "Silakan pilih metode pembayaran."
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

                document.getElementById(
                    "customNominal"
                );


            nominal =
                Number(customInput.value);


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
                calculateAdmin(nominal);


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
                "HC-" + Date.now();


            const dueDate =

                method === "debt"

                    ? new Date(

                        Date.now()

                        +

                        24 *

                        60 *

                        60 *

                        1000

                    ).toISOString()

                    : null;


            const result =

                await supabaseClient

                    .from("orders")

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
                            "menunggu_verifikasi",

                        payment_proof_url:
                            paymentProofPath,

                        selfie_url:
                            selfiePath,

                        due_date:
                            dueDate

                    })

                    .select()

                    .single();


            if (

                result.error

            ) {

                throw result.error;

            }


            const whatsappMessage =

                createWhatsAppMessage(

                    orderNumber,

                    customerName,

                    targetNumber,

                    selectedProduct.name,

                    nominal,

                    totalPrice,

                    method

                );


            closeOrderModal();


            showWhatsAppChoice(

                whatsappMessage

            );

        }


        catch (error) {


            console.error(error);


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

        customBox.innerHTML = "";

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

    function (event) {


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
// MULAI WEBSITE
// ==========================================

renderProducts();
