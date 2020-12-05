// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function(){

})


$(document).on("click", "p", function () {
    alert('hello');
})

$(document).on("mouseenter", "#h1-about", function(params) {
    $(this).attr("style", "color: #dc3545 !important");
    $(this).text("About Me");
})

$(document).on("mouseleave", "#h1-about", function (params){
    $(this).attr("style", "color: white !important");
    $(this).text("Josh");
})

$(document).on("click", "#h1-about", function (params) {
    $(location).attr('href', 'about.html');
    // window.location.href= '/about';
})

$(document).on('mouseenter', '#h1-projects', function (params) {
    $(this).attr("style", "color: white !important");
    $(this).text("See Projects");
})

$(document).on('mouseleave', '#h1-projects', function (params) {
    $(this).attr("style", "color: #dc3545 !important");
    $(this).text("Projects");
})

$(document).on('click', '#h1-projects', function (params) {
    $(location).attr('href', 'projects.html')
})

$(document).on('mouseenter', '#h1-contact', function (params) {
    $(this).attr("style", "color: white !important");
    $(this).text("Contact");
})

$(document).on('mouseleave', '#h1-contact', function (params) {
    $(this).attr("style", "color: #dc3545 !important");
    $(this).text("Josh");
})

$(document).on('click', '#h1-contact', function (params) {
    $(location).attr('href', 'contact.html');
})