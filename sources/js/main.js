const footer = document.querySelector('footer');
let wysokoscStrony = window.innerHeight;

window.addEventListener('scroll', () => {
    const aktualnaWysokoscNaStronie = window.pageYOffset;
    if (wysokoscStrony > aktualnaWysokoscNaStronie) {
        footer.style = "display: sticky";
    } else if (aktualnaWysokoscNaStronie == window.innerHeight) {
        footer.style = "display: sticky";
    } else {
        footer.style = "display: none";
    }

    wysokoscStrony = aktualnaWysokoscNaStronie
})