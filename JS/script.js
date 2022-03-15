$(document).ready(function() {
    $("#design").click(function() {
        $("#design").hide();
        $("#design-text").show();
    });
    $("#design-text").click(function() {
        $("#design-text").hide();
        $("#design").show();
    });
});
$(document).ready(function() {
    $("#development").click(function() {
        $("#development").fadeIn("1000").hide("1000");
        $("#development-text").show();
    });
    $("#development-text").click(function() {
        $("#development-text").hide("1000");
        $("#development").show();
    });
});
$(document).ready(function() {
    $("#product").click(function(){
        $("#product").fadeIn("1000").hide("1000");
        $("#product-text").show();
    });
    $("#product-text").click(function() {
        $("#product-text").hide("1000");
        $("#product").show();
 });
});
 $(document).ready(function(){
    $("#firstimg").mouseover(function(){
          $("#deli1").show();
        })
        $("#firstimg").mouseout(function(){
          $("#deli1").hide();
        });
    $("#secondimg").mouseover(function(){
        $("#deli2").show();
    })
    $("#secondimg").mouseout(function(){
        $("#del2").hide();
    });
});
