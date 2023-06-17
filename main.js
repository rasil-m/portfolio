$(document).ready(function(){

  $("header .icon").click(function(){

    $("header nav").toggleClass("active");
    $("header .icon i").toggleClass("fa-xmark")

  });

});