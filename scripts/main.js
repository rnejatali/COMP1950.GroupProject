$(document).ready(function () {
    $(".lecture1 nav .dropdown-item").hover(function () {
        $(this).removeClass("disabled");
        $(this).addClass("active");
    }, function() {
        $(this).removeClass("active");
        $(this).addClass("disabled");
    });
});