// === ANIMASI SCROLL UNTUK KARTU MENU ===
document.addEventListener("DOMContentLoaded", () => {

    // === ANIMASI WISATA (SUDAH ADA) ===
    const wisataItems = document.querySelectorAll(".wisata-item");

    wisataItems.forEach(item => {
        const img = item.querySelector(".wisata-img");
        const text = item.querySelector(".wisata-text");

        if (img.classList.contains("left-img")) {
            img.classList.add("reveal", "reveal-left");
        } else {
            img.classList.add("reveal", "reveal-right");
        }

        text.classList.add("reveal", "reveal-bottom");
    });

    // === ANIMASI UNTUK KARTU "PEMBAYARAN, BOOKING, FAVORIT, AKUN" ===
    const menuCards = document.querySelectorAll(".payment-card");

    menuCards.forEach((card, index) => {
        card.classList.add("reveal", "reveal-bottom");

        // Tambahkan delay agar muncul satu per satu
        card.style.transitionDelay = (index * 0.15) + "s";
    });

    // ==== OBSERVER (ANIMASI MUNCUL SAAT MASUK LAYAR, HILANG SAAT KELUAR) ====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.25
    });

    document.querySelectorAll(".reveal").forEach(el => {
        observer.observe(el);
    });
});


