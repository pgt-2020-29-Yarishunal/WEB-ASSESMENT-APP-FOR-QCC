function input_nilai(){

var select_circle = document.getElementById('nama_circel');
var circle_team = document.getElementsByName('nama_circel')[select_circle.selectedIndex+1].value;
var nip_juri = document.getElementById('nip_juri').value;
var komentar = document.getElementById('komentar').value;
//kriteriaA1
if(document.getElementById('kriteria_A1k').checked){
	var kriteria_A1 = document.getElementById('kriteria_A1k').value;
}else if(document.getElementById('kriteria_A1c').checked){
	var kriteria_A1 = document.getElementById('kriteria_A1c').value;
}else if(document.getElementById('kriteria_A1b').checked){
	var kriteria_A1 = document.getElementById('kriteria_A1b').value;
}else if(document.getElementById('kriteria_A1s').checked){
	var kriteria_A1 = document.getElementById('kriteria_A1s').value;
}else{
	var kriteria_A1 = "-";
}
//kriteriaA2
if(document.getElementById('kriteria_A2k').checked){
	var kriteria_A2 = document.getElementById('kriteria_A2k').value;
}else if(document.getElementById('kriteria_A2c').checked){
	var kriteria_A2 = document.getElementById('kriteria_A2c').value;
}else if(document.getElementById('kriteria_A2b').checked){
	var kriteria_A2 = document.getElementById('kriteria_A2b').value;
}else if(document.getElementById('kriteria_A2s').checked){
	var kriteria_A2 = document.getElementById('kriteria_A2s').value;
}else{
	var kriteria_A2 = "-";
}//kriteriaA3
if(document.getElementById('kriteria_A3k').checked){
	var kriteria_A3 = document.getElementById('kriteria_A3k').value;
}else if(document.getElementById('kriteria_A3c').checked){
	var kriteria_A3 = document.getElementById('kriteria_A3c').value;
}else if(document.getElementById('kriteria_A3b').checked){
	var kriteria_A3 = document.getElementById('kriteria_A3b').value;
}else if(document.getElementById('kriteria_A3s').checked){
	var kriteria_A3 = document.getElementById('kriteria_A3s').value;
}else{
	var kriteria_A3 = "-";
}//kriteriaB1
if(document.getElementById('kriteria_B1k').checked){
	var kriteria_B1 = document.getElementById('kriteria_B1k').value;
}else if(document.getElementById('kriteria_B1c').checked){
	var kriteria_B1 = document.getElementById('kriteria_B1c').value;
}else if(document.getElementById('kriteria_B1b').checked){
	var kriteria_B1 = document.getElementById('kriteria_B1b').value;
}else if(document.getElementById('kriteria_B1s').checked){
	var kriteria_B1 = document.getElementById('kriteria_B1s').value;
}else{
	var kriteria_B1 = "-";
}//kriteriaB2
if(document.getElementById('kriteria_B2k').checked){
	var kriteria_B2 = document.getElementById('kriteria_B2k').value;
}else if(document.getElementById('kriteria_B2c').checked){
	var kriteria_B2 = document.getElementById('kriteria_B2c').value;
}else if(document.getElementById('kriteria_B2b').checked){
	var kriteria_B2 = document.getElementById('kriteria_B2b').value;
}else if(document.getElementById('kriteria_B2s').checked){
	var kriteria_B2 = document.getElementById('kriteria_B2s').value;
}else{
	var kriteria_B2 = "-";
}//kriteriaB3
if(document.getElementById('kriteria_B3k').checked){
	var kriteria_B3 = document.getElementById('kriteria_B3k').value;
}else if(document.getElementById('kriteria_B3c').checked){
	var kriteria_B3 = document.getElementById('kriteria_B3c').value;
}else if(document.getElementById('kriteria_B3b').checked){
	var kriteria_B3 = document.getElementById('kriteria_B3b').value;
}else if(document.getElementById('kriteria_B3s').checked){
	var kriteria_B3 = document.getElementById('kriteria_B3s').value;
}else{
	var kriteria_B3 = "-";
}//kriteriaC1
if(document.getElementById('kriteria_C1k').checked){
	var kriteria_C1 = document.getElementById('kriteria_C1k').value;
}else if(document.getElementById('kriteria_C1c').checked){
	var kriteria_C1 = document.getElementById('kriteria_C1c').value;
}else if(document.getElementById('kriteria_C1b').checked){
	var kriteria_C1 = document.getElementById('kriteria_C1b').value;
}else if(document.getElementById('kriteria_C1s').checked){
	var kriteria_C1 = document.getElementById('kriteria_C1s').value;
}else{
	var kriteria_C1 = "-";
}//kriteriaC2
if(document.getElementById('kriteria_C2k').checked){
	var kriteria_C2 = document.getElementById('kriteria_C2k').value;
}else if(document.getElementById('kriteria_C2c').checked){
	var kriteria_C2 = document.getElementById('kriteria_C2c').value;
}else if(document.getElementById('kriteria_C2b').checked){
	var kriteria_C2 = document.getElementById('kriteria_C2b').value;
}else if(document.getElementById('kriteria_C2s').checked){
	var kriteria_C2 = document.getElementById('kriteria_C2s').value;
}else{
	var kriteria_C2 = "-";
}//kriteriaC3
if(document.getElementById('kriteria_C3k').checked){
	var kriteria_C3 = document.getElementById('kriteria_C3k').value;
}else if(document.getElementById('kriteria_C3c').checked){
	var kriteria_C3 = document.getElementById('kriteria_C3c').value;
}else if(document.getElementById('kriteria_C3b').checked){
	var kriteria_C3 = document.getElementById('kriteria_C3b').value;
}else if(document.getElementById('kriteria_C3s').checked){
	var kriteria_C3 = document.getElementById('kriteria_C3s').value;
}else{
	var kriteria_C3 = "-";
}//kriteriaD1
if(document.getElementById('kriteria_D1k').checked){
	var kriteria_D1 = document.getElementById('kriteria_D1k').value;
}else if(document.getElementById('kriteria_D1c').checked){
	var kriteria_D1 = document.getElementById('kriteria_D1c').value;
}else if(document.getElementById('kriteria_D1b').checked){
	var kriteria_D1 = document.getElementById('kriteria_D1b').value;
}else if(document.getElementById('kriteria_D1s').checked){
	var kriteria_D1 = document.getElementById('kriteria_D1s').value;
}else{
	var kriteria_D1 = "-";
}//kriteriaD2
if(document.getElementById('kriteria_D2k').checked){
	var kriteria_D2 = document.getElementById('kriteria_D2k').value;
}else if(document.getElementById('kriteria_D2c').checked){
	var kriteria_D2 = document.getElementById('kriteria_D2c').value;
}else if(document.getElementById('kriteria_D2b').checked){
	var kriteria_D2 = document.getElementById('kriteria_D2b').value;
}else if(document.getElementById('kriteria_D2s').checked){
	var kriteria_D2 = document.getElementById('kriteria_D2s').value;
}else{
	var kriteria_D2 = "-";
}//kriteriaE1
if(document.getElementById('kriteria_E1k').checked){
	var kriteria_E1 = document.getElementById('kriteria_E1k').value;
}else if(document.getElementById('kriteria_E1c').checked){
	var kriteria_E1 = document.getElementById('kriteria_E1c').value;
}else if(document.getElementById('kriteria_E1b').checked){
	var kriteria_E1 = document.getElementById('kriteria_E1b').value;
}else if(document.getElementById('kriteria_E1s').checked){
	var kriteria_E1 = document.getElementById('kriteria_E1s').value;
}else{
	var kriteria_E1 = "-";
}
//kriteriaF1
if(document.getElementById('kriteria_F1k').checked){
	var kriteria_F1 = document.getElementById('kriteria_F1k').value;
}else if(document.getElementById('kriteria_F1c').checked){
	var kriteria_F1 = document.getElementById('kriteria_F1c').value;
}else if(document.getElementById('kriteria_F1b').checked){
	var kriteria_F1 = document.getElementById('kriteria_F1b').value;
}else if(document.getElementById('kriteria_F1s').checked){
	var kriteria_F1 = document.getElementById('kriteria_F1s').value;
}else{
	var kriteria_F1 = "-";
}
//kriteriaG1
if(document.getElementById('kriteria_G1k').checked){
	var kriteria_G1 = document.getElementById('kriteria_G1k').value;
}else if(document.getElementById('kriteria_G1c').checked){
	var kriteria_G1 = document.getElementById('kriteria_G1c').value;
}else if(document.getElementById('kriteria_G1b').checked){
	var kriteria_G1 = document.getElementById('kriteria_G1b').value;
}else if(document.getElementById('kriteria_G1s').checked){
	var kriteria_G1 = document.getElementById('kriteria_G1s').value;
}else{
	var kriteria_G1 = "-";
}
//kriteriaH1
if(document.getElementById('kriteria_H1k').checked){
	var kriteria_H1 = document.getElementById('kriteria_H1k').value;
}else if(document.getElementById('kriteria_H1c').checked){
	var kriteria_H1 = document.getElementById('kriteria_H1c').value;
}else if(document.getElementById('kriteria_H1b').checked){
	var kriteria_H1 = document.getElementById('kriteria_H1b').value;
}else if(document.getElementById('kriteria_H1s').checked){
	var kriteria_H1 = document.getElementById('kriteria_H1s').value;
}else{
	var kriteria_H1 = "-";
}
//kriteriaH2
if(document.getElementById('kriteria_H2k').checked){
	var kriteria_H2 = document.getElementById('kriteria_H2k').value;
}else if(document.getElementById('kriteria_H2c').checked){
	var kriteria_H2 = document.getElementById('kriteria_H2c').value;
}else if(document.getElementById('kriteria_H2b').checked){
	var kriteria_H2 = document.getElementById('kriteria_H2b').value;
}else if(document.getElementById('kriteria_H2s').checked){
	var kriteria_H2 = document.getElementById('kriteria_H2s').value;
}else{
	var kriteria_H2 = "-";
}
//kriteriaH3
if(document.getElementById('kriteria_H3k').checked){
	var kriteria_H3 = document.getElementById('kriteria_H3k').value;
}else if(document.getElementById('kriteria_H3c').checked){
	var kriteria_H3 = document.getElementById('kriteria_H3c').value;
}else if(document.getElementById('kriteria_H3b').checked){
	var kriteria_H3 = document.getElementById('kriteria_H3b').value;
}else if(document.getElementById('kriteria_H3s').checked){
	var kriteria_H3 = document.getElementById('kriteria_H3s').value;
}else{
	var kriteria_H3 = "-";
}
//kriteriaH4
if(document.getElementById('kriteria_H4k').checked){
	var kriteria_H4 = document.getElementById('kriteria_H4k').value;
}else if(document.getElementById('kriteria_H4c').checked){
	var kriteria_H4 = document.getElementById('kriteria_H4c').value;
}else if(document.getElementById('kriteria_H4b').checked){
	var kriteria_H4 = document.getElementById('kriteria_H4b').value;
}else if(document.getElementById('kriteria_H4s').checked){
	var kriteria_H4 = document.getElementById('kriteria_H4s').value;
}else{
	var kriteria_H4 = "-";
}
//kriteriaI1
if(document.getElementById('kriteria_I1k').checked){
	var kriteria_I1 = document.getElementById('kriteria_I1k').value;
}else if(document.getElementById('kriteria_I1c').checked){
	var kriteria_I1 = document.getElementById('kriteria_I1c').value;
}else if(document.getElementById('kriteria_I1b').checked){
	var kriteria_I1 = document.getElementById('kriteria_I1b').value;
}else if(document.getElementById('kriteria_I1s').checked){
	var kriteria_I1 = document.getElementById('kriteria_I1s').value;
}else{
	var kriteria_I1 = "-";
}
//kriteriaJ1
if(document.getElementById('kriteria_J1k').checked){
	var kriteria_J1 = document.getElementById('kriteria_J1k').value;
}else if(document.getElementById('kriteria_J1c').checked){
	var kriteria_J1 = document.getElementById('kriteria_J1c').value;
}else if(document.getElementById('kriteria_J1b').checked){
	var kriteria_J1 = document.getElementById('kriteria_J1b').value;
}else if(document.getElementById('kriteria_J1s').checked){
	var kriteria_J1 = document.getElementById('kriteria_J1s').value;
}else{
	var kriteria_J1 = "-";
}
//kriteriaJ2
if(document.getElementById('kriteria_J2k').checked){
	var kriteria_J2 = document.getElementById('kriteria_J2k').value;
}else if(document.getElementById('kriteria_J2c').checked){
	var kriteria_J2 = document.getElementById('kriteria_J2c').value;
}else if(document.getElementById('kriteria_J2b').checked){
	var kriteria_J2 = document.getElementById('kriteria_J2b').value;
}else if(document.getElementById('kriteria_J2s').checked){
	var kriteria_J2 = document.getElementById('kriteria_J2s').value;
}else{
	var kriteria_J2 = "-";
}
//kriteriaJ3
if(document.getElementById('kriteria_J3k').checked){
	var kriteria_J3 = document.getElementById('kriteria_J3k').value;
}else if(document.getElementById('kriteria_J3c').checked){
	var kriteria_J3 = document.getElementById('kriteria_J3c').value;
}else if(document.getElementById('kriteria_J3b').checked){
	var kriteria_J3 = document.getElementById('kriteria_J3b').value;
}else if(document.getElementById('kriteria_J3s').checked){
	var kriteria_J3 = document.getElementById('kriteria_J3s').value;
}else{
	var kriteria_J3 = "-";
}
//kriteriaK1
if(document.getElementById('kriteria_K1k').checked){
	var kriteria_K1 = document.getElementById('kriteria_K1k').value;
}else if(document.getElementById('kriteria_K1c').checked){
	var kriteria_K1 = document.getElementById('kriteria_K1c').value;
}else if(document.getElementById('kriteria_K1b').checked){
	var kriteria_K1 = document.getElementById('kriteria_K1b').value;
}else if(document.getElementById('kriteria_K1s').checked){
	var kriteria_K1 = document.getElementById('kriteria_K1s').value;
}else{
	var kriteria_K1 = "-";
}
//kriteriaK2
if(document.getElementById('kriteria_K2k').checked){
	var kriteria_K2 = document.getElementById('kriteria_K2k').value;
}else if(document.getElementById('kriteria_K2c').checked){
	var kriteria_K2 = document.getElementById('kriteria_K2c').value;
}else if(document.getElementById('kriteria_K2b').checked){
	var kriteria_K2 = document.getElementById('kriteria_K2b').value;
}else if(document.getElementById('kriteria_K2s').checked){
	var kriteria_K2 = document.getElementById('kriteria_K2s').value;
}else{
	var kriteria_K2 = "-";
}
//kriteriaL1
if(document.getElementById('kriteria_L1k').checked){
	var kriteria_L1 = document.getElementById('kriteria_L1k').value;
}else if(document.getElementById('kriteria_L1c').checked){
	var kriteria_L1 = document.getElementById('kriteria_L1c').value;
}else if(document.getElementById('kriteria_L1b').checked){
	var kriteria_L1 = document.getElementById('kriteria_L1b').value;
}else if(document.getElementById('kriteria_L1s').checked){
	var kriteria_L1 = document.getElementById('kriteria_L1s').value;
}else{
	var kriteria_L1 = "-";
}
//kriteriaL2
if(document.getElementById('kriteria_L2k').checked){
	var kriteria_L2 = document.getElementById('kriteria_L2k').value;
}else if(document.getElementById('kriteria_L2c').checked){
	var kriteria_L2 = document.getElementById('kriteria_L2c').value;
}else if(document.getElementById('kriteria_L2b').checked){
	var kriteria_L2 = document.getElementById('kriteria_L2b').value;
}else if(document.getElementById('kriteria_L2s').checked){
	var kriteria_L2 = document.getElementById('kriteria_L2s').value;
}else{
	var kriteria_L2 = "-";
}
//kriteriaM1
if(document.getElementById('kriteria_M1k').checked){
	var kriteria_M1 = document.getElementById('kriteria_M1k').value;
}else if(document.getElementById('kriteria_M1c').checked){
	var kriteria_M1 = document.getElementById('kriteria_M1c').value;
}else if(document.getElementById('kriteria_M1b').checked){
	var kriteria_M1 = document.getElementById('kriteria_M1b').value;
}else if(document.getElementById('kriteria_M1s').checked){
	var kriteria_M1 = document.getElementById('kriteria_M1s').value;
}else{
	var kriteria_M1 = "-";
}
//kriteriaN1
if(document.getElementById('kriteria_N1k').checked){
	var kriteria_N1 = document.getElementById('kriteria_N1k').value;
}else if(document.getElementById('kriteria_N1c').checked){
	var kriteria_N1 = document.getElementById('kriteria_N1c').value;
}else if(document.getElementById('kriteria_N1b').checked){
	var kriteria_N1 = document.getElementById('kriteria_N1b').value;
}else if(document.getElementById('kriteria_N1s').checked){
	var kriteria_N1 = document.getElementById('kriteria_N1s').value;
}else{
	var kriteria_N1 = "-";
}
//kriteriaN2
if(document.getElementById('kriteria_N2k').checked){
	var kriteria_N2 = document.getElementById('kriteria_N2k').value;
}else if(document.getElementById('kriteria_N2c').checked){
	var kriteria_N2 = document.getElementById('kriteria_N2c').value;
}else if(document.getElementById('kriteria_N2b').checked){
	var kriteria_N2 = document.getElementById('kriteria_N2b').value;
}else if(document.getElementById('kriteria_N2s').checked){
	var kriteria_N2 = document.getElementById('kriteria_N2s').value;
}else{
	var kriteria_N2 = "-";
}
//kriteriaO1
if(document.getElementById('kriteria_O1k').checked){
	var kriteria_O1 = document.getElementById('kriteria_O1k').value;
}else if(document.getElementById('kriteria_O1c').checked){
	var kriteria_O1 = document.getElementById('kriteria_O1c').value;
}else if(document.getElementById('kriteria_O1b').checked){
	var kriteria_O1 = document.getElementById('kriteria_O1b').value;
}else if(document.getElementById('kriteria_O1s').checked){
	var kriteria_O1 = document.getElementById('kriteria_O1s').value;
}else{
	var kriteria_O1 = "-";
}
//kriteriaO2
if(document.getElementById('kriteria_O2k').checked){
	var kriteria_O2 = document.getElementById('kriteria_O2k').value;
}else if(document.getElementById('kriteria_O2c').checked){
	var kriteria_O2 = document.getElementById('kriteria_O2c').value;
}else if(document.getElementById('kriteria_O2b').checked){
	var kriteria_O2 = document.getElementById('kriteria_O2b').value;
}else if(document.getElementById('kriteria_O2s').checked){
	var kriteria_O2 = document.getElementById('kriteria_O2s').value;
}else{
	var kriteria_O2 = "-";
}
//kriteriaO3
if(document.getElementById('kriteria_O3k').checked){
	var kriteria_O3 = document.getElementById('kriteria_O3k').value;
}else if(document.getElementById('kriteria_O3c').checked){
	var kriteria_O3 = document.getElementById('kriteria_O3c').value;
}else if(document.getElementById('kriteria_O3b').checked){
	var kriteria_O3 = document.getElementById('kriteria_O3b').value;
}else if(document.getElementById('kriteria_O3s').checked){
	var kriteria_O3 = document.getElementById('kriteria_O3s').value;
}else{
	var kriteria_O3 = "-";
}
//kriteriaP1
if(document.getElementById('kriteria_P1k').checked){
	var kriteria_P1 = document.getElementById('kriteria_P1k').value;
}else if(document.getElementById('kriteria_P1c').checked){
	var kriteria_P1 = document.getElementById('kriteria_P1c').value;
}else if(document.getElementById('kriteria_P1b').checked){
	var kriteria_P1 = document.getElementById('kriteria_P1b').value;
}else if(document.getElementById('kriteria_P1s').checked){
	var kriteria_P1 = document.getElementById('kriteria_P1s').value;
}else{
	var kriteria_P1 = "-";
}
//kriteriaQ1
if(document.getElementById('kriteria_Q1k').checked){
	var kriteria_Q1 = document.getElementById('kriteria_Q1k').value;
}else if(document.getElementById('kriteria_Q1c').checked){
	var kriteria_Q1 = document.getElementById('kriteria_Q1c').value;
}else if(document.getElementById('kriteria_Q1b').checked){
	var kriteria_Q1 = document.getElementById('kriteria_Q1b').value;
}else if(document.getElementById('kriteria_Q1s').checked){
	var kriteria_Q1 = document.getElementById('kriteria_Q1s').value;
}else{
	var kriteria_Q1 = "-";
}
//kriteriaQ2
if(document.getElementById('kriteria_Q2k').checked){
	var kriteria_Q2 = document.getElementById('kriteria_Q2k').value;
}else if(document.getElementById('kriteria_Q2c').checked){
	var kriteria_Q2 = document.getElementById('kriteria_Q2c').value;
}else if(document.getElementById('kriteria_Q2b').checked){
	var kriteria_Q2 = document.getElementById('kriteria_Q2b').value;
}else if(document.getElementById('kriteria_Q2s').checked){
	var kriteria_Q2 = document.getElementById('kriteria_Q2s').value;
}else{
	var kriteria_Q2 = "-";
}
//kriteriaQ3
if(document.getElementById('kriteria_Q3k').checked){
	var kriteria_Q3 = document.getElementById('kriteria_Q3k').value;
}else if(document.getElementById('kriteria_Q3c').checked){
	var kriteria_Q3 = document.getElementById('kriteria_Q3c').value;
}else if(document.getElementById('kriteria_Q3b').checked){
	var kriteria_Q3 = document.getElementById('kriteria_Q3b').value;
}else if(document.getElementById('kriteria_Q3s').checked){
	var kriteria_Q3 = document.getElementById('kriteria_Q3s').value;
}else{
	var kriteria_Q3 = "-";
}
//kriteriaQ4
if(document.getElementById('kriteria_Q4k').checked){
	var kriteria_Q4 = document.getElementById('kriteria_Q4k').value;
}else if(document.getElementById('kriteria_Q4c').checked){
	var kriteria_Q4 = document.getElementById('kriteria_Q4c').value;
}else if(document.getElementById('kriteria_Q4b').checked){
	var kriteria_Q4 = document.getElementById('kriteria_Q4b').value;
}else if(document.getElementById('kriteria_Q4s').checked){
	var kriteria_Q4 = document.getElementById('kriteria_Q4s').value;
}else{
	var kriteria_Q4 = "-";
}
//kriteriaQ5
if(document.getElementById('kriteria_Q5k').checked){
	var kriteria_Q5 = document.getElementById('kriteria_Q5k').value;
}else if(document.getElementById('kriteria_Q5c').checked){
	var kriteria_Q5 = document.getElementById('kriteria_Q5c').value;
}else if(document.getElementById('kriteria_Q5b').checked){
	var kriteria_Q5 = document.getElementById('kriteria_Q5b').value;
}else if(document.getElementById('kriteria_Q5s').checked){
	var kriteria_Q5 = document.getElementById('kriteria_Q5s').value;
}else{
	var kriteria_Q5 = "-";
}
//kriteriaR1
if(document.getElementById('kriteria_R1k').checked){
	var kriteria_R1 = document.getElementById('kriteria_R1k').value;
}else if(document.getElementById('kriteria_R1c').checked){
	var kriteria_R1 = document.getElementById('kriteria_R1c').value;
}else if(document.getElementById('kriteria_R1b').checked){
	var kriteria_R1 = document.getElementById('kriteria_R1b').value;
}else if(document.getElementById('kriteria_R1s').checked){
	var kriteria_R1 = document.getElementById('kriteria_R1s').value;
}else{
	var kriteria_R1 = "-";
}
//kriteriaR2
if(document.getElementById('kriteria_R2k').checked){
	var kriteria_R2 = document.getElementById('kriteria_R2k').value;
}else if(document.getElementById('kriteria_R2c').checked){
	var kriteria_R2 = document.getElementById('kriteria_R2c').value;
}else if(document.getElementById('kriteria_R2b').checked){
	var kriteria_R2 = document.getElementById('kriteria_R2b').value;
}else if(document.getElementById('kriteria_R2s').checked){
	var kriteria_R2 = document.getElementById('kriteria_R2s').value;
}else{
	var kriteria_R2 = "-";
}
//kriteriaS1
if(document.getElementById('kriteria_S1k').checked){
	var kriteria_S1 = document.getElementById('kriteria_S1k').value;
}else if(document.getElementById('kriteria_S1c').checked){
	var kriteria_S1 = document.getElementById('kriteria_S1c').value;
}else if(document.getElementById('kriteria_S1b').checked){
	var kriteria_S1 = document.getElementById('kriteria_S1b').value;
}else if(document.getElementById('kriteria_S1s').checked){
	var kriteria_S1 = document.getElementById('kriteria_S1s').value;
}else{
	var kriteria_S1 = "-";
}

var ajax = new XMLHttpRequest();
var method = "GET";
var url = "../contactform/input_nilai.php?team="+circle_team+"&nip="+nip_juri+"&kriteria_A1="+kriteria_A1+"&kriteria_A2="+kriteria_A2+"&kriteria_A3="+kriteria_A3+"&kriteria_B1="+kriteria_B1+"&kriteria_B2="+kriteria_B2+"&kriteria_B3="+kriteria_B3+"&kriteria_C1="+kriteria_C1+"&kriteria_C2="+kriteria_C2+"&kriteria_C3="+kriteria_C3+"&kriteria_D1="+kriteria_D1+"&kriteria_D2="+kriteria_D2+"&kriteria_E1="+kriteria_E1+"&kriteria_F1="+kriteria_F1+"&kriteria_G1="+kriteria_G1+"&kriteria_H1="+kriteria_H1+"&kriteria_H2="+kriteria_H2+"&kriteria_H3="+kriteria_H3+"&kriteria_H4="+kriteria_H4+"&kriteria_I1="+kriteria_I1+"&kriteria_J1="+kriteria_J1+"&kriteria_J2="+kriteria_J2+"&kriteria_J3="+kriteria_J3+"&kriteria_K1="+kriteria_K1+"&kriteria_K2="+kriteria_K2+"&kriteria_L1="+kriteria_L1+"&kriteria_L2="+kriteria_L2+"&kriteria_M1="+kriteria_M1+"&kriteria_N1="+kriteria_N1+"&kriteria_N2="+kriteria_N2+"&kriteria_O1="+kriteria_O1+"&kriteria_O2="+kriteria_O2+"&kriteria_O3="+kriteria_O3+"&kriteria_P1="+kriteria_P1+"&kriteria_Q1="+kriteria_Q1+"&kriteria_Q2="+kriteria_Q2+"&kriteria_Q3="+kriteria_Q3+"&kriteria_Q4="+kriteria_Q4+"&kriteria_Q5="+kriteria_Q5+"&kriteria_R1="+kriteria_R1+"&kriteria_R2="+kriteria_R2+"&kriteria_S1="+kriteria_S1+"&komentar="+komentar;
var statuss = true;
if(circle_team != "-" && kriteria_A1 != "-" && kriteria_A2 != "-" && kriteria_A3 != "-" && kriteria_B1 != "-" && kriteria_B2 != "-" && kriteria_B3 != "-" && kriteria_C1 != "-" && kriteria_C2 != "-" && kriteria_C3 != "-" && kriteria_D1 != "-" && kriteria_D2 != "-" && kriteria_E1 != "-" && kriteria_F1 != "-" && kriteria_G1 != "-" && kriteria_H1 != "-" && kriteria_H2 != "-" && kriteria_H3 != "-" && kriteria_H4 != "-" && kriteria_I1 != "-" && kriteria_J1 != "-" && kriteria_J2 != "-" && kriteria_J3 != "-" && kriteria_K1 != "-" && kriteria_K2 != "-" && kriteria_L1 != "-" && kriteria_L2 != "-" && kriteria_M1 != "-" && kriteria_N1 != "-" && kriteria_N2 != "-" && kriteria_O1 != "-" && kriteria_O2 != "-" && kriteria_O3 != "-" && kriteria_P1 != "-" && kriteria_Q1 != "-" && kriteria_Q2 != "-" && kriteria_Q3 != "-" && kriteria_Q4 != "-" && kriteria_Q5 != "-" && kriteria_R1 != "-" && kriteria_R2 != "-" && kriteria_S1 != "-" && komentar != ""){
	ajax.open(method,url,statuss);
	ajax.send();
	ajax.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		alert(this.responseText);
		}
	}
}else{
	alert('Data Nilai Penjurian Belum Lengkap!');
}
	


}