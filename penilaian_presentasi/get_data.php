<?php

include '../conn.php';

$nama_team = $_GET['team'];
$nip_juri = $_GET['nip'];

$sql = "SELECT * FROM data_nilai_presentasi WHERE username = '$nip_juri' AND circle_team = '$nama_team';";

$result = mysqli_query($con,$sql);

$data = array();

while($row = mysqli_fetch_assoc($result)){

	$data[] = $row;

}

echo json_encode($data);

?>