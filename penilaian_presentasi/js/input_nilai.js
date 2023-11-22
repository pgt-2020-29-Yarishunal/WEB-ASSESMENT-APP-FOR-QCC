function input_nilai(){ 

var select_circle = document.getElementById('nama_circel');
var circle_team = document.getElementsByName('nama_circel')[select_circle.selectedIndex+1].value;
var nip_juri = document.getElementById('nip_juri').value;
var komentar = document.getElementById('komentar').value;
var nilai1_kurang = document.getElementById('select_nilai1_kurang');
var nilai1_cukup = document.getElementById('select_nilai1_cukup');
var nilai1_baik = document.getElementById('select_nilai1_baik');
var nilai1_sangat_baik = document.getElementById('select_nilai1_sangat_baik');
if(document.getElementById('total_nilai1_kurang').checked){
	var nilai_1 = document.getElementsByName('total_nilai1')[nilai1_kurang.selectedIndex+1].value;
}else if(document.getElementById('total_nilai1_cukup').checked){
	var nilai_1 = document.getElementsByName('total_nilai1')[nilai1_cukup.selectedIndex+8].value;
}else if(document.getElementById('total_nilai1_baik').checked){
	var nilai_1 = document.getElementsByName('total_nilai1')[nilai1_baik.selectedIndex+15].value;
}else if(document.getElementById('total_nilai1_sangat_baik').checked){
	var nilai_1 = document.getElementsByName('total_nilai1')[nilai1_sangat_baik.selectedIndex+22].value;
}else{
	var nilai_1 = "-";
}

var nilai2_kurang = document.getElementById('select_nilai2_kurang');
var nilai2_cukup = document.getElementById('select_nilai2_cukup');
var nilai2_baik = document.getElementById('select_nilai2_baik');
var nilai2_sangat_baik = document.getElementById('select_nilai2_sangat_baik');
if(document.getElementById('total_nilai2_kurang').checked){
	var nilai_2 = document.getElementsByName('total_nilai2')[nilai2_kurang.selectedIndex+1].value;
}else if(document.getElementById('total_nilai2_cukup').checked){
	var nilai_2 = document.getElementsByName('total_nilai2')[nilai2_cukup.selectedIndex+8].value;
}else if(document.getElementById('total_nilai2_baik').checked){
	var nilai_2 = document.getElementsByName('total_nilai2')[nilai2_baik.selectedIndex+15].value;
}else if(document.getElementById('total_nilai2_sangat_baik').checked){
	var nilai_2 = document.getElementsByName('total_nilai2')[nilai2_sangat_baik.selectedIndex+22].value;
}else{
	var nilai_2 = "-";
}

var nilai3_kurang = document.getElementById('select_nilai3_kurang');
var nilai3_cukup = document.getElementById('select_nilai3_cukup');
var nilai3_baik = document.getElementById('select_nilai3_baik');
var nilai3_sangat_baik = document.getElementById('select_nilai3_sangat_baik');
if(document.getElementById('total_nilai3_kurang').checked){
	var nilai_3 = document.getElementsByName('total_nilai3')[nilai3_kurang.selectedIndex+1].value;
}else if(document.getElementById('total_nilai3_cukup').checked){
	var nilai_3 = document.getElementsByName('total_nilai3')[nilai3_cukup.selectedIndex+8].value;
}else if(document.getElementById('total_nilai3_baik').checked){
	var nilai_3 = document.getElementsByName('total_nilai3')[nilai3_baik.selectedIndex+15].value;
}else if(document.getElementById('total_nilai3_sangat_baik').checked){
	var nilai_3 = document.getElementsByName('total_nilai3')[nilai3_sangat_baik.selectedIndex+22].value;
}else{
	var nilai_3 = "-";
}

var nilai4_kurang = document.getElementById('select_nilai4_kurang');
var nilai4_cukup = document.getElementById('select_nilai4_cukup');
var nilai4_baik = document.getElementById('select_nilai4_baik');
var nilai4_sangat_baik = document.getElementById('select_nilai4_sangat_baik');
if(document.getElementById('total_nilai4_kurang').checked){
	var nilai_4 = document.getElementsByName('total_nilai4')[nilai4_kurang.selectedIndex+1].value;
}else if(document.getElementById('total_nilai4_cukup').checked){
	var nilai_4 = document.getElementsByName('total_nilai4')[nilai4_cukup.selectedIndex+8].value;
}else if(document.getElementById('total_nilai4_baik').checked){
	var nilai_4 = document.getElementsByName('total_nilai4')[nilai4_baik.selectedIndex+15].value;
}else if(document.getElementById('total_nilai4_sangat_baik').checked){
	var nilai_4 = document.getElementsByName('total_nilai4')[nilai4_sangat_baik.selectedIndex+22].value;
}else{
	var nilai_4 = "-";
}

var nilai5_kurang = document.getElementById('select_nilai5_kurang');
var nilai5_cukup = document.getElementById('select_nilai5_cukup');
var nilai5_baik = document.getElementById('select_nilai5_baik');
if(document.getElementById('total_nilai5_kurang').checked){
	var nilai_5 = document.getElementsByName('total_nilai5')[nilai5_kurang.selectedIndex+1].value;
}else if(document.getElementById('total_nilai5_cukup').checked){
	var nilai_5 = document.getElementsByName('total_nilai5')[nilai5_cukup.selectedIndex+8].value;
}else if(document.getElementById('total_nilai5_baik').checked){
	var nilai_5 = document.getElementsByName('total_nilai5')[nilai5_baik.selectedIndex+15].value;
}else{
	var nilai_5 = "-";
}

var nilai6_kurang = document.getElementById('select_nilai6_kurang');
var nilai6_cukup = document.getElementById('select_nilai6_cukup');
if(document.getElementById('total_nilai6_kurang').checked){
	var nilai_6 = document.getElementsByName('total_nilai6')[nilai6_kurang.selectedIndex+1].value;
}else if(document.getElementById('total_nilai6_cukup').checked){
	var nilai_6 = document.getElementsByName('total_nilai6')[nilai6_cukup.selectedIndex+8].value;
}else{
	var nilai_6 = "-";
}

var nilai7_kurang = document.getElementById('select_nilai7_kurang');
var nilai7_cukup = document.getElementById('select_nilai7_cukup');
var nilai7_baik = document.getElementById('select_nilai7_baik');
if(document.getElementById('total_nilai7_kurang').checked){
	var nilai_7 = document.getElementsByName('total_nilai7')[nilai7_kurang.selectedIndex+1].value;
}else if(document.getElementById('total_nilai7_cukup').checked){
	var nilai_7 = document.getElementsByName('total_nilai7')[nilai7_cukup.selectedIndex+8].value;
}else if(document.getElementById('total_nilai7_baik').checked){
	var nilai_7 = document.getElementsByName('total_nilai7')[nilai7_baik.selectedIndex+15].value;
}else{
	var nilai_7 = "-";
}

var ajax = new XMLHttpRequest();
var method = "GET";
var url = "../penilaian_presentasi/input_nilai.php?team="+circle_team+"&nip="+nip_juri+"&nilai1="+nilai_1+"&nilai2="+nilai_2+"&nilai3="+nilai_3+"&nilai4="+nilai_4+"&nilai5="+nilai_5+"&nilai6="+nilai_6+"&nilai7="+nilai_7+"&komentar="+komentar;
var statuss = true;

if(circle_team != "-" && nilai_1 != "-" && nilai_2 != "-" && nilai_3 != "-" && nilai_4 != "-" && nilai_5 != "-" && nilai_6 != "-" && nilai_7 != "-" && komentar != ""){
	ajax.open(method,url,statuss);
	ajax.send();
	ajax.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		alert('Data Berhasil di Input!');
	}
	}
}else{
	var alertt = "";
	let list_nilai = [circle_team,nilai_1,nilai_2,nilai_3,nilai_4,nilai_5,nilai_6,nilai_7,komentar];
	let jenis_nilai = ["circle_team","Kriteria 1","Kriteria 2","Kriteria 3","Kriteria 4","Kriteria 5","Kriteria 6","Kriteria 7","Komentar"];
	alertt += 'Data Penjurian Belum Lengkap!';
	for (var a = 0; a < list_nilai.length; a++){
		if (list_nilai[a] == "-" ||list_nilai[a] == ""){
			alertt += '\n'+ '- ' + jenis_nilai[a];
		}
	}
	alert(alertt);
	
}

}