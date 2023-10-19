$(document).ready(function(){
   
   $(window).scroll(function(){

      if(this.scrollY > 20){
         $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
   });

    // toggle menu/navbar script
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
      });
      
      
      
      window.addEventListener("scroll",
      function() {
        var elemento =  document.querySelector(".logo a");
        var spanElement = document.createElement("span");
        spanElement.id = "msg";
        
        if (window.scrollY > 20)  {
          elemento.innerHTML = "Portfo";
          spanElement.textContent = "lio.";
          elemento.appendChild(spanElement);

         } else {
            elemento.innerHTML = "Bem-<span>vindo!</span>";
         }
     
  }); 
      
      //owl carousel script
      
      $('.carousel').owlCarousel({
          margin: 20,
          loop: true,
          autoplayTimeOut: 2000,
          autoplayHoverPause: true,
          responsive: {
           0:{
              items: 1,
              nav: false
           },
          
           600:{
              items: 2,
              nav: false 
           },

           1000:{
            items: 2,
            nav: true 
           },

          }
      });
 }); 