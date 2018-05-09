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
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="javierVera.html">View Profile</a></button></div></div><div class="card-body">
              <h3 class="card-text">Javier Vera, Ph.D.</h3><p class="card-text">Natural Language Processing Researcher</p></div></div>      
              <div class="card col-10 col-sm-10 col-md-3 col-lg-2 offset-lg-3 col-xl-2 offset-xl-3" id="fourthCard">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/juan_bascur.jpg" alt="Card image cap">
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="juanBascur.html">View Profile</a></button></div></div><div class="card-body"><h3 class="card-text">Juan Bascur, B.Sc., M.Sc.</h3>
              <p class="card-text">Machine Learning and Scientometrics Researcher</p></div></div><div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/francisca_schalchli.jpg" alt="Card image cap">
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <button id="profile"><a href="franciscaSchalchli.html">View Profile</a></button></div></div><div class="card-body"><h3 class="card-text">Francisca Schalchli, B.Eng.</h3>
              <p class="card-text">Project Manager</p></div></div><div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
              <div class="profilePhoto"><img class="card-img-top" src="assets/img/ourRD/crishtian_gomez.jpg" alt="Card image cap">
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><a href="mailto:contact@writewise.cl">contact@writewise.cl</a></div>
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
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
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
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">              
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
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
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
              <div class="wwContact col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
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
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="leadResearchers.html">View Profile</a></button>
              </div>
            </div>            
            <div class="card-body">
              <h3 class="card-text">René Venegas, PhD</h3>
            </div>
          </div>
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
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
          <div class="card col-10 col-sm-10 col-md-3 col-lg-2 col-xl-2">
            <div class="profilePhoto">
              <img class="card-img-top" src="assets/img/ourRD/WENCESLAO_PALMA.jpg" alt="Card image cap">
              <div class="btnProfile col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <button id="profile"><a href="leadResearchers.html">View Profile</a></button>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-text">Wenceslao Palma, PhD</h3>
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
    $('#team_others').append(`<div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 collaboratorsCard"><div class="card">
              <div class="card-body"><h5 class="card-title">Hernán González, MD and PhD</h5><p class="card-text">Dr. González is an Associate Professor and Research Director for the Department of Head and Neck
              Surgery at the Pontificia Universidad Católica. Dr. González is also the Founder of GeneproDX, a biotech startup that develops new personalized-medicine assays for diagnosing and establishing the prognosis of
              solid tumors. Dr. González is currently an advisor for WriteWise.</p></div>

              </div></div><div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 collaboratorsCard">
              <div class="card"><div class="card-body"><h5 class="card-title">Rodrigo Rojas</h5><p class="card-text">Mr. Rodrigo Rojas completed his studies as an Industrial Engineer 
              at the Universidad de Chile. Mr. Rojas is the founder and CEO of TimeHunter and has more than 20 years of experience in sales, marketing,
              and CRM. Mr. Rojas is currently an ImagineLab Mentor for WriteWise.</p>
              </div></div></div>

              <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 collaboratorsCard"><div class="card"><div class="card-body">
              <h5 class="card-title">Andrés Levineri</h5><p class="card-text">Andrés is a Computer Engineer and Graphic Designer with more than ten years of experience. He is
              currently the Graphic Content Developer for WriteWise.</p></div></div></div>

              <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 collaboratorsCard">
              <div class="card"><div class="card-body"><h5 class="card-title">Oscar Lynch</h5><p class="card-text">Mr. Oscar Lynch is a Lawyer, having completed his degree at the Universidad de Concepcion. Mr. Lynch
              has more than ten years of experience as an Accounting and Financial Lawyer. Mr. Lynch is currently serving as a Legal Advisor for WriteWise.</p>
              </div></div></div>

              <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 collaboratorsCard"><div class="card"><div class="card-body">
              <h5 class="card-title">Miguel Pavez</h5><p class="card-text">Mr. Miguel Pavez holds a Master’s in Finance and Master’s in Accounting. Mr. Pavez has worked as a
              corporate accountant, finance and administration manager, and as an independent consultant. Mr.
              Pavez is currently serving as the Financial Accountant for WriteWise.</p></div></div></div>

              <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 collaboratorsCard"><div class="card">
              <div class="card-body"><h5 class="card-title">Kendrick Lanyi-Grünfeldt</h5><p class="card-text">Mr. Kendrik Lanyi-Grünfeldt is a Commercial Engineer, having completed his degree at the Universidad
              de Chile, and holds a Master’s in Strategic Management from the Stern School of Business at New York University. Mr. Lanyi-Grünfeldt has over 40 years of experience in business strategy, including business
              models, growth, planning, management, and mergers and acquisitions. Mr. Lanyi-Grünfeldt has worked in executive-level management positions at various prestigious businesses, including Bonafide, Nestlé,
              and Carter Holt Harvey, among others. Mr. Lanyi-Grünfeldt is currently an ImagineLab Mentor for WriteWise.</p></div></div></div>`);
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
              <li>Patricio Araya (BCSs undergraduate)</li><li>Jorge Montiel (BCSs undergraduate)</li></ul><div id="LSTM">
              <img src="assets/img/ourRD/LSTM.png" alt="LSTM">
              <p><strong>Figure 1.</strong> The WriteWise long short-term memory (LSTM) unit for constructing recurrent neuronal networks for scientific article analyses. These units not only have inputs () and outputs (), but can also have a shared status () among all units within the same layer. This point, together with the processing of LSTM gates, provides each unit with short-term memory, which is crucial for calculating outputs ().</p>
            </div>
            <div id="arqui">
              <img src="assets/img/ourRD/Arqui.png" alt="deep-learning_architecture">
              <p><strong>Figure 2.</strong> The WriteWise deep-learning architecture applied to natural language processing tasks for scientific article analyses. The architecture is separated into three layers: (1) Input Layer: uses word embeddings and trait vectors to generate an input sequence; (2) Hidden Layer: composed of a bidirectional long short-term memory (LSTM) sub-layer, followed by a unidirectional network of LSTM units; and (3) Output Layer: composed of a few neurons that indicate the probability of a given sequence of words (Input Layer) being followed by a punctuation mark.</p>
            </div>
            <div id="gow">
              <img src="assets/img/ourRD/graph_word.png" alt="Graph_of_words">
              <p><strong>Figure 3.</strong> Graph of words (GoW) for a scientific article. Our team has developed new algorithms and codes based on graph-theory representations of text that capture term dependencies and ordering. Shown is the k-core decomposition of a GoW, which defines hierarchy levels of increasing cohesiveness. The main core retains the GoW members with the highest levels of importance, which can work as text keywords. This figure and its contents have been simplified due to copyright.</p>
            </div></div>`);
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
              <li>Patricio Araya (BCSs undergraduate)</li><li>Jorge Montiel (BCSs undergraduate)</li></ul><div id="LSTM">
              <img src="assets/img/ourRD/LSTM.png" alt="LSTM">
              <p><strong>Figure 1.</strong> The WriteWise long short-term memory (LSTM) unit for constructing recurrent neuronal networks for scientific article analyses. These units not only have inputs () and outputs (), but can also have a shared status () among all units within the same layer. This point, together with the processing of LSTM gates, provides each unit with short-term memory, which is crucial for calculating outputs ().</p>
            </div>
            <div id="arqui">
              <img src="assets/img/ourRD/Arqui.png" alt="deep-learning_architecture">
              <p><strong>Figure 2.</strong> The WriteWise deep-learning architecture applied to natural language processing tasks for scientific article analyses. The architecture is separated into three layers: (1) Input Layer: uses word embeddings and trait vectors to generate an input sequence; (2) Hidden Layer: composed of a bidirectional long short-term memory (LSTM) sub-layer, followed by a unidirectional network of LSTM units; and (3) Output Layer: composed of a few neurons that indicate the probability of a given sequence of words (Input Layer) being followed by a punctuation mark.</p>
            </div>
            <div id="gow">
              <img src="assets/img/ourRD/graph_word.png" alt="Graph_of_words">
              <p><strong>Figure. 3.</strong> Graph of words (GoW) for a scientific article. Our team has developed new algorithms and codes based on graph-theory representations of text that capture term dependencies and ordering. Shown is the k-core decomposition of a GoW, which defines hierarchy levels of increasing cohesiveness. The main core retains the GoW members with the highest levels of importance, which can work as text keywords. This figure and its contents have been simplified due to copyright.</p>
            </div></div>`);
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
              <li>Grace Wilson, BA</li><li>Amparo Galdames, BA</li><li>Fernando Lillo, BA</li><li>Pablo Fuenzalida, BA</li></ul> <div id="sistEtiquetado">
                <img src="assets/img/ourRD/sistema_etiqueado.png" alt="">
                <p><strong>Figure 1.</strong> Academic discourse tagging system. Our group has developed a new tagging system for sentences in scientific articles, where each sentence has a function definable through unique subsets of words. This figure and its contents have been simplified due to copyright.</p>
              </div>
              <div id="modeloDiscursivo">
                <img src="assets/img/ourRD/Modelo_discursivo.png" alt="">
                <p><strong>Figure 2.</strong> Academic discourse model. Our group has developed a novel model for writing cientific articles – each section is subdivided by N number of subsections, with each subsection having N number of linguistic functions, represented by N number of sentences, and as composed by N number and combination of words. This figure and its contents have been simplified due to copyright.</p>
              </div></div>`)
    $('.linguistic').removeClass('activeBtn');
    $('.deepLearning').removeClass('activeBtn');
    $('.bigdata').addClass('activeBtn');
  });
  $('#deepLearning').click(function() {
    $('#information').html('');
    $('#information').append(`<div class="textInfo"><p>We use scientometrics combined with natural language processing to predict the impact and recognition
              of scientific publications.</p>
              <p>The team members involved in this R+D+i area include:</p><ul><li>Dr. Eduardo Fuentes</li><li>Juan Pablo Bascur, MSc</li></ul>
              <div id="networkNodes"><img src="assets/img/ourRD/natural_language.png" alt="networkNodes">
                <p><strong>Figure 1.</strong> Similarity network between an unpublished paper (query) and two academic journals. Network nodes indicate the similarity of the query paper with manuscripts from the selected journals, where closer nodes represent greater similarity (i.e., more neighbor nodes). This similarity network is based on a novel “journal thumbprints” algorithm, which allows comparisons and similarity predictions between query papers and target journals. With our new method, we can detect N number of words, sentences, and paragraphs, among other traits, and plot these features against different journals, considering factors such as quartiles (Qs), citations, etc. This figure and its contents have been simplified due to copyright.</p>
              </div></div>`)
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