

$('button').click(function() {
    var name = $(".name").val();
    var age = $(".age").val();
    var exercise = $(".exercise").val();

    
    // Calculate age 
    var newAge= parseInt(age) + 12;
    var total= parseInt(exercise) * 53;
    
    //set some text or label
  $("body").text("By 2031 " + name +" will be " + newAge + " will have worked out " + total + " times!!" );
    $("body").css("color","Blue");
    $("body").css("font-size", "20px");
    $("body").css("padding","30px");
});