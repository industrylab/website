$(document).ready(function(){

//** HOME **//


  setTimeout(function(){
    $.scrollTo("#containerCoworking", 1000);
    $("svg").fadeOut(1000);
  }, 1400);

  setTimeout(function(){
    $("svg").fadeIn(1000);
  }, 2500);



//** NAV **//

//contact
$("#homeContactLink, #navContact, #mobileNavContact").on("click", function () {
  $.scrollTo("#contactLogo", 1000);
  $(".horizontalNav li a").removeClass("activeNav");
  $("#navContact").addClass("activeNav");
});

 $(function() {
       $('#contactLogo').waypoint(function() {
          $(".horizontalNav li a").removeClass("activeNav");
          $("#navContact").addClass("activeNav");
         }, {
           offset: '50%'
         });
    });


 //mobile nav
 $('.js-toggle-menu').click(function(e){
  e.preventDefault();
  $('#mobileNav').slideToggle();
  $(this).toggleClass('open');
});


$("#mobileNav a").on("click", function() {
      $("#mobileNav").slideToggle();
      $("#mobileNav").removeClass("open");
});

//events
$("#underlineEvents, #navEvents, #mobileNavEvents").on("click", function () {
  $.scrollTo("#eventsLogo",1000);
  $(".horizontalNav li a").removeClass("activeNav");
  $("#navEvents").addClass("activeNav");
});

 $(function() {
       $('#eventsLogo, .eventListing').waypoint(function() {
          $(".horizontalNav li a").removeClass("activeNav");
          $("#navEvents").addClass("activeNav");
         }, {
           offset: '50%'
         });
    });


//coworking
$("#underlineCoworking, #navCoworking, #mobileNavCoworking").on("click", function () {
  $.scrollTo("#coworkingBody",1000);
    $(".horizontalNav li a").removeClass("activeNav");
    $("#navCoworking").addClass("activeNav");
});

 $(function() {
       $('#logoHomeCoworking').waypoint(function() {
          $(".horizontalNav li a").removeClass("activeNav");
          $("#navCoworking").addClass("activeNav");
         }, {
           offset: '50%'
         });
    });


//about
$("#navAbout, #mobileNavAbout").on("click", function () {
  $.scrollTo("#containerCoworking",1000);
    $(".horizontalNav li a").removeClass("activeNav");
    $("#navAbout").addClass("activeNav");
});

 $(function() {
       $('#containerCoworking').waypoint(function() {
          $(".horizontalNav li a").removeClass("activeNav");
          $("#navAbout").addClass("activeNav");
         }, {
           offset: '50%'
         });
    });

//horizontal nav appears on scroll


 $(window).scroll(function(){                          
            if ($(this).scrollTop() > 600) {
                $('.horizontalNav').fadeIn(500);
            } else {
                $('.horizontalNav').fadeOut(500);
            }
        });




//drop down hidden nav on menu icon click
$(".condensedNav").on("click", function () {
  $("nav").toggleClass("dropNav, hiddenNav");
});


//** PAGES **//




//arrow drop-down 
$(".arrow-right,.arrow-down").on("click", function (){
  $(this).toggleClass("arrow-down").toggleClass("arrow-right");
  if( $(this).hasClass("arrow-down") ) {
    $(".arrow-down").not(this).addClass("arrow-right").removeClass("arrow-down");
    $("p").slideUp();
    $(this).siblings("p").slideDown(300);
  } else {
    $(this).siblings("p").slideUp(300);
  }
});

//** COWORKING SECTION **//

//coworking image fade-in
 $(window).scroll(function(){                          
            if ($(this).scrollTop() > 900) {
                $('.grid img').fadeIn(800);
            } else {
                $('.grid img').fadeOut(500);
            }
        });



//reveal photos on click

$("#industryLab").on("click", function() {
  $(".coworkingImage").removeClass("coworkingImageClick")
  $("#spaceImg").toggleClass("coworkingImageClick");
});

$("#desk").on("click", function() {
  $(".coworkingImage").removeClass("coworkingImageClick")
  $("#deskImg").toggleClass("coworkingImageClick");
});

$("#conference").on("click", function() {
  $(".coworkingImage").removeClass("coworkingImageClick")
  $("#confImg").toggleClass("coworkingImageClick");
});

$("#event").on("click", function() {
  $(".coworkingImage").removeClass("coworkingImageClick")
  $("#eventImg").toggleClass("coworkingImageClick");
});




//** COMMUNITY.HTML **/

//name directory select
$("#alphaDirectory a").on("click", function (){
  var bioLink = $(this).attr("href");
  $("p").hide();
  $(".arrow-down").addClass("arrow-right").removeClass("arrow-down");
  $(bioLink).children("p").slideDown(300);
  $(bioLink).children(".arrow-right").addClass("arrow-down").removeClass("arrow-right");
  // $(bioLink).siblings().children("p").slideUp(300);
  // $(bioLink).siblings().children(".arrow-down").addClass("arrow-right").removeClass("arrow-down");

    //make all other paragraphs slideUp

  });

// click back to top, close all "p"
$("#nameDirectory a").on("click",function () {
  $("p").slideUp();
});

$("#nameColumn a").on("click", function (){
  $(this).children("p").slideUp(300);
});

//CONTACT FORM TO GOOGLE SHEET
 $('#form').one('submit',function(){
        var name = encodeURIComponent($('#name').val());
        var email = encodeURIComponent($('#email').val());
        var about = encodeURIComponent($('#message').val());
        var q1ID = "entry.2110179054";
        var q2ID = "entry.1474471093";
        var q3ID = "entry.1325773915";

        var baseURL = 'https://docs.google.com/a/industry-lab.com/forms/d/e/1FAIpQLSfddcjyt0cscXiDd2sX6D-oMtXbkEcjuPBYtYv32ZOP9R0_oA/formResponse?';
        var submitRef = '&submit=8422787505313352952';
        var submitURL = (baseURL + q1ID + "=" + name + "&" + q2ID + "=" + email + "&" + q3ID + "=" + about + submitRef);
        console.log(submitURL);
        $(this)[0].action=submitURL;
    });

});





