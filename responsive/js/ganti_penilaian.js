function penilaian(){
var ganti_penilaian = document.getElementById('by_penilaian'); 
var ganti_penilaian_opt = document.getElementsByName('jenis_penilaian')[ganti_penilaian.selectedIndex+1].value;
var html = "";
var html1 = "";
var html_tabel_kosong = "";
var html_header = "";
var html_sort = "";
var html_sort4 = "";
var html_circle = "";
var list_krit = document.getElementById('list_kirteria');
var by_jur = document.getElementById('by_juri');
var circle = document.getElementById('nama_circel');
var tabel = document.getElementById('isi_tabel');
var header_1 = document.getElementById('header_1');
var sort = document.getElementById('sort');
var sort2 = document.getElementById('sort2');
var sort3 = document.getElementById('sort3');
var sort4 = document.getElementById('sort4');
var list_circle = document.getElementById('nama_circel');

var header_lapangan = document.getElementById('header_2');
var header_presentasi = document.getElementById('header_3');
var header_total = document.getElementById('header_4');
var header_formulasi = document.getElementById('formulasi');
var html_header_lapangan = "";
var html_header_presentasi = "";
var html_header_total= "";
var html_formulasi= "";

var list_tim_lapangan = document.getElementById('isi_tabel2');
var list_tim_presentasi = document.getElementById('isi_tabel3');
var list_tim_total = document.getElementById('isi_tabel4');
var html_list_tim_lapangan = "";
var html_list_tim_presentasi = "";
var html_list_tim_total = "";

if(ganti_penilaian_opt == 'data_nilai'){

    document.getElementById("_tabel1").hidden = false;
    document.getElementById("_tabel2").hidden = true;

	html_circle +='<option name="nama_circel" value = "-">-</option>';
	html_circle +='<option name="nama_circel" value = "All">All</option>';
    html_circle +='<option name="nama_circel" value = "BensAe">BensAe (APW)</option>';
 	html_circle +='<option name="nama_circel" value = "Pasti" >Pasti (APW)</option>';
    html_circle +='<option name="nama_circel" value = "Enviro" >Enviro (BPW)</option>';
    html_circle +='<option name="nama_circel" value = "Manise" >Manise (BPW)</option>';
    html_circle +='<option name="nama_circel" value = "Maxio" >Maxio (BPW)</option>';
    html_circle +='<option name="nama_circel" value = "Maxtour" >Maxtour (DPW)</option>';
    html_circle +='<option name="nama_circel" value = "Satgas1" >Satgas1 (DPW)</option>';
    html_circle +='<option name="nama_circel" value = "Semongko" >Semongko (RPW)</option>';
    html_circle +='<option name="nama_circel" value = "Sosis" >Sosis (RPW)</option>';
    html_circle +='<option name="nama_circel" value = "Masker" >Masker (JMW)</option>';
    html_circle +='<option name="nama_circel" value = "Misqueen" >Misqueen (JPP)</option>';
    html_circle +='<option name="nama_circel" value = "Selektif" >Selektif (JXP)</option>';
    html_circle +='<option name="nama_circel" value = "Gemesin" >Gemesin (MS)</option>';

	html_header += "<th>Nama Circle</th>";
    html_header += "<th>Nama Juri</th>";
    html_header +="<th></th>";
    html_header +="<th></th>";
    html_header +="<th></th>";
    html_header +="<th>Kriteria</th>";
    html_header +="<th></th>";
    html_header +="<th></th>";
    html_header +="<th></th>";
    html_header +="<th> Total Nilai</th>";

	html += "<th>" + "<th>";
	html += "<th class='th_size'>PEMILIHAN & TUJUAN PROYEK PERBAIKAN</th>";
	html += "<th class='th_size'>PENETAPAN TARGET PROYEK PERBAIKAN</th>";
	html += "<th class='th_size'>ANALISA SITUASI & PENENTUAN FAKTOR PENYEBAB MASALAH UTAMA</th>";
	html += "<th class='th_size'>PENGEMBANGAN & RENCANA SOLUSI PERBAIKAN</th>";
	html += "<th class='th_size'>IMPLEMENTASI SOLUSI PERBAIKAN</th>";
	html += "<th class='th_size'>EVALUASI HASIL PERBAIKAN</th>";
	html += "<th class='th_size'>PENGENDALIAN DAN STANDARISASI</th>";
	html += "<th>" + "<th>";

	html_sort += "<th class='th_size'> </th>";
	html_sort += "<th class='th_size'> </th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama3' name='sort_nama' onchange = 'sort_table()' value = '-'><option name='sort_nama' ></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama4' name='sort_nama' onchange = 'sort_table()' value = '-'><option name='sort_nama' ></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama5' name='sort_nama' onchange = 'sort_table()' value = '-'><option name='sort_nama' ></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama6' name='sort_nama' onchange = 'sort_table()' value = '-'><option name='sort_nama' ></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama7' name='sort_nama' onchange = 'sort_table()' value = '-'><option name='sort_nama' ></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama8' name='sort_nama' onchange = 'sort_table()' value = '-'><option name='sort_nama' ></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama9' name='sort_nama' onchange = 'sort_table()' value = '-'><option name='sort_nama' ></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama10' name='sort_nama' onchange = 'sort_table()' value = 'sort_nama10'><option name='sort_nama' value='-'></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";

	html1 += "<option name='nama_juri' value='-'>-</option>";
	html1 += '<option name="nama_juri" value = "All">All</option>';
	html1 += "<option name='nama_juri' value='14-0382'>FRISDA</option>";
	html1 += "<option name='nama_juri' value='12-0816'>MUHAMAD HANDIKI</option>";
	html1 += "<option name='nama_juri' value='91-0842'>HARRY PURWOTJAHYONO</option>";
	html1 += "<option name='nama_juri' value='06-0063'>INDRA TRI WINTOKO</option>";

	circle.disabled = false;
    by_jur.disabled = false;

}else if (ganti_penilaian_opt == 'data_nilai_presentasi'){

    document.getElementById("_tabel1").hidden = false;
    document.getElementById("_tabel2").hidden = true;

	html_circle +='<option name="nama_circel" value = "-">-</option>';
	html_circle +='<option name="nama_circel" value = "All">All</option>';
    html_circle +='<option name="nama_circel" value = "BensAe">BensAe (APW)</option>';
 	html_circle +='<option name="nama_circel" value = "Pasti" >Pasti (APW)</option>';
    html_circle +='<option name="nama_circel" value = "Enviro" >Enviro (BPW)</option>';
    html_circle +='<option name="nama_circel" value = "Manise" >Manise (BPW)</option>';
    html_circle +='<option name="nama_circel" value = "Maxio" >Maxio (BPW)</option>';
    html_circle +='<option name="nama_circel" value = "Maxtour" >Maxtour (DPW)</option>';
    html_circle +='<option name="nama_circel" value = "Satgas1" >Satgas1 (DPW)</option>';
    html_circle +='<option name="nama_circel" value = "Semongko" >Semongko (RPW)</option>';
    html_circle +='<option name="nama_circel" value = "Sosis" >Sosis (RPW)</option>';
    html_circle +='<option name="nama_circel" value = "Masker" >Masker (JMW)</option>';
    html_circle +='<option name="nama_circel" value = "Misqueen" >Misqueen (JPP)</option>';
    html_circle +='<option name="nama_circel" value = "Selektif" >Selektif (JXP)</option>';
    html_circle +='<option name="nama_circel" value = "Gemesin" >Gemesin (MS)</option>';

	html_header += "<th>Nama Circle</th>";
    html_header += "<th>Nama Juri</th>";
    html_header +="<th></th>";
    html_header +="<th></th>";
    html_header +="<th></th>";
    html_header +="<th>Kriteria</th>";
    html_header +="<th></th>";
    html_header +="<th></th>";
    html_header +="<th></th>";
    html_header +="<th> Total Nilai</th>";

	html += "<th>" + "<th>";
	html += "<th class='th_size'>KORELASI DENGAN STRETEGI ATAU TINGKAT URGENSI ATAU TINGKAT KEPENTINGAN PERMASALAHAN DALAM COMPANY VIEW</th>";
	html += "<th class='th_size'>METODE DAN TOOLS YANG DIGUNAKAN DALAM PENGEMBANGAN SOLUSI DAN INOVASI/IMPROVEMENT ACTIONS</th>";
	html += "<th class='th_size'>STANDARISASI</th>";
	html += "<th class='th_size'>TEKNIK PENYAMPAIAN / KEJELASAN PRESENTASI</th>";
	html += "<th class='th_size'>KEHARMONISAN PENGGUNAAN ALAT BANTU</th>";
	html += "<th class='th_size'>KERJASAMA TEAM DALAM PRESENTASI</th>";
	html += "<th class='th_size'>KETEPATAN WAKTU PRESENTASI</th>";
	html += "<th>" + "<th>";

	html_sort += "<th class='th_size'> </th>";
  html_sort += "<th class='th_size'> </th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama2' name='sort_nama' onchange = 'sort_table()'><option name='sort_nama' value='-'></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama3' name='sort_nama' onchange = 'sort_table()'><option name='sort_nama' value='-'></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama4' name='sort_nama' onchange = 'sort_table()'><option name='sort_nama' value='-'></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama5' name='sort_nama' onchange = 'sort_table()><option name='sort_nama' value='-'></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama6' name='sort_nama' onchange = 'sort_table()><option name='sort_nama' value='-'></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama7' name='sort_nama' onchange = 'sort_table()><option name='sort_nama' value='-'></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama8' name='sort_nama' onchange = 'sort_table()><option name='sort_nama' value='-'></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama9' name='sort_nama' onchange = 'sort_table()><option name='sort_nama' value='-'></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";
	html_sort += "<th class='th_size'> Sort by<br><select id='sort_nama10' name='sort_nama' onchange = 'sort_table()><option name='sort_nama' value='-'></option><option name='sort_nama' value='asc'>⇈</option><option value='adc' name='sort_nama'>⇊</option></select></th>";

	html1 += "<option name='nama_juri' value='-'>-</option>";
	html1 += '<option name="nama_juri" value = "All">All</option>';
	html1 += "<option name='nama_juri' value='20-0745'>ISMAIL SALEH</option>";
	html1 += "<option name='nama_juri' value='94-0455'>LUKAS FIRMANTO</option>";
	html1 += "<option name='nama_juri' value='15-0034'>DWINANDA SEPTIADHI</option>";

	circle.disabled = false;
    by_jur.disabled = false;

}else if(ganti_penilaian_opt == 'nilai_total'){

    document.getElementById("_tabel2").hidden = false;
    document.getElementById("_tabel1").hidden = true;

        html_circle +='<option name="nama_circel" value = "-">-</option>';
    html_circle +='<option name="nama_circel" value = "All">All</option>';
    html_circle +='<option name="nama_circel" value = "BensAe">BensAe (APW)</option>';
    html_circle +='<option name="nama_circel" value = "Pasti" >Pasti (APW)</option>';
    html_circle +='<option name="nama_circel" value = "Enviro" >Enviro (BPW)</option>';
    html_circle +='<option name="nama_circel" value = "Manise" >Manise (BPW)</option>';
    html_circle +='<option name="nama_circel" value = "Maxio" >Maxio (BPW)</option>';
    html_circle +='<option name="nama_circel" value = "Maxtour" >Maxtour (DPW)</option>';
    html_circle +='<option name="nama_circel" value = "Satgas1" >Satgas1 (DPW)</option>';
    html_circle +='<option name="nama_circel" value = "Semongko" >Semongko (RPW)</option>';
    html_circle +='<option name="nama_circel" value = "Sosis" >Sosis (RPW)</option>';
    html_circle +='<option name="nama_circel" value = "Masker" >Masker (JMW)</option>';
    html_circle +='<option name="nama_circel" value = "Misqueen" >Misqueen (JPP)</option>';
    html_circle +='<option name="nama_circel" value = "Selektif" >Selektif (JXP)</option>';
    html_circle +='<option name="nama_circel" value = "Gemesin" >Gemesin (MS)</option>';

       html_header_lapangan += "<th> </th>";
	   html_header_lapangan += "<th>FRISDA</th>";
       html_header_lapangan += "<th>MUHAMAD HANDIKI</th>";
       html_header_lapangan += "<th>HARRY PURWOTJAHYONO</th>";
       html_header_lapangan += "<th>INDRA TRI WINTOKO</th>";
       html_header_lapangan += "<th>MAX</th>";
       html_header_lapangan += "<th>MIN</th>";
       html_header_lapangan += "<th>AVG</th>";

       html_header_presentasi += "<th> </th>";
       html_header_presentasi += "<th>ISMAIL SALEH</th>";
       html_header_presentasi += "<th>LUKAS FIRMANTO</th>";
       html_header_presentasi += "<th>DWINANDA SEPTIADHI</th>";
       html_header_presentasi += "<th>MAX</th>";
       html_header_presentasi += "<th>MIN</th>";
       html_header_presentasi += "<th>AVG</th>";

  html_sort4 += "<th></th>";   
  html_sort4 += "<th class='th_size'> Sort by<br><select id='sort_nilai_lapangan' name='sort_nama1' onchange = 'sort_Table1()' ><option name='sort_nama1' value = '-' ></option><option name='sort_nama1' value='asc'>⇈</option><option value='adc' name='sort_nama1'>⇊</option></select></th>";
  html_sort4 += "<th class='th_size'> Sort by<br><select id='sort_nilai_presentasi' name='sort_nama2' onchange = 'sort_Table2()'><option name='sort_nama2' value = '-' ></option><option name='sort_nama2' value='asc'>⇈</option><option value='adc' name='sort_nama2'>⇊</option></select></th>";
  html_sort4 += "<th class='th_size'> Sort by<br><select id='sort_nilai_total' name='sort_nama3' onchange = 'sort_Table3()'><option name='sort_nama3' value = '-' ></option><option name='sort_nama3' value='asc'>⇈</option><option value='adc' name='sort_nama3'>⇊</option></select></th>";


       html_header_total += "<th>Team</th>";
       html_header_total += "<th>Total Nilai Lapangan</th>";
       html_header_total += "<th>Total Nilai Presentasi</th>";
       html_header_total += "<th>Total Nilai</th>";

       html_formulasi += "<th></th>";
       html_formulasi += "<th>(a)</th>";
       html_formulasi += "<th>(b)</th>";
       html_formulasi += "<th>(a x 80%) + (b x 20%)</th>";


     circle.disabled = false;
     by_jur.disabled = true;

}else{


}
sort4.innerHTML = html_sort4
header_formulasi.innerHTML = html_formulasi;
header_lapangan.innerHTML = html_header_lapangan;
header_presentasi.innerHTML = html_header_presentasi;
header_total.innerHTML = html_header_total;
list_tim_lapangan.innerHTML = html_list_tim_lapangan;
list_tim_presentasi.innerHTML = html_list_tim_presentasi;
list_tim_total.innerHTML = html_list_tim_total;
list_circle.innerHTML = html_circle;
header_1.innerHTML = html_header;
sort.innerHTML = html_sort;
list_krit.innerHTML = html;
by_jur.innerHTML = html1;
tabel.innerHTML = html_tabel_kosong;

}
