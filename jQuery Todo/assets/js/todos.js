//check off specific todos by clicking
$('li').click(function(){

    //if li is green turn it black else turn green
    //if($(this).css("color") === "rgb(128, 128, 128)"){
 /*        $(this).css({
        color: 'black',
        textDecoration: 'none '
    });
    }else{
        $(this).css({
        color: 'gray',
        textDecoration: 'line-through'
    });
    } */

    $(this).toggleClass("completed");

});    

//click on x to delete todo
$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})