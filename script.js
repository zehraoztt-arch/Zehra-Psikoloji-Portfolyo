
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
