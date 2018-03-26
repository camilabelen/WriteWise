$(document).ready(function () {

  // Animación desplazamiento de sdecciones
  $('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    }
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
  $('.description').hide();
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
});