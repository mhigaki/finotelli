$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / Div');
        comp_comp1.code = '<section id="home" data-pg-collapsed>\
  <div class="pg-higatech-nav10" data-pg-collapsed> \
    <nav class="top" id="nav-top" data-pg-collapsed> \
      <nav class="navbar navbar-expand-md d-none d-lg-block"> \
        <div class="container"> \
          <div class="collapse navbar-collapse" id="collapsibleNavbar10"> \
            <ul class="navbar-nav"> \
              <li class="nav-item"> \
                <a class="nav-link" href="https://www.facebook.com/finotelliexpress/"><span class="social"><i class="fa fa-facebook" aria-hidden="true"></i></span></a> \
              </li>               \
              <li class="nav-item"> \
                <a class="nav-link" href="https://twitter.com/733e69049bae49b"><span class="social"><i class="fa fa-twitter" aria-hidden="true"></i></span></a> \
              </li>               \
              <li class="nav-item"> \
                <a class="nav-link" href="https://instagram.com/rogeriofinotelli"><span class="social"><i class="fa fa-instagram" aria-hidden="true"></i></span></a> \
              </li>               \
            </ul>             \
            <ul class="navbar-nav ml-auto"> \
              <li class="nav-item"> \
                <a class="nav-link" href="#"><span class="social"><i class="fa fa-map-marker" aria-hidden="true"></i> R. Dr. Pinto Nazário, 228, Jardim Vergueiro, São Paulo</span></a> \
              </li>               \
              <li class="nav-item"> \
                <a class="nav-link" href="mailto:contato@finotelliexpress.com.br"><span class="social"><i class="fa fa-envelope" aria-hidden="true"></i> contato@finotelliexpress.com.br</span></a> \
              </li>               \
              <li class="nav-item"> \
                <a class="nav-link" href="callto:+551123382969"><span class="social"><i class="fa fa-phone" aria-hidden="true"></i> +55 11 2338-2969</span></a> \
              </li>               \
            </ul>             \
          </div>           \
        </div>         \
      </nav>\
    </nav>     \
    <nav class="main" id="nav-main"> \
      <div class="container"> \
        <nav class="navbar navbar-expand-lg sticky-top"> \
          <a class="navbar-brand" href="#">\
            <img class="img-fluid" src="images/logo.png" width="160px"/>\
          </a>           \
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbars102"> \
            <span class="navbar-toggler-icon"></span> \
          </button>           \
          <div class="collapse navbar-collapse" id="collapsibleNavbars102"> \
            <ul class="navbar-nav ml-auto"> \
              <li class="nav-item active"> \
                <a class="nav-link" href="#">HOME</a> \
              </li>               \
              <li class="nav-item"> \
                <a class="nav-link" href="#about">EMPRESA</a> \
              </li>               \
              <li class="nav-item"> \
                <a class="nav-link" href="#service">SERVIÇOS</a> \
              </li>               \
              <li class="nav-item"> \
                <a class="nav-link" href="#empresas">PLANO EMPRESAS</a> \
              </li>               \
              <li class="nav-item d-none" data-pg-hidden> \
                <a class="nav-link" href="#">BLOG</a> \
              </li>               \
              <li class="nav-item d-none" data-pg-hidden> \
                <a class="nav-link" href="#">CERTS</a> \
              </li>               \
              <li class="nav-item"> \
                <a class="nav-link" href="#contact">CONTATO</a> \
              </li>               \
            </ul>             \
          </div>           \
        </nav>         \
      </div>\
    </nav>     \
  </div>   \
</section>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1]);

        f.addLibSection(section);
   });
});