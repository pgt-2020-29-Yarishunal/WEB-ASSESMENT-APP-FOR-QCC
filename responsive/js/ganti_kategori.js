function kategori(){
var ganti_penilaian = document.getElementById('by_penilaian');
var ganti_penilaian_opt = document.getElementsByName('jenis_penilaian')[ganti_penilaian.selectedIndex+1].value;
var ganti_juri = document.getElementById('by_juri');
var ganti_juri_opt = document.getElementsByName('nama_juri')[ganti_juri.selectedIndex+1].value;
var ganti_circle = document.getElementById('nama_circel');
var ganti_circle_opt = document.getElementsByName('nama_circel')[ganti_circle.selectedIndex+1].value;
var ajax = new XMLHttpRequest();
var method = "GET";
var url = "../responsive/get_data.php?jenis_penilaian="+ganti_penilaian_opt+"&nip="+ganti_juri_opt+"&circle="+ganti_circle_opt;
var statuss = true;
var html = "";
var html1 = "";
var html2 = "";
var html3 = "";
var tabel = document.getElementById('isi_tabel');
var tabel_lapangan = document.getElementById('isi_tabel2');
var tabel_presentasi = document.getElementById('isi_tabel3');
var tabel_total = document.getElementById('isi_tabel4');

ajax.open(method,url,statuss);
ajax.send();

ajax.onreadystatechange = function(){

	if(this.readyState == 4 && this.status == 200){
		var data = JSON.parse(this.responseText);
		if(data.length > 0){
			if(ganti_penilaian_opt == 'data_nilai'){

			for (var a = 0; a < data.length; a++){

				var nama_circle = data[a].circle_team;
				var nip_juri = data[a].username;
				if(nip_juri == '14-0382'){
					var nama_juri = 'FRISDA';
				}else if (nip_juri == '12-0816'){
					var nama_juri = 'MUHAMAD HANDIKI';
				}else if (nip_juri == '91-0842'){
					var nama_juri = 'HARRY PURWOTJAHYONO';
				}else if (nip_juri == '06-0063'){
					var nama_juri = 'INDRA TRI WINTOKO';
				}
				var total_krit_lap_1 = parseFloat(data[a].kriteria_A1) + parseFloat(data[a].kriteria_A2) + parseFloat(data[a].kriteria_A3) + parseFloat(data[a].kriteria_B1) + parseFloat(data[a].kriteria_B2) + parseFloat(data[a].kriteria_B3) + parseFloat(data[a].kriteria_C1) + parseFloat(data[a].kriteria_C2) + parseFloat(data[a].kriteria_C3);
				var total_krit_lap_2 = parseFloat(data[a].kriteria_D1) + parseFloat(data[a].kriteria_D2) + parseFloat(data[a].kriteria_E1) + parseFloat(data[a].kriteria_F1) + parseFloat(data[a].kriteria_G1);
				var total_krit_lap_3 = parseFloat(data[a].kriteria_H1) + parseFloat(data[a].kriteria_H2) + parseFloat(data[a].kriteria_H3) + parseFloat(data[a].kriteria_H4) + parseFloat(data[a].kriteria_I1);
				var total_krit_lap_4 = parseFloat(data[a].kriteria_J1) + parseFloat(data[a].kriteria_J2) + parseFloat(data[a].kriteria_J3) + parseFloat(data[a].kriteria_K1) + parseFloat(data[a].kriteria_K2);
				var total_krit_lap_5 = parseFloat(data[a].kriteria_L1) + parseFloat(data[a].kriteria_L2) + parseFloat(data[a].kriteria_M1);
				var total_krit_lap_6 = parseFloat(data[a].kriteria_N1) + parseFloat(data[a].kriteria_N2) + parseFloat(data[a].kriteria_O1) + parseFloat(data[a].kriteria_O2) + parseFloat(data[a].kriteria_O3) + parseFloat(data[a].kriteria_P1);
				var total_krit_lap_7 = parseFloat(data[a].kriteria_Q1) + parseFloat(data[a].kriteria_Q2) + parseFloat(data[a].kriteria_Q3) + parseFloat(data[a].kriteria_Q4) + parseFloat(data[a].kriteria_Q5) + parseFloat(data[a].kriteria_R1) + parseFloat(data[a].kriteria_R2) + parseFloat(data[a].kriteria_S1);
				var total_krit_lap = total_krit_lap_1 + total_krit_lap_2 + total_krit_lap_3 + total_krit_lap_4 + total_krit_lap_5 + total_krit_lap_6 + total_krit_lap_7;

				html += "<tr>";
				html += "<th>"+nama_circle+"</th>";
				html += "<th>"+nama_juri+"</th>";
				html += "<th>"+total_krit_lap_1+"</th>";
				html += "<th>"+total_krit_lap_2+"</th>";
				html += "<th>"+total_krit_lap_3+"</th>";
				html += "<th>"+total_krit_lap_4+"</th>";
				html += "<th>"+total_krit_lap_5+"</th>";
				html += "<th>"+total_krit_lap_6+"</th>";
				html += "<th>"+total_krit_lap_7+"</th>";
				html += "<th>"+total_krit_lap+"</th>";

			}

			}else if (ganti_penilaian_opt == 'data_nilai_presentasi'){

			for (var a = 0; a < data.length; a++){
				
				var nama_circle = data[a].circle_team;
				var nip_juri = data[a].username;
				if(nip_juri == '15-0034'){
					var nama_juri = 'DWINANDA SEPTIADHI';
				}else if (nip_juri == '94-0455'){
					var nama_juri = 'LUKAS FIRMANTO';
				}else if (nip_juri == '20-0745'){
					var nama_juri = 'ISMAIL SALEH';
				}

				var total_krit_pre_1 = parseFloat(data[a].nilai_1);
				var total_krit_pre_2 = parseFloat(data[a].nilai_2);
				var total_krit_pre_3 = parseFloat(data[a].nilai_3);
				var total_krit_pre_4 = parseFloat(data[a].nilai_4);
				var total_krit_pre_5 = parseFloat(data[a].nilai_5);
				var total_krit_pre_6 = parseFloat(data[a].nilai_6);
				var total_krit_pre_7 = parseFloat(data[a].nilai_7);
				var total_krit_pre = total_krit_pre_1 + total_krit_pre_2 + total_krit_pre_3 + total_krit_pre_4 + total_krit_pre_5 + total_krit_pre_6 + total_krit_pre_7;


				html += "<tr>";
				html += "<th>"+nama_circle+"</th>";
				html += "<th>"+nama_juri+"</th>";
				html += "<th>"+total_krit_pre_1+"</th>";
				html += "<th>"+total_krit_pre_2+"</th>";
				html += "<th>"+total_krit_pre_3+"</th>";
				html += "<th>"+total_krit_pre_4+"</th>";
				html += "<th>"+total_krit_pre_5+"</th>";
				html += "<th>"+total_krit_pre_6+"</th>";
				html += "<th>"+total_krit_pre_7+"</th>";
				html += "<th>"+parseFloat(total_krit_pre).toFixed(2)+"</th>";


			}

			}else if (ganti_penilaian_opt == 'nilai_total'){


				var nilai_totall, total_krit_pre, total_krit_lap,nama_circle;

				var list_juri_lap = ['14-0382','12-0816','91-0842','06-0063'];
				var list_juri_pre = ['20-0745','94-0455','15-0034',];
				var list_nilai_lap = [];
				var list_nilai_pre = [];

				if(ganti_circle_opt == "All"){

					var list_circle = ['BensAe','Pasti','Enviro','Manise','Maxio','Maxtour','Satgas1','Semongko','Sosis','Masker','Misqueen','Selektif','Gemesin'];

				}else{

					var list_circle = [ganti_circle_opt];

				}


				for (var a1 = 0; a1 < list_circle.length; a1++){

				var nilai_totall = 0;
				var total_krit_pre = 0;
				var total_krit_lap = 0;
				var total_krit_pre_sebaris = 0;
				var total_krit_lap_sebaris = 0;
				var nama_circle = list_circle[a1];
				var kondisi = 0;

				let list_nilai_pre = [];

				html2 += "<tr>";
				html2 += "<th>"+nama_circle+"</th>";

				let list_nilai_lap = [];

				html1 += "<tr>";
				html1 += "<th>"+nama_circle+"</th>";

				html3 += "<tr>";
				html3 += "<th>"+nama_circle+"</th>";
				
				for (var a = 0; a < data[0].length; a++){
				
				for (var a3 = 0; a3 < list_juri_pre.length; a3++){

				if(data[0][a].circle_team == list_circle[a1] ){

				if(data[0][a].username == list_juri_pre[a3]){

				var total_krit_pre_1 = parseFloat(data[0][a].nilai_1);
				var total_krit_pre_2 = parseFloat(data[0][a].nilai_2);
				var total_krit_pre_3 = parseFloat(data[0][a].nilai_3);
				var total_krit_pre_4 = parseFloat(data[0][a].nilai_4);
				var total_krit_pre_5 = parseFloat(data[0][a].nilai_5);
				var total_krit_pre_6 = parseFloat(data[0][a].nilai_6);
				var total_krit_pre_7 = parseFloat(data[0][a].nilai_7);
				var total_krit_pre = total_krit_pre_1 + total_krit_pre_2 + total_krit_pre_3 + total_krit_pre_4 + total_krit_pre_5 + total_krit_pre_6 + total_krit_pre_7;
				total_krit_pre_sebaris += total_krit_pre;
				list_nilai_pre.push(total_krit_pre);
				html2 += "<th>"+parseFloat(total_krit_pre).toFixed(2)+"</th>";
				break;
				}else{
					continue;
				}

				}else{
					continue;
				}
				}

				}

				for (var a4 = 0; a4 < list_juri_lap.length; a4++){

				for (var a2 = 0; a2 < data[1].length; a2++){

				if(data[1][a2].circle_team == list_circle[a1] ){

				if(data[1][a2].username == list_juri_lap[a4]){

				var total_krit_lap_1 = parseFloat(data[1][a2].kriteria_A1) + parseFloat(data[1][a2].kriteria_A2) + parseFloat(data[1][a2].kriteria_A3) + parseFloat(data[1][a2].kriteria_B1) + parseFloat(data[1][a2].kriteria_B2) + parseFloat(data[1][a2].kriteria_B3) + parseFloat(data[1][a2].kriteria_C1) + parseFloat(data[1][a2].kriteria_C2) + parseFloat(data[1][a2].kriteria_C3);
				var total_krit_lap_2 = parseFloat(data[1][a2].kriteria_D1) + parseFloat(data[1][a2].kriteria_D2) + parseFloat(data[1][a2].kriteria_E1) + parseFloat(data[1][a2].kriteria_F1) + parseFloat(data[1][a2].kriteria_G1);
				var total_krit_lap_3 = parseFloat(data[1][a2].kriteria_H1) + parseFloat(data[1][a2].kriteria_H2) + parseFloat(data[1][a2].kriteria_H3) + parseFloat(data[1][a2].kriteria_H4) + parseFloat(data[1][a2].kriteria_I1);
				var total_krit_lap_4 = parseFloat(data[1][a2].kriteria_J1) + parseFloat(data[1][a2].kriteria_J2) + parseFloat(data[1][a2].kriteria_J3) + parseFloat(data[1][a2].kriteria_K1) + parseFloat(data[1][a2].kriteria_K2);
				var total_krit_lap_5 = parseFloat(data[1][a2].kriteria_L1) + parseFloat(data[1][a2].kriteria_L2) + parseFloat(data[1][a2].kriteria_M1);
				var total_krit_lap_6 = parseFloat(data[1][a2].kriteria_N1) + parseFloat(data[1][a2].kriteria_N2) + parseFloat(data[1][a2].kriteria_O1) + parseFloat(data[1][a2].kriteria_O2) + parseFloat(data[1][a2].kriteria_O3) + parseFloat(data[1][a2].kriteria_P1);
				var total_krit_lap_7 = parseFloat(data[1][a2].kriteria_Q1) + parseFloat(data[1][a2].kriteria_Q2) + parseFloat(data[1][a2].kriteria_Q3) + parseFloat(data[1][a2].kriteria_Q4) + parseFloat(data[1][a2].kriteria_Q5) + parseFloat(data[1][a2].kriteria_R1) + parseFloat(data[1][a2].kriteria_R2) + parseFloat(data[1][a2].kriteria_S1);
				var total_krit_lap = total_krit_lap_1 + total_krit_lap_2 + total_krit_lap_3 + total_krit_lap_4 + total_krit_lap_5 + total_krit_lap_6 + total_krit_lap_7;

				total_krit_lap_sebaris += total_krit_lap;
				list_nilai_lap.push(total_krit_lap);
				html1 += "<th>"+parseFloat(total_krit_lap).toFixed(2)+"</th>";
				
				}else{
					continue;
				}

				}else{
					continue;
				}
			}

			}

			html1 += "<th>"+Math.max(...list_nilai_lap).toFixed(2)+"</th>";
			html1 += "<th>"+Math.min(...list_nilai_lap).toFixed(2)+"</th>";
			html1 += "<th>"+(total_krit_lap_sebaris/list_juri_lap.length).toFixed(2)+"</th>";

			if(total_krit_pre == 0 && total_krit_lap != 0 ){

				nilai_totall == 'Penilaian Presentasi Belum Terisi';

			}else if(total_krit_lap == 0 && total_krit_pre != 0){

				nilai_totall == 'Penilaian Lapangan Belum Terisi';

			}else if(total_krit_lap == 0 && total_krit_pre == 0){

				nilai_totall == 'Penilaian Belum Terisi';
			}else{

				nilai_totall = (((total_krit_pre_sebaris/list_juri_pre.length).toFixed(2))*0.2) + (((total_krit_lap_sebaris/list_juri_lap.length).toFixed(2))*0.8);
			}

			html3 += "<th>"+(total_krit_lap_sebaris/list_juri_lap.length).toFixed(2)+"</th>";
			html3 += "<th>"+(total_krit_pre_sebaris/list_juri_pre.length).toFixed(2)+"</th>";
			html3 += "<th>"+nilai_totall+"</th>";
			html2 += "<th>"+Math.max(...list_nilai_pre).toFixed(2)+"</th>";
			html2 += "<th>"+Math.min(...list_nilai_pre).toFixed(2)+"</th>";
			html2 += "<th>"+(total_krit_pre_sebaris/list_juri_pre.length).toFixed(2)+"</th>";

		}
						
		}

			}else{
				tabel_total.innerHTML = "";
				tabel.innerHTML = "";
				tabel_lapangan.innerHTML = "";
			tabel_presentasi.innerHTML = "";
			tabel_total.innerHTML = "";
			}
			tabel_total.innerHTML = html3;
			tabel.innerHTML = html;
			tabel_lapangan.innerHTML = html1;
			tabel_presentasi.innerHTML = html2;
			tabel_total.innerHTML = html3;
		}else{
			tabel_total.innerHTML = "";
			tabel.innerHTML = "";
			tabel_lapangan.innerHTML = "";
			tabel_presentasi.innerHTML = "";
			tabel_total.innerHTML = "";
		}
	}

  }
