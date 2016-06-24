$( document ).ready(function() {

var snd = new Audio("sanic.mp3");
 var myCar = $("#sanik");
 var points = 0;

 if (points == 10) {
  	alert("Ok...You've gone through enough.");
  	$(window.location.href = "exploreCopy.html");
  }
  else {}


 $(document).keydown(function(e) {
    $(sanik).keydown;
    switch (e.which) {

      //move left
      case 37:
        $("#sanik").animate({
          left: "-=200px"
        }, 'fast');
        break;

        //move up
      case 38:
        $("#sanik").animate({
          top: "-=200px"
        }, 'fast');
        break;

        //move right
      case 39:
        $("#sanik").animate({
          left: "+=200px"
        }, 'fast');
        break;

        //move down
      case 40:
        $("#sanik").animate({
          top: "+=200px"
        }, 'fast');
        break;
   };
   }); //this is were the arrow key functionality ends


 function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    //below is an if statement - if the variables calculate to the right formula, it will return true or false
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    $('#result').html(points);
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('.coins'), function() {
      if (collision($('#sanik'), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
        $(".coins").hide().show(2000);
        var audio = new Audio('sanic.mp3');
        audio.play();
        snd.play();
        alert("Big mistake, we're all not coins :)");
        points =  points + 1;
        if (points == 10) {
  	alert("Ok...You've gone through enough.");
  	$(window.location.href = "exploreCopy.html");
  }
  else {}
      }
    });
  }, 1000); //this is how often it checks for a collision

 










});//end of game
 
