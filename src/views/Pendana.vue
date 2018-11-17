<template>
 <div class="pendana">
     <div class="dana">
         <div class="container">
             <div class="col-md-12 col-sm-12">
                 <div class="head-text">
                     <h3>Buat uang anda bekerja untuk anda</h3>
                     <h4>Dengan meminjamkan uang anda di KreditPro, anda dapat<br> membantu banyak orang memulai bisnisnya</h4>
                 </div>
             </div>
         </div>
     </div>
     <div class="type-dana">
         <h2 class="text-center"> Anda dapat memberikan pendanaan ke berbagai tipe pinjaman</h2>
         <div class="row">
             <div class="col-md-6 col-sm-6 tip">
                 <div class="tip-kiri"><a><router-link to="/invoice"><img class="tipe" src="assets/images/bg/invoice@2x.jpg"/></router-link></a></div>
             </div>
             <div class="col-md-6 col-sm-6 tip">
                 <div class="tip-kanan"><a><router-link to="/working"><img class="tipe" src="assets/images/bg/working@2x.jpg"/></router-link></a></div>
             </div>
         </div>
     </div>
     <div class="type-pinjaman">
         <div class="container">
             <div class="bg-proses">
                 <div class="col-md-6 col-sm-6">
                     <div class="bag-type"><img src="assets/images/group-9.svg"/></div>
                 </div>
                 <div class="col-md-6 col-sm-6 ">
                     <div class="bag-kanan">
                         <h3> Persyaratan</h3>
                         <p><span><span class="oval">1</span></span><span>Daftarkan diri.</span></p>
                         <p><span><span class="oval">2</span></span><span>Masukan deposit.</span></p>
                         <p><span><span class="oval">3</span></span><span>Pilih pinjaman yang tersedia.</span></p>
                         <p><span><span class="oval">4</span></span><span>Dapatkan pengembalian dengan return yang menarik.</span></p>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     <div class="foot-invoice">
         <div class="container">
             <div class="row ">
                 <div class="col-md-12 col-sm-12">
                     <h2> Kembangkan uangmu sekarang
                     </h2>
                     <div class="tombol">
                         <a href="https://portal.kreditpro.id/registration/lender" target="_blank" class="btn btn-ajukan">Ajukan Pendana Sekarang</a>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
</template>
<script>
 export default {
   name: 'pendana'
 }
</script>