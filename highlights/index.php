<?php
session_start();
if(isset($_SESSION['username'])){

?>

<!DOCTYPE HTML>
<!--
	Highlights by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Home</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
	</head>
	<body class="is-preload">
		<!-- Header -->
			<section id="header">
				<header class="major">
					<h1>QCC LOGISTIK 2021</h1>
					<p>Home Screen</p>
				</header>
				<div class="container">
					<ul class="actions special">
						<li><a href="#one" class="button primary scrolly">Begin</a></li>
					</ul>
				</div>
			</section>

		<!-- One -->
			<section id="one" class="main special">
				<div class="container">
					<span class="image fit primary"><img src="images/pic01.jpg" alt="" /></span>
					<div class="content">
						<header class="major">
							<h2>Profil Akun</h2>
						</header>
						<p>Nama : <?php echo $_SESSION['nama_juri'];?></p>
						<p>NIM :  <?php echo $_SESSION['username'];?></p>
						<p>Status :  <?php echo $_SESSION['status'];?></p>
					</div>
					<a href="#two" class="goto-next scrolly">Next</a>
				</div>
			</section>

		<!-- Two -->
			<section id="two" class="main special">
				<div class="container">
					<span class="image fit primary"><img src="images/pic02.jpg" alt="" /></span>
					<div class="content">
						<header class="major">
							<h2>DAFTAR HISTORY PENJURIAN</h2>
							<?php

							include '../conn.php';
							$nip = $_SESSION['username'];

							if($_SESSION['status'] == "admin"){

							}else{
								if($_SESSION['status'] == 'Juri Lapangan'){
								$tabel = 'data_nilai';
							}else if ($_SESSION['status'] == 'Juri Presentasi'){
								$tabel = 'data_nilai_presentasi';
							}else{

							}
							$sql = "SELECT * FROM ".$tabel." WHERE  username = '$nip'";

							$result = mysqli_query($con,$sql);

							if($result){
							if(mysqli_num_rows($result) > 0){
								while($row = mysqli_fetch_assoc($result)){
									echo "<h4>- ".$row['circle_team']." </a></h4>";
								}
							}
						}else{
							echo mysqli_error($con);
						}
							}

							?>
							<h6>(Akun juri diperlukan)</h6>
						</header>
						<ul class="icons-grid">
							<li <?php if($_SESSION['status'] == "Juri Lapangan"){}else{echo 'style="display:none";';}?> >
								<span class="icon solid major fa-pencil-alt"></span>
								<h3><a href="../contactform/index.php">FORM PENILAIAN LAPANGAN</a></h3>
							</li>
							<li <?php if($_SESSION['status'] == "Juri Presentasi"){}else{echo 'style="display:none";';}?> >
								<span class="icon solid major fa-pencil-alt"></span>
								<h3><a href="../penilaian_presentasi/index.php">FORM PENILAIAN PRESENTASI</a></h3>
							</li>
							<li>
								<span class="icon solid major fa-code"></span>
								<h3><a href="../responsive/index.php">HASIL PENILAIAN</a> <h6>(Akun admin diperlukan)</h6></h3>
							</li>

						</ul>
					</div>
					<a href="#footer" class="goto-next scrolly">Next</a>
				</div>
			</section>

		<!-- Footer -->
			<section id="footer">
				<div class="container">
					<header class="major">
						<h2>Kritik dan Saran</h2>
					</header>
					<form method="post" action="#">
						<div class="row gtr-uniform">
							<div class="col-12"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
							<div class="col-12">
								<ul class="actions special">
									<li><input type="submit" value="Kirim Pesan" class="primary" /></li>
								</ul>
							</div>
						</div>
					</form>
				</div>
				<footer>
					<ul class="icons">
						<li><a href="#" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
						<li><a href="#" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
						<li><a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
						<li><a href="#" class="icon brands alt fa-dribbble"><span class="label">Dribbble</span></a></li>
						<li><a href="#" class="icon solid alt fa-envelope"><span class="label">Email</span></a></li>
					</ul>
					<ul class="copyright">
						<li>&copy; QCC LOGISTIK 2022</li>
					</ul>
				</footer>
			</section>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>

<?php

}else{
	header("Location: index.php");
}

?>