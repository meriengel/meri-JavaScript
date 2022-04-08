$(document).ready(function() {

    $("#up").click(function() {
        $("#move").animate({
            marginTop: "-=10px"
        });
    });
    $("#down").click(function() {
        $("#move").animate({
            marginTop: "+=10px"
        });
    });
    $("#left").click(function() {
        $("#move").animate({
            marginLeft: "-=10px"
        });
    });
    $("#right").click(function() {
        $("#move").animate({
            marginLeft: "+=10px"
        });
    });
});