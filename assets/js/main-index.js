$(document).ready(function(){
    $('.four-sections__link').draggable({
        containment: "body",
        cursor: "move",
        snap: true,
        snapMode: "inner"
    });
})