$(document).ready(function () {

    var randomColor = function () {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    };

    $('body').on('mouseenter', '.box', function(){
        $(this).css('background-color', randomColor());
    });

});