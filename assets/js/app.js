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
              <p class="card-text">Founder and CEO</p></div></div>

              <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/ashley_vancott.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="https://www.facebook.com/biopub/"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com/in/ashleyvancott/"><i class="fab fa-linkedin-in"></i></a><a href="mailto:av@writewise.cl"><i class="fas fa-envelope"></i></a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="ashleyVanCott.html">View Profile</a></button></div></div><div class="card-body"><h3 class="card-text">Ashley VanCott, B.A.</h3>
              <p class="card-text">Founder and COO</p></div></div>

              <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/javier_vera.jpg" alt="Card image cap">
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="javierVera.html">View Profile</a></button></div></div><div class="card-body">
              <h3 class="card-text">Javier Vera, Ph.D.</h3><p class="card-text">Natural Language Processing Researcher</p></div></div>      
              
              <div class="card col-10 col-sm-10 col-md-3 col-lg-2 offset-lg-3 col-xl-2 offset-xl-3" id="fourthCard">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/Rodrigo_Rojas.jpg" alt="Card image cap">
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="rodrigoRojas.html">View Profile</a></button></div></div><div class="card-body"><h3 class="card-text">Rodrigo Rojas, Industrial Civil Engineer</h3>
              <p class="card-text">Chief Marketing Officer</p></div></div>

              <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/Kendrik_Lanyi-Grünfeldt.jpg" alt="Card image cap">
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="kendrik.html">View Profile</a></button></div></div><div class="card-body"><h3 class="card-text">Kendrik Lanyi-Grünfeldt, Commercial Engineer</h3>
              <p class="card-text">Chief Commercial Officer</p></div></div>

              <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/David_Weinstain.jpg" alt="Card image cap">
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="davidWeinstain.html">View Profile</a></button></div></div><div class="card-body">
              <h3 class="card-text">David Weinstain, B.Sc, M.Sc., Ph.D.</h3><p class="card-text">Scientific Editor</p></div></div>`)
  $('#coreteam span').css({'background-color': '#E7DA91','width': '0.5em','height': '0.5em','position': 'absolute','border-radius': '50%','left': '-0.3em','top': '0.85em'});

  $('#coreteam').click(function(){
    $('#team_others').html('') 
    $('#team').html('');
    if($(window).width() < 768) {
      $('#coreteam span').css('display','inline-block');
    }
    $('#coreteam').css({'outline': 'none','color': '#E7DA91'});
    $('#team').append(`<div class="card col-10 col-sm-10 col-md-3 col-lg-2 offset-lg-3 col-xl-2 offset-xl-3" id="firstCard">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/Eduardo_fuentes.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="https://www.facebook.com/biopub/"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com/in/dr-eduardo-n-fuentes-b2226821/"><i class="fab fa-linkedin-in"></i></a><a href="mailto:ef@writewise.cl"><i class="fas fa-envelope"></i></a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="eduardoFuentes.html">View Profile</a></button></div></div><div class="card-body"><h3 class="card-text">Eduardo Fuentes, B.Sc., M.Sc., Ph.D.</h3>
              <p class="card-text">Founder and CEO</p></div></div>

              <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/ashley_vancott.jpg" alt="Card image cap">
              <div class="iconRRSS col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="https://www.facebook.com/biopub/"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com/in/ashleyvancott/"><i class="fab fa-linkedin-in"></i></a><a href="mailto:av@writewise.cl"><i class="fas fa-envelope"></i></a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="ashleyVanCott.html">View Profile</a></button></div></div><div class="card-body"><h3 class="card-text">Ashley VanCott, B.A.</h3>
              <p class="card-text">Founder and COO</p></div></div>

              <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/javier_vera.jpg" alt="Card image cap">
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="javierVera.html">View Profile</a></button></div></div><div class="card-body">
              <h3 class="card-text">Javier Vera, Ph.D.</h3><p class="card-text">Natural Language Processing Researcher</p></div></div>      
              
              <div class="card col-10 col-sm-10 col-md-3 col-lg-2 offset-lg-3 col-xl-2 offset-xl-3" id="fourthCard">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/Rodrigo_Rojas.jpg" alt="Card image cap">
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="rodrigoRojas.html">View Profile</a></button></div></div><div class="card-body"><h3 class="card-text">Rodrigo Rojas, Industrial Civil Engineer</h3>
              <p class="card-text">Chief Marketing Officer</p></div></div>

              <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/Kendrik_Lanyi-Grünfeldt.jpg" alt="Card image cap">
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="kendrik.html">View Profile</a></button></div></div><div class="card-body"><h3 class="card-text">Kendrik Lanyi-Grünfeldt, Commercial Engineer</h3>
              <p class="card-text">Chief Commercial Officer</p></div></div>

              <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/David_Weinstain.jpg" alt="Card image cap">
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="davidWeinstain.html">View Profile</a></button></div></div><div class="card-body">
              <h3 class="card-text">David Weinstain, B.Sc, M.Sc., Ph.D.</h3><p class="card-text">Scientific Editor</p></div></div>`);    
  }); // coreteam click

  $('#profesor').click(function() { 
    $('#team_others').html(''); 
    $('#team').html('');
    $('#coreteam').css({'outline': 'none','color': '#FFFFFF'});
    $('#coreteam span').css('display','none');
    $('#team').append(`<div class="card col-10 col-sm-10 col-md-3 col-lg-2 offset-lg-3 col-xl-2 offset-xl-3 leadResearchers" id="firstCardLR">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/rene_venegas.jpg" alt="Card image cap">
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="leadResearchers.html">View Profile</a></button>
              </div>
            </div>            
            <div class="card-body">
              <h3 class="card-text">René Venegas, PhD</h3>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2 leadResearchers">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/hector_allende.jpg" alt="Card image cap">
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="leadResearchers.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Héctor Allende, PhD</h3>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2 leadResearchers">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/WENCESLAO_PALMA.jpg" alt="Card image cap">
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="leadResearchers.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Wenceslao Palma, PhD</h3>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2 leadResearchers">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/rodrigo_alfaro.jpg" alt="Card image cap">
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="leadResearchers.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Rodrigo Alfaro, PhD</h3>
            </div>
          </div>`);
  }); // researchers profesors

  $('#associated').click(function() { 
    $('#team_others').html(''); 
    $('#team').html('');
    $('#coreteam').css({'outline': 'none','color': '#FFFFFF'});
    $('#coreteam span').css('display','none');
    $('#team').append(`<div class="card col-10 col-sm-10 col-md-3 col-lg-2 offset-lg-1 col-xl-2 offset-xl-1 associated" id="associatedCard1">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/juan_pavez.jpg" alt="Card image cap">
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="juan_pavez.html">View Profile</a></button>
              </div>
            </div>            
            <div class="card-body">
              <h3 class="card-text">Juan Pavez, PhD(c)</h3>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2 associated">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/sebastián_rodriguez.jpg" alt="Card image cap">
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="sebastian_rodriguez.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Sebastián Rodríguez, BCSc</h3>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2 associated">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/Sofía_Zamora_Herrera .jpg" alt="Card image cap">
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="sofia_zamora.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Sofía Zamora, PhD(c)</h3>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2 associated">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/barbara_kremeyer.jpg" alt="Card image cap">
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="barbara_kremeyer.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Barbara Kremeyer, PhD</h3>
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
                <p class="card-text">Humberto is an undergraduate student in computer engineering at the Pontificia Universidad Católica
                de Valparaiso. Humberto is currently working as a front-end software developer for WriteWise under the supervision of Dr. Allende.</p>
              </div>      
            </div>
          </div>    
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">José Campusano</h5>
                <p class="card-text">José is an undergraduate student in computer engineering at the Pontificia Universidad Católica de
                Valparaiso. José is currently working as a front-end software developer for WriteWise under the supervision of Dr. Allende.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Francisco Escobar</h5>
                <p class="card-text">Francisco is an undergraduate student in computer engineering at the Pontificia Universidad Católica de
                Valparaiso. Francisco is currently working as a front-end software developer for WriteWise under the supervision of Dr. Allende.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Patricio Araya</h5>
                <p class="card-text">Patricio is an undergraduate student in computer engineering at the Pontificia Universidad Católica de
                Valparaiso. Patricio is currently working as a machine-learning software developer for WriteWise under the supervision of Dr. Allende.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Jorge Montiel</h5>
                <p class="card-text">Jorge is an undergraduate student in computer engineering at the Pontificia Universidad Católica de
                Valparaiso. Jorge is currently working as a machine-learning software developer for WriteWise under the supervision of Dr. Allende.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Jorge Ortiz</h5>
                <p class="card-text">Jorge is an undergraduate student in linguistics at the Potificia Universidad Catolica de Chile. Past-Intern.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Dominiquo Santistevan</h5>
                <p class="card-text">Dominiquo holds a BCSc from the Massachusetts Institute of Technology. Past-Intern through the MISTI program.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Amparo Galdames Fermandois</h5>
                <p class="card-text">Amparo holds a Bachelor of Language and Literature and is a Spanish Language and Communications
                instructor. Amparo is currently enrolled in the Master of Applied Linguistics Program at the Pontificia Universidad Católica de Valparaíso.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Grace Wilson Fredes</h5>
                <p class="card-text">Grace holds a Bachelor of English and is an English-Spanish Translator. Grace is currently enrolled in the 
                Master of Applied Linguistics Program at the Pontificia Universidad Católica de Valparaíso.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard lastCardRow">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Fernando Lillo Fuentes</h5>
                <p class="card-text">Fernando holds a Bachelor of Language and Literature and is a Spanish and Communications Instructor.
                Fernando is currently enrolled in the Master of Applied Linguistics Program at the Pontificia Universidad Católica de Valparaíso.</p>
              </div>      
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 otherResearchersCard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Pablo Fuenzalida González</h5>
                <p class="card-text">Pablo is an English instructor and is currently enrolled in the Master of Applied Linguistics Program at the Pontificia Universidad Católica de Valparaíso.</p>
              </div>      
            </div>
          </div>`);
  }); // others reseachers

  $('#collaborator').click(function() {
    $('#team').html('');
    $('#team_others').html('');
    $('#coreteam').css({'outline': 'none','color': '#FFFFFF'});
    $('#coreteam span').css('display','none');  
    $('#team_others').append(`<div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 collaboratorsCard" id="firstCardC"><div class="card">
              <div class="card-body"><h5 class="card-title">Hernán González, MD and PhD</h5><p class="card-text">Dr. González is an Associate Professor and Research Director for the Department of Head and Neck
              Surgery at the Pontificia Universidad Católica. Dr. González is also the Founder of GeneproDX, a biotech startup that develops new personalized-medicine assays for diagnosing and establishing the prognosis of
              solid tumors. Dr. González is currently an advisor for WriteWise.</p></div></div></div>

              <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 collaboratorsCard"><div class="card"><div class="card-body">
              <h5 class="card-title">Andrés Levineri</h5><p class="card-text">Andrés is a Computer Engineer and Graphic Designer with more than ten years of experience. He is
              currently the Graphic Content Developer for WriteWise.</p></div></div></div>`);
  });

  // imprimiendo informacion al hacer click en cada tarjeta
  $('#information').append(`<div class="textInfo"><pWe combine machine learning and computational linguistics within the framework of natural language
              processing, as applied to modelling and revising the writing process and scientific texts. This line of research applies the following methodologies: </p>
              <p>1. Novel approaches for representing textual data from scientific articles:</p>
              <ul><li>Word embeddings combined with deep/machine learning models for natural language processing tasks.</li>
              <li>Graph-based representations</li></ul>
              <p>2. Novel computational approaches for analyzing scientific articles, with specific investigative focus on:</p>
              <ul><li>Discourse Segmentation</li><li>Automatic Punctuation Analysis</li><li>Rule-based Text Mining</li><li>Topic Modelling</li><li>Readability/Coherence Classification</li></ul>
              <p>This research line is led by Prof. Héctor Allende. The team members involved in this R+D+i area include:</p><ul><li>Prof. Héctor Allende</li>
              <li>Dr. Eduardo Fuentes</li><li>Dr. Wenceslao Palma</li><li>Dr. Javier Vera</li><li>Dr.(c) Juan Pavez</li><li>Sebastián Rodríguez, BCSc</li>
              <li>Humberto Gonzales (BCSs undergraduate)</li><li>Jose Campusano (BCSs undergraduate)</li><li>Francisco Escobar (BCSs undergraduate)</li>
              <li>Patricio Araya (BCSs undergraduate)</li><li>Jorge Montiel (BCSs undergraduate)</li></ul></div>`);
  $('.linguistic').addClass('activeBtn');
  $('#linguistic').click(function() {
    $('#information').html('');
    $('#information').append(`<div class="textInfo"><pWe combine machine learning and computational linguistics within the framework of natural language
              processing, as applied to modelling and revising the writing process and scientific texts. This line of research applies the following methodologies: </p>
              <p>1. Novel approaches for representing textual data from scientific articles:</p>
              <ul><li>Word embeddings combined with deep/machine learning models for natural language processing tasks.</li>
              <li>Graph-based representations</li></ul>
              <p>2. Novel computational approaches for analyzing scientific articles, with specific investigative focus on:</p>
              <ul><li>Discourse Segmentation</li><li>Automatic Punctuation Analysis</li><li>Rule-based Text Mining</li><li>Topic Modelling</li><li>Readability/Coherence Classification</li></ul>
              <p>This research line is led by Prof. Héctor Allende. The team members involved in this R+D+i area include:</p><ul><li>Prof. Héctor Allende</li>
              <li>Dr. Eduardo Fuentes</li><li>Dr. Wenceslao Palma</li><li>Dr. Javier Vera</li><li>Dr.(c) Juan Pavez</li><li>Sebastián Rodríguez, BCSc</li>
              <li>Humberto Gonzales (BCSs undergraduate)</li><li>Jose Campusano (BCSs undergraduate)</li><li>Francisco Escobar (BCSs undergraduate)</li>
              <li>Patricio Araya (BCSs undergraduate)</li><li>Jorge Montiel (BCSs undergraduate)</li></ul></div>`);
  $('.linguistic').addClass('activeBtn');
    $('.linguistic').addClass('activeBtn');
    $('.bigdata').removeClass('activeBtn');
    $('.deepLearning').removeClass('activeBtn');
  });
  $('#bigdata').click(function() {
    $('#information').html('');
    $('#information').append(`<div class="textInfo"><p>We use functional and applied discursive frameworks, combined with corpus analysis, computational
              linguistics, and natural language processing approaches, to empirically determine the discursive and linguistics norms and requirements of academic and 
              scientific texts. This line of research seeks to identify and comprehend the:</p>
              <p>1. Communicative purposes and lexical-grammar features that constitute written texts in distinct scientific disciplines.</p>
              <p>2. Textual and discursive foundations of academic and scientific texts.</p>
              <p>This research line is led by Prof. René Venegas. The team members involved in this R+D+i area include:</p>
              <ul><li>Dr. Eduardo Fuentes</li><li>Dr. Barbara Kremeyer</li><li>Dr.(c) Sofía Zamora</li><li>Ashley VanCott, BA</li>
              <li>Grace Wilson, BA</li><li>Amparo Galdames, BA</li><li>Fernando Lillo, BA</li><li>Pablo Fuenzalida, BA</li></ul> </div>`)
    $('.linguistic').removeClass('activeBtn');
    $('.deepLearning').removeClass('activeBtn');
    $('.bigdata').addClass('activeBtn');
  });
  $('#deepLearning').click(function() {
    $('#information').html('');
    $('#information').append(`<div class="textInfo"><p>We use scientometrics combined with natural language processing to predict the impact and recognition
              of scientific publications.</p>
              <p>The team members involved in this R+D+i area include:</p><ul><li>Dr. Eduardo Fuentes</li><li>Juan Pablo Bascur, MSc</li></ul>
              </div>`)
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