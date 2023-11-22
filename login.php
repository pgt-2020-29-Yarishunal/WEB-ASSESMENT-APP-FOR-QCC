<?php
session_start();
include 'conn.php';

$user = $_POST['user'];
$pass = $_POST['pass'];

$sql = "SELECT * FROM user WHERE user = '$user';";

$result = mysqli_query($con,$sql);

if(mysqli_num_rows($result) > 0){
	$row = mysqli_fetch_assoc($result);
	if($row['user'] == $user && $row['pass'] == $pass){
	$_SESSION['username'] = $row['user'];
	$_SESSION['nama_juri'] = $row['nama'];
	$_SESSION['status'] = $row['status'];
		header('Location: highlights/index.php');
	}else{
		header('Location: index.php');
	}
}else{
		header('Location: index.php');
}

?>