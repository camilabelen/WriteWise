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

  if ($(window).width() < 769) {
    $(this).find('#desktopInfo').hide();      
  } else {
    $(this).find('#informationMobile').hide();    
  }

  if($(window).width() < 768) {
    $('#coreteam').css({'outline': 'none','color': '#E7DA91'});
  } else { $('#coreteam span').css('display', 'none'); }

  $('#team').append(`<div class="card col-10 col-sm-10 col-md-3 col-lg-2 offset-lg-3 col-xl-2 offset-xl-3" id="firstCard">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/Eduardo_fuentes.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="https://www.facebook.com/biopub/"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com/in/dr-eduardo-n-fuentes-b2226821/"><i class="fab fa-linkedin-in"></i></a><a href="mailto:ef@writewise.cl"><i class="fas fa-envelope"></i></a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="eduardoFuentes.html">View Profile</a></button></div></div><div class="card-body"><h3 class="card-text">Eduardo Fuentes, B.Sc., M.Sc., Ph.D.</h3>
              <p class="card-text">Founder and CEO</p></div></div><div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/ashley_vancott.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="https://www.facebook.com/biopub/"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com/in/ashleyvancott/"><i class="fab fa-linkedin-in"></i></a><a href="mailto:av@writewise.cl"><i class="fas fa-envelope"></i></a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="ashleyVanCott.html">View Profile</a></button></div></div><div class="card-body"><h3 class="card-text">Ashley VanCott, B.A.</h3>
              <p class="card-text">Founder and COO</p></div></div><div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/javier_vera.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="javierVera.html">View Profile</a></button></div></div><div class="card-body">
              <h3 class="card-text">Javier Vera, Ph.D.</h3><p class="card-text">Natural Language Processing Researcher</p></div></div>      
              <div class="card col-10 col-sm-10 col-md-3 col-lg-2 offset-lg-3 col-xl-2 offset-xl-3" id="fourthCard">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/juan_bascur.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="juanBascur.html">View Profile</a></button></div></div><div class="card-body"><h3 class="card-text">Juan Bascur, B.Sc., M.Sc.</h3>
              <p class="card-text">Machine Learning and Scientometrics Researcher</p></div></div><div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/francisca_schalchli.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="franciscaSchalchli.html">View Profile</a></button></div></div><div class="card-body"><h3 class="card-text">Francisca Schalchli, B.Eng.</h3>
              <p class="card-text">Project Manager</p></div></div><div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/crishtian_gomez.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="cristhianGomez.html">View Profile</a></button></div></div><div class="card-body">
              <h3 class="card-text">Cristhian Gomez, B.Eng., M.Sc.</h3><p class="card-text">Marketing and Commercial Management</p></div></div>`)
  $('#coreteam span').css({'background-color': '#E7DA91','width': '0.5em','height': '0.5em','position': 'absolute','border-radius': '50%','left': '-0.3em','top': '0.85em'});

  $('#coreteam').click(function(){
    $('#team_others').html('') 
    $('#team').html('');
    if($(window).width() < 768) {
      $('#coreteam span').css('display','inline-block');
    }
    $('#coreteam').css({'outline': 'none','color': '#E7DA91'});
    $('#team').append(`<div class="card col-10 col-sm-10 col-md-3 col-lg-2 offset-lg-3 col-xl-2 offset-xl-3" id="firstCard">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/Eduardo_fuentes.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <a href="https://www.facebook.com/biopub/"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/in/dr-eduardo-n-fuentes-b2226821/"><i class="fab fa-linkedin-in"></i></a>
                <a href="mailto:ef@writewise.cl"><i class="fas fa-envelope"></i></a>         
              </div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="eduardoFuentes.html">View Profile</a></button>
              </div>
            </div>            
            <div class="card-body">
              <h3 class="card-text">Eduardo Fuentes, B.Sc., M.Sc., Ph.D.</h3>
              <p class="card-text">Founder and CEO</p>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/ashley_vancott.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <a href="https://www.facebook.com/biopub/"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/in/ashleyvancott/"><i class="fab fa-linkedin-in"></i></a>
                <a href="mailto:av@writewise.cl"><i class="fas fa-envelope"></i></a>         
              </div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="ashleyVanCott.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Ashley VanCott, B.A.</h3>
              <p class="card-text">Founder and COO</p>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/javier_vera.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <a href="mailto:contact@writewise.cl">contact@writewise.cl</a>     
              </div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="javierVera.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Javier Vera, Ph.D.</h3>
              <p class="card-text">Natural Language Processing Researcher</p>
            </div>
          </div>      
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 offset-lg-3 col-xl-2 offset-xl-3" id="fourthCard">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/juan_bascur.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">              
                <a href="mailto:contact@writewise.cl">contact@writewise.cl</a>         
              </div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="juanBascur.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Juan Bascur, B.Sc., M.Sc.</h3>
              <p class="card-text">Machine Learning and Scientometrics Researcher</p>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/francisca_schalchli.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <a href="mailto:contact@writewise.cl">contact@writewise.cl</a>         
              </div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="franciscaSchalchli.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Francisca Schalchli, B.Eng.</h3>
              <p class="card-text">Project Manager</p>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/crishtian_gomez.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <a href="mailto:contact@writewise.cl">contact@writewise.cl</a>         
              </div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="cristhianGomez.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Cristhian Gomez, B.Eng., M.Sc.</h3>
              <p class="card-text">Marketing and Commercial Management</p>
            </div>
          </div>`)    
  }); // coreteam click

  $('#profesor').click(function() { 
    $('#team_others').html(''); 
    $('#team').html('');
    $('#coreteam').css({'outline': 'none','color': '#FFFFFF'});
    $('#coreteam span').css('display','none');
    $('#team').append(`<div class="card col-10 col-sm-10 col-md-3 col-lg-2 offset-lg-3 col-xl-2 offset-xl-3" id="firstCard">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/rene_venegas.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <a href="https://www.facebook.com/biopub/"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/in/dr-eduardo-n-fuentes-b2226821/"><i class="fab fa-linkedin-in"></i></a>
                <a href="mailto:ef@writewise.cl"><i class="fas fa-envelope"></i></a>         
              </div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="rene_venegas.html">View Profile</a></button>
              </div>
            </div>            
            <div class="card-body">
              <h3 class="card-text">Rene Venegas, Ph.D.</h3>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/hector_allende.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <a href="https://www.facebook.com/biopub/"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/in/ashleyvancott/"><i class="fab fa-linkedin-in"></i></a>
                <a href="mailto:av@writewise.cl"><i class="fas fa-envelope"></i></a>         
              </div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="hector_allende.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Hector Allende, Ph.D.</h3>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/WENCESLAO_PALMA.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <a href="mailto:contact@writewise.cl">contact@writewise.cl</a>     
              </div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="wenceslao_palma.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Wenceslao Palma, Ph.D.</h3>
            </div>
          </div>`)
  }); // researchers profesors

  $('#associated').click(function() { 
    $('#team_others').html(''); 
    $('#team').html('');
    $('#coreteam').css({'outline': 'none','color': '#FFFFFF'});
    $('#coreteam span').css('display','none');
    $('#team').append(`<div class="card col-10 col-sm-10 col-md-3 col-lg-2 offset-lg-1 col-xl-2 offset-xl-1 associated" id="associatedCard1">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/juan_pavez.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <a href="https://www.facebook.com/biopub/"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/in/dr-eduardo-n-fuentes-b2226821/"><i class="fab fa-linkedin-in"></i></a>
                <a href="mailto:ef@writewise.cl"><i class="fas fa-envelope"></i></a>         
              </div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="juan_pavez.html">View Profile</a></button>
              </div>
            </div>            
            <div class="card-body">
              <h3 class="card-text">Juan Pavez, Ph.D.</h3>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2 associated">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/sebastián_rodriguez.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <a href="https://www.facebook.com/biopub/"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/in/ashleyvancott/"><i class="fab fa-linkedin-in"></i></a>
                <a href="mailto:av@writewise.cl"><i class="fas fa-envelope"></i></a>         
              </div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="sebastián_rodriguez.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Sebastián Rodriguez, Ph.D.</h3>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2 associated">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/Sofía_Zamora_Herrera .jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <a href="mailto:contact@writewise.cl">contact@writewise.cl</a>     
              </div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="Sofía_Zamora.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Sofía Zamora, Ph.D.</h3>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2 associated">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/barbara_kremeyer.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <a href="mailto:contact@writewise.cl">contact@writewise.cl</a>     
              </div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="barbara_kremeyer.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Barbara Kremeyer, Ph.D.</h3>
            </div>
          </div>`);
  }); // associated researchers

  $('#others').click(function() {
    $('#team_others').html('');  
    $('#team').html('');
    $('#coreteam').css({'outline': 'none','color': '#FFFFFF'});
    $('#coreteam span').css('display','none');     
    $('#team_others').append(`<div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Humberto Gonzales</h5>
                <p class="card-text">Undergraduate student Informatic Engeneering at Pontificia Universidad Católica de Valparaiso (PUCV). Humberto is currently Software front-end Developer at WriteWise under the supervision of Dr. Allende.</p>
              </div>      
            </div>
          </div>    
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Jose Campusano</h5>
                <p class="card-text">Undergraduate student Informatic Engeneering at Pontificia Universidad Católica de Valparaiso (PUCV). Jose  is currently  Software front-end Developer at WriteWise under the supervision of Dr. Allende.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Francisco Escobar</h5>
                <p class="card-text">Undergraduate student Informatic Engeneering at Pontificia Universidad Católica de Valparaiso (PUCV). Francisco  is currently  Software front-end Developer at WriteWise under the supervision of Dr. Allende.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Patricio Araya</h5>
                <p class="card-text">Undergraduate student Informatic Engeneering at Pontificia Universidad Católica de Valparaiso (PUCV). Patricio  is currently  Machine Learning Software Developer at WriteWise under the supervision of Dr. Allende.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Jorge Montiel</h5>
                <p class="card-text">Undergraduate student Informatic Engeneering at Pontificia Universidad Católica de Valparaiso (PUCV). Jorge  is currently  Machine Learning Software Developer at WriteWise under the supervision of Dr. Allende.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Jorge Ortiz</h5>
                <p class="card-text">Undergraduate student Linguistics Potificia Universidad Catolica de Chile (PUC). Past-Intern.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Dominiquo Santistevan</h5>
                <p class="card-text">BCSc Massachusetts Institute of Technology (MIT) BCSc. Past-Intern as part of the MISTI program.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Amparo Galdames Fermandois</h5>
                <p class="card-text">Spanish Language and Communication Teacher, Bachelor's degree in Language and Literature. Currently enroled in Applied Linguistics Master at Pontificia Universidad Católica de Valparaíso.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Grace Wilson Fredes</h5>
                <p class="card-text">English-Spanish Translator, Bachelor's degree in English Language.Currently enroled in Applied Linguistics Master at Pontificia Universidad Católica de Valparaíso.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard lastCardRow">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Fernando Lillo Fuentes</h5>
                <p class="card-text">Spanish Language and Communication Teacher, Bachelor's degree in Language and Literature. Currently enroled in Applied Linguistics Master at Pontificia Universidad Católica de Valparaíso.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Pablo Fuenzalida González</h5>
                <p class="card-text">English Language Teacher, Currently enroled in Applied Linguistics Master at Pontificia Universidad Católica de Valparaíso.</p>
              </div>      
            </div>
          </div>`);
  }); // others reseachers

  $('#collaborator').click(function() {
    $('#team').html('');
    $('#team_others').html('');
    $('#coreteam').css({'outline': 'none','color': '#FFFFFF'});
    $('#coreteam span').css('display','none');  
    $('#team_others').append(`<div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 collaboratorsCard"><div class="card">
              <div class="card-body"><h5 class="card-title">Hernan Gonzales</h5><p class="card-text">MD, PhD. Dr. Gonzales is Associate Professor 
              - Research Director, Department of Head and Neck Surgery at Pontificia Universidad Católica. Dr. Gonzales is also Founder of GeneproDX, 
              a biotech startup that commercializes new assays for personalized medicine used for the diagnosis and prognosis of solid tumors. 
              Dr. Gonzales is currently WriteWise´s advisor.</p></div></div></div><div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 collaboratorsCard">
              <div class="card"><div class="card-body"><h5 class="card-title">Rodrigo Rojas</h5><p class="card-text">Industrial Engineer at Universidad de Chile. 
              Mr. Rojas is the founder and CEO of TimeHunter with more than 20 years of experience in sale, marketing, and CRM. He is currently WriteWise´s Mentor.</p>
              </div></div></div><div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 collaboratorsCard"><div class="card"><div class="card-body">
              <h5 class="card-title">Andrés Levineri</h5><p class="card-text">in an Informatic Engineer and Graphic Designer with more than 10 years of experience. 
              He is currently WriteWise´s Graphic Content Developer.</p></div></div></div><div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 collaboratorsCard lastCardRow">
              <div class="card"><div class="card-body"><h5 class="card-title">Oscar Lynch</h5><p class="card-text">Lawyer at Universidad de Concepcion. 
              Mr. Lynch has been an Accounting and Financial Lawyer for more than 10 years. Mr. Lynch is currently WriteWise´s Lawyer Advisor.</p>
              </div></div></div><div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 collaboratorsCard"><div class="card"><div class="card-body">
              <h5 class="card-title">Miguel Pavez</h5><p class="card-text">Master in Finance, Master in Taxation, Corporate Accountant, Finance and Administration Manager, 
              Consultant. Mr. Pavez is currently WriteWise´s Senior Accounting Manager Advisor.</p></div></div></div>`);
  });

  // imprimiendo informacion al hacer click en cada tarjeta
  $('#information').append(`<div class="textInfo"><p>We use Machine Learning and Computational Linguistics that work together in the area of Natural
              Language Processing applied to the modelling and correction of Scientific Writing. Our work spans from: </p>
              <p>1. Novel approaches for textual data representation for scientific articles:</p>
              <p>Word embeddings to Deep/Machine Learning models for Natural Language Processing tasks.</p>
              <p>Graph-based representations with a focus on using graphs whose vertices represent words and whose edges represent co-occurrence relations between
              pairs of words. This approach selects cohesive subsets of words and has several applications on text structure.</p>
              <p>2. Novel computational approaches for scientific articles analysis. We specialized our research on:</p>
              <ul><li>Discourse Segmentation</li><li>Automatic Punctuation Analysis</li><li>Text Rule Mining</li><li>Topic Modelling</li><li>Readability/Coherence Classification</li></ul>
              <p>This area is lead by Dr. Hector Allende. Team members involved in this R+D+i area are:</p><ul><li>Dr. Hector Allende</li>
              <li>Dr. Eduardo Fuentes</li><li>Dr. Wenceslao Palma</li><li>Dr. Javier Vera</li><li>Dr(c) Juan Pavez</li><li>Sebastian Rodriguez, BCSc.</li>
              <li>Humberto Gonzales (undergraduate)</li><li>Jose Campusano (undergraduate)</li><li>Francisco Escobar (undergraduate)</li>
              <li>Patricio Araya (undergraduate)</li><li>Jorge Montiel (undergraduate)</li></ul></div>`);
  $('.linguistic').addClass('activeBtn');
  $('#linguistic').click(function() {
    $('#information').html('');
    $('#information').append(`<div class="textInfo"><p>We use Machine Learning and Computational Linguistics that work together in the area of Natural
              Language Processing applied to the modelling and correction of Scientific Writing. Our work spans from: </p>
              <p>1. Novel approaches for textual data representation for scientific articles:</p>
              <p>Word embeddings to Deep/Machine Learning models for Natural Language Processing tasks.</p>
              <p>Graph-based representations with a focus on using graphs whose vertices represent words and whose edges represent co-occurrence relations between
              pairs of words. This approach selects cohesive subsets of words and has several applications on text structure.</p>
              <p>2. Novel computational approaches for scientific articles analysis. We specialized our research on:</p>
              <ul><li>Discourse Segmentation</li><li>Automatic Punctuation Analysis</li><li>Text Rule Mining</li><li>Topic Modelling</li><li>Readability/Coherence Classification</li></ul>
              <p>This area is lead by Dr. Hector Allende. Team members involved in this R+D+i area are:</p><ul><li>Dr. Hector Allende</li>
              <li>Dr. Eduardo Fuentes</li><li>Dr. Wenceslao Palma</li><li>Dr. Javier Vera</li><li>Dr(c) Juan Pavez</li><li>Sebastian Rodriguez, BCSc.</li>
              <li>Humberto Gonzales (undergraduate)</li><li>Jose Campusano (undergraduate)</li><li>Francisco Escobar (undergraduate)</li>
              <li>Patricio Araya (undergraduate)</li><li>Jorge Montiel (undergraduate)</li></ul></div>`);
    $('.linguistic').addClass('activeBtn');
    $('.bigdata').removeClass('activeBtn');
    $('.deepLearning').removeClass('activeBtn');
  });
  $('#bigdata').click(function() {
    $('#information').html('');
    $('#information').append(`<div class="textInfo"><p>We use functional and applied discursive frameworks combined with Corpus analysis,
              Computational Linguistics, and Natural Language Processing approaches for successfully
              accomplish the discursive and linguistics requirements of the academic and scientific genres
              through empirical-based research. Our work spans from identification and comprehension of the:</p>
              <p>Communicative purposes and the lexical-grammar features that constitute a written genre in a scientific discipline.</p>
              <p>Textual and discursive analysis of the academic and scientific genres</p>
              <p>This area is led by Prof. Rene Venegas, PhD. Team members involved in this R+D+I area are:</p>
              <ul><li>Dr. Eduardo Fuentes</li><li>Dr. Barbara Kremeyer</li><li>Dr(c) Sofia Zamora</li><li>Ashley VanCott, BA</li>
              <li>Grace Wilson, BA</li><li>Amparo Galdames, BA</li><li>Fernando Lillo, BA</li><li>Pablo Fuenzalida, BA</li></ul></div>`)
    $('.linguistic').removeClass('activeBtn');
    $('.deepLearning').removeClass('activeBtn');
    $('.bigdata').addClass('activeBtn');
  });
  $('#deepLearning').click(function() {
    $('#information').html('');
    $('#information').append(`<div class="textInfo"><p>We use scientometrics combined with Natural Language Processing to predict scientific
              publications impact and recognition.</p>
              <p>Team members involved in this research area are:</p><ul><li>Dr. Eduardo Fuentes</li><li>Juan Pablo Bascur, MSc.</li></ul></div>`)
    $('.linguistic').removeClass('activeBtn');
    $('.bigdata').removeClass('activeBtn');
    $('.deepLearning').addClass('activeBtn');
  });

  // hover tarjetas de our RD
  $('.rdBtn').on({
    mouseenter: function() {
      $(this).css('cursor','pointer');
      $(this).find('img').css('filter','opacity(1)');
    },
    mouseleave: function() {
      if ($(this).hasClass('activeBtn')) {
        $(this).find('img').css('filter','opacity(1)');
      } else {$(this).find('img').css('filter','opacity(0.8)');}
    }    
  });

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.navbar').fadeOut();
      } else {
        $('.navbar').fadeIn();
      }
      if ($(this).scrollTop() === $('#researchGroup').position().top) {
        $('#researchGroupDot').css('color','#21315B');
        $('#ourQuestionDot').css('color','#BBBBBB');
        $('#ourRDdot').css('color','#BBBBBB');
        $('#ourTeamDot').css('color','#BBBBBB');
        console.log('home');
      }
      if ($(this).scrollTop() >= $('#ourQuestion').position().top) {
        $('#ourQuestionDot').css('color','#21315B');
        $('#researchGroupDot').css('color','#BBBBBB');
        $('#ourRDdot').css('color','#BBBBBB');
        $('#ourTeamDot').css('color','#BBBBBB');
        console.log('our Question');
      }
      if ($(this).scrollTop() >= $('#ourRD').position().top) {
        $('#ourRDdot').css('color','#21315B');
        $('#ourQuestionDot').css('color','#BBBBBB');
        $('#researchGroupDot').css('color','#BBBBBB');
        $('#ourTeamDot').css('color','#BBBBBB');
        console.log('our RD');
      }
      if ($(this).scrollTop() >= $('#ourTeam').position().top) {
        $('#ourTeamDot').css('color','#21315B');
        $('#ourRDdot').css('color','#BBBBBB');
        $('#ourQuestionDot').css('color','#BBBBBB');
        $('#researchGroupDot').css('color','#BBBBBB');
        console.log('our RD');
      }
    });  
  });

})// document ready