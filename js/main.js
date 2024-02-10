//CARDS CATEGORÍAS
$(document).ready(function(){
    $('.category-card').on('click',function(){
        //Si la tarjeta esá abierta quitar la clase open.
        if($(this).hasClass('open')){
            $(this).removeClass('open');
        }
        //Si la tarjeta está cerrada, por si acaso remover la clase open y después añadirsela.
        else{
            $('.category-card').removeClass('open');
            $(this).addClass('open');
        }
    });
    
});