<template>
  <div class="home">
    <div class="latar">
      <div class="container">
        <div class="col-md-6 col-sm-6">
          <div class="head-text-main">
            <h3>Kembangkan Bisnis anda bersama<br><strong>Kreditpro</strong> di setiap langkah</h3>
            <h4>Proses pinjaman bisnis yang flexible sesuai kebutuhan<br>anda, Pinjaman <a><router-link to="/invoice">Invoice Financing</router-link></a>
              dan <a><router-link to="/working">Working Capital</router-link></a><br>dengan suku bunga yang bersaing </h4>
            <p>*) Biaya terhitung berdasarkan bunga dan tenor. setiap orang mungkin berbeda, tergantung skor kredit..</p>
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
          <div class="calculator">
            <ul class="nav nav-tabs">
              <li class="active"><a href="#invoice" data-toggle="tab">Invoice Financing</a></li>
              <li><a href="#work" data-toggle="tab">Working Capital</a></li>
            </ul>
            <div id="myTabContent" class="tab-content">
              <div class="tab-pane active in" id="invoice">
                <form id="tab">
                  <label>Nilai Pinjaman</label>
                  <input type="text" name="nilai" id="nilai" placeholder="50.000.000" class="form-control spa" onkeyup="angsuran(this.value)">
                  <p>Max : IDR 200.000.000</p>
                  <label> Bunga (p.a)</label>
                  <select name="bunga" id="bunga" class="form-control" onkeyup="$(this).trigger('change')" onchange="angsuran(this.value)">
                    <option value="0.15"> 15%</option>
                    <option value="0.2"> 20%</option>
                    <option value="0.25"> 25%</option>
                    <option value="0.3"> 30%</option>
                  </select>
                  <label>Tenor</label>
                  <select name="tenor" id="tenor" class="form-control" onkeyup="$(this).trigger('change')" onchange="angsuran(this.value)">
                    <option value="6"> 6 Bulan</option>
                    <option value="5"> 5 Bulan</option>
                    <option value="4"> 4 Bulan</option>
                    <option value="3"> 3 Bulan</option>
                    <option value="2"> 2 Bulan</option>
                    <option value="1"> 1 Bulan</option>
                  </select>
                  <p class="perkiraan">Perkiraan biaya yang harus di bayarkan perbulan :</p>
                  <h3>Rp. <span id="total">0 *</span></h3>
                  <div class="tombol">
                    <a href="https://portal.kreditpro.id/request/loan?partner=POFI" target="_blank" type="submit" class="btn btn-ajukan">Ajukan Pinjaman</a>
                  </div>
                </form>
              </div>
              <div class="tab-pane fade" id="work">
                <form id="tab2">
                  <label>Nilai Pinjaman</label>
                  <input type="text" name="pinjam" id="pinjam" placeholder="50.000.000" class="form-control spa" onkeyup="work(this.value)">
                  <p>Max : IDR 200.000.000</p>
                  <label>Tenor</label>
                  <input type="text" placeholder="12 Bulan" class="form-control" readonly>
                  <label> Bunga (p.a)</label>
                  <select name="bng" id="bng" class="form-control" onkeyup="$(this).trigger('change')" onchange="work(this.value)">
                    <option value="0.18"> 18%</option>
                    <option value="0.23"> 23%</option>
                    <option value="0.28"> 28%</option>
                    <option value="0.33"> 33%</option>
                    <option value="0.36"> 36%</option>
                  </select>
                  <p class="perkiraan">Perkiraan biaya yang harus di bayarkan perbulan :</p>
                  <h3>Rp. <span id="works">0 *</span></h3>
                  <div class="tombol">
                    <a href="https://portal.kreditpro.id/request/loan?partner=WORKCAP" target="_blank" type="submit" class="btn btn-ajukan">Ajukan Pinjaman</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  ------------------------------------------------ Proses -------------------------------------------------------->
    <div class="row">
      <div class="bg-proses">
        <div class="col-md-4 col-sm-4 proses">
          <div class="icon">
            <img class="ico" src="assets/images/waiting.svg"/>
          </div>
          <h5> Proses cepat dan mudah</h5>
        </div>
        <div class="col-md-4 col-sm-4 proses1">
          <div class="icon">
            <img class="icot" src="assets/images/bunga.svg"/>
          </div>
          <h5> Bunga yang bersahabat</h5>
        </div>
        <div class="col-md-4 col-sm-4 proses1">
          <div class="icon">
            <img class="icoo" src="assets/images/jaminan.svg"/>
          </div>
          <h5> Tidak perlu jaminan</h5>
        </div>
      </div>
    </div>
    <div class="about">
      <div class="row">
        <div class="col-md-6 col-sm-6">
        </div>
        <div class="col-md-6 col-sm-6">
          <div class="txt-about">
            <h3> Apa itu <a href="#"> Kreditpro ?</a> </h3>
            <p> Perusahaan Fintech lending Indonesia, untuk memberikan dan mengajukan pinjaman secara Peer-To-Peer Lending (P2PL),
              yaitu proses yang menghubungkan investor dengan orang-orang yang membutuhkan pinjaman melalui platform kreditpro yang inovatif dan aman,
              tanpa perantara bank atau lembaga finansial lain.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="testimoni">
      <div class="container text-center">
        <h1>Testimonial</h1>
        <p class="judul"> Lihat apa kata mereka mengenai pengalaman menggunakan kreditpro</p>
        <div class="row ">
          <div class="col-sm-4">
            <div class="testimon">
              <p> Selalu ada solusi untuk segala hal, termasuk keterbatasan modal usaha.
              </p>
              <b class="text-center">Ratu Anne.</b>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="testimon">
              <p> Dana kemitraaan yang sangat membantu, perhitungan mudah, dan pencairan dana tepat waktu
              </p>
              <b class="text-center">Cynthia Cathering.</b>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="testimon">
              <p> Sebagai kartini masa kini, banyak wanita yang memulai dan mengembangkan bisnis mereka sebagai bentuk kemandirian.
              </p>
              <b class="text-center">Ibu Arimbi. IWAPI</b>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="video">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="txt-video">
              <h2> Tentang Kami</h2>
              <p> Kenapa anda harus memilih KreditPro</p>
              <div class="img-play">
                <img src="assets/images/play.svg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="testimoni">
      <div class="container">
        <div class="row ">
          <div class="col-sm-3">
            <div class="terdaftar">
              <p>Terdaftar dan Diawasi oleh :</p>
              <img class="img-responsive" src="assets/images/logo-ojk.png">
            </div>
          </div>
          <div class="col-sm-9">
            <div class="testi">
              <p> Perhatian :</p>
              <p>1. Layanan pinjam meminjam melaluli teknologi informasi (online) merupakan kesepakatan dan keputusan antara Pemberi Pinjaman dengan Penerima Pinjaman, sehingga segala risiko sepenuhnya ditanggung oleh masing-masing pihak.</p>
              <p>2. Risiko kredit atau gagal bayar sepenuhnya ditanggung oleh Pendana atau Pemberi Pinjaman. Tidak ada lembaga atau otoritas negara yang bertanggung jawab atas risiko gagal bayar yang terjadi.</p>
              <p>3. Pendana atau Pemberi Pinjaman yang belum memiliki pengetahuan mengenai pinjam-meminjam yang memadai disarankan untuk menggunakan layanan ini dengan prinsip kehati-hatian.</p>
              <p>4. Penerima Pinjaman wajib mempertimbangkan tingkat suku bunga pinjaman berikut biaya-biaya lain sesuai dengan kemampuan dalam melunasi pinjaman.</p>
              <p>5. Setiap kecurangan yang terjadi atau dilakukan secara sengaja akan tercatat secara digital di dunia maya dan berpotensi dapat diketahui masyarakat luas.</p>
              <p>6. Masyarakat pengguna layanan ini disarankan membaca dan memahami seluruh informasi yang diberikan sebelum membuat keputusan untuk bergabung menjadi Pemberi atau Penerima Pinjaman.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  mounted() {
      let script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('language', 'javascript');
      (function(){
          // Set up the number formatting.
          ('#nilai').number( true, 2 );
          // Get the value of the number for the demo.
          ('#nilai').on('keyup',function(){
              ('#nilai').val();
          });
      });
//      (function () {
//          ('#pinjam').number(true, 2);
//          ('#pinjam').on('keyup', function () {
//              ('#pinjam').val();
//          })
//      })
//      (function removeCommas(str) {
//          while (str.search(",") >= 0) {
//              str = (str + "").replace(',', '');
//          }
//          return str;
//      })
//      (function angsuran() {
//          var Nilai = document.getElementById('nilai').value;
//          var Tenor = document.getElementById('tenor').value;
//          var Bunga = document.getElementById('bunga').value;
//
//
//          var Max = removeCommas(Nilai) * 0.9;
//          var Hasil = ((((parseInt(Max) * parseFloat(Bunga)) / 12) * parseInt(Tenor)) + parseInt(Max)) / parseInt(Tenor);
//          if (!isNaN(Hasil))
//          {
//              document.getElementById('total').textContent = addCommas(parseInt((Hasil)));
//          } else
//          {
//              document.getElementById('total').textContent = 0;
//          }
//      })
//      function work() {
//          var Pinjem = document.getElementById('pinjam').value;
//          var Bunga = document.getElementById('bng').value;
//
//          var Pokok = (removeCommas(Pinjem) * parseFloat(Bunga)) / 12;
//          var Bng =  (parseFloat(Bunga) / 12) + 1;
//          var Pangkat = Math.pow(Bng,12);
//          var Bungas = 1 - (1 / (Pangkat));
//          var Cicil = (1 / parseFloat(Bungas)) * parseFloat(Pokok) ;
//          if (!isNaN(Cicil))
//          {
//              document.getElementById('works').textContent = addCommas(parseInt(Cicil));
//          } else {
//              document.getElementById('works').textContent = 0;
//          }
//      }
//      function addCommas(nStr) {
//          nStr += '';
//          var x = nStr.split('.');
//          var x1 = x[0];
//          var x2 = x.length > 1 ? '.' + x[1] : '';
//          var rgx = /(\d+)(\d{3})/;
//          while (rgx.test(x1)) {
//              x1 = x1.replace(rgx, '$1' + '.' + '$2');
//          }
//          return x1 + x2;
//      }
  }
}
</script>
