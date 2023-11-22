<?php
session_start(); 

?>

<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Halaman Rekap Penilaian QCC 2021</title>
  <script src="https://s.codepen.io/assets/libs/modernizr.js" type="text/javascript"></script>


  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

  
      <link rel="stylesheet" href="css/style.css">

  
</head>

<body>
  <h1>List Rekap Hasil Penilaian Juri QCC Logitik 2021</h1>
  <br>

  Search By :

  <br>

<div style="padding-top: 30px; padding-bottom: 30px;">


  <label>Jenis Penilaian</label>
  <select id="by_penilaian" name="jenis_penilaian" onchange="penilaian()">
    <option name="jenis_penilaian" value = "-">-</option>
    <option <?php if($_SESSION['status'] == "Juri Lapangan" || $_SESSION['status'] == "admin"){}else{echo 'hidden';}?> id="jenis_pen_lap" name="jenis_penilaian" value="data_nilai" >LAPANGAN</option>
    <option <?php if($_SESSION['status'] == "Juri Presentasi" || $_SESSION['status'] == "admin"){}else{echo 'hidden';}?> id="jenis_pen_pre" name="jenis_penilaian" value="data_nilai_presentasi">PRESENTASI</option>
    <option <?php if($_SESSION['status'] == "admin"){}else{echo 'hidden';}?>  id="jenis_pen_tot" name="jenis_penilaian" value="nilai_total">REKAP NILAI TOTAL</option>
  </select>

  <br><br><br>
  
  <label>Juri</label>
  <select id="by_juri" name="nama_juri" style="padding-right: 50px;" onchange="kategori()">
  </select>

  <label>Circle</label>
  <select id="nama_circel" name="nama_circel" onchange="kategori()">
  </select>

</div>

<div id = "_tabel1" hidden>

<h3>Tabel Rekap Penilaian</h3>
<table class="rwd-table" style="width: 100%;" id="tabel_penilaian">
  <tr id="header_1">
  </tr>

  <tr id = "list_kirteria">
  </tr>

  <tr id="sort" >
  </tr>

  <tbody id="isi_tabel">
  </tbody>

</table>

</div>

<div id = "_tabel2" hidden>

<div id="tabel_lapangan">

<h3>Tabel Rekap Penilaian Lapangan</h3>
<table class="rwd-table" style="width: 100%;" id="nilai_lapangan">
  <tr id="header_2">
  </tr>

  <tr id="sort2" >
  </tr>

  <tbody id="isi_tabel2">
  </tbody>

</table>

</div>

<div id="tabel_presentasi" >

<h3>Tabel Rekap Penilaian Presentasi</h3>
<table class="rwd-table" style="width: 100%;" id="nilai_presentasi">
  <tr id="header_3">
  </tr>

  <tr id="sort3" >
  </tr>

  <tbody id="isi_tabel3">
  </tbody>

</table>

</div>

<div id="tabel_total" >

<h3>Tabel Rekap Penilaian Total</h3>
<table class="rwd-table" style="width: 100%;" id="nilai_tot">
  <tr id="header_4">
  </tr>

  <tr id="formulasi">
  </tr>

    <tr id="sort4" >
  </tr>

  <tbody id="isi_tabel4">
  </tbody>

</table>

</div>

</div>

<footer>
  
</footer>

  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

    <script src="js/index.js">
      
  </script>

<script src="../responsive/js/ganti_kategori.js"></script>
<script src="../responsive/js/ganti_penilaian.js"></script>
<script src="../responsive/js/sort_table.js"></script>

</body>
</html>
