//check off specific todos by clicking
$('ul').on("click", "li",  function(){

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
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})


//creation of new todos
$("input[type='text']").keypress(function(event){
    if (event.which === 13){
        var todoText = $(this).val();
        $(this).val('');
        //create a new li and add to ul
        $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});