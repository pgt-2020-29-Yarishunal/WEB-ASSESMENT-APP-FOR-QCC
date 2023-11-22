<?php
session_start();
if(isset($_SESSION['username'])){
 
}else{
	header('Location: ../index.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Contact V7</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->

<script src="https://kit.fontawesome.com/94d7f75116.js" crossorigin="anonymous"></script>
</head>
<body>


	<div class="container-contact100">
		<div class="wrap-contact100">
			
				<span class="contact100-form-title">
					FORM PENILAIAN PRESENTASI
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
						Nama Circle
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

				<!--================================= PERTAMA ================================================-->

				<div class="wrap-input100 sub_menu1 sub_menu_style"><label><h4> 1. Korelasi dengan stretegi atau tingkat urgensi atau tingkat kepentingan permasalahan dalam company view </h4><div class="fas fa-arrow-down"></div></label></div> 

				<div class="list_submenu_1">

				<div class="wrap-input100 sub_submenu_style" id="nilai1_kurang">

					<input type="radio" onchange="list1()" name ="list1_value" id="total_nilai1_kurang" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 1. Tidak berhubungan dengan tujuan (strategi) perusahaan dan tidak terlihat urgensi atau tingkat kepentingan permasalahan (bukan sebagai KPI yang paling critical untuk diperbaiki, tidak menjadi temuan audit, tidak terdapat dalam risk register, bukan merupakan complaint atau voice of customer)
							</h8>
						</label>
					</div>

				<div style="padding-bottom: 10px;">
					<select id ="select_nilai1_kurang" name="total_nilai1">
						<option name="total_nilai1" >-</option>
						<option name="total_nilai1" value="1">1</option>
						<option name="total_nilai1" value="2">2</option>
						<option name="total_nilai1" value="3">3</option>
						<option name="total_nilai1" value="4">4</option>
						<option name="total_nilai1" value="5">5</option>
					</select>
				</div>

				</div>

				<div class="wrap-input100 sub_submenu_style" id="nilai1_cukup">

					<input type="radio" onchange="list1()" name ="list1_value" id="total_nilai1_cukup" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								2. Permasalahan merupakan sesuatu yang urgen untuk diperbaiki, namun tidak terlihat kepentingannya dari perspektif organisasi atau perusahaan (bukan merupakan bagian dari strategi, bukan sebagai KPI yang paling critical untuk diperbaiki, tidak menjadi temuan audit, tidak terdapat dalam risk register, bukan merupakan complaint atau voice of customer)
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai1_cukup" name="total_nilai1">
						<option name="total_nilai1" >-</option>
						<option name="total_nilai1" value="6">6</option>
						<option name="total_nilai1" value="7">7</option>
						<option name="total_nilai1" value="8">8</option>
						<option name="total_nilai1" value="9">9</option>
						<option name="total_nilai1" value="10">10</option>
					</select>
					</div>

				</div>	

				<div class="wrap-input100 sub_submenu_style" id="nilai1_baik">

					<input type="radio" onchange="list1()" name ="list1_value" id="total_nilai1_baik" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								3. Permasalahan merupakan sesuatu yang urgent untuk diperbaiki, dan penting  untuk segera diperbaiki dari perspektif organisasi atau perusahaan  (salah satu atau lebih dari : bagian dari strategi, KPI yang paling critical untuk diperbaiki, temuan audit,  terdapat dalam risk register,  merupakan complaint atau voice of customer)
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai1_baik" name="total_nilai1">
						<option name="total_nilai1" >-</option>
						<option name="total_nilai1" value="11">11</option>
						<option name="total_nilai1" value="12">12</option>
						<option name="total_nilai1" value="13">13</option>
						<option name="total_nilai1" value="14">14</option>
						<option name="total_nilai1" value="15">15</option>
					</select>
					</div>

				</div>	

				<div class="wrap-input100 sub_submenu_style" id="nilai1_sangat_baik">

					<input type="radio" onchange="list1()" name ="list1_value" id="total_nilai1_sangat_baik" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								4. Permasalahan merupakan sesuatu terkait dengan strategi dan urgent untuk diperbaiki (dan (merupakan KPI yang paling critical untuk diperbaiki, temuan audit,  terdapat dalam risk register,  merupakan complaint atau voice of customer)
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai1_sangat_baik" name="total_nilai1">
						<option name="total_nilai1" >-</option>
						<option name="total_nilai1" value="16">16</option>
						<option name="total_nilai1" value="17">17</option>
						<option name="total_nilai1" value="18">18</option>
						<option name="total_nilai1" value="19">19</option>
						<option name="total_nilai1" value="20">20</option>
					</select>
				</div>

				</div>

				</div>

				<!--================================= PERTAMA================================================-->

				<!--================================= KEDUA ================================================-->

				<div class="wrap-input100 sub_menu2 sub_menu_style"><label><h4> Metode  dan tools yang digunakan dalam pengembangan solusi dan inovasi/improvement actions</h4><div class="fas fa-arrow-down"></div></label>
				</div>

				<div class="list_submenu_2">

					<div class="wrap-input100 sub_submenu_style" id="nilai2_kurang">

					<input type="radio" onchange="list2()" name ="list2_value" id="total_nilai2_kurang" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 1. Setiap akar penyebab hanya tersedia satu solusi tanpa adanya pertimbangan / penjelasan dari aspek manfaat atau efektifiastnya, biaya yang dibutuhkan dan aspek teknis lainnya, serta terdapat timeline due date implementasi yang jelas dan PIC pelaksananya (5W2H+1T - What, How, Why, When, Where, Who, How Much+Target)
							</h8>
						</label>
					</div>

				<div style="padding-bottom: 10px;">
					<select id ="select_nilai2_kurang" name="total_nilai2" disabled>
						<option name="total_nilai2" >-</option>
						<option name="total_nilai2" value="1">1</option>
						<option name="total_nilai2" value="2">2</option>
						<option name="total_nilai2" value="3">3</option>
						<option name="total_nilai2" value="4">4</option>
						<option name="total_nilai2" value="5">5</option>
					</select>
				</div>

				</div>

				<div class="wrap-input100 sub_submenu_style" id="nilai2_cukup">

					<input type="radio" onchange="list2()" name ="list2_value" id="total_nilai2_cukup" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								2. Setiap akar penyebab hanya tersedia satu solusi, dilakukan analisa, namun analisa untuk memilih solusi tidak dilakukan dengan baik atau hanya memperhitungkan sebagian dari  aspek manfaat atau efektifitastnya, biaya yang dibutuhkan dan aspek teknis lainnya, serta terdapat timeline  due date implementasi yang jelas dan PIC pelaksananya (5W2H1T - What, How, Why, When, Where, Who, How Much+ Target)
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai2_cukup" name="total_nilai2" disabled>
						<option name="total_nilai2" >-</option>
						<option name="total_nilai2" value="6">6</option>
						<option name="total_nilai2" value="7">7</option>
						<option name="total_nilai2" value="8">8</option>
						<option name="total_nilai2" value="9">9</option>
						<option name="total_nilai2" value="10">10</option>
					</select>
					</div>

				</div>	

				<div class="wrap-input100 sub_submenu_style" id="nilai2_baik">

					<input type="radio" onchange="list2()" name ="list2_value" id="total_nilai2_baik" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								3. Ter identifikasi proses penentuan  masalah-masalah pada analisa kondisi yang ada (anakonda) dan dilakukan dengan baik,spesifik ke masalahnya serta komprehensif (tidak ada yang tertinggal tidak dianalisa, mencakup semua aspek 4M1E-Man,Machine, Method, Material, Environment),dan analisa sebab akibat (why-why) runut sehingga akar penyebab dapat diidentifikasi,dibuktikan,dijelaskan,akar penyebab yang mana yang memberi kontribusi terbesar terhadap permasalahan.dan memilih solusi yang dipilih tidak dilakukan dengan baik atau hanya memperhitungkan sebagian dari  aspek manfaat atau efektifitasnya, biaya yang dibutuhkan dan aspek teknis lainnya, serta terdapat timeline  due date implementasi yang jelas dan PIC pelaksananya (5W2H+1T - What, How, Why, When, Where, Who, How Much + Target)
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai2_baik" name="total_nilai2" disabled>
						<option name="total_nilai2" >-</option>
						<option name="total_nilai2" value="11">11</option>
						<option name="total_nilai2" value="12">12</option>
						<option name="total_nilai2" value="13">13</option>
						<option name="total_nilai2" value="14">14</option>
						<option name="total_nilai2" value="15">15</option>
					</select>
					</div>

				</div>	

				<div class="wrap-input100 sub_submenu_style" id="nilai2_sangat_baik">

					<input type="radio" onchange="list2()" name ="list2_value" id="total_nilai2_sangat_baik" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								4. Ter identifikasi proses penentuan  masalah-masalah pada analisa kondisi yang ada (anakonda) dan dilakukan dengan baik,spesifik ke masalahnya serta komprehensif (tidak ada yang tertinggal tidak dianalisa, mencakup semua aspek 4M1E-Man,Machine, Method, Material, Environment),dan analisa sebab akibat (why-why) runut sehingga akar penyebab dapat diidentifikasi,dibuktikan,dijelaskan,akar penyebab yang mana yang memberi kontribusi terbesar terhadap permasalahan.dan adanya opsi opsi/solusi-solusi  perbaikan yang akan dilakukan pada setiap akar penyebab serta memilih solusi yang dipilih dilakukan dengan baik  dari  aspek teknis, manfaat , efektifitas,biaya yang dibutuhkan , serta terdapat timeline  due date implementasi yang jelas dan PIC pelaksananya (5W2H+1T - What, How, Why, When, Where, Who, How Much + Target)
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai2_sangat_baik" name="total_nilai2" disabled>
						<option name="total_nilai2" >-</option>
						<option name="total_nilai2" value="16">16</option>
						<option name="total_nilai2" value="17">17</option>
						<option name="total_nilai2" value="18">18</option>
						<option name="total_nilai2" value="19">19</option>
						<option name="total_nilai2" value="20">20</option>
					</select>
				</div>

				</div>

				</div>

				<!--================================= KEDUA ================================================-->

				<!--================================= KETIGA ================================================-->

				<div class="wrap-input100 sub_menu3 sub_menu_style"><label><h4> Standarisasi</h4><div class="fas fa-arrow-down"></div></label>
				</div>

				<div class="list_submenu_3">

				<div class="wrap-input100 sub_submenu_style" id="nilai3_kurang">

					<input type="radio" onchange="list3()" name ="list3_value" id="total_nilai3_kurang" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 1. Tidak ada standarisasi (IKL,SOP,No drawing,dll..) yang dibuat
							</h8>
						</label>
					</div>

				<div style="padding-bottom: 10px;">
					<select id ="select_nilai3_kurang" name="total_nilai3" disabled>
						<option name="total_nilai3" >-</option>
						<option name="total_nilai3" value="0.5">0.5</option>
						<option name="total_nilai3" value="1">1</option>
						<option name="total_nilai3" value="1.5">1.5</option>
						<option name="total_nilai3" value="2">2</option>
						<option name="total_nilai3" value="2.5">2.5</option>
					</select>
				</div>

				</div>

				<div class="wrap-input100 sub_submenu_style" id="nilai3_cukup">

					<input type="radio" onchange="list3()" name ="list3_value" id="total_nilai3_cukup" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								2. Terdapat standarisasi (IKL,SOP,No drawing,dll..) dari beberapa perbaikan yang dilakukan 
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai3_cukup" name="total_nilai3" disabled>
						<option name="total_nilai3" >-</option>
						<option name="total_nilai3" value="3">3</option>
						<option name="total_nilai3" value="3.5">3.5</option>
						<option name="total_nilai3" value="4">4</option>
						<option name="total_nilai3" value="4.5">4.5</option>
						<option name="total_nilai3" value="5">5</option>
					</select>
					</div>

				</div>	

				<div class="wrap-input100 sub_submenu_style" id="nilai3_baik">

					<input type="radio" onchange="list3()" name ="list3_value" id="total_nilai3_baik" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								3. Terdapat standarisasi (IKL,SOP,No drawing,dll..) dari semua perbaikan yang dilakukan
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai3_baik" name="total_nilai3" disabled>
						<option name="total_nilai3" >-</option>
						<option name="total_nilai3" value="5.5">5.5</option>
						<option name="total_nilai3" value="6">6</option>
						<option name="total_nilai3" value="6.5">6.5</option>
						<option name="total_nilai3" value="7">7</option>
						<option name="total_nilai3" value="7.5">7.5</option>
					</select>
					</div>

				</div>	

				<div class="wrap-input100 sub_submenu_style" id="nilai3_sangat_baik">

					<input type="radio" onchange="list3()" name ="list3_value" id="total_nilai3_sangat_baik" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								4. Terdapat standarisasi (IKL,SOP,No drawing,dll..) dari semua perbaikan yang dilakukan dan adanya bukti sosialisasi
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai3_sangat_baik" name="total_nilai3" disabled>
						<option name="total_nilai3" >-</option>
						<option name="total_nilai3" value="8">8</option>
						<option name="total_nilai3" value="8.5">8.5</option>
						<option name="total_nilai3" value="9">9</option>
						<option name="total_nilai3" value="9.5">9.5</option>
						<option name="total_nilai3" value="10">10</option>
					</select>
				</div>

				</div>

				</div>

				<!--================================= KETIGA ================================================-->

				<!--================================= KEEMPAT ================================================-->

				<div class="wrap-input100 sub_menu4 sub_menu_style"><label><h4> Teknik Penyampaian / Kejelasan Presentasi</h4><div class="fas fa-arrow-down"></div></label>
				</div>

				<div class="list_submenu_4">

				<div class="wrap-input100 sub_submenu_style" id="nilai4_kurang">

					<input type="radio" onchange="list4()" name ="list4_value" id="total_nilai4_kurang" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 1. inti dari improvement tidak tersampaikan  (bahasa yang dipakai sulit untuk dipahami)
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
						<select id ="select_nilai4_kurang" name="total_nilai4" disabled>
							<option name="total_nilai4" >-</option>
							<option name="total_nilai4" value="0.9">0.9</option>
							<option name="total_nilai4" value="1.8">1.8</option>
							<option name="total_nilai4" value="2.7">2.7</option>
							<option name="total_nilai4" value="3.6">3.6</option>
							<option name="total_nilai4" value="4.5">4.5</option>
						</select>
					</div>

				</div>

				<div class="wrap-input100 sub_submenu_style" id="nilai4_cukup">

					<input type="radio" onchange="list4()" name ="list4_value" id="total_nilai4_cukup" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								2. Inti dari improvement tersampaikan (bahasa yang dipakai mudah untuk dipahami)
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai4_cukup" name="total_nilai4" disabled>
						<option name="total_nilai4" >-</option>
						<option name="total_nilai4" value="5.4">5.4</option>
						<option name="total_nilai4" value="6.3">6.3</option>
						<option name="total_nilai4" value="7.2">7.2</option>
						<option name="total_nilai4" value="8.1">8.1</option>
						<option name="total_nilai4" value="9">9</option>
					</select>
					</div>

				</div>	

				<div class="wrap-input100 sub_submenu_style" id="nilai4_baik">

					<input type="radio" onchange="list4()" name ="list4_value" id="total_nilai4_baik" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								3.Inti dari improvement tersampaikan dengan langkah langkah yang benar
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai4_baik" name="total_nilai4" disabled>
						<option name="total_nilai4" >-</option>
						<option name="total_nilai4" value="9.9">9.9</option>
						<option name="total_nilai4" value="10.8">10.8</option>
						<option name="total_nilai4" value="11.7">11.7</option>
						<option name="total_nilai4" value="12.6">12.6</option>
						<option name="total_nilai4" value="13.5">13.5</option>
					</select>
					</div>

				</div>	

				<div class="wrap-input100 sub_submenu_style" id="nilai4_sangat_baik">

					<input type="radio" onchange="list4()" name ="list4_value" id="total_nilai4_sangat_baik" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								4. Inti dari improvement tersampaikan dengan langkah langkah yang benar dengan Menggunakan Video / Animasi / peraga yang tepat dan memperjelas kasus yang dihadapi 
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai4_sangat_baik" name="total_nilai4" disabled>
						<option name="total_nilai4" >-</option>
						<option name="total_nilai4" value="14.4">14.4</option>
						<option name="total_nilai4" value="15.3">15.3</option>
						<option name="total_nilai4" value="16.2">16.2</option>
						<option name="total_nilai4" value="17.1">17.1</option>
						<option name="total_nilai4" value="18">18</option>
					</select>
				</div>

				</div>

				</div>

				<!--================================= KEEMPAT ================================================-->

				<!--================================= KELIMA ================================================-->

				<div class="wrap-input100 sub_menu5 sub_menu_style"><label><h4> Keharmonisan penggunaan alat bantu</h4><div class="fas fa-arrow-down"></div></label>
				</div>

				<div class="list_submenu_5">

				<div class="wrap-input100 sub_submenu_style" id="nilai5_kurang">

					<input type="radio" onchange="list5()" name ="list5_value" id="total_nilai5_kurang" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 1. Tidak mendukung  dengan materi/topik
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
						<select id ="select_nilai5_kurang" name="total_nilai5" disabled>
							<option name="total_nilai5" >-</option>
							<option name="total_nilai5" value="1">1</option>
							<option name="total_nilai5" value="2">2</option>
							<option name="total_nilai5" value="3">3</option>
							<option name="total_nilai5" value="4">4</option>
							<option name="total_nilai5" value="5">5</option>
						</select>
					</div>

				</div>

				<div class="wrap-input100 sub_submenu_style" id="nilai5_cukup">

					<input type="radio" onchange="list5()" name ="list5_value" id="total_nilai5_cukup" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								2. Kurang mendukung  dalam penyampaian materi/topik
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai5_cukup" name="total_nilai5" disabled>
						<option name="total_nilai5" >-</option>
						<option name="total_nilai5" value="6">6</option>
						<option name="total_nilai5" value="7">7</option>
						<option name="total_nilai5" value="8">8</option>
						<option name="total_nilai5" value="9">9</option>
						<option name="total_nilai5" value="10">10</option>
					</select>
					</div>

				</div>	

				<div class="wrap-input100 sub_submenu_style" id="nilai5_baik">

					<input type="radio" onchange="list5()" name ="list5_value" id="total_nilai5_baik" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								3. Saling mengisi dan membantu dalam penyampaian materi / topik  dan membantu 
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai5_baik" name="total_nilai5" disabled>
						<option name="total_nilai5" >-</option>
						<option name="total_nilai5" value="11">11</option>
						<option name="total_nilai5" value="12">12</option>
						<option name="total_nilai5" value="13">13</option>
						<option name="total_nilai5" value="14">14</option>
						<option name="total_nilai5" value="15">15</option>
					</select>
					</div>

				</div>	

				</div>

				<!--================================= KELIMA ================================================-->

				<!--================================= KEENAM ================================================-->

				<div class="wrap-input100 sub_menu6 sub_menu_style"><label><h4> Kerjasama team dalam presentasi (Pengelolaan presentasi)</h4><div class="fas fa-arrow-down"></div> </label>
				</div>

				<div class="list_submenu_6">

				<div class="wrap-input100 sub_submenu_style" id="nilai6_kurang">

					<input type="radio" onchange="list6()" name ="list6_value" id="total_nilai6_kurang" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 1. Pembagian peran hanya juru bicara yang mendominasi presentasi
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
						<select id ="select_nilai6_kurang" name="total_nilai6" disabled>
							<option name="total_nilai6" >-</option>
							<option name="total_nilai6" value="1">1</option>
							<option name="total_nilai6" value="2">2</option>
							<option name="total_nilai6" value="3">3</option>
							<option name="total_nilai6" value="4">4</option>
							<option name="total_nilai6" value="5">5</option>
						</select>
					</div>

				</div>

				<div class="wrap-input100 sub_submenu_style" id="nilai6_cukup">

					<input type="radio" onchange="list6()" name ="list6_value" id="total_nilai6_cukup" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								2. semua anggota berperan dan proaktif 
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai6_cukup" name="total_nilai6" disabled>
						<option name="total_nilai6" >-</option>
						<option name="total_nilai6" value="6">6</option>
						<option name="total_nilai6" value="7">7</option>
						<option name="total_nilai6" value="8">8</option>
						<option name="total_nilai6" value="9">9</option>
						<option name="total_nilai6" value="10">10</option>
					</select>
					</div>

				</div>	

				</div>

				<!--================================= KEENAM ================================================-->

				<!--================================= KETUJUH ================================================-->

				<div class="wrap-input100 sub_menu7 sub_menu_style"><label><h4> Ketepatan waktu presentasi (Score by timekeeper)</h4><div class="fas fa-arrow-down"></div></label></div>

				<div class="list_submenu_7">

				<div class="wrap-input100 sub_submenu_style" id="nilai7_kurang">

					<input type="radio" onchange="list7()" name ="list7_value" id="total_nilai7_kurang" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 1. < 9:30 - > 10:30
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
						<select id ="select_nilai7_kurang" name="total_nilai7" disabled>
							<option name="total_nilai7" >-</option>
							<option name="total_nilai7" value="0.46">0.46</option>
							<option name="total_nilai7" value="0.92">0.92</option>
							<option name="total_nilai7" value="1.38">1.38</option>
							<option name="total_nilai7" value="1.84">1.84</option>
							<option name="total_nilai7" value="2.3">2.3</option>
						</select>
					</div>

				</div>

				<div class="wrap-input100 sub_submenu_style" id="nilai7_cukup">

					<input type="radio" onchange="list7()" name ="list7_value" id="total_nilai7_cukup" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								2.  9:30 - 10:30
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai7_cukup" name="total_nilai7" disabled>
						<option name="total_nilai7" >-</option>
						<option name="total_nilai7" value="2.76">2.76</option>
						<option name="total_nilai7" value="3.22">3.22</option>
						<option name="total_nilai7" value="3.68">3.68</option>
						<option name="total_nilai7" value="4.14">4.14</option>
						<option name="total_nilai7" value="4.6">4.6</option>
					</select>
					</div>

				</div>	

				<div class="wrap-input100 sub_submenu_style" id="nilai7_baik">

					<input type="radio" onchange="list7()" name ="list7_value" id="total_nilai7_baik" style="width: 10%;">

					<div>
						<label style="text-align: left; width: 90%;">
							<h8> 
								3.  9:50 - 10:10
							</h8>
						</label>
					</div>

					<div style="padding-bottom: 10px;">
					<select id ="select_nilai7_baik" name="total_nilai7" disabled>
						<option name="total_nilai7" >-</option>
						<option name="total_nilai7" value="5.06">5.06</option>
						<option name="total_nilai7" value="5.52">5.52</option>
						<option name="total_nilai7" value="5.98">5.98</option>
						<option name="total_nilai7" value="6.54">6.54</option>
						<option name="total_nilai7" value="7">7</option>
					</select>
					</div>

				</div>

				</div>

				<!--================================= KETUJUH ================================================-->

				<span class="contact100-form-title">
					KOLOM KOMENTAR
				</span>

				<div class="wrap-input100">
					<textarea class="input100" id = "komentar" value="" name="message" placeholder="Masukan Komentar..."></textarea>
				</div>

				<div class="container-contact100-form-btn">
					<div class="wrap-contact100-form-btn">
						<div class="contact100-form-bgbtn"></div>
						<button class="contact100-form-btn" onclick="input_nilai()">
							Kirim Komentar
						</button>
					</div>
				</div>
			
		</div>
	</div>



	<div id="dropDownSelect1"></div>

<!--===============================================================================================-->
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>

	<script src="js/input_nilai.js"></script>

	<script src="../assets/js/recheck_form_presentasi.js"></script>

	<script src="../assets/js/style_form_presentasi.js"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>

</body>
</html>
