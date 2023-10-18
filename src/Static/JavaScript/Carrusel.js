$(document).ready(function(){
  $('.carrusel').slick({
    slidesToShow: 1, // Muestra una diapositiva a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true, // Configura el carrusel para que sea vertical
    verticalSwiping: true, // Habilita el desplazamiento vertical con el dedo o el mouse
    arrows: false, // Oculta las flechas de navegación
    dots: false // Oculta los indicadores (círculos)
  });
});