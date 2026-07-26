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
            name: "DANA 10.000",
            price: 15000,
            code: "D10",
            icon: "💳"
        },

        {
            name: "DANA 50.000",
            price: 55000,
            code: "D50",
            icon: "💳"
        },

        {
            name: "DANA 100.000",
            price: 105000,
            code: "D100",
            icon: "💳"
        },

        {
            name: "DANA 200.000",
            price: 207000,
            code: "D200",
            icon: "💳"
        },

        {
            name: "DANA 300.000",
            price: 307000,
            code: "D300",
            icon: "💳"
        },

        {
            name: "DANA 500.000",
            price: 510000,
            code: "D500",
            icon: "💳"
        },

        {
            name: "DANA 1.000.000",
            price: 1015000,
            code: "D1000",
            icon: "💳"
        },


        {
            name: "OVO 10.000",
            price: 15000,
            code: "O10",
            icon: "💳"
        },

        {
            name: "OVO 50.000",
            price: 55000,
            code: "O50",
            icon: "💳"
        },

        {
            name: "OVO 100.000",
            price: 105000,
            code: "O100",
            icon: "💳"
        },


        {
            name: "GoPay 10.000",
            price: 15000,
            code: "G10",
            icon: "💳"
        },

        {
            name: "GoPay 50.000",
            price: 55000,
            code: "G50",
            icon: "💳"
        },

        {
            name: "GoPay 100.000",
            price: 105000,
            code: "G100",
            icon: "💳"
        },


        {
            name: "LinkAja 10.000",
            price: 15000,
            code: "L10",
            icon: "💳"
        },

        {
            name: "LinkAja 50.000",
            price: 55000,
            code: "L50",
            icon: "💳"
        },

        {
            name: "LinkAja 100.000",
            price: 105000,
            code: "L100",
            icon: "💳"
        },


        {
            name: "ShopeePay 10.000",
            price: 15000,
            code: "SP10",
            icon: "💳"
        },

        {
            name: "ShopeePay 50.000",
            price: 55000,
            code: "SP50",
            icon: "💳"
        },

        {
            name: "ShopeePay 100.000",
            price: 105000,
            code: "SP100",
            icon: "💳"
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

    return new Intl.NumberFormat("id-ID", {

        style: "currency",

        currency: "IDR",

        minimumFractionDigits: 0

    }).format(number);

}


function renderProducts() {

    const searchValue =
        searchInput.value
        .toLowerCase()
        .trim();


    const filteredProducts =
        products[currentCategory].filter(product =>

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


    if (filteredProducts.length === 0) {

        emptyState.style.display = "block";

        return;

    }


    emptyState.style.display = "none";


    filteredProducts.forEach(product => {

        const card =
            document.createElement("div");


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

                ${formatRupiah(product.price)}

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

                    onclick="openOrderModal(

                        '${product.name}',

                        ${product.price},

                        '${product.code}',

                        '${product.icon}'

                    )"

                >

                    Pesan

                </button>

            </div>

        `;


        productGrid.appendChild(card);

    });

}


const categoryCards =

    document.querySelectorAll(
        ".category-card"
    );


categoryCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {


            categoryCards.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            card.classList.add(
                "active"
            );


            currentCategory =
                card.dataset.category;


            renderProducts();


            document
                .getElementById("produk")
                .scrollIntoView({

                    behavior: "smooth"

                });

        }

    );

});


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


function openOrderModal(

    name,

    price,

    code,

    icon

) {


    selectedProduct = {

        name,

        price,

        code,

        icon

    };


    document
        .getElementById(
            "modalProductName"
        )
        .textContent = name;


    document
        .getElementById(
            "modalProductPrice"
        )
        .textContent =
        formatRupiah(price);


    document
        .getElementById(
            "modalProductCode"
        )
        .textContent = code;


    document
        .getElementById(
            "modalIcon"
        )
        .textContent = icon;


    modalOverlay.classList.add(
        "active"
    );

}


function closeOrderModal() {

    modalOverlay.classList.remove(
        "active"
    );


    orderForm.reset();


    document
        .getElementById(
            "paymentInfo"
        )
        .innerHTML =

        "Pilih metode pembayaran untuk melihat informasi.";

}


closeModal.addEventListener(

    "click",

    closeOrderModal

);


modalOverlay.addEventListener(

    "click",

    (event) => {


        if (

            event.target ===
            modalOverlay

        ) {

            closeOrderModal();

        }

    }

);


const paymentMethod =

    document.getElementById(
        "paymentMethod"
    );


const paymentInfo =

    document.getElementById(
        "paymentInfo"
    );


paymentMethod.addEventListener(

    "change",

    () => {


        if (

            paymentMethod.value ===
            "cash"

        ) {


            paymentInfo.innerHTML = `

                💵 <strong>Bayar Cash</strong><br>

                Silakan lakukan pembayaran kepada

                <strong>Ibu Usih atau Ira</strong>.

                Setelah pembayaran dilakukan,

                bukti pembayaran akan dikirim.

            `;

        }


        if (

            paymentMethod.value ===
            "debt"

        ) {


            paymentInfo.innerHTML = `

                🧾 <strong>Bayar Nanti / Hutang</strong><br>

                Biaya admin tambahan:

                <strong>Rp5.000</strong>.<br>

                Wajib melakukan verifikasi selfie.<br>

                Jatuh tempo:

                <strong>1×24 jam</strong>.<br>

                Keterlambatan:

                <strong>Rp2.000 per hari</strong>.

            `;

        }

    }

);


orderForm.addEventListener(

    "submit",

    (event) => {


        event.preventDefault();


        const customerName =

            document
                .getElementById(
                    "customerName"
                )
                .value;


        const targetNumber =

            document
                .getElementById(
                    "targetNumber"
                )
                .value;


        const method =

            paymentMethod.value;


        if (!selectedProduct) {

            return;

        }


        let paymentText =

            method === "cash"

                ? "Bayar Cash kepada Ibu Usih / Ira"

                : "Bayar Nanti / Hutang";


        const message = `

Halo HOLOCELL 👋


Saya ingin memesan:


Produk:

${selectedProduct.name}


Kode:

${selectedProduct.code}


Harga:

${formatRupiah(
    selectedProduct.price
)}


Nama Pemesan:

${customerName}


Nomor Tujuan / ID:

${targetNumber}


Metode Pembayaran:

${paymentText}

`;


        alert(

            "Pesanan berhasil dibuat untuk tahap awal. Sistem upload bukti pembayaran dan dashboard admin akan kita tambahkan pada tahap berikutnya."

        );


        console.log(message);


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
