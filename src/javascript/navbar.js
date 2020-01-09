import $ from 'jquery';

$( document ).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("nav").addClass("nav-active");
        }
        else {
            $("nav").removeClass("nav-active");
        }
    });



});