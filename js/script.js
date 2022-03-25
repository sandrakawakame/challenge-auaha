//Menu responsivo
const btnMobile = document.getElementById('btn_mobile');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    const nav_menu = document.getElementById('nav_menu');
    nav_menu.classList.toggle('active')
    const active = nav_menu.classList.contains(active);
    
    event.currentTarget.setAttribute('aria-expanded', active);
;}
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)


//slide
$(function(){
    $(".slide_vitrine").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $("#arrow_prev"),
        nextArrow: $("#arrow_next"),
      });
})
