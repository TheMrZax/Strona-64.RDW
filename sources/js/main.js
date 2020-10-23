const footer = document.querySelector('footer');
//Skrypt na wyjeżdzanie UI (mobilka)
let wysokoscStrony = window.innerHeight;

window.addEventListener('scroll', () => {
    if (window.innerWidth < 720 && !menuKontakt.classList.contains('widoczne')){
    const aktualnaWysokoscNaStronie = window.pageYOffset;
    if (wysokoscStrony > aktualnaWysokoscNaStronie) {
        footer.style = "display: block";
    } else if (aktualnaWysokoscNaStronie == window.innerHeight) {
        footer.style = "display: block";
    } else {
        footer.style = "display: none";
    }

    wysokoscStrony = aktualnaWysokoscNaStronie
}
})

//Skrypt na wysunięcie zakładki 'Kontakt'
const przyciskKontakt = document.querySelector('div.kontakt');
const menuKontakt = document.querySelector('div.menu-kontakt');
const przyciskZamknij = document.querySelector('i.fa-times');
przyciskKontakt.addEventListener('click', () => {
    menuKontakt.classList.toggle('widoczne')
})
przyciskZamknij.addEventListener('click', ()=>{
    menuKontakt.classList.remove('widoczne')
})