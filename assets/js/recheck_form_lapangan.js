
function recheck(){

var select_circle = document.getElementById('nama_circel');
var circle_team = document.getElementsByName('nama_circel')[select_circle.selectedIndex+1].value;
var nip_juri = document.getElementById('nip_juri').value;
var ajax = new XMLHttpRequest();
var method = "GET";
var url = "../contactform/get_data.php?team="+circle_team+"&nip="+nip_juri;
var statuss = true;

ajax.open(method,url,statuss);
ajax.send();

ajax.onreadystatechange = function(){

	if(this.readyState == 4 && this.status == 200){

		var data = JSON.parse(this.responseText);
		if(data.length > 0){

			var ans = confirm('Ada data yang telah dimasukkan, apakah anda ingin rekap data sebelumnya?');
			
			if(ans == true){
				//kriteria_A1
		if(data[0].kriteria_A1 == 0.3){
			document.getElementsByName('kriteria_A1')[0].checked=true;
			}else if(data[0].kriteria_A1 == 0.5){
			document.getElementsByName('kriteria_A1')[1].checked=true;
			}else if(data[0].kriteria_A1 == 0.75){
			document.getElementsByName('kriteria_A1')[2].checked=true;
			}else if(data[0].kriteria_A1 == 1){
			document.getElementsByName('kriteria_A1')[3].checked=true;
			}else{
			var kriteria_A1 = "";
		}
		//kriteria_A2
		if(data[0].kriteria_A2 == 0.3){
			document.getElementsByName('kriteria_A2')[0].checked=true;
			}else if(data[0].kriteria_A2== 0.5){
			document.getElementsByName('kriteria_A2')[1].checked=true;
			}else if(data[0].kriteria_A2 == 0.75){
			document.getElementsByName('kriteria_A2')[2].checked=true;
			}else if(data[0].kriteria_A2 == 1){
			document.getElementsByName('kriteria_A2')[3].checked=true;
			}else{
			var kriteria_A1 = "";
		}
		//kriteria_A3
		if(data[0].kriteria_A3 == 0.3){
			document.getElementsByName('kriteria_A3')[0].checked=true;
			}else if(data[0].kriteria_A3 == 0.5){
			document.getElementsByName('kriteria_A3')[1].checked=true;
			}else if(data[0].kriteria_A3 == 0.75){
			document.getElementsByName('kriteria_A3')[2].checked=true;
			}else if(data[0].kriteria_A3 == 1){
			document.getElementsByName('kriteria_A3')[3].checked=true;
			}else{
			var kriteria_A3 = "";
		}

		//kriteria_B1
		if(data[0].kriteria_B1 == 0.3){
			document.getElementsByName('kriteria_B1')[0].checked=true;
			}else if(data[0].kriteria_B1 == 0.5){
			document.getElementsByName('kriteria_B1')[1].checked=true;
			}else if(data[0].kriteria_B1 == 0.75){
			document.getElementsByName('kriteria_B1')[2].checked=true;
			}else if(data[0].kriteria_B1 == 1){
			document.getElementsByName('kriteria_B1')[3].checked=true;
			}else{
			var kriteria_B1 = "";
		}
		//kriteria_B2
		if(data[0].kriteria_B2 == 0.3){
			document.getElementsByName('kriteria_B2')[0].checked=true;
			}else if(data[0].kriteria_B2== 0.5){
			document.getElementsByName('kriteria_B2')[1].checked=true;
			}else if(data[0].kriteria_B2 == 0.75){
			document.getElementsByName('kriteria_B2')[2].checked=true;
			}else if(data[0].kriteria_B2 == 1){
			document.getElementsByName('kriteria_B2')[3].checked=true;
			}else{
			var kriteria_B2 = "";
		}
		//kriteria_B3
		if(data[0].kriteria_B3 == 0.3){
			document.getElementsByName('kriteria_B3')[0].checked=true;
			}else if(data[0].kriteria_B3 == 0.5){
			document.getElementsByName('kriteria_B3')[1].checked=true;
			}else if(data[0].kriteria_B3 == 0.75){
			document.getElementsByName('kriteria_B3')[2].checked=true;
			}else if(data[0].kriteria_B3 == 1){
			document.getElementsByName('kriteria_B3')[3].checked=true;
			}else{
			var kriteria_B3 = "";
		}

		//kriteria_C1
		if(data[0].kriteria_C1 == 0.3){
			document.getElementsByName('kriteria_C1')[0].checked=true;
			}else if(data[0].kriteria_C1 == 0.5){
			document.getElementsByName('kriteria_C1')[1].checked=true;
			}else if(data[0].kriteria_C1 == 0.75){
			document.getElementsByName('kriteria_C1')[2].checked=true;
			}else if(data[0].kriteria_C1 == 1){
			document.getElementsByName('kriteria_C1')[3].checked=true;
			}else{
			var kriteria_C1 = "";
		}
		//kriteria_C2
		if(data[0].kriteria_B2 == 0.3){
			document.getElementsByName('kriteria_C2')[0].checked=true;
			}else if(data[0].kriteria_C2== 0.5){
			document.getElementsByName('kriteria_C2')[1].checked=true;
			}else if(data[0].kriteria_C2 == 0.75){
			document.getElementsByName('kriteria_C2')[2].checked=true;
			}else if(data[0].kriteria_C2 == 1){
			document.getElementsByName('kriteria_C2')[3].checked=true;
			}else{
			var kriteria_C2 = "";
		}
		//kriteria_C3
		if(data[0].kriteria_C3 == 0.3){
			document.getElementsByName('kriteria_C3')[0].checked=true;
			}else if(data[0].kriteria_C3 == 0.5){
			document.getElementsByName('kriteria_C3')[1].checked=true;
			}else if(data[0].kriteria_C3 == 0.75){
			document.getElementsByName('kriteria_C3')[2].checked=true;
			}else if(data[0].kriteria_C3 == 1){
			document.getElementsByName('kriteria_C3')[3].checked=true;
			}else{
			var kriteria_C3 = "";
		}
		//kriteria_D1
		if(data[0].kriteria_C1 == 0.3){
			document.getElementsByName('kriteria_D1')[0].checked=true;
			}else if(data[0].kriteria_C1 == 0.5){
			document.getElementsByName('kriteria_D1')[1].checked=true;
			}else if(data[0].kriteria_C1 == 0.75){
			document.getElementsByName('kriteria_D1')[2].checked=true;
			}else if(data[0].kriteria_C1 == 1){
			document.getElementsByName('kriteria_D1')[3].checked=true;
			}else{
			var kriteria_D1 = "";
		}
		//kriteria_D2
		if(data[0].kriteria_D2 == 0.3){
			document.getElementsByName('kriteria_D2')[0].checked=true;
			}else if(data[0].kriteria_D2== 0.5){
			document.getElementsByName('kriteria_D2')[1].checked=true;
			}else if(data[0].kriteria_D2 == 0.75){
			document.getElementsByName('kriteria_D2')[2].checked=true;
			}else if(data[0].kriteria_D2 == 1){
			document.getElementsByName('kriteria_D2')[3].checked=true;
			}else{
			var kriteria_D2 = "";
		}
		//kriteria_E1
		if(data[0].kriteria_D2 == 0.6){
			document.getElementsByName('kriteria_E1')[0].checked=true;
			}else if(data[0].kriteria_E1== 1){
			document.getElementsByName('kriteria_E1')[1].checked=true;
			}else if(data[0].kriteria_E1 == 1.5){
			document.getElementsByName('kriteria_E1')[2].checked=true;
			}else if(data[0].kriteria_E1 == 2){
			document.getElementsByName('kriteria_E1')[3].checked=true;
			}else{
			var kriteria_E1 = "";
		}
		//kriteria_F1
		if(data[0].kriteria_F1 == 0.6){
			document.getElementsByName('kriteria_F1')[0].checked=true;
			}else if(data[0].kriteria_F1== 1){
			document.getElementsByName('kriteria_F1')[1].checked=true;
			}else if(data[0].kriteria_F1 == 1.5){
			document.getElementsByName('kriteria_F1')[2].checked=true;
			}else if(data[0].kriteria_F1 == 2){
			document.getElementsByName('kriteria_F1')[3].checked=true;
			}else{
			var kriteria_F1 = "";
		}
		//kriteria_G1
		if(data[0].kriteria_G1 == 0.6){
			document.getElementsByName('kriteria_G1')[0].checked=true;
			}else if(data[0].kriteria_G1== 1){
			document.getElementsByName('kriteria_G1')[1].checked=true;
			}else if(data[0].kriteria_G1 == 1.5){
			document.getElementsByName('kriteria_G1')[2].checked=true;
			}else if(data[0].kriteria_G1 == 2){
			document.getElementsByName('kriteria_G1')[3].checked=true;
			}else{
			var kriteria_G1 = "";
		}
		//kriteria_H1
		if(data[0].kriteria_H1 == 0.3){
			document.getElementsByName('kriteria_H1')[0].checked=true;
			}else if(data[0].kriteria_H1== 0.5){
			document.getElementsByName('kriteria_H1')[1].checked=true;
			}else if(data[0].kriteria_H1 == 0.75){
			document.getElementsByName('kriteria_H1')[2].checked=true;
			}else if(data[0].kriteria_H1 == 1){
			document.getElementsByName('kriteria_H1')[3].checked=true;
			}else{
			var kriteria_H1 = "";
		}
		//kriteria_H2
		if(data[0].kriteria_D2 == 0.3){
			document.getElementsByName('kriteria_H2')[0].checked=true;
			}else if(data[0].kriteria_H2== 0.5){
			document.getElementsByName('kriteria_H2')[1].checked=true;
			}else if(data[0].kriteria_H2 == 0.75){
			document.getElementsByName('kriteria_H2')[2].checked=true;
			}else if(data[0].kriteria_H2 == 1){
			document.getElementsByName('kriteria_H2')[3].checked=true;
			}else{
			var kriteria_H2 = "";
		}
		//kriteria_H3
		if(data[0].kriteria_H3 == 0.3){
			document.getElementsByName('kriteria_H3')[0].checked=true;
			}else if(data[0].kriteria_H3== 0.5){
			document.getElementsByName('kriteria_H3')[1].checked=true;
			}else if(data[0].kriteria_H3 == 0.75){
			document.getElementsByName('kriteria_H3')[2].checked=true;
			}else if(data[0].kriteria_H3 == 1){
			document.getElementsByName('kriteria_H3')[3].checked=true;
			}else{
			var kriteria_H3 = "";
		}
		//kriteria_H4
		if(data[0].kriteria_H4 == 0.3){
			document.getElementsByName('kriteria_H4')[0].checked=true;
			}else if(data[0].kriteria_H4== 0.5){
			document.getElementsByName('kriteria_H4')[1].checked=true;
			}else if(data[0].kriteria_H4 == 0.75){
			document.getElementsByName('kriteria_H4')[2].checked=true;
			}else if(data[0].kriteria_H4 == 1){
			document.getElementsByName('kriteria_H4')[3].checked=true;
			}else{
			var kriteria_H4 = "";
		}
		//kriteria_I1
		if(data[0].kriteria_I1 == 0.6){
			document.getElementsByName('kriteria_I1')[0].checked=true;
			}else if(data[0].kriteria_I1== 1){
			document.getElementsByName('kriteria_I1')[1].checked=true;
			}else if(data[0].kriteria_I1 == 1.5){
			document.getElementsByName('kriteria_I1')[2].checked=true;
			}else if(data[0].kriteria_I1 == 2){
			document.getElementsByName('kriteria_I1')[3].checked=true;
			}else{
			var kriteria_I1 = "";
		}
		//kriteria_J1
		if(data[0].kriteria_J1 == 0.3){
			document.getElementsByName('kriteria_J1')[0].checked=true;
			}else if(data[0].kriteria_J1== 0.5){
			document.getElementsByName('kriteria_J1')[1].checked=true;
			}else if(data[0].kriteria_J1 == 0.75){
			document.getElementsByName('kriteria_J1')[2].checked=true;
			}else if(data[0].kriteria_J1 == 1){
			document.getElementsByName('kriteria_J1')[3].checked=true;
			}else{
			var kriteria_J1 = "";
		}
		//kriteria_J2
		if(data[0].kriteria_J2 == 0.3){
			document.getElementsByName('kriteria_J2')[0].checked=true;
			}else if(data[0].kriteria_J2== 0.5){
			document.getElementsByName('kriteria_J2')[1].checked=true;
			}else if(data[0].kriteria_J2 == 0.75){
			document.getElementsByName('kriteria_J2')[2].checked=true;
			}else if(data[0].kriteria_J2 == 1){
			document.getElementsByName('kriteria_J2')[3].checked=true;
			}else{
			var kriteria_H4 = "";
		}
		//kriteria_J3
		if(data[0].kriteria_J3 == 0.3){
			document.getElementsByName('kriteria_J3')[0].checked=true;
			}else if(data[0].kriteria_J3== 0.5){
			document.getElementsByName('kriteria_J3')[1].checked=true;
			}else if(data[0].kriteria_J3 == 0.75){
			document.getElementsByName('kriteria_J3')[2].checked=true;
			}else if(data[0].kriteria_J3 == 1){
			document.getElementsByName('kriteria_J3')[3].checked=true;
			}else{
			var kriteria_J3 = "";
		}
		//kriteria_K1
		if(data[0].kriteria_K1 == 0.6){
			document.getElementsByName('kriteria_K1')[0].checked=true;
			}else if(data[0].kriteria_K1== 1){
			document.getElementsByName('kriteria_K1')[1].checked=true;
			}else if(data[0].kriteria_K1 == 1.5){
			document.getElementsByName('kriteria_K1')[2].checked=true;
			}else if(data[0].kriteria_K1 == 2){
			document.getElementsByName('kriteria_K1')[3].checked=true;
			}else{
			var kriteria_K1 = "";
		}
		//kriteria_K2
		if(data[0].kriteria_K2 == 0.6){
			document.getElementsByName('kriteria_K2')[0].checked=true;
			}else if(data[0].kriteria_K2== 1){
			document.getElementsByName('kriteria_K2')[1].checked=true;
			}else if(data[0].kriteria_K2 == 1.5){
			document.getElementsByName('kriteria_K2')[2].checked=true;
			}else if(data[0].kriteria_K2 == 2){
			document.getElementsByName('kriteria_K2')[3].checked=true;
			}else{
			var kriteria_K2 = "";
		}
		//kriteria_L1
		if(data[0].kriteria_L1 == 3){
			document.getElementsByName('kriteria_L1')[0].checked=true;
			}else if(data[0].kriteria_L1== 5){
			document.getElementsByName('kriteria_L1')[1].checked=true;
			}else if(data[0].kriteria_L1 == 7.5){
			document.getElementsByName('kriteria_L1')[2].checked=true;
			}else if(data[0].kriteria_L1 == 10){
			document.getElementsByName('kriteria_L1')[3].checked=true;
			}else{
			var kriteria_L1 = "";
		}
		//kriteria_L2
		if(data[0].kriteria_L2 == 3){
			document.getElementsByName('kriteria_L2')[0].checked=true;
			}else if(data[0].kriteria_L2== 5){
			document.getElementsByName('kriteria_L2')[1].checked=true;
			}else if(data[0].kriteria_L2 == 7.5){
			document.getElementsByName('kriteria_L2')[2].checked=true;
			}else if(data[0].kriteria_L2 == 10){
			document.getElementsByName('kriteria_L2')[3].checked=true;
			}else{
			var kriteria_L2 = "";
		}
		//kriteria_M1
		if(data[0].kriteria_M1 == 3){
			document.getElementsByName('kriteria_M1')[0].checked=true;
			}else if(data[0].kriteria_M1 == 5){
			document.getElementsByName('kriteria_M1')[1].checked=true;
			}else if(data[0].kriteria_M1 == 7.5){
			document.getElementsByName('kriteria_M1')[2].checked=true;
			}else if(data[0].kriteria_M1 == 10){
			document.getElementsByName('kriteria_M1')[3].checked=true;
			}else{
			var kriteria_M1 = "";
		}
		//kriteria_N1
		if(data[0].kriteria_N1 == 1.5){
			document.getElementsByName('kriteria_N1')[0].checked=true;
			}else if(data[0].kriteria_N1 == 2.5){
			document.getElementsByName('kriteria_N1')[1].checked=true;
			}else if(data[0].kriteria_N1 == 3.75){
			document.getElementsByName('kriteria_N1')[2].checked=true;
			}else if(data[0].kriteria_N1 == 5){
			document.getElementsByName('kriteria_N1')[3].checked=true;
			}else{
			var kriteria_N1 = "";
		}
		//kriteria_N2
		if(data[0].kriteria_N2 == 1.5){
			document.getElementsByName('kriteria_N2')[0].checked=true;
			}else if(data[0].kriteria_N2 == 2.5){
			document.getElementsByName('kriteria_N2')[1].checked=true;
			}else if(data[0].kriteria_N2 == 3.75){
			document.getElementsByName('kriteria_N2')[2].checked=true;
			}else if(data[0].kriteria_N2 == 5){
			document.getElementsByName('kriteria_N2')[3].checked=true;
			}else{
			var kriteria_N2 = "";
		}
		//kriteria_O1
		if(data[0].kriteria_O1 == 1){
			document.getElementsByName('kriteria_O1')[0].checked=true;
			}else if(data[0].kriteria_O1 == 1.6){
			document.getElementsByName('kriteria_O1')[1].checked=true;
			}else if(data[0].kriteria_O1 == 2.5){
			document.getElementsByName('kriteria_O1')[2].checked=true;
			}else if(data[0].kriteria_O1 == 3.4){
			document.getElementsByName('kriteria_O1')[3].checked=true;
			}else{
			var kriteria_O1 = "";
		}
		//kriteria_O2
		if(data[0].kriteria_O2 == 1){
			document.getElementsByName('kriteria_O2')[0].checked=true;
			}else if(data[0].kriteria_O2 == 1.7){
			document.getElementsByName('kriteria_O2')[1].checked=true;
			}else if(data[0].kriteria_O2 == 2.5){
			document.getElementsByName('kriteria_O2')[2].checked=true;
			}else if(data[0].kriteria_O2 == 3.3){
			document.getElementsByName('kriteria_O2')[3].checked=true;
			}else{
			var kriteria_O2 = "";
		}
		//kriteria_O3
		if(data[0].kriteria_O3 == 1){
			document.getElementsByName('kriteria_O3')[0].checked=true;
			}else if(data[0].kriteria_O3 == 1.7){
			document.getElementsByName('kriteria_O3')[1].checked=true;
			}else if(data[0].kriteria_O3 == 2.5){
			document.getElementsByName('kriteria_O3')[2].checked=true;
			}else if(data[0].kriteria_O3 == 3.3){
			document.getElementsByName('kriteria_O3')[3].checked=true;
			}else{
			var kriteria_O3 = "";
		}
		//kriteria_P1
		if(data[0].kriteria_P1 == 3){
			document.getElementsByName('kriteria_P1')[0].checked=true;
			}else if(data[0].kriteria_P1 == 5){
			document.getElementsByName('kriteria_P1')[1].checked=true;
			}else if(data[0].kriteria_P1 == 7.5){
			document.getElementsByName('kriteria_P1')[2].checked=true;
			}else if(data[0].kriteria_P1 == 10){
			document.getElementsByName('kriteria_P1')[3].checked=true;
			}else{
			var kriteria_P1 = "";
		}

		//kriteria_Q1
		if(data[0].kriteria_Q1 == 0.3){
			document.getElementsByName('kriteria_Q1')[0].checked=true;
			}else if(data[0].kriteria_Q1 == 0.5){
			document.getElementsByName('kriteria_Q1')[1].checked=true;
			}else if(data[0].kriteria_Q1 == 0.75){
			document.getElementsByName('kriteria_Q1')[2].checked=true;
			}else if(data[0].kriteria_Q1 == 1){
			document.getElementsByName('kriteria_Q1')[3].checked=true;
			}else{
			var kriteria_Q1 = "";
		}
		//kriteria_Q2
		if(data[0].kriteria_Q2 == 0.3){
			document.getElementsByName('kriteria_Q2')[0].checked=true;
			}else if(data[0].kriteria_Q2 == 0.5){
			document.getElementsByName('kriteria_Q2')[1].checked=true;
			}else if(data[0].kriteria_Q2 == 0.75){
			document.getElementsByName('kriteria_Q2')[2].checked=true;
			}else if(data[0].kriteria_Q2 == 1){
			document.getElementsByName('kriteria_Q2')[3].checked=true;
			}else{
			var kriteria_Q2 = "";
		}
		//kriteria_Q3
		if(data[0].kriteria_Q3 == 0.3){
			document.getElementsByName('kriteria_Q3')[0].checked=true;
			}else if(data[0].kriteria_Q3 == 0.5){
			document.getElementsByName('kriteria_Q3')[1].checked=true;
			}else if(data[0].kriteria_Q3 == 0.75){
			document.getElementsByName('kriteria_Q3')[2].checked=true;
			}else if(data[0].kriteria_Q3 == 1){
			document.getElementsByName('kriteria_Q3')[3].checked=true;
			}else{
			var kriteria_A1 = "";
		}
		//kriteria_Q4
		if(data[0].kriteria_Q4 == 0.3){
			document.getElementsByName('kriteria_Q4')[0].checked=true;
			}else if(data[0].kriteria_Q4 == 0.5){
			document.getElementsByName('kriteria_Q4')[1].checked=true;
			}else if(data[0].kriteria_Q4 == 0.75){
			document.getElementsByName('kriteria_Q4')[2].checked=true;
			}else if(data[0].kriteria_Q4 == 1){
			document.getElementsByName('kriteria_Q4')[3].checked=true;
			}else{
			var kriteria_Q4 = "";
		}
		//kriteria_Q5
		if(data[0].kriteria_Q5 == 0.3){
			document.getElementsByName('kriteria_Q5')[0].checked=true;
			}else if(data[0].kriteria_Q5 == 0.5){
			document.getElementsByName('kriteria_Q5')[1].checked=true;
			}else if(data[0].kriteria_Q5 == 0.75){
			document.getElementsByName('kriteria_Q5')[2].checked=true;
			}else if(data[0].kriteria_Q5 == 1){
			document.getElementsByName('kriteria_Q5')[3].checked=true;
			}else{
			var kriteria_Q5 = "";
		}
		//kriteria_R1
		if(data[0].kriteria_R1 == 0.5){
			document.getElementsByName('kriteria_R1')[0].checked=true;
			}else if(data[0].kriteria_R1 == 0.75){
			document.getElementsByName('kriteria_R1')[1].checked=true;
			}else if(data[0].kriteria_R1 == 1.13){
			document.getElementsByName('kriteria_R1')[2].checked=true;
			}else if(data[0].kriteria_R1 == 1.5){
			document.getElementsByName('kriteria_R1')[3].checked=true;
			}else{
			var kriteria_R1 = "";
		}
		//kriteria_R2
		if(data[0].kriteria_R2 == 0.5){
			document.getElementsByName('kriteria_R2')[0].checked=true;
			}else if(data[0].kriteria_R2 == 0.75){
			document.getElementsByName('kriteria_R2')[1].checked=true;
			}else if(data[0].kriteria_R2 == 1.13){
			document.getElementsByName('kriteria_R2')[2].checked=true;
			}else if(data[0].kriteria_R2 == 1.5){
			document.getElementsByName('kriteria_R2')[3].checked=true;
			}else{
			var kriteria_R2 = "";
		}
		//kriteria_S1
		if(data[0].kriteria_S1 == 0.5){
			document.getElementsByName('kriteria_S1')[0].checked=true;
			}else if(data[0].kriteria_S1 == 1){
			document.getElementsByName('kriteria_S1')[1].checked=true;
			}else if(data[0].kriteria_S1 == 1.5){
			document.getElementsByName('kriteria_S1')[2].checked=true;
			}else if(data[0].kriteria_S1 == 2){
			document.getElementsByName('kriteria_S1')[3].checked=true;
			}else{
			var kriteria_S1 = "";
		}
		//komentar
		document.getElementById('komentar').value = data[0].komen

			}else{

			}
		}
		

		}
	}

}