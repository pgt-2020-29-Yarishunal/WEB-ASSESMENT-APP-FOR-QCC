function recheck(){

var select_circle = document.getElementById('nama_circel');
var circle_team = document.getElementsByName('nama_circel')[select_circle.selectedIndex+1].value;
var nip_juri = document.getElementById('nip_juri').value;
var ajax = new XMLHttpRequest();
var method = "GET";
var url = "../penilaian_presentasi/get_data.php?team="+circle_team+"&nip="+nip_juri;
var statuss = true;

ajax.open(method,url,statuss);
ajax.send();

ajax.onreadystatechange = function(){

	if(this.readyState == 4 && this.status == 200){

		var data = JSON.parse(this.responseText);
		if(data.length > 0){

			var ans = confirm('Ada data yang telah dimasukkan, apakah anda ingin rekap data sebelumnya?');
			
			if(ans == true){
		//kriteria_1
		if(data[0].nilai_1 == 1){
			document.getElementById('total_nilai1_kurang').checked = true;
			document.getElementById('select_nilai1_kurang').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 2){
			document.getElementById('total_nilai1_kurang').checked = true;
			document.getElementById('select_nilai1_kurang').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 3){
			document.getElementById('total_nilai1_kurang').checked = true;
			document.getElementById('select_nilai1_kurang').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 4){
			document.getElementById('total_nilai1_kurang').checked = true;
			document.getElementById('select_nilai1_kurang').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 5){
			document.getElementById('total_nilai1_kurang').checked = true;
			document.getElementById('select_nilai1_kurang').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 6){
			document.getElementById('total_nilai1_cukup').checked = true;
			document.getElementById('select_nilai1_cukup').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 7){
			document.getElementById('total_nilai1_cukup').checked = true;
			document.getElementById('select_nilai1_cukup').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 8){
			document.getElementById('total_nilai1_cukup').checked = true;
			document.getElementById('select_nilai1_cukup').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 9){
			document.getElementById('total_nilai1_cukup').checked = true;
			document.getElementById('select_nilai1_cukup').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 10){
			document.getElementById('total_nilai1_cukup').checked = true;
			document.getElementById('select_nilai1_cukup').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 11){
			document.getElementById('total_nilai1_baik').checked = true;
			document.getElementById('select_nilai1_baik').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 12){
			document.getElementById('total_nilai1_baik').checked = true;
			document.getElementById('select_nilai1_baik').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 13){
			document.getElementById('total_nilai1_baik').checked = true;
			document.getElementById('select_nilai1_baik').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 14){
			document.getElementById('total_nilai1_baik').checked = true;
			document.getElementById('select_nilai1_baik').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 15){
			document.getElementById('total_nilai1_baik').checked = true;
			document.getElementById('select_nilai1_baik').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 16){
			document.getElementById('total_nilai1_sangat_baik').checked = true;
			document.getElementById('select_nilai1_sangat_baik').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 17){
			document.getElementById('total_nilai1_sangat_baik').checked = true;
			document.getElementById('select_nilai1_sangat_baik').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 18){
			document.getElementById('total_nilai1_sangat_baik').checked = true;
			document.getElementById('select_nilai1_sangat_baik').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 19){
			document.getElementById('total_nilai1_sangat_baik').checked = true;
			document.getElementById('select_nilai1_sangat_baik').value = data[0].nilai_1;
			list1();
			}else if(data[0].nilai_1 == 20){
			document.getElementById('total_nilai1_sangat_baik').checked = true;
			document.getElementById('select_nilai1_sangat_baik').value = data[0].nilai_1;
			list1();
			}else{
			
		}
		//kriteria_2
		if(data[0].nilai_2 == 1){
			document.getElementById('total_nilai2_kurang').checked = true;
			document.getElementById('select_nilai2_kurang').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 2){
			document.getElementById('total_nilai2_kurang').checked = true;
			document.getElementById('select_nilai2_kurang').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 3){
			document.getElementById('total_nilai2_kurang').checked = true;
			document.getElementById('select_nilai2_kurang').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 4){
			document.getElementById('total_nilai2_kurang').checked = true;
			document.getElementById('select_nilai2_kurang').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 5){
			document.getElementById('total_nilai2_kurang').checked = true;
			document.getElementById('select_nilai2_kurang').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 6){
			document.getElementById('total_nilai2_cukup').checked = true;
			document.getElementById('select_nilai2_cukup').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 7){
			document.getElementById('total_nilai2_cukup').checked = true;
			document.getElementById('select_nilai2_cukup').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 8){
			document.getElementById('total_nilai2_cukup').checked = true;
			document.getElementById('select_nilai2_cukup').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 9){
			document.getElementById('total_nilai2_cukup').checked = true;
			document.getElementById('select_nilai2_cukup').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 10){
			document.getElementById('total_nilai2_cukup').checked = true;
			document.getElementById('select_nilai2_cukup').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 11){
			document.getElementById('total_nilai2_baik').checked = true;
			document.getElementById('select_nilai2_baik').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 12){
			document.getElementById('total_nilai2_baik').checked = true;
			document.getElementById('select_nilai2_baik').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 13){
			document.getElementById('total_nilai2_baik').checked = true;
			document.getElementById('select_nilai2_baik').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 14){
			document.getElementById('total_nilai2_baik').checked = true;
			document.getElementById('select_nilai2_baik').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 15){
			document.getElementById('total_nilai2_baik').checked = true;
			document.getElementById('select_nilai2_baik').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 16){
			document.getElementById('total_nilai2_sangat_baik').checked = true;
			document.getElementById('select_nilai2_sangat_baik').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 17){
			document.getElementById('total_nilai2_sangat_baik').checked = true;
			document.getElementById('select_nilai2_sangat_baik').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 18){
			document.getElementById('total_nilai2_sangat_baik').checked = true;
			document.getElementById('select_nilai2_sangat_baik').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 19){
			document.getElementById('total_nilai2_sangat_baik').checked = true;
			document.getElementById('select_nilai2_sangat_baik').value = data[0].nilai_2;
			list2();
			}else if(data[0].nilai_2 == 20){
			document.getElementById('total_nilai2_sangat_baik').checked = true;
			document.getElementById('select_nilai2_sangat_baik').value = data[0].nilai_2;
			list2();
			}else{
			
		}
		//kriteria_3
		if(data[0].nilai_3 == 0.5){
			document.getElementById('total_nilai3_kurang').checked = true;
			document.getElementById('select_nilai3_kurang').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 1){
			document.getElementById('total_nilai3_kurang').checked = true;
			document.getElementById('select_nilai3_kurang').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 1.5){
			document.getElementById('total_nilai3_kurang').checked = true;
			document.getElementById('select_nilai3_kurang').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 2){
			document.getElementById('total_nilai3_kurang').checked = true;
			document.getElementById('select_nilai3_kurang').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 2.5){
			document.getElementById('total_nilai3_kurang').checked = true;
			document.getElementById('select_nilai3_kurang').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 3){
			document.getElementById('total_nilai3_cukup').checked = true;
			document.getElementById('select_nilai3_cukup').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 3.5){
			document.getElementById('total_nilai3_cukup').checked = true;
			document.getElementById('select_nilai3_cukup').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 4){
			document.getElementById('total_nilai3_cukup').checked = true;
			document.getElementById('select_nilai3_cukup').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 4.5){
			document.getElementById('total_nilai3_cukup').checked = true;
			document.getElementById('select_nilai3_cukup').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 5){
			document.getElementById('total_nilai3_cukup').checked = true;
			document.getElementById('select_nilai3_cukup').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 5.5){
			document.getElementById('total_nilai3_baik').checked = true;
			document.getElementById('select_nilai3_baik').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 6){
			document.getElementById('total_nilai3_baik').checked = true;
			document.getElementById('select_nilai3_baik').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 6.5){
			document.getElementById('total_nilai3_baik').checked = true;
			document.getElementById('select_nilai3_baik').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 7){
			document.getElementById('total_nilai3_baik').checked = true;
			document.getElementById('select_nilai3_baik').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 7.5){
			document.getElementById('total_nilai3_baik').checked = true;
			document.getElementById('select_nilai3_baik').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 8){
			document.getElementById('total_nilai3_sangat_baik').checked = true;
			document.getElementById('select_nilai3_sangat_baik').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 8.5){
			document.getElementById('total_nilai3_sangat_baik').checked = true;
			document.getElementById('select_nilai3_sangat_baik').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 9){
			document.getElementById('total_nilai3_sangat_baik').checked = true;
			document.getElementById('select_nilai3_sangat_baik').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 9.5){
			document.getElementById('total_nilai3_sangat_baik').checked = true;
			document.getElementById('select_nilai3_sangat_baik').value = data[0].nilai_3;
			list3();
			}else if(data[0].nilai_3 == 10){
			document.getElementById('total_nilai3_sangat_baik').checked = true;
			document.getElementById('select_nilai3_sangat_baik').value = data[0].nilai_3;
			list3();
			}else{
			
		}
		//kriteria_4
		if(data[0].nilai_4 == 0.9){
			document.getElementById('total_nilai4_kurang').checked = true;
			document.getElementById('select_nilai4_kurang').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 1.8){
			document.getElementById('total_nilai4_kurang').checked = true;
			document.getElementById('select_nilai4_kurang').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 2.7){
			document.getElementById('total_nilai4_kurang').checked = true;
			document.getElementById('select_nilai4_kurang').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 3.6){
			document.getElementById('total_nilai4_kurang').checked = true;
			document.getElementById('select_nilai4_kurang').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 4.5){
			document.getElementById('total_nilai4_kurang').checked = true;
			document.getElementById('select_nilai4_kurang').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 5.4){
			document.getElementById('total_nilai4_cukup').checked = true;
			document.getElementById('select_nilai4_cukup').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 6.3){
			document.getElementById('total_nilai4_cukup').checked = true;
			document.getElementById('select_nilai4_cukup').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 7.2){
			document.getElementById('total_nilai4_cukup').checked = true;
			document.getElementById('select_nilai4_cukup').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 8.1){
			document.getElementById('total_nilai4_cukup').checked = true;
			document.getElementById('select_nilai4_cukup').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 9){
			document.getElementById('total_nilai4_cukup').checked = true;
			document.getElementById('select_nilai4_cukup').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 9.9){
			document.getElementById('total_nilai4_baik').checked = true;
			document.getElementById('select_nilai4_baik').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 10.8){
			document.getElementById('total_nilai4_baik').checked = true;
			document.getElementById('select_nilai4_baik').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 11.7){
			document.getElementById('total_nilai4_baik').checked = true;
			document.getElementById('select_nilai4_baik').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 12.6){
			document.getElementById('total_nilai4_baik').checked = true;
			document.getElementById('select_nilai4_baik').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 13.5){
			document.getElementById('total_nilai4_baik').checked = true;
			document.getElementById('select_nilai4_baik').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 14.4){
			document.getElementById('total_nilai4_sangat_baik').checked = true;
			document.getElementById('select_nilai4_sangat_baik').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 15.3){
			document.getElementById('total_nilai4_sangat_baik').checked = true;
			document.getElementById('select_nilai4_sangat_baik').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 16.2){
			document.getElementById('total_nilai4_sangat_baik').checked = true;
			document.getElementById('select_nilai4_sangat_baik').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 17.1){
			document.getElementById('total_nilai4_sangat_baik').checked = true;
			document.getElementById('select_nilai4_sangat_baik').value = data[0].nilai_4;
			list4();
			}else if(data[0].nilai_4 == 18){
			document.getElementById('total_nilai4_sangat_baik').checked = true;
			document.getElementById('select_nilai4_sangat_baik').value = data[0].nilai_4;
			list4();
			}else{
			
		}
		//kriteria_5
		if(data[0].nilai_5 == 1){
			document.getElementById('total_nilai5_kurang').checked = true;
			document.getElementById('select_nilai5_kurang').value = data[0].nilai_5;
			list5();
			}else if(data[0].nilai_5 == 2){
			document.getElementById('total_nilai5_kurang').checked = true;
			document.getElementById('select_nilai5_kurang').value = data[0].nilai_5;
			list5();
			}else if(data[0].nilai_5 == 3){
			document.getElementById('total_nilai5_kurang').checked = true;
			document.getElementById('select_nilai5_kurang').value = data[0].nilai_5;
			list5();
			}else if(data[0].nilai_5 == 4){
			document.getElementById('total_nilai5_kurang').checked = true;
			document.getElementById('select_nilai5_kurang').value = data[0].nilai_5;
			list5();
			}else if(data[0].nilai_5 == 5){
			document.getElementById('total_nilai5_kurang').checked = true;
			document.getElementById('select_nilai5_kurang').value = data[0].nilai_5;
			list5();
			}else if(data[0].nilai_5 == 6){
			document.getElementById('total_nilai5_cukup').checked = true;
			document.getElementById('select_nilai5_cukup').value = data[0].nilai_5;
			list5();
			}else if(data[0].nilai_5 == 7){
			document.getElementById('total_nilai5_cukup').checked = true;
			document.getElementById('select_nilai5_cukup').value = data[0].nilai_5;
			list5();
			}else if(data[0].nilai_5 == 8){
			document.getElementById('total_nilai5_cukup').checked = true;
			document.getElementById('select_nilai5_cukup').value = data[0].nilai_5;
			list5();
			}else if(data[0].nilai_5 == 9){
			document.getElementById('total_nilai5_cukup').checked = true;
			document.getElementById('select_nilai5_cukup').value = data[0].nilai_5;
			list5();
			}else if(data[0].nilai_5 == 10){
			document.getElementById('total_nilai5_cukup').checked = true;
			document.getElementById('select_nilai5_cukup').value = data[0].nilai_5;
			list5();
			}else if(data[0].nilai_5 == 11){
			document.getElementById('total_nilai5_baik').checked = true;
			document.getElementById('select_nilai5_baik').value = data[0].nilai_5;
			list5();
			}else if(data[0].nilai_5 == 12){
			document.getElementById('total_nilai5_baik').checked = true;
			document.getElementById('select_nilai5_baik').value = data[0].nilai_5;
			list5();
			}else if(data[0].nilai_5 == 13){
			document.getElementById('total_nilai5_baik').checked = true;
			document.getElementById('select_nilai5_baik').value = data[0].nilai_5;
			list5();
			}else if(data[0].nilai_5 == 14){
			document.getElementById('total_nilai5_baik').checked = true;
			document.getElementById('select_nilai5_baik').value = data[0].nilai_5;
			list5();
			}else if(data[0].nilai_5 == 15){
			document.getElementById('total_nilai5_baik').checked = true;
			document.getElementById('select_nilai5_baik').value = data[0].nilai_5;
			list5();
			}else{
			
		}
		//kriteria_6
		if(data[0].nilai_6 == 1){
			document.getElementById('total_nilai6_kurang').checked = true;
			document.getElementById('select_nilai6_kurang').value = data[0].nilai_6;
			list6();
			}else if(data[0].nilai_6 == 2){
			document.getElementById('total_nilai6_kurang').checked = true;
			document.getElementById('select_nilai6_kurang').value = data[0].nilai_6;
			list6();
			}else if(data[0].nilai_6 == 3){
			document.getElementById('total_nilai6_kurang').checked = true;
			document.getElementById('select_nilai6_kurang').value = data[0].nilai_6;
			list6();
			}else if(data[0].nilai_6 == 4){
			document.getElementById('total_nilai6_kurang').checked = true;
			document.getElementById('select_nilai6_kurang').value = data[0].nilai_6;
			list6();
			}else if(data[0].nilai_6 == 5){
			document.getElementById('total_nilai6_kurang').checked = true;
			document.getElementById('select_nilai6_kurang').value = data[0].nilai_6;
			list6();
			}else if(data[0].nilai_6 == 6){
			document.getElementById('total_nilai6_cukup').checked = true;
			document.getElementById('select_nilai6_cukup').value = data[0].nilai_6;
			list6();
			}else if(data[0].nilai_6 == 7){
			document.getElementById('total_nilai6_cukup').checked = true;
			document.getElementById('select_nilai6_cukup').value = data[0].nilai_6;
			list6();
			}else if(data[0].nilai_6 == 8){
			document.getElementById('total_nilai6_cukup').checked = true;
			document.getElementById('select_nilai6_cukup').value = data[0].nilai_6;
			list6();
			}else if(data[0].nilai_6 == 9){
			document.getElementById('total_nilai6_cukup').checked = true;
			document.getElementById('select_nilai6_cukup').value = data[0].nilai_6;
			list6();
			}else if(data[0].nilai_6 == 10){
			document.getElementById('total_nilai6_cukup').checked = true;
			document.getElementById('select_nilai6_cukup').value = data[0].nilai_6;
			list6();
			}else{
			
		}
		//kriteria_7
		if(data[0].nilai_7 == 0.46){
			document.getElementById('total_nilai7_kurang').checked = true;
			document.getElementById('select_nilai7_kurang').value = data[0].nilai_7;
			list7();
			}else if(data[0].nilai_7 == 0.92){
			document.getElementById('total_nilai7_kurang').checked = true;
			document.getElementById('select_nilai7_kurang').value = data[0].nilai_7;
			list7();
			}else if(data[0].nilai_7 == 1.38){
			document.getElementById('total_nilai7_kurang').checked = true;
			document.getElementById('select_nilai7_kurang').value = data[0].nilai_7;
			list7();
			}else if(data[0].nilai_7 == 1.84){
			document.getElementById('total_nilai7_kurang').checked = true;
			document.getElementById('select_nilai7_kurang').value = data[0].nilai_7;
			list7();
			}else if(data[0].nilai_7 == 2.3){
			document.getElementById('total_nilai7_kurang').checked = true;
			document.getElementById('select_nilai7_kurang').value = data[0].nilai_7;
			list7();
			}else if(data[0].nilai_7 == 2.76){
			document.getElementById('total_nilai7_cukup').checked = true;
			document.getElementById('select_nilai7_cukup').value = data[0].nilai_7;
			list7();
			}else if(data[0].nilai_7 == 3.22){
			document.getElementById('total_nilai7_cukup').checked = true;
			document.getElementById('select_nilai7_cukup').value = data[0].nilai_7;
			list7();
			}else if(data[0].nilai_7 == 3.68){
			document.getElementById('total_nilai7_cukup').checked = true;
			document.getElementById('select_nilai7_cukup').value = data[0].nilai_7;
			list7();
			}else if(data[0].nilai_7 == 4.14){
			document.getElementById('total_nilai7_cukup').checked = true;
			document.getElementById('select_nilai7_cukup').value = data[0].nilai_7;
			list7();
			}else if(data[0].nilai_7 == 4.6){
			document.getElementById('total_nilai7_cukup').checked = true;
			document.getElementById('select_nilai7_cukup').value = data[0].nilai_7;
			list7();
			}else if(data[0].nilai_7 == 5.06){
			document.getElementById('total_nilai7_baik').checked = true;
			document.getElementById('select_nilai7_baik').value = data[0].nilai_7;
			list7();
			}else if(data[0].nilai_7 == 5.52){
			document.getElementById('total_nilai7_baik').checked = true;
			document.getElementById('select_nilai7_baik').value = data[0].nilai_7;
			list7();
			}else if(data[0].nilai_7 == 5.98){
			document.getElementById('total_nilai7_baik').checked = true;
			document.getElementById('select_nilai7_baik').value = data[0].nilai_7;
			list7();
			}else if(data[0].nilai_7 == 6.54){
			document.getElementById('total_nilai7_baik').checked = true;
			document.getElementById('select_nilai7_baik').value = data[0].nilai_7;
			list7();
			}else if(data[0].nilai_7 == 7){
			document.getElementById('total_nilai7_baik').checked = true;
			document.getElementById('select_nilai7_baik').value = data[0].nilai_7;
			list7();
			}else{
			
		}
		//komentar
		document.getElementById('komentar').value = data[0].komen;
			}else{
				
			}
		}
		

		}
	}

}