let a = 0;
   $('.thirdSection').on('click',function(b){
      a++;
 
      if(a == 5){
         $('#close').html('close')
      }
   })


$('.slider').slick({
    dots: true,
    slidesToShow: 3,
    arrows:false,
    infinity:false,
   slidesToScroll: 1,
    swipe: false,
    responsive: [
       {
         breakpoint: 800,
         settings: {
           slidesToShow: 1
         }
       }
     ]
   
   
   });
    $('.slick-active:eq(1) div img').css("height","225px")
   $('.slick-active:eq(0) div h3').css("display","none")
   $('.slick-active:eq(0) div span').css("display","none")
   
   $('.slick-active:eq(2) div h3').css("display","none")
   $('.slick-active:eq(2) div span').css("display","none")
   $('.slick-dots li').on('click', function(){
   
     $('.slick-active:eq(1) div img').css("height","225px")
    $('.slick-active:eq(0) div img').css("height","130px")
     $('.slick-active:eq(2) div img').css("height","130px")
   
     $('.slick-active:eq(1) div h3').css("display","block")
   $('.slick-active:eq(1) div span').css("display","block")
   $('.slick-active:eq(0) div h3').css("display","none")
   $('.slick-active:eq(0) div span').css("display","none")
   
   $('.slick-active:eq(2) div h3').css("display","none")
   $('.slick-active:eq(2) div span').css("display","none")
   
   })