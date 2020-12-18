// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function(params){
    var about= $('#h1-about');
    var projects= $('#h1-projects');
    var contact= $('#h1-contact');

    about.hide().slideDown(500).css('overflow-y', 'hidden');
    projects.hide().delay(500).slideDown(500);
    contact.hide().delay(1000).slideDown(500);
    // contact.hide().slideDown(3000).css('overflow-y', 'hidden');
    // $('#h1-about').slideDown(1000).css('overflow', 'hidden');
    // $('#h1-projects').delay(1000).slideDown(1000).css('overflow', 'hidden');
    // $('#h1-contact').delay(2000).slideDown(1000).css('overflow', 'hidden');
})


$(document).on("click", "p", function () {
    alert('hello');
})

$(document).on("mouseenter", "#h1-about", function(params) {
    $(this).attr("style", "color: #dc3545 !important").css('margin-left', '38%');
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
    $(this).attr("style", "color: white !important").css('margin-left', '38%');
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
    $(this).attr("style", "color: white !important").css('margin-left', '38%');
    $(this).text("Contact Me");
})

$(document).on('mouseleave', '#h1-contact', function (params) {
    $(this).attr("style", "color: #dc3545 !important");
    $(this).text("Contact");
})

$(document).on('click', '#h1-contact', function (params) {
    $(location).attr('href', 'contact.html');
})