

// KEY
// HP Home Page
// SP Secondary Page(s)
// TTP Third Tier Page(s)
// GL Global



// GLOBAL


            // Footer in following html pages - about.html, index.html, sequences.html
            // Copyright year automatically updates each calender year
            document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("year").textContent = new Date().getFullYear();
          });


// HOME PAGE

      

    // NAVIGATION


        // Rotates/Toggles Hamburger Menu (HP/SP)

        function rotateIcon() {
            
            var icon = document.getElementById("menu-icon");
            
            icon.classList.toggle("menu-btn-rotate-90");
        }

        
        // Opens Mobile menu (HP/SP)
        // Animate Menu with 'Animate.css'
        // Menu tiles zoom in to position after menu is clicked

        function myMobileMenu() {
          var x = document.getElementById("myLinks");
          if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
            x.classList.add('animated', 'slideInLeft');
          }
        }
        
        // Displays/Hides Responsive Menu/Tiles (HP)
        // Animate Menu with 'Animate.css'
        // Menu tiles zoom in to position after menu is clicked 

        function openMenu() {
            
            var menu = document.getElementById("menuGrab");
            
          if (menu.style.display === "block") {
            menu.style.display = "none";
          } else {
            menu.style.display = "block";
            menu.classList.add('animated', 'slideInLeft');
          }
        }

        // Displays/Hides Menu Bar (SP)
        // Animate Menu with 'Animate.css'
        // Menu tiles zoom in to position after menu is clicked

        function openMenuBar() {
            
            var menu = document.getElementById("navBarMenuGrab");
            
          if (menu.style.display === "block") {
            menu.style.display = "none";
          } else {
            menu.style.display = "block";
            menu.classList.add('animated', 'slideInLeft');
          }
        }

         // When the user hovers over image, onmouseover changes img src
         // and reverts back to original onmouseout
        
        // Sequence Promo One (HP)

        function changePicOneMobile() {
          document.getElementById("imageSwapSmallOneMobile").src = "Images/mid-afternoon_change-1_GRAPHIC_768px.jpg";
        }

        function changePicOne() {
          document.getElementById("imageSwapSmallOne").src = "Images/mid-afternoon_change-1_GRAPHIC_768px.jpg";
        }
        function changePicTwo(){
          document.getElementById("imageSwapSmallOne").src = "Images/mid-afternoon_change-1_CROP_1-1_768px.jpg";
        }

        function changePicThree() {
          document.getElementById("imageSwapBigOne").src = "Images/mid-afternoon_change-1_GRAPHIC_1366px.jpg";
        }
        function changePicFour(){
          document.getElementById("imageSwapBigOne").src = "Images/mid-afternoon_change-1_CROP_1366px.jpg";
        }

        // Sequence Promo Two (HP)

        function changePicFiveMobile() {
          document.getElementById("imageSwapSmallTwoMobile").src = "Images/Tomorrows_Past-2_GRAPHIC_768px.jpg";
        }

        function changePicFive() {
          document.getElementById("imageSwapSmallTwo").src = "Images/Tomorrows_Past-2_GRAPHIC_768px.jpg";
        }
        function changePicSix(){
          document.getElementById("imageSwapSmallTwo").src = "Images/Tomorrows_Past-2_CROP_1-1_768px.jpg";
        }

        function changePicSeven() {
          document.getElementById("imageSwapBigTwo").src = "Images/Tomorrows_Past-2_GRAPHIC_1366px.jpg";
        }
        function changePicEight(){
          document.getElementById("imageSwapBigTwo").src = "Images/Tomorrows_Past-2_1366px.jpg";
        }



        // When the user scrolls down 200px from the top of the document, show the button (SP)

            

            // When the user scrolls down 600px from the top of the document, show the button
            window.onscroll = function() {scrollFunction()};

            function scrollFunction() {
              if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
                document.getElementById("myTopBtn").style.display = "block";
              } else {
                document.getElementById("myTopBtn").style.display = "none";
              }
            }

            // When the user clicks on the button, scroll to the top of the document
            function topFunction() {
              document.body.scrollTop = 0; // For Safari
              document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            }

            

// SEQUENCE PAGE (SP)

        // Delays href link (when touched/clicked) for 2 seconds
        function delay (URL) {
            
            setTimeout( function() { window.location = URL }, 1650 );
            
        }


        // When the user hovers over image, onpointerover changes img src
        // and reverts back to original onpointerout
        
        // Image One (SP)

        function changePicNineMobile() {
          document.getElementById("imageSwapSmallThreeMobile").src = "Images/cant_find_my_keys-3_GRAPHIC_768px.jpg";
        }

        function changePicNine() {
          document.getElementById("imageSwapSmallThree").src = "Images/cant_find_my_keys-3_GRAPHIC_768px.jpg";
        }
        function changePicTen(){
          document.getElementById("imageSwapSmallThree").src = "Images/cant_find_my_keys-3_CROP_1-1_768px.jpg";
        }      

        // Image Two (SP)

        function changePicElevenMobile() {
          document.getElementById("imageSwapSmallFourMobile").src = "Images/birds-3_GRAPHIC_768px.jpg";
        }

        function changePicEleven() {
          document.getElementById("imageSwapSmallFour").src = "Images/birds-3_GRAPHIC_768px.jpg";
        }
        function changePicTwelve(){
          document.getElementById("imageSwapSmallFour").src = "Images/birds-3_CROP_1-1_768px.jpg";
        }  

        // Image Three (SP)
        // This image swap is recurring from home page. Redeployed function changePicFive/Six 

        // Image Four (SP)

        function changePicThirteenMobile() {
            document.getElementById("imageSwapSmallFiveMobile").src = "Images/Vertically_Malaligned-5_GRAPHIC_768px.jpg";
        }

        function changePicThirteen() {
            document.getElementById("imageSwapSmallFive").src = "Images/Vertically_Malaligned-5_GRAPHIC_768px.jpg";
        }

        function changePicFourteen() {
            document.getElementById("imageSwapSmallFive").src = "Images/Vertically_Malaligned-5_CROP_1-1_768px.jpg";
        }

        // Image Five (SP)

        function changePicFifteenMobile() {
            document.getElementById("imageSwapSmallSixMobile").src = "Images/I_awoke_from_a_dark_dream-4_GRAPHIC_768px.jpg";
        }


        function changePicFifteen() {
            document.getElementById("imageSwapSmallSix").src = "Images/I_awoke_from_a_dark_dream-4_GRAPHIC_768px.jpg";
        }

        function changePicSixteen() {
            document.getElementById("imageSwapSmallSix").src = "Images/I_awoke_from_a_dark_dream-4_CROP_1-1_768px.jpg";
        }
        
        // Image Six (SP)
        // This image swap is recurring from home page. Redeployed function changePicOne/Two

        // Image Seven (SP)

        function changePicSeventeenMobile() {
            document.getElementById("imageSwapSmallSevenMobile").src = "Images/Gone_Fishing-3_GRAPHIC_768px.jpg";
        }

        function changePicSeventeen() {
            document.getElementById("imageSwapSmallSeven").src = "Images/Gone_Fishing-3_GRAPHIC_768px.jpg";
        }

        function changePicEighteen() {
            document.getElementById("imageSwapSmallSeven").src = "Images/Gone_Fishing-3_CROP_1-1_768px.jpg";
        }

// SEQUENCE PAGES detail (TTP)
// Open the Modal 
    function openModal() {
      document.getElementById("myModal").style.display = "block";
    }

    // Close the Modal
    function closeModal() {
      document.getElementById("myModal").style.display = "none";
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("demo");
      var captionText = document.getElementById("caption");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      captionText.innerHTML = dots[slideIndex-1].alt;
    }



// ABOUT PAGE 
// Read More/Less Button

function myReadFunctionOne() {
  var dots = document.getElementById("dots-one");
  var moreText = document.getElementById("more-one");
  var btnText = document.getElementById("myReadBtnOne");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
} 