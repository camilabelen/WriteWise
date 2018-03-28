$(document).ready(function() {

  if($(window).width() < 430){
    $('.photo').hide();
    $('.mobilePhoto').append(`<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 photo">
          <img src="../img/profile/cristhian.png" alt="Cristhian-Gomez">
        </div>`)
  }

});