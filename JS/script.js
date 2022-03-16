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
        $("#deli2").hide();
      });
      $("#thirdimg").mouseover(function(){
        $("#deli3").show();
      })
      $("#thirdimg").mouseout(function(){
        $("#deli3").hide();
      });
      $("#fourthimg").mouseover(function(){
        $("#deli4").show();
      })
      $("#fourthimg").mouseout(function(){
        $("#deli4").hide();
      });
      $("#fifthimg").mouseover(function(){
        $("#deli5").show();
      })
      $("#fifthimg").mouseout(function(){
        $("#deli5").hide();
      });
      $("#sixthimg").mouseover(function(){
        $("#deli6").show();
      })
      $("#sixthimg").mouseout(function(){
        $("#deli6").hide();
      });
      $("#seventhimg").mouseover(function(){
        $("#deli7").show();
      })
      $("#seventhimg").mouseout(function(){
        $("#deli7").hide();
      });
      $("#eighthimg").mouseover(function(){
        $("#deli8").show();
      })
      $("#eighthimg").mouseout(function(){
        $("#deli8").hide();
      });
  });
    $(document).ready(function () {
        $(".button").click(function () {
            alert("Thank you for Contacting us! We value you");
        });
        
    });