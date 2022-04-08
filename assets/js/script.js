var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).ready(function(){

    $("#press-1").dblclick(function(){
        $("#text-press-1").toggle("slow");
    });

    $("#press-2").dblclick(function(){
        $("#text-press-2").toggle("slow");
    });

    $("#press-3").dblclick(function(){
        $("#text-press-3").toggle("slow");
    });

    
    $("#enviarMensaje").click(function(){
        alert("El mensaje ha sido enviado correctamente")
    }); 
    
    $(window).scroll(function(){

        $("nav").offset().top 
        if($("nav").offset().top > 900){
           $("nav").addClass("bg-secondary")
        }
        else {
            $("nav").removeClass("bg-secondary")
        }
    });

});