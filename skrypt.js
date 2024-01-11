const ciasteczkoBlok = document.querySelector('.blok');
const przyciski = document.querySelectorAll('.przycisk');
    
const wykonajKody = () => {

    if (document.cookie.includes("CodeFixit")) return;

    ciasteczkoBlok.classList.add("poka");

    przyciski.forEach(button => {
        button.addEventListener('click', () => {
            ciasteczkoBlok.classList.remove('poka');

            // jeśli id przyciski jest akceptujPrzycisk
            if (button.id == "akceptujPrzycisk") {
                // ustawienie ciasteczek na miesiąc // 60 = 1min, 60 = 1godz, 24 = 1dzien, 30 = 30dni
                document.cookie = "ciasteczka= CodeFixit; max-age=" + 60 * 60 * 24 * 30;
            }
        })
    })
};

// wykonajKody będzie pokazywała na przeładowanie strony
window.addEventListener("load", wykonajKody);