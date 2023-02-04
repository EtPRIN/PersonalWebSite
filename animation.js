//alert("YEs");

const navLinks = [...document.querySelectorAll(".navlinks li a h2")]
const sections = [...document.querySelectorAll(".scroll-area")]
const windo = document.querySelector(".scroll-container")
const haut = document.querySelector("header h1")

let sectionsPosition;
var test=0

function positionCalculation(){
    sectionsPosition = sections.map(section => section.offsetTop)
    //console.log(sectionsPosition)
};
positionCalculation();
window.addEventListener("resize",positionCalculation);

navLinks.forEach(link => link.addEventListener("click", addScrollSmooth));

function addScrollSmooth(e){
    const linkIndex = navLinks.indexOf(e.target);
    //console.log(sectionsPosition[linkIndex])
    test+=1;
    //console.log(scroll_activated);
    windo.scrollTo({
        top: sectionsPosition[linkIndex],
        behavior: "smooth"
    })
};
