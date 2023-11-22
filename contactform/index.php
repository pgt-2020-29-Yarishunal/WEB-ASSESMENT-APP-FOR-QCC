<?php
session_start();
if(isset($_SESSION['username'])){

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>FORM PENILAIAN LAPANGAN</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="../contactform/images/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="../contactform/vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="../contactform/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="../contactform/fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="../contactform/vendor/animate/animate.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="../contactform/vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="../contactform/vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="../contactform/vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="../contactform/vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="../contactform/css/util.css">
	<link rel="stylesheet" type="text/css" href="../contactform/css/main.css">
<!--===============================================================================================-->

</head>
<body>


	<div class="container-contact100">
		<div class="wrap-contact100">
				<span class="contact100-form-title">
					FORM PENILAIAN LAPANGAN
				</span>
			
				<div class="wrap-input100 validate-input">
					<label>
						Nama Juri : 
					</label>
						<input type="text" id="nama_juri" value="<?php echo $_SESSION['nama_juri']; ?>">
				</div>
				<div class="wrap-input100 validate-input">
					<label>
						NIP : 
					</label>
						<input type="text" id="nip_juri" value="<?php echo $_SESSION['username']; ?>">
				</div>
				<div class="wrap-input100 validate-input">
					<label>
						Nama Circle : 
					</label>
					<select id="nama_circel" name="nama_circel" onchange="recheck()">
						<option name="nama_circel" value = "-">-</option>
						<option name="nama_circel" value = "BensAe">BensAe (APW)</option>
						<option name="nama_circel" value = "Pasti" >Pasti (APW)</option>
						<option name="nama_circel" value = "Enviro" >Enviro (BPW)</option>
						<option name="nama_circel" value = "Manise" >Manise (BPW)</option>
						<option name="nama_circel" value = "Maxio" >Maxio (BPW)</option>
						<option name="nama_circel" value = "Maxtour" >Maxtour (DPW)</option>
						<option name="nama_circel" value = "Satgas1" >Satgas1 (DPW)</option>
						<option name="nama_circel" value = "Semongko" >Semongko (RPW)</option>
						<option name="nama_circel" value = "Sosis" >Sosis (RPW)</option>
						<option name="nama_circel" value = "Masker" >Masker (JMW)</option>
						<option name="nama_circel" value = "Misqueen" >Misqueen (JPP)</option>
						<option name="nama_circel" value = "Selektif" >Selektif (JXP)</option>
						<option name="nama_circel" value = "Gemesin" >Gemesin (MS)</option>
					</select>
				</div>

				<!--================================= PERTAMA================================================-->

				<div class="wrap-input100 sub_menu1 sub_menu_style"><label><h4> PEMILIHAN & TUJUAN PROYEK PERBAIKAN</h4><div class="fas fa-arrow-down"></div></label></div> 

				<div class="list_submenu_1">

				<div class="wrap-input100 hide_submenu_1 sub_submenu_style"><label><h6> A. Menjelaskan methode, quality tools dan data dalam memilih suatu project</h6><br><div class="text_align">Sangat Baik = 1.00 , Baik = 0.75 , Cukup = 0.5 , Kurang = 0.3</div><div class="fas fa-arrow-down"></div></label></div>

				<div class="option_menu_1">

				<div class="wrap-input100"><label><h10> 1. Melakukan identifikasi dan membuat stratifikasi masalah (problem/persoalan)</h10> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_A1k" name="kriteria_A1" value="0.3"> Kurang
					<input type="radio" id = "kriteria_A1c" name="kriteria_A1" value="0.5"> Cukup
					<input type="radio" id = "kriteria_A1b" name="kriteria_A1" value="0.75"> Baik
					<input type="radio" id = "kriteria_A1s" name="kriteria_A1" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 2. Memilih project improvement/inovasi berdasarkan data & fakta melalui penggunaan quality methode dan tools secara maksimal (baik dan benar)</h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_A2k" name="kriteria_A2" value="0.3"> Kurang
					<input type="radio" id = "kriteria_A2c" name="kriteria_A2" value="0.5"> Cukup
					<input type="radio" id = "kriteria_A2b" name="kriteria_A2" value="0.75"> Baik
					<input type="radio" id = "kriteria_A2s" name="kriteria_A2" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 3. Menjelaskan alasan kenapa proyek perbaikan tersebut dipilih</h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_A3k" name="kriteria_A3" value="0.3"> Kurang
					<input type="radio" id = "kriteria_A3c" name="kriteria_A3" value="0.5"> Cukup
					<input type="radio" id = "kriteria_A3b" name="kriteria_A3" value="0.75"> Baik
					<input type="radio" id = "kriteria_A3s" name="kriteria_A3" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				</div>

				<div class="wrap-input100 hide_submenu_2 sub_submenu_style"><label><h7> B. Tema terkait dengan tujuan & strategi bisnis/perusahaan</h7><br><br><div class="text_align">Sangat Baik = 1.00 , Baik = 0.75 , Cukup = 0.5 , Kurang = 0.3</div><div class="fas fa-arrow-down"></div></label></div>

				<div class="option_menu_2">
				<div class="wrap-input100"><label><h6> 1. Menjelaskan proyek perbaikan (improvement/inovasi) yang terseleksi mempunyai potensi pengaruh positif terhadap tujuan (strategi) perusahaan</h6></label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_B1k" name="kriteria_B1" value="0.3"> Kurang
					<input type="radio" id = "kriteria_B1c" name="kriteria_B1" value="0.5"> Cukup
					<input type="radio" id = "kriteria_B1b" name="kriteria_B1" value="0.75"> Baik
					<input type="radio" id = "kriteria_B1s" name="kriteria_B1" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 2. Teridentifikasi tingkat kesulitan (kompleksitas) masalah / pelaksanaan perbaikan dari proyek yang terseleksi</h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_B2k" name="kriteria_B2" value="0.3"> Kurang
					<input type="radio" id = "kriteria_B2c" name="kriteria_B2" value="0.5"> Cukup
					<input type="radio" id = "kriteria_B2b" name="kriteria_B2" value="0.75"> Baik
					<input type="radio" id = "kriteria_B2s" name="kriteria_B2" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 3. Tercermin harapan Customer dan/atau Stakeholders terhadap proyek perbaikan (improvement/inovasi) yang akan dilaksanakan</h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_B3k" name="kriteria_B3" value="0.3"> Kurang
					<input type="radio" id = "kriteria_B3c" name="kriteria_B3" value="0.5"> Cukup
					<input type="radio" id = "kriteria_B3b" name="kriteria_B3" value="0.75"> Baik
					<input type="radio" id = "kriteria_B3s" name="kriteria_B3" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				</div>

				<div class="wrap-input100 hide_submenu_3 sub_submenu_style"><label><h7> C. Stakeholders Involvement (Keterlibatan Stakeholders) : Pemegang Saham, Customer, Karyawan (Atasan/Bawahan), Pemerintah, Supplier, Community dan Lingkungan</h7><br><br><div class="text_align">Sangat Baik = 1.00 , Baik = 0.75 , Cukup = 0.5 , Kurang = 0.3</div><div class="fas fa-arrow-down"></div></label></div>

				<div class="option_menu_3">
				<div class="wrap-input100"><label><h6> 1. Mengidentifikasi Stakeholders yang bisa involve (terlibat) maupun yang dapat memberikan support dalam proyek perbaikan (improvement/inovasi)</h6></label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_C1k" name="kriteria_C1" value="0.3"> Kurang
					<input type="radio" id = "kriteria_C1c" name="kriteria_C1" value="0.5"> Cukup
					<input type="radio" id = "kriteria_C1b" name="kriteria_C1" value="0.75"> Baik
					<input type="radio" id = "kriteria_C1s" name="kriteria_C1" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 2. Mengidentifikasi Stakeholders yang resisten (menghambat), sehingga menjadikan tantangan terhadap proyek perbaikan (improvement/inovasi) </h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_C2k" name="kriteria_C2" value="0.3"> Kurang
					<input type="radio" id = "kriteria_C2c" name="kriteria_C2" value="0.5"> Cukup
					<input type="radio" id = "kriteria_C2b" name="kriteria_C2" value="0.75"> Baik
					<input type="radio" id = "kriteria_C2s" name="kriteria_C2" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 3. Menjelaskan bagaimana mereka (stakeholders) akan bisa memberikan dampak positif terhadap proyek perbaikan (Improvement/inovasi)</h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_C3k" name="kriteria_C3" value="0.3"> Kurang
					<input type="radio" id = "kriteria_C3c" name="kriteria_C3" value="0.5"> Cukup
					<input type="radio" id = "kriteria_C3b" name="kriteria_C3" value="0.75"> Baik
					<input type="radio" id = "kriteria_C3s" name="kriteria_C3" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>
				</div>
				

				</div>

				<!--================================= PERTAMA================================================-->

				<!--================================= KEDUA ================================================-->

				<div class="wrap-input100 sub_menu2 sub_menu_style"><label><h4> PENETAPAN TARGET PROYEK PERBAIKAN</h4><div class="fas fa-arrow-down"></div></label>
				</div>

				<div class="list_submenu_2">

				<div class="wrap-input100 hide_submenu_4 sub_submenu_style"><label><h7> D. Target (sasaran) sesuai dengan tema</h7><br><br><div class="text_align">Sangat Baik = 1.00 , Baik = 0.75 , Cukup = 0.5 , Kurang = 0.3</div><div class="fas fa-arrow-down"></div></label></div>

				<div class="option_menu_4">

				<div class="wrap-input100"><label><h6> 1. Target (sasaran) yang ditetapkan mencakup QCDSMP</h6> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_D1k" name="kriteria_D1" value="0.3"> Kurang
					<input type="radio" id = "kriteria_D1c" name="kriteria_D1" value="0.5"> Cukup
					<input type="radio" id = "kriteria_D1b" name="kriteria_D1" value="0.75"> Baik
					<input type="radio" id = "kriteria_D1s" name="kriteria_D1" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h6> 2. Penetapan sasaran jangka pendek, dan sasaran tersebut menjadi bagian dari tujuan perbaikan</h6> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_D2k" name="kriteria_D2" value="0.3"> Kurang
					<input type="radio" id = "kriteria_D2c" name="kriteria_D2" value="0.5"> Cukup
					<input type="radio" id = "kriteria_D2b" name="kriteria_D2" value="0.75"> Baik
					<input type="radio" id = "kriteria_D2s" name="kriteria_D2" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				</div>

				<div class="wrap-input100 sub_submenu_style"><label><h7> E. Target (sasaran) jelas dan menantang</h7><br><br><div class="text_align">Sangat Baik = 2.00 , Baik = 1.5 , Cukup = 1.0 , Kurang = 0.6</div></label>

				<ul>
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_E1k" name="kriteria_E1" value="0.6"> Kurang
					<input type="radio" id = "kriteria_E1c" name="kriteria_E1" value="1"> Cukup
					<input type="radio" id = "kriteria_E1b" name="kriteria_E1" value="1.5"> Baik
					<input type="radio" id = "kriteria_E1s" name="kriteria_E1" value="2"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100 sub_submenu_style"><label><h7> F. Prediksi manfaat dan masalah potensial</h7><br><br><div class="text_align">Sangat Baik = 2.00 , Baik = 1.5 , Cukup = 1.0 , Kurang = 0.6</div></label>

				<ul>
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_F1k" name="kriteria_F1" value="0.6"> Kurang
					<input type="radio" id = "kriteria_F1c" name="kriteria_F1" value="1.0"> Cukup
					<input type="radio" id = "kriteria_F1b" name="kriteria_F1" value="1.5"> Baik
					<input type="radio" id = "kriteria_F1s" name="kriteria_F1" value="2"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100 sub_submenu_style"><label><h7> G. Verifikasi stakeholders yang terkait dengan proyek perbaikan</h7><br><br><div class="text_align">Sangat Baik = 2.00 , Baik = 1.5 , Cukup = 1.0 , Kurang = 0.6</div></label>

				<ul>
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_G1k" name="kriteria_G1" value="0.6"> Kurang
					<input type="radio" id = "kriteria_G1c" name="kriteria_G1" value="1.0"> Cukup
					<input type="radio" id = "kriteria_G1b" name="kriteria_G1" value="1.5"> Baik
					<input type="radio" id = "kriteria_G1s" name="kriteria_G1" value="2"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				</div>

				<!--================================= KEDUA ================================================-->

				<!--================================= KETIGA ================================================-->

				<div class="wrap-input100 sub_menu3 sub_menu_style"><label><h4> ANALISA SITUASI & PENENTUAN FAKTOR PENYEBAB MASALAH UTAMA</h4><div class="fas fa-arrow-down"></div></label>
				</div>

				<div class="list_submenu_3">

				<div class="wrap-input100 hide_submenu_5 sub_submenu_style"><label><h7> H. Pendekatan/proses yang digunakan untuk mengidentifikasi potensi akar penyebab masalah utama/kemungkinan perbaikan</h7><br><br><div class="text_align">Sangat Baik = 1.00 , Baik = 0.75 , Cukup = 0.5 , Kurang = 0.3</div><div class="fas fa-arrow-down"></div></label></div>

				<div class="option_menu_5">

				<div class="wrap-input100"><label><h6> 1. Akar masalah teridentifikasi dengan jelas dan dapat dibuktikan</h6> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_H1k" name="kriteria_H1" value="0.3"> Kurang
					<input type="radio" id = "kriteria_H1c" name="kriteria_H1" value="0.5"> Cukup
					<input type="radio" id = "kriteria_H1b" name="kriteria_H1" value="0.75"> Baik
					<input type="radio" id = "kriteria_H1s" name="kriteria_H1" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h6> 2. Munculnya akar penyebab dari akar masalah pada suatu faktor yang telah dikembangkan</h6> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_H2k" name="kriteria_H2" value="0.3"> Kurang
					<input type="radio" id = "kriteria_H2c" name="kriteria_H2" value="0.5"> Cukup
					<input type="radio" id = "kriteria_H2b" name="kriteria_H2" value="0.75"> Baik
					<input type="radio" id = "kriteria_H2s" name="kriteria_H2" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h6> 3. Identifikasi dan validasi (memiliki akurasi penentuan) faktor penyebab dominan (akar penyebab masalah utama)</h6> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_H3k" name="kriteria_H3" value="0.3"> Kurang
					<input type="radio" id = "kriteria_H3c" name="kriteria_H3" value="0.5"> Cukup
					<input type="radio" id = "kriteria_H3b" name="kriteria_H3" value="0.75"> Baik
					<input type="radio" id = "kriteria_H3s" name="kriteria_H3" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h6> 4. Kesesuaian masalah dengan prioritas penanganan faktor penyebab dominan</h6> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_H4k" name="kriteria_H4" value="0.3"> Kurang
					<input type="radio" id = "kriteria_H4c" name="kriteria_H4" value="0.5"> Cukup
					<input type="radio" id = "kriteria_H4b" name="kriteria_H4" value="0.75"> Baik
					<input type="radio" id = "kriteria_H4s" name="kriteria_H4" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				</div>

				<div class="wrap-input100 sub_submenu_style"><label><h7> I. Aktualisasi dan keterlibatan team & stakeholders dalam mengembangkan pola hubungan sebab akibat</h7><br><br><div class="text_align">Sangat Baik = 2.00 , Baik = 1.5 , Cukup = 1.0 , Kurang = 0.6</div></label>

				<ul>
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_I1k" name="kriteria_I1" value="0.6"> Kurang
					<input type="radio" id = "kriteria_I1c" name="kriteria_I1" value="1.0"> Cukup
					<input type="radio" id = "kriteria_I1b" name="kriteria_I1" value="1.5"> Baik
					<input type="radio" id = "kriteria_I1s" name="kriteria_I1" value="2"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				</div>

				<!--================================= KETIGA ================================================-->

				<!--================================= KEEMPAT ================================================-->

				<div class="wrap-input100 sub_menu4 sub_menu_style"><label><h4> PENGEMBANGAN & RENCANA SOLUSI PERBAIKAN</h4><div class="fas fa-arrow-down"></div></label>
				</div>

				<div class="list_submenu_4">

				<div class="wrap-input100 hide_submenu_6 sub_submenu_style"><label><h6> J. Menjelaskan metode dan quality tools yaang digunakan dalam pengembangan solusi dan inovasi/improvement actions</h6><br><div class="text_align">Sangat Baik = 1.00 , Baik = 0.75 , Cukup = 0.5 , Kurang = 0.3</div></label><br><div class="fas fa-arrow-down"></div></div>

				<div class="option_menu_6">

				<div class="wrap-input100"><label><h10> 1. Menjelaskan metode dan quality tools yang digunakan untuk mencari dan memilih ide perbaikan serta menentukan penanggulangan</h10> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_J1k" name="kriteria_J1" value="0.3"> Kurang
					<input type="radio" id = "kriteria_J1c" name="kriteria_J1" value="0.5"> Cukup
					<input type="radio" id = "kriteria_J1b" name="kriteria_J1" value="0.75"> Baik
					<input type="radio" id = "kriteria_J1s" name="kriteria_J1" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 2. Menjelaskan kreatifitas team & stakeholders dalam menemukan alternatif solusi (improvement actions) dan parameter kelebihan serta analisa resiko (kekurangannya)</h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_J2k" name="kriteria_J2" value="0.3"> Kurang
					<input type="radio" id = "kriteria_J2c" name="kriteria_J2" value="0.5"> Cukup
					<input type="radio" id = "kriteria_J2b" name="kriteria_J2" value="0.75"> Baik
					<input type="radio" id = "kriteria_J2s" name="kriteria_J2" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 3. Menjelaskan keterlibatan team & stakeholders dalam menemukan alternatif solusi (improvement actions) dan parameter kelebihan serta analisa resiko (kekurangannya)</h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_J3k" name="kriteria_J3" value="0.3"> Kurang
					<input type="radio" id = "kriteria_J3c" name="kriteria_J3" value="0.5"> Cukup
					<input type="radio" id = "kriteria_J3b" name="kriteria_J3" value="0.75"> Baik
					<input type="radio" id = "kriteria_J3s" name="kriteria_J3" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				</div>

				<div class="wrap-input100 hide_submenu_7 sub_submenu_style"><label><h7> K. Kualitas ide solusi / inovation actions</h7><br><br><div class="text_align">Sangat Baik = 2.00 , Baik = 1.5 , Cukup = 1.0 , Kurang = 0.6</div><div class="fas fa-arrow-down"></div></label></div>

				<div class="option_menu_7">
				<div class="wrap-input100"><label><h6> 1. Menjelaskan tentang final solutions/improvement actions, validasi dan benefit/kemampuan dalam menjawab kebutuhan yang diharapkan terhadap inovasi/improvement actions yang akan dilakukan</h6></label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_K1k" name="kriteria_K1" value="0.6"> Kurang
					<input type="radio" id = "kriteria_K1c" name="kriteria_K1" value="1.0"> Cukup
					<input type="radio" id = "kriteria_K1b" name="kriteria_K1" value="1.5"> Baik
					<input type="radio" id = "kriteria_K1s" name="kriteria_K1" value="2"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 2. Menguraikan detail rencana project (5W2H), termasuk distribusi peranan dan keterlibatan stakeholders dalam melakukan perbaikan </h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_K2k" name="kriteria_K2" value="0.6"> Kurang
					<input type="radio" id = "kriteria_K2c" name="kriteria_K2" value="1.0"> Cukup
					<input type="radio" id = "kriteria_K2b" name="kriteria_K2" value="1.5"> Baik
					<input type="radio" id = "kriteria_K2s" name="kriteria_K2" value="2"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				</div>

				</div>

				<!--================================= KEEMPAT ================================================-->

				<!--================================= KELIMA ================================================-->

				<div class="wrap-input100 sub_menu5 sub_menu_style"><label><h4> IMPLEMENTASI SOLUSI   PERBAIKAN</h4><div class="fas fa-arrow-down"></div></label>
				</div>

				<div class="list_submenu_5">

				<div class="wrap-input100 hide_submenu_8 sub_submenu_style"><label><h7> L. Menjelaskan pendekatan yang digunakan untuk menerapkan tindakan solusi/improvement dan memastikan hasil yang ingin dicapai</h7><br><br><div class="text_align">Sangat Baik = 10.0 , Baik = 7.5 , Cukup = 5.0 , Kurang = 3.0</div><div class="fas fa-arrow-down"></div></label></div>

				<div class="option_menu_8">

				<div class="wrap-input100"><label><h6> 1. Memiliki sistem pantau (monitoring) atas proses pelaksanaan tindakan perbaikan yang dilakukan</h6> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_L1k" name="kriteria_L1" value="3"> Kurang
					<input type="radio" id = "kriteria_L1c" name="kriteria_L1" value="5"> Cukup
					<input type="radio" id = "kriteria_L1b" name="kriteria_L1" value="7.5"> Baik
					<input type="radio" id = "kriteria_L1s" name="kriteria_L1" value="10"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h6> 2. Menjelaskan bagaimana mengidentifikasikan serta mengalokasikan hambatan-hambatan (baik yang nyata atau potensial) yang muncul, serta memastikan keterlibatan team & stakeholders untuk meyepakati (buy-in) atas corrective action yang telah ditentukan serta dampaknya</h6> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_L2k" name="kriteria_L2" value="3"> Kurang
					<input type="radio" id = "kriteria_L2c" name="kriteria_L2" value="5"> Cukup
					<input type="radio" id = "kriteria_L2b" name="kriteria_L2" value="7.5"> Baik
					<input type="radio" id = "kriteria_L2s" name="kriteria_L2" value="10"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				</div>

				<div class="wrap-input100 sub_submenu_style"><label><h7> M. Semua anggota Tim memahami perubahan-perubahan yang terjadi di dalam improvement yang dibuat terhadap kondisi sebelumnya (kondisi awal)</h7><br><br><div class="text_align">Sangat Baik = 10.0 , Baik = 7.5 , Cukup = 5.0 , Kurang = 3.0</div></label>

				<ul>
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_M1k" name="kriteria_M1" value="3"> Kurang
					<input type="radio" id = "kriteria_M1c" name="kriteria_M1" value="5"> Cukup
					<input type="radio" id = "kriteria_M1b" name="kriteria_M1" value="7.5"> Baik
					<input type="radio" id = "kriteria_M1s" name="kriteria_M1" value="10"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				</div>

				<!--================================= KELIMA ================================================-->

				<!--================================= KEENAM ================================================-->

				<div class="wrap-input100 sub_menu6 sub_menu_style"><label><h4> EVALUASI HASIL PERBAIKAN</h4><div class="fas fa-arrow-down"></div> </label>
				</div>

				<div class="list_submenu_6">

				<div class="wrap-input100 hide_submenu_9 sub_submenu_style"><label><h6> N. Tingkat pencapaian perbaikan dibandingkan dengan target (sasaran) akhir / antara</h6><br><br><div class="text_align">Sangat Baik = 5.0 , Baik = 3.75 , Cukup = 2.5 , Kurang = 1.5</div><div class="fas fa-arrow-down"></div></label></div>

				<div class="option_menu_9">

				<div class="wrap-input100"><label><h10> 1. Ada analisis komparasi yg valid & tepat serta kesimpulan analisis/faktor penyebab yg belum teratasi</h10> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_N1k"  name="kriteria_N1" value="1.5"> Kurang
					<input type="radio" id = "kriteria_N1c"  name="kriteria_N1" value="2.5"> Cukup
					<input type="radio" id = "kriteria_N1b"  name="kriteria_N1" value="3.75"> Baik
					<input type="radio" id = "kriteria_N1s"  name="kriteria_N1" value="5"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 2. Tools yang dipakai, alasan penggunaan & hasilnya</h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_N2k" name="kriteria_N2" value="1.5"> Kurang
					<input type="radio" id = "kriteria_N2c" name="kriteria_N2" value="2.5"> Cukup
					<input type="radio" id = "kriteria_N2b" name="kriteria_N2" value="3.75"> Baik
					<input type="radio" id = "kriteria_N2s" name="kriteria_N2" value="5"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				</div>

				<div class="wrap-input100 hide_submenu_10 sub_submenu_style"><label><h7> O. Kuantifikasi dampak solusi/improvement actions</h7><br><br><div class="text_align">Sangat Baik = 3.3 , Baik = 2.5 , Cukup = 1.6 , Kurang = 1.0</div><div class="fas fa-arrow-down"></div></label></div>

				<div class="option_menu_10">

				<div class="wrap-input100"><label><h6> 1. Manfaat tangible & intangible</h6></label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_O1k" name="kriteria_O1" value="1.0"> Kurang
					<input type="radio" id = "kriteria_O1c" name="kriteria_O1" value="1.6"> Cukup
					<input type="radio" id = "kriteria_O1b" name="kriteria_O1" value="2.5"> Baik
					<input type="radio" id = "kriteria_O1s" name="kriteria_O1" value="3.4"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 2. Ada hasil-hasil positif lain yang timbul, tapi bukan sasaran penanggulangan/perbaikan yang telah dilaksanakan</h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_O2k" name="kriteria_O2" value="1.0"> Kurang
					<input type="radio" id = "kriteria_O2c" name="kriteria_O2" value="1.7"> Cukup
					<input type="radio" id = "kriteria_O2b" name="kriteria_O2" value="2.5"> Baik
					<input type="radio" id = "kriteria_O2s" name="kriteria_O2" value="3.3"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 3. Ada analisis dampak terhadap hasil-hasil lain (apakah hasil perbaikan menimbulkan efek samping?) Bila ada, bagaimana tindakan untuk eliminasi hal tersebut? Hasilnya efisien?</h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_O3k" name="kriteria_O3" value="1.0"> Kurang
					<input type="radio" id = "kriteria_O3c" name="kriteria_O3" value="1.7"> Cukup
					<input type="radio" id = "kriteria_O3b" name="kriteria_O3" value="2.5"> Baik
					<input type="radio" id = "kriteria_O3s" name="kriteria_O3" value="3.3"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				</div>

				<div class="wrap-input100 sub_submenu_style"><label><h7> P. Proyek perbaikan memberikan kontribusi/ dampak nyata terhadap tujuan perusahaan/plant/divisi/departement  dan stakeholders</h7><br><br><div class="text_align">Sangat Baik = 10 , Baik = 7.5 , Cukup = 5 , Kurang = 3</div></label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_P1k" name="kriteria_P1" value="3"> Kurang
					<input type="radio" id = "kriteria_P1c" name="kriteria_P1" value="5"> Cukup
					<input type="radio" id = "kriteria_P1b" name="kriteria_P1" value="7.5"> Baik
					<input type="radio" id = "kriteria_P1s" name="kriteria_P1" value="10"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				</div>

				<!--================================= KEENAM ================================================-->

				<!--================================= KETUJUH ================================================-->

				<div class="wrap-input100 sub_menu7 sub_menu_style"><label><h4> PENGENDALIAN DAN STANDARISASI</h4><div class="fas fa-arrow-down"></div></label></div>

				<div class="list_submenu_7">

				<div class="wrap-input100 hide_submenu_11 sub_submenu_style"><label><h6> Q. Standarisasi</h6><br><div class="text_align">Sangat Baik = 1.00 , Baik = 0.75 , Cukup = 0.5 , Kurang = 0.3</div><div class="fas fa-arrow-down"></div></label></div>

				<div class="option_menu_11">

				<div class="wrap-input100"><label><h10> 1. Pendekatan sistem atas standar baru meliputi standar masukan, proses dan hasil. Dan standar baru tersebut mudah dipahami (informatif)</h10> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_Q1k" name="kriteria_Q1" value="0.3"> Kurang
					<input type="radio" id = "kriteria_Q1c" name="kriteria_Q1" value="0.5"> Cukup
					<input type="radio" id = "kriteria_Q1b" name="kriteria_Q1" value="0.75"> Baik
					<input type="radio" id = "kriteria_Q1s" name="kriteria_Q1" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 2. Kualitas standar pengendalian dan pencegahan terhadap timbulnya masalah (lama atau baru)</h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_Q2k" name="kriteria_Q2" value="0.3"> Kurang
					<input type="radio" id = "kriteria_Q2c" name="kriteria_Q2" value="0.5"> Cukup
					<input type="radio" id = "kriteria_Q2b" name="kriteria_Q2" value="0.75"> Baik
					<input type="radio" id = "kriteria_Q2s" name="kriteria_Q2" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 3. Standar baru lebih efektif dan aplikatif dari pada sebelumnya</h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_Q3k" name="kriteria_Q3" value="0.3"> Kurang
					<input type="radio" id = "kriteria_Q3c" name="kriteria_Q3" value="0.5"> Cukup
					<input type="radio" id = "kriteria_Q3b" name="kriteria_Q3" value="0.75"> Baik
					<input type="radio" id = "kriteria_Q3s" name="kriteria_Q3" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 4. Standar baru telah dikomunikasikan, sudah diserah terimakan dan dapat diterapkan di tempat lain</h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_Q4k" name="kriteria_Q4" value="0.3"> Kurang
					<input type="radio" id = "kriteria_Q4c" name="kriteria_Q4" value="0.5"> Cukup
					<input type="radio" id = "kriteria_Q4b" name="kriteria_Q4" value="0.75"> Baik
					<input type="radio" id = "kriteria_Q4s" name="kriteria_Q4" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 5. Bila terjadi non-conformance (ada peringatan otomatis/tidak otomatis/tidak ada peringatan)</h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_Q5k" name="kriteria_Q5" value="0.3"> Kurang
					<input type="radio" id = "kriteria_Q5c" name="kriteria_Q5" value="0.5"> Cukup
					<input type="radio" id = "kriteria_Q5b" name="kriteria_Q5" value="0.75"> Baik
					<input type="radio" id = "kriteria_Q5s" name="kriteria_Q5" value="1"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				</div>

				<div class="wrap-input100 hide_submenu_12 sub_submenu_style"><label><h7> R. Menjamin pelaksanaan standar baru</h7><br><br><div class="text_align">Sangat Baik = 1.5 , Baik = 1.13 , Cukup = 0.75 , Kurang = 0.5</div><div class="fas fa-arrow-down"></div></label></div>

				<div class="option_menu_12">

				<div class="wrap-input100"><label><h6> 1. Memiliki kegiatan/tahapan/aktifitas yang menjamin pelaksanaan standar baru secara efektif</h6></label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_R1k" name="kriteria_R1" value="0.5"> Kurang
					<input type="radio" id = "kriteria_R1c" name="kriteria_R1" value="0.75"> Cukup
					<input type="radio" id = "kriteria_R1b" name="kriteria_R1" value="1.13"> Baik
					<input type="radio" id = "kriteria_R1s" name="kriteria_R1" value="1.5"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				<div class="wrap-input100"><label><h9> 2. Memiliki cara melakukan monitoring dan mengevaluasi standar baru</h9> </label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_R2k" name="kriteria_R2" value="0.5"> Kurang
					<input type="radio" id = "kriteria_R2c" name="kriteria_R2" value="0.75"> Cukup
					<input type="radio" id = "kriteria_R2b" name="kriteria_R2" value="1.13"> Baik
					<input type="radio" id = "kriteria_R2s" name="kriteria_R2" value="1.5"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>

				</div>

				<div class="wrap-input100 sub_submenu_style"><label><h7> S. Identifikasi & Penetapan Rencana Berikutnya</h7><br><br><div class="text_align">Sangat Baik = 2 , Baik = 1.5 , Cukup = 1 , Kurang = 0.5</div></label>

				<ul class="">
					<li>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input type="radio" id = "kriteria_S1k" name="kriteria_S1" value="0.5"> Kurang
					<input type="radio" id = "kriteria_S1c" name="kriteria_S1" value="1"> Cukup
					<input type="radio" id = "kriteria_S1b" name="kriteria_S1" value="1.5"> Baik
					<input type="radio" id = "kriteria_S1s" name="kriteria_S1" value="2"> Sangat Baik
				</div>
					</li>
				</ul>

				</div>
				

				</div>

				<!--================================= KETUJUH ================================================-->

				<span class="contact100-form-title">
					KOLOM KOMENTAR
				</span>

				<div class="wrap-input100">
					<textarea class="input100" id = "komentar" value="" name="komen" placeholder="Masukan Komentar..."></textarea>
				</div>

				<div class="container-contact100-form-btn">
					<div class="wrap-contact100-form-btn">
						<div class="contact100-form-bgbtn"></div>
						<button type="submit" name="submit" class="contact100-form-btn" onclick="input_nilai()">
							Submit Penilaian
						</button>
					</div>
				</div>
			
		</div>
	</div>



	<div id="dropDownSelect1"></div>

<!--===============================================================================================-->
	<script src="../contactform/vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="../contactform/vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="../contactform/vendor/bootstrap/js/popper.js"></script>
	<script src="../contactform/vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="../contactform/vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="../contactform/vendor/daterangepicker/moment.min.js"></script>
	<script src="../contactform/vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="../contactform/vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	<script src="../contactform/js/main.js"></script>

	<script src="../contactform/js/input_nilai.js"></script>

	<script src="../assets/js/style_form_lapangan.js"></script>

	<script src="../assets/js/recheck_form_lapangan.js"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>

</body>
</html>

<?php

}else{
	header("Location: index.php");
}

?>