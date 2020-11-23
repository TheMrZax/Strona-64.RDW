const footer = document.querySelector('footer');
const przyciskKontakt = document.querySelector('div.kontakt');
const menuKontakt = document.querySelector('div.menu-kontakt');
const przyciskZamknij = document.querySelector('i.fa-times');
const aktualnosciFacebook = document.querySelector('.promo-strona')
let wysokoscStrony = window.innerHeight; //nie używać bo jest nadpisywana
let szerokoscStrony = window.innerWidth;

//Skrypt na wyjeżdzanie UI (mobilka)
window.addEventListener('scroll', () => {
    if (szerokoscStrony < 720 && !menuKontakt.classList.contains('widoczne')){
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
przyciskKontakt.addEventListener('click', () => {
    menuKontakt.classList.toggle('widoczne')
})
przyciskZamknij.addEventListener('click', ()=>{
    menuKontakt.classList.remove('widoczne')
})

window.addEventListener('scroll', () => {
    if(window.innerWidth > 720 && menuKontakt.classList.contains('widoczne')) {
        menuKontakt.classList.remove('widoczne')
    }
})

function lastSingleLetterToNewLine(el){
    let result;
    el.forEach((element, i)=>{
       
       if(!element.innerHTML.match(/[{}]|<script|^\n$/gi)){
        result = element.innerHTML.replace(/ (.) /gi, " "+'\$1'+"&nbsp");
       }
       element.innerHTML = result;
       console.log(result);
    });
  }
  
  let el = document.querySelectorAll("h1, h2, h3, h4, h5, p, span, .text");
  lastSingleLetterToNewLine(el);

