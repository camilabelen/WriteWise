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
      if ($(this).scrollTop() === $('#homeOurSolution').position().top) {
        $('#homeOurSolutionDot').css('color','#21315B');
        $('#howItWorksDot').css('color','#BBBBBB');
        $('#eLearningCourseDot').css('color','#BBBBBB');
        $('#wwSoftwareDot').css('color','#BBBBBB');
        $('#moreInfoDot').css('color','#BBBBBB');
        $('#beneficiariesDot').css('color','#BBBBBB');
        $('#featuresBenefitsDot').css('color','#BBBBBB');
      }
      if ($(this).scrollTop() >= $('#beneficiaries').position().top) {
        $('#beneficiariesDot').css('color','#21315B');
        $('#howItWorksDot').css('color','#BBBBBB');
        $('#homeOurSolutionDot').css('color','#BBBBBB');
        $('#eLearningCourseDot').css('color','#BBBBBB');
        $('#wwSoftwareDot').css('color','#BBBBBB');
        $('#moreInfoDot').css('color','#BBBBBB');
        $('#featuresBenefitsDot').css('color','#BBBBBB');
      }
      if ($(this).scrollTop() >= $('#featuresBenefits').position().top) {
        $('#featuresBenefitsDot').css('color','#21315B');
        $('#eLearningCourseDot').css('color','#BBBBBB');
        $('#beneficiariesDot').css('color','#BBBBBB');
        $('#homeOurSolutionDot').css('color','#BBBBBB');
        $('#moreInfoDot').css('color','#BBBBBB');
        $('#wwSoftwareDot').css('color','#BBBBBB');
      }
      if ($(this).scrollTop() >= $('#eLearningCourse').position().top) {
        $('#eLearningCourseDot').css('color','#21315B');
        $('#howItWorksDot').css('color','#BBBBBB');
        $('#beneficiariesDot').css('color','#BBBBBB');
        $('#homeOurSolutionDot').css('color','#BBBBBB');
        $('#wwSoftwareDot').css('color','#BBBBBB');
        $('#moreInfoDot').css('color','#BBBBBB');
        $('#featuresBenefitsDot').css('color','#BBBBBB');
      }
      if ($(this).scrollTop() >= $('#wwSoftware').position().top) {
        $('#wwSoftwareDot').css('color','#21315B');
        $('#howItWorksDot').css('color','#BBBBBB');
        $('#eLearningCourseDot').css('color','#BBBBBB');
        $('#beneficiariesDot').css('color','#BBBBBB');
        $('#homeOurSolutionDot').css('color','#BBBBBB');
        $('#moreInfoDot').css('color','#BBBBBB');
        $('#featuresBenefitsDot').css('color','#BBBBBB');
      }
      if ($(this).scrollTop() >= $('#howItWorks').position().top) {
        $('#howItWorksDot').css('color','#21315B');
        $('#wwSoftwareDot').css('color','#BBBBBB');
        $('#eLearningCourseDot').css('color','#BBBBBB');
        $('#beneficiariesDot').css('color','#BBBBBB');
        $('#homeOurSolutionDot').css('color','#BBBBBB');
        $('#moreInfoDot').css('color','#BBBBBB');
        $('#featuresBenefitsDot').css('color','#BBBBBB');
      }
    });  
  });
  $(".smoo").smoove({opacity:"0",moveZ:"0"});
  $(".smooTop").smoove({opacity:"0",moveY:"-200px"});
  $(".smooBottom").smoove({opacity:"0",moveY:"200px"});
  $(".smooRight").smoove({opacity:"0",moveX:"200px"});
  $(".smooLeft").smoove({opacity:"0",moveX:"-200px"});

})