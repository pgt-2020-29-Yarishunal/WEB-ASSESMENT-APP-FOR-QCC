<?php
session_start();

include '../conn.php';

$nama_team = $_GET['team'];
$nip_juri = $_GET['nip'];
$kriteria_A1 = $_GET['kriteria_A1'];
$kriteria_A2 = $_GET['kriteria_A2'];
$kriteria_A3 = $_GET['kriteria_A3'];
$kriteria_B1 = $_GET['kriteria_B1'];
$kriteria_B2 = $_GET['kriteria_B2'];
$kriteria_B3 = $_GET['kriteria_B3'];
$kriteria_C1 = $_GET['kriteria_C1'];
$kriteria_C2 = $_GET['kriteria_C2'];
$kriteria_C3 = $_GET['kriteria_C3'];
$kriteria_D1 = $_GET['kriteria_D1'];
$kriteria_D2 = $_GET['kriteria_D2'];
$kriteria_E1 = $_GET['kriteria_E1'];
$kriteria_F1 = $_GET['kriteria_F1'];
$kriteria_G1 = $_GET['kriteria_G1'];
$kriteria_H1 = $_GET['kriteria_H1'];
$kriteria_H2 = $_GET['kriteria_H2'];
$kriteria_H3 = $_GET['kriteria_H3'];
$kriteria_H4 = $_GET['kriteria_H4'];
$kriteria_I1 = $_GET['kriteria_I1'];
$kriteria_J1 = $_GET['kriteria_J1'];
$kriteria_J2 = $_GET['kriteria_J2'];
$kriteria_J3 = $_GET['kriteria_J3'];
$kriteria_K1 = $_GET['kriteria_K1'];
$kriteria_K2 = $_GET['kriteria_K2'];
$kriteria_L1 = $_GET['kriteria_L1'];
$kriteria_L2 = $_GET['kriteria_L2'];
$kriteria_M1 = $_GET['kriteria_M1'];
$kriteria_N1 = $_GET['kriteria_N1'];
$kriteria_N2 = $_GET['kriteria_N2'];
$kriteria_O1 = $_GET['kriteria_O1'];
$kriteria_O2 = $_GET['kriteria_O2'];
$kriteria_O3 = $_GET['kriteria_O3'];
$kriteria_P1 = $_GET['kriteria_P1'];
$kriteria_Q1 = $_GET['kriteria_Q1'];
$kriteria_Q2 = $_GET['kriteria_Q2'];
$kriteria_Q3 = $_GET['kriteria_Q3'];
$kriteria_Q4 = $_GET['kriteria_Q4'];
$kriteria_Q5 = $_GET['kriteria_Q5'];
$kriteria_R1 = $_GET['kriteria_R1'];
$kriteria_R2 = $_GET['kriteria_R2'];
$kriteria_S1 = $_GET['kriteria_S1'];
$komentar = $_GET['komentar'];

$sql = "INSERT INTO data_nilai(`username`,`circle_team`, `kriteria_A1`, `kriteria_A2`, `kriteria_A3`, `kriteria_B1`, `kriteria_B2`, `kriteria_B3`, `kriteria_C1`, `kriteria_C2`, `kriteria_C3`, `kriteria_D1`, `kriteria_D2`, `kriteria_E1`, `kriteria_F1`, `kriteria_G1`, `kriteria_H1`, `kriteria_H2`, `kriteria_H3`, `kriteria_H4`, `kriteria_I1`, `kriteria_J1`, `kriteria_J2`, `kriteria_J3`, `kriteria_K1`, `kriteria_K2`, `kriteria_L1`, `kriteria_L2`, `kriteria_M1`, `kriteria_N1`, `kriteria_N2`, `kriteria_O1`, `kriteria_O2`, `kriteria_O3`, `kriteria_P1`, `kriteria_Q1`, `kriteria_Q2`, `kriteria_Q3`, `kriteria_Q4`, `kriteria_Q5`, `kriteria_R1`, `kriteria_R2`, `kriteria_S1`,`komen`) VALUES ('$nip_juri','$nama_team','$kriteria_A1','$kriteria_A2','$kriteria_A3','$kriteria_B1','$kriteria_B2','$kriteria_B3','$kriteria_C1','$kriteria_C2','$kriteria_C3','$kriteria_D1','$kriteria_D2','$kriteria_E1','$kriteria_F1','$kriteria_G1','$kriteria_H1','$kriteria_H2','$kriteria_H3','$kriteria_H4','$kriteria_I1','$kriteria_J1','$kriteria_J2','$kriteria_J3','$kriteria_K1','$kriteria_K2','$kriteria_L1','$kriteria_L2','$kriteria_M1','$kriteria_N1','$kriteria_N2','$kriteria_O1','$kriteria_O2','$kriteria_O3','$kriteria_P1','$kriteria_Q1','$kriteria_Q2','$kriteria_Q3','$kriteria_Q4','$kriteria_Q5','$kriteria_R1','$kriteria_R2','$kriteria_S1','$komentar');";

$sql1 = "SELECT * FROM data_nilai WHERE username = '$nip_juri' AND circle_team = '$nama_team'";

$result1 = mysqli_query($con,$sql1);

if(mysqli_num_rows($result1)>0){

	mysqli_query($con,"DELETE FROM data_nilai WHERE username = '$nip_juri' AND circle_team = '$nama_team'");
	
$result = mysqli_query($con,$sql);
if($result){
	$data = "Data Berhasil di input";
}else{
	$data = "Data Gagal di input";
}

}else{

$result = mysqli_query($con,$sql);
if($result){
	$data = "Data Berhasil di input";
}else{
	$data = "Data Gagal di input";
 }

}

echo $data ;

?>