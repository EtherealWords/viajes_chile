var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).ready(function(){

    $("#text-press-1").hide()

    $("#press-1").click(function(){
        $("#text-press-1").toggle ("slow")
    })

    $("#text-press-2").hide()

    $("#press-2").click(function(){
        $("#text-press-2").toggle ("slow")
    })
    
    $("#text-press-3").hide()

    $("#press-3").click(function(){
        $("#text-press-3").toggle ("slow")
    })

    $("#enviarMensaje").click(function(){
        alert("El mensaje ha sido enviado correctamente")
    }); 
    
    $(window).scroll(function(){

        $("nav").offset().top 
        if($("nav").offset().top > 900){
           $("nav").addClass("bg-dark")
        }
        else {
            $("nav").removeClass("bg-dark")
        }
    });

});