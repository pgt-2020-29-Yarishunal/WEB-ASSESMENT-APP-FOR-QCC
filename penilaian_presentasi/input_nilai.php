<?php
session_start();

include '../conn.php';

$nama_team = $_GET['team'];
$nip_juri = $_GET['nip'];
$nilai1 = $_GET['nilai1'];
$nilai2 = $_GET['nilai2'];
$nilai3 = $_GET['nilai3'];
$nilai4 = $_GET['nilai4'];
$nilai5 = $_GET['nilai5'];
$nilai6 = $_GET['nilai6'];
$nilai7 = $_GET['nilai7'];
$komentar = $_GET['komentar'];

$sql = "INSERT INTO data_nilai_presentasi(`username`,`circle_team`,`nilai_1`, `nilai_2`, `nilai_3`, `nilai_4`, `nilai_5`, `nilai_6`, `nilai_7`,`komen`) VALUES ('$nip_juri','$nama_team','$nilai1','$nilai2','$nilai3','$nilai4','$nilai5','$nilai6','$nilai7','$komentar');";
$sql1 = "SELECT * FROM data_nilai_presentasi WHERE username = '$nip_juri' AND circle_team = '$nama_team'";

$result1 = mysqli_query($con,$sql1);

if(mysqli_num_rows($result1)>0){
	mysqli_query($con,"DELETE FROM data_nilai_presentasi WHERE username = '$nip_juri' AND circle_team = '$nama_team';");
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