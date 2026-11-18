
document.addEventListener("DOMContentLoaded", function () {

    const mesajlar = [
        "Küçük adımlar büyük değişimlerin başlangıcıdır.",
        "Kendine zaman tanımak gelişimin bir parçasıdır.",
        "Her yeni gün, öğrenmek için yeni bir fırsattır.",
        "Kendini anlamak, değişimin ilk adımıdır."
    ];

    const alan = document.createElement("section");

    alan.innerHTML = `
        <h2>Günün Motivasyonu</h2>
        <p>Biraz motivasyona ne dersin?</p>
        <button id="motivasyonButonu">
            Motivasyon Mesajı Göster
        </button>
        <p id="motivasyonMesaji"></p>
    `;

    const anaIcerik = document.querySelector("main");
    const altBilgi = document.querySelector("footer");

    if (anaIcerik) {
        anaIcerik.appendChild(alan);
    } else if (altBilgi) {
        document.body.insertBefore(alan, altBilgi);
    } else {
        document.body.appendChild(alan);
    }

    let mesajSirasi = 0;

    document.getElementById("motivasyonButonu")
        .addEventListener("click", function () {

            document.getElementById("motivasyonMesaji")
                .textContent = mesajlar[mesajSirasi];

            mesajSirasi = (mesajSirasi + 1) % mesajlar.length;
        });
});

document.addEventListener("DOMContentLoaded", function () {

    const karanlikButonu = document.createElement("button");
    karanlikButonu.textContent = "🌙 Karanlık Mod";
    karanlikButonu.type = "button";
    karanlikButonu.setAttribute("aria-pressed", "false");

    const menu = document.querySelector("nav");

    if (menu) {
        menu.appendChild(karanlikButonu);
    }

    karanlikButonu.addEventListener("click", function () {

        const aktif = document.body.classList.toggle("karanlik-mod");

        karanlikButonu.textContent = aktif
            ? "☀️ Aydınlık Mod"
            : "🌙 Karanlık Mod";

        karanlikButonu.setAttribute("aria-pressed", String(aktif));

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("iletisimFormu");
    const sonuc = document.getElementById("formSonucu");

    if (!form || !sonuc) {
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const ad = document.getElementById("ad").value.trim();
        const eposta = document.getElementById("eposta").value.trim();
        const mesaj = document.getElementById("mesaj").value.trim();

        if (!ad || !eposta || !mesaj) {
            sonuc.textContent = "Lütfen tüm alanları doldurun.";
            return;
        }

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        sonuc.textContent =
            "Form başarıyla doğrulandı! Bu bir demo formudur, mesajınız gönderilmedi.";

        form.reset();
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector("nav");

    if (!menu) {
        return;
    }

    let yaziBoyutu = parseFloat(
        window.getComputedStyle(document.body).fontSize
    );

    const buyutButonu = document.createElement("button");
    buyutButonu.textContent = "A+";
    buyutButonu.type = "button";
    buyutButonu.setAttribute("aria-label", "Yazıları büyüt");

    const kucultButonu = document.createElement("button");
    kucultButonu.textContent = "A−";
    kucultButonu.type = "button";
    kucultButonu.setAttribute("aria-label", "Yazıları küçült");

    menu.appendChild(buyutButonu);
    menu.appendChild(kucultButonu);

    buyutButonu.addEventListener("click", function () {
        if (yaziBoyutu < 24) {
            yaziBoyutu += 2;
            document.body.style.fontSize = yaziBoyutu + "px";
        }
    });

    kucultButonu.addEventListener("click", function () {
        if (yaziBoyutu > 14) {
            yaziBoyutu -= 2;
            document.body.style.fontSize = yaziBoyutu + "px";
        }
    });

});
