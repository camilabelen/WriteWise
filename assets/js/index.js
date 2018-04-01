$(document).ready(function () {
 //smooth scrolling
  $(function(){
    $('a[href*="#"]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body').animate({scrollTop: targetOffset}, 1000);
          return false;
        }
      }
    });
  });

  //smoove transition
  $('.smoo').smoove({opacity:'0', moveZ: '0',});
  $('.smooTop').smoove({opacity:'0', moveY: '-200px',});
  $('.smooBottom').smoove({opacity:'0', moveY: '200px',});
  $('.smooRight').smoove({opacity:'0', moveX: '200px',});
  $('.smooLeft').smoove({opacity:'0', moveX: '-200px',});

  /*
  * MENU
  */

  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });
 
  /*
  * ABOUT - texto de tarjetas
  */
  
  //texto tarjetas about
  $('.text').hide();
  
  $('#about .card').on({
    mouseenter: function() {
      $(this).css({'cursor':'pointer','background-color':'white', 'color':'#21315B', 'box-shadow': '0px 14px 10px -10px rgba(14,18,70,0.65), 0px -14px 10px -10px rgba(14,18,70,0.65)'});
      $(this).find('.card-header').css('border-bottom','1px solid #C8C8C8');
      $(this).find('img').hide();
      $(this).find('.text').show();
    },
    mouseleave: function() {
      $(this).css({'background-color':'transparent', 'color':'#FFFFFF', 'box-shadow': 'none'});
      $(this).find('.card-header').css('border-bottom','1px solid #FFFFFF');
      $(this).find('img').show();
      $(this).find('.text').hide();
    }
  })

  /*
  * KNOW MORE
  */
  
  // texto iconos know more
  if ($(window).width() < 769) {
    $(this).find('.description').show();
  } else {
    $('.description').hide();
  }

  $('.icon').on({
    mouseenter: function() {
      $(this).find('img').css({'cursor': 'pointer', 'background-color': 'rgba(9,12,51,0.44)', 'border': '0', 'color': '#FFFFFF', 'transition': 'all 0.3s'});
      $(this).find('h5').css('border-bottom','1px solid #FFFFFF');
      $(this).find('.description').show();
    },
    mouseleave: function() {
      $(this).find('img').css({'background-color': 'transparent', 'border': '3px solid #FFFFFF', 'color': '#FFFFFF', 'transition': 'all 0.3s'});
      $(this).find('h5').css('border-bottom','0');
      $(this).find('.description').hide();
    }
  }); 

  //resize textarea
  const textarea = $('textarea');
  textarea.on('keydown', autosize);
               
  function autosize(){
    var resize = this;
    setTimeout(function(){
      resize.style.cssText = "height:auto; overflow-y:hidden";
      resize.style.cssText = 'height:' + resize.scrollHeight + 'px';
    },0);
  } 
});