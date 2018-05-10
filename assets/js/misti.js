$(document).ready(function() {
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
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.navbar').fadeOut();
      } else {
        $('.navbar').fadeIn();
      }
      if ($(this).scrollTop() === $('#homeMISTI').position().top) {
        $('#homeMISTIDot').css('color','#21315B');
        $('#internProfileDot').css('color','#BBBBBB');
        $('#ourQuestionDot').css('color','#BBBBBB');
        $('#benefitsDot').css('color','#BBBBBB');
        $('#internshipDot').css('color','#BBBBBB');
        $('#moreInfoDot').css('color','#BBBBBB');
        $('#MITDot').css('color','#BBBBBB');
        console.log('home');
      }
      if ($(this).scrollTop() >= $('#MIT').position().top) {
        $('#MITDot').css('color','#21315B');
        $('#internProfileDot').css('color','#BBBBBB');
        $('#homeMISTIDot').css('color','#BBBBBB');
        $('#benefitsDot').css('color','#BBBBBB');
        $('#internshipDot').css('color','#BBBBBB');
        $('#moreInfoDot').css('color','#BBBBBB');
        console.log('our Question');
      }
      if ($(this).scrollTop() >= $('#benefits').position().top) {
        $('#benefitsDot').css('color','#21315B');
        $('#internProfileDot').css('color','#BBBBBB');
        $('#MITDot').css('color','#BBBBBB');
        $('#homeMISTIDot').css('color','#BBBBBB');
        $('#internshipDot').css('color','#BBBBBB');
        $('#moreInfoDot').css('color','#BBBBBB');
        console.log('our RD');
      }
      if ($(this).scrollTop() >= $('#internship').position().top) {
        $('#internshipDot').css('color','#21315B');
        $('#internProfileDot').css('color','#BBBBBB');
        $('#benefitsDot').css('color','#BBBBBB');
        $('#MITDot').css('color','#BBBBBB');
        $('#homeMISTIDot').css('color','#BBBBBB');
        $('#moreInfoDot').css('color','#BBBBBB');
        console.log('our RD');
      }
      if ($(this).scrollTop() >= $('#internProfile').position().top) {
        $('#internProfileDot').css('color','#21315B');
        $('#benefitsDot').css('color','#BBBBBB');
        $('#MITDot').css('color','#BBBBBB');
        $('#homeMISTIDot').css('color','#BBBBBB');
        $('#moreInfoDot').css('color','#BBBBBB');
        $('#internshipDot').css('color','#BBBBBB');
        console.log('our RD');
      }
      if ($(this).scrollTop() >= $('#moreInfo').position().top) {
        $('#moreInfoDot').css('color','#21315B');
        $('#benefitsDot').css('color','#BBBBBB');
        $('#MITDot').css('color','#BBBBBB');
        $('#homeMISTIDot').css('color','#BBBBBB');
        $('#internProfileDot').css('color','#BBBBBB');
        $('#internshipDot').css('color','#BBBBBB');
        console.log('our RD');
      }

    });  
  });

})