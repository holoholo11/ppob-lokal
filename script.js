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


let currentCategory = "pulsa";

let selectedProduct = null;


const productGrid =
    document.getElementById("productGrid");


const emptyState =
    document.getElementById("emptyState");


const searchInput =
    document.getElementById("searchInput");


const categoryTitle =
    document.getElementById("categoryTitle");


const categoryNames = {

    pulsa: "Pulsa",

    ewallet: "E-Wallet",

    pln: "Token PLN"

};


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

        categoryNames[currentCategory];


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


            const orderButton =

                card.querySelector(
                    ".order-btn"
                );


            orderButton.addEventListener(

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


const categoryCards =

    document.querySelectorAll(

        ".category-card"

    );


categoryCards.forEach(

    card => {


        card.addEventListener(

            "click",

            () => {


                categoryCards.forEach(

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


searchInput.addEventListener(

    "input",

    renderProducts

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

            Masukkan nominal untuk
            menghitung harga jual.

        </div>


    `;


    paymentLabel.parentNode.insertBefore(

        nominalBox,

        paymentLabel

    );


    const customNominal =

        document.getElementById(
            "customNominal"
        );


    customNominal.addEventListener(

        "input",

        updateCustomPrice

    );

}


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


    if (nominal < 1000) {


        info.innerHTML =

            "Minimal nominal adalah Rp1.000.";

        return;

    }


    if (nominal > 1000000) {


        info.innerHTML =

            "Maksimal nominal adalah Rp1.000.000.";

        return;

    }


    const admin =

        calculateAdmin(
            nominal
        );


    const total =

        nominal + admin;


    info.innerHTML = `


        Nominal E-Wallet:

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


        Total Bayar:

        <strong>

            ${formatRupiah(
                total
            )}

        </strong>


    `;

}


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
                Bayar Cash
                </strong>


                <br>


                Silakan lakukan pembayaran
                kepada


                <strong>
                Ibu Usih atau Ira
                </strong>


                <br><br>


                Setelah pembayaran dilakukan,
                upload bukti pembayaran.

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
                Bayar Nanti / Hutang
                </strong>


                <br>


                Biaya admin tambahan:

                <strong>
                Rp5.000
                </strong>


                <br>


                Wajib upload foto selfie.


                <br>


                Jatuh tempo:

                <strong>
                1×24 jam
                </strong>


                <br>


                Keterlambatan:

                <strong>
                Rp2.000 per hari
                </strong>

            `;

        }

    }

);


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


orderForm.addEventListener(

    "submit",

    event => {


        event.preventDefault();


        const customerName =

            document.getElementById(

                "customerName"

            ).value;


        const targetNumber =

            document.getElementById(

                "targetNumber"

            ).value;


        const method =

            paymentMethod.value;


        let nominal =

            selectedProduct.price;


        let admin = 0;


        if (

            selectedProduct.custom

        ) {


            const customInput =

                document.getElementById(

                    "customNominal"

                );


            nominal =

                Number(
                    customInput.value
                );


            admin =

                calculateAdmin(
                    nominal
                );


            if (

                !nominal

                ||

                nominal < 1000

                ||

                nominal > 1000000

            ) {


                alert(

                    "Masukkan nominal antara Rp1.000 sampai Rp1.000.000."

                );


                return;

            }

        }


        const debtAdmin =

            method === "debt"

                ? 5000

                : 0;


        const total =

            selectedProduct.custom

                ? nominal + admin + debtAdmin

                : selectedProduct.price + debtAdmin;


        const selectedFile =

            method === "cash"

                ? paymentProof.files[0]

                : selfieProof.files[0];


        if (!selectedFile) {


            alert(

                method === "cash"

                    ? "Silakan upload bukti pembayaran."

                    : "Silakan upload foto selfie."

            );


            return;

        }


        const paymentText =

            method === "cash"

                ? "Cash kepada Ibu Usih / Ira"

                : "Hutang / Bayar Nanti";


        const orderData = {


            product:
                selectedProduct.name,


            code:
                selectedProduct.code,


            nominal:
                nominal,


            admin:
                admin,


            debtAdmin:
                debtAdmin,


            total:
                total,


            customerName:
                customerName,


            targetNumber:
                targetNumber,


            paymentMethod:
                paymentText,


            uploadedFile:
                selectedFile.name,


            orderDate:
                new Date().toLocaleString(
                    "id-ID"
                )


        };


        console.log(
            "DATA PESANAN:",
            orderData
        );


        alert(

            "Pesanan berhasil dibuat! Bukti pembayaran/selfie sudah dipilih."

        );


        closeOrderModal();

    }

);


const menuBtn =

    document.getElementById(
        "menuBtn"
    );


menuBtn.addEventListener(

    "click",

    () => {


        const nav =

            document.querySelector(
                ".nav"
            );


        if (

            nav.style.display ===
            "flex"

        ) {


            nav.style.display =
                "none";


        } else {


            nav.style.display =
                "flex";


            nav.style.position =
                "absolute";


            nav.style.top =
                "74px";


            nav.style.right =
                "20px";


            nav.style.background =
                "white";


            nav.style.padding =
                "20px";


            nav.style.borderRadius =
                "12px";


            nav.style.flexDirection =
                "column";


            nav.style.boxShadow =

                "0 10px 30px rgba(0,0,0,0.1)";

        }

    }

);


renderProducts();
