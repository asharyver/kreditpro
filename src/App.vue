<template>
  <div id="app">
    <div class="yamm navbar basic static top">
      <div class="navbar-header">
        <div class="container">
          <div class="basic-wrapper">
            <button data-target="#navbar-collapse-02" data-toggle="collapse" class="navbar-toggle" type="button">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="btn responsive-menu pull-right" data-toggle="collapse" data-target=".navbar-collapse"><i class='icon-menu-1'></i></a>
            <a class="navbar-brand"><router-link to="/"><img src="assets/images/group@3x.png" class="logo-kas"/></router-link></a>
            <img src="assets/images/logo-ojk.png" class="ojk">
            <div id="navbar-collapse-02" class="collapse navbar-collapse pull-right">
              <ul class="nav navbar-nav">
                <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown"><router-link to="#">Pinjaman Bisnis</router-link></a>
                  <ul class="dropdown-menu">
                    <li><router-link to="/invoice">Invoice Financing</router-link></li>
                    <li><router-link to="/working">Working Capital</router-link></li>
                  </ul>
                </li>
                <li><router-link to="/Komunitas">Dana Komunitas</router-link></li>
                <li><router-link to="/Pendana">Pendana</router-link></li>
                <li><a href="https://portal.kreditpro.id/login" target="_blank">Log In</a></li>
                <li><a href="https://portal.kreditpro.id/registration/choose" target="_blank">Sign Up</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
    <div class="contact">
      <div class="container">
        <div class="col-sm-6 col-md-6">
          <img class="img-responsive" src="assets/images/log.svg">
          <div class="fo"><p>KreditPro Indonesia merupakan perusahan<br>finansial teknologi dibawah PT Digiasia</p></div>
        </div>
        <div class="col-sm-6 col-md-6">
          <div class="kiri">
            <p> Untuk informasi lebih lanjut hubungi kami.</p>
            <a href="#" target="_blank"><i class="sos fa fa-2x fa-facebook-square"></i></a>
            <a href="#" target="_blank"><i class="sos fa fa-2x fa-instagram"></i></a>
            <a href="#" target="_blank"><i class="sos fa fa-2x fa-twitter-square"></i></a>
            <p>Prudential Center - Kota Kasablanka, Lt.5 Unit F-G <br>
              Jl. Casablanca Raya Kav. 88 Jakarta 12870 <br>
              085813500805 <br>
              support@kreditpro.id
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <footer class="container">
        <p class="pull-left"> @KreditPro <a href="#">www.kreditpro.id</a></p>
        <ul class="pull-right">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/">Blog</router-link></li>
          <li><router-link to="/">Site Map</router-link></li>
        </ul>
      </footer>
    </div>
  </div>
</template>