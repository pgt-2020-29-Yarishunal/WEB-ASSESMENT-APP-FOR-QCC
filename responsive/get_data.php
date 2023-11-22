<?php

include '../conn.php';

$nama_team = $_GET['circle'];
$nip_juri = $_GET['nip'];
$penilaian = $_GET['jenis_penilaian'];

if($penilaian == "data_nilai_presentasi" || $penilaian == "data_nilai"){

if($nip_juri != "-" && $nama_team == "-"){

if($nip_juri == "All"){

$sql = "SELECT * FROM ".$penilaian.";";
$result = mysqli_query($con,$sql);

$data = array();

if($result){

while($row = mysqli_fetch_assoc($result)){

	$data[] = $row;

}

}else{
	$data = "";
}

}else{

$sql = "SELECT * FROM ".$penilaian." WHERE username = '$nip_juri';";
$result = mysqli_query($con,$sql);

$data = array();

if($result){

while($row = mysqli_fetch_assoc($result)){

	$data[] = $row;

}

}else{
	$data = "";
}

}

echo json_encode($data);

}else if($nama_team != "-" && $nip_juri == "-"){

if($nama_team == "All"){

$sql = "SELECT * FROM ".$penilaian.";";
$result = mysqli_query($con,$sql);

$data = array();

if($result){
while($row = mysqli_fetch_assoc($result)){

	$data[] = $row;

}
}else{
	$data = "";
}

}else{

$sql = "SELECT * FROM ".$penilaian." WHERE circle_team = '$nama_team';";
$result = mysqli_query($con,$sql);

$data = array();

if($result){
while($row = mysqli_fetch_assoc($result)){

	$data[] = $row;

}
}else{
	$data = "";
}

}

echo json_encode($data);


}else if($nip_juri != "-" && $nama_team != "-"){

if($nip_juri == "All" && $nama_team = "All"){

$sql = "SELECT * FROM ".$penilaian.";";
$result = mysqli_query($con,$sql);

$data = array();

if($result){
while($row = mysqli_fetch_assoc($result)){

	$data[] = $row;

}
}else{
	$data = "";
}

}else{

$sql = "SELECT * FROM ".$penilaian." WHERE username = '$nip_juri' AND circle_team = '$nama_team';";
$result = mysqli_query($con,$sql);

$data = array();

if($result){
while($row = mysqli_fetch_assoc($result)){

	$data[] = $row;

}
}else{
	$data = "";
}

}

echo json_encode($data);



}else{
	$data = "";
echo json_encode($data);
}

}else if($penilaian == "nilai_total"){

	if($nama_team == "All"){

	$sql = "SELECT * FROM data_nilai_presentasi;";
	$result = mysqli_query($con,$sql);
	$data = array();
	if($result){
	while($row = mysqli_fetch_assoc($result)){

	$data[] = $row;

	}
	}else{
	$data = "";
	}

	$sql1 = "SELECT * FROM data_nilai;";
	$result1 = mysqli_query($con,$sql1);
	$data1 = array();
	if($result1){
	while($row1 = mysqli_fetch_assoc($result1)){

	$data1[] = $row1;

	}
	}else{
	$data1 = "";
	}

	$data_total = array();
	$data_total = [$data,$data1];
	echo json_encode($data_total);

	}else{

	$sql = "SELECT * FROM data_nilai_presentasi WHERE circle_team = '$nama_team';";
	$result = mysqli_query($con,$sql);
	$data = array();
	if($result){
	while($row = mysqli_fetch_assoc($result)){

	$data[] = $row;

	}
	}else{
	$data = "";
	}

	$sql1 = "SELECT * FROM data_nilai WHERE circle_team = '$nama_team';";
	$result1 = mysqli_query($con,$sql1);
	$data1 = array();
	if($result1){
	while($row1 = mysqli_fetch_assoc($result1)){

	$data1[] = $row1;

	}
	}else{
	$data1 = "";
	}

	$data_total = array();
	$data_total = [$data,$data1];
	echo json_encode($data_total);

	}

}else{
$data = "";
echo json_encode($data);
}


?>