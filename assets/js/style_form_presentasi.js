 window.dataLayer = window.dataLayer || [];

  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-23581568-13');

const selected = document.querySelector(".sub_menu1");
const selected2 = document.querySelector(".sub_menu2");
const selected3 = document.querySelector(".sub_menu3");
const selected4 = document.querySelector(".sub_menu4");
const selected5 = document.querySelector(".sub_menu5");
const selected6 = document.querySelector(".sub_menu6");
const selected7 = document.querySelector(".sub_menu7");
const optionsContainer1 = document.querySelector(".list_submenu_1");
const optionsContainer2 = document.querySelector(".list_submenu_2");
const optionsContainer3 = document.querySelector(".list_submenu_3");
const optionsContainer4 = document.querySelector(".list_submenu_4");
const optionsContainer5 = document.querySelector(".list_submenu_5");
const optionsContainer6 = document.querySelector(".list_submenu_6");
const optionsContainer7 = document.querySelector(".list_submenu_7");
const options1 = document.querySelector(".hide_submenu_1");
const listoption1 = document.querySelector(".option_menu_1");
const options2 = document.querySelector(".hide_submenu_2");
const listoption2 = document.querySelector(".option_menu_2");
const options3 = document.querySelector(".hide_submenu_3");
const listoption3 = document.querySelector(".option_menu_3");
const options4 = document.querySelector(".hide_submenu_4");
const listoption4 = document.querySelector(".option_menu_4");
const options5 = document.querySelector(".hide_submenu_5");
const listoption5 = document.querySelector(".option_menu_5");
const options6 = document.querySelector(".hide_submenu_6");
const listoption6 = document.querySelector(".option_menu_6");
const options7 = document.querySelector(".hide_submenu_7");
const listoption7 = document.querySelector(".option_menu_7");
const options8 = document.querySelector(".hide_submenu_8");
const listoption8 = document.querySelector(".option_menu_8");
const options9 = document.querySelector(".hide_submenu_9");
const listoption9 = document.querySelector(".option_menu_9");
const options10 = document.querySelector(".hide_submenu_10");
const listoption10 = document.querySelector(".option_menu_10");
const options11 = document.querySelector(".hide_submenu_11");
const listoption11 = document.querySelector(".option_menu_11");
const options12 = document.querySelector(".hide_submenu_12");
const listoption12 = document.querySelector(".option_menu_12");


selected.addEventListener("click", () => {
  optionsContainer1.classList.toggle("active");
});

selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");
});

selected3.addEventListener("click", () => {
  optionsContainer3.classList.toggle("active");
});

selected4.addEventListener("click", () => {
  optionsContainer4.classList.toggle("active");
});

selected5.addEventListener("click", () => {
  optionsContainer5.classList.toggle("active");
});

selected6.addEventListener("click", () => {
  optionsContainer6.classList.toggle("active");
});

selected7.addEventListener("click", () => {
  optionsContainer7.classList.toggle("active");
});

options1.addEventListener("click", () => {
  listoption1.classList.toggle("active");
});

options2.addEventListener("click", () => {
  listoption2.classList.toggle("active");
});

options3.addEventListener("click", () => {
  listoption3.classList.toggle("active");
});

options4.addEventListener("click", () => {
  listoption4.classList.toggle("active");
});

options5.addEventListener("click", () => {
  listoption5.classList.toggle("active");
});

options6.addEventListener("click", () => {
  listoption6.classList.toggle("active");
});

options7.addEventListener("click", () => {
  listoption7.classList.toggle("active");
});

options8.addEventListener("click", () => {
  listoption8.classList.toggle("active");
});

options9.addEventListener("click", () => {
  listoption9.classList.toggle("active");
});

options10.addEventListener("click", () => {
  listoption10.classList.toggle("active");
});

options11.addEventListener("click", () => {
  listoption11.classList.toggle("active");
});

options12.addEventListener("click", () => {
  listoption12.classList.toggle("active");
});

function list1(){
	var radio1_kurang = document.getElementById('total_nilai1_kurang');
	var radio1_cukup = document.getElementById('total_nilai1_cukup');
	var radio1_baik = document.getElementById('total_nilai1_baik');
	var radio1_sangat_baik = document.getElementById('total_nilai1_sangat_baik');
	var box1_kurang = document.getElementById('nilai1_kurang');
	var box1_cukup = document.getElementById('nilai1_cukup');
	var box1_baik = document.getElementById('nilai1_baik');
	var box1_sangat_baik = document.getElementById('nilai1_sangat_baik');
	var select_nilai1_kurang = document.getElementById('select_nilai1_kurang');
	var select_nilai1_cukup = document.getElementById('select_nilai1_cukup');
	var select_nilai1_baik = document.getElementById('select_nilai1_baik');
	var select_nilai1_sangat_baik = document.getElementById('select_nilai1_sangat_baik');

	if(radio1_kurang.checked){
		select_nilai1_kurang.disabled = false;
		select_nilai1_cukup.disabled = true;
		select_nilai1_baik.disabled = true;
		select_nilai1_sangat_baik.disabled = true;
		select_nilai1_cukup.value = "";
		select_nilai1_baik.value = "";
		select_nilai1_sangat_baik.value = "";
		box1_kurang.style.color = '#000000';
		box1_kurang.style.backgroundColor = '#5F9EA0';
		box1_cukup.style.color = '#525252';
		box1_cukup.style.backgroundColor = '#a7a7a7';
		box1_baik.style.color = '#525252';
		box1_baik.style.backgroundColor = '#a7a7a7';
		box1_sangat_baik.style.color = '#525252';
		box1_sangat_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio1_cukup.checked){
		select_nilai1_kurang.disabled = true;
		select_nilai1_cukup.disabled = false;
		select_nilai1_baik.disabled = true;
		select_nilai1_sangat_baik.disabled = true;
		select_nilai1_kurang.value = "";
		select_nilai1_baik.value = "";
		select_nilai1_sangat_baik.value = "";
		box1_kurang.style.color = '#525252';
		box1_kurang.style.backgroundColor = '#a7a7a7';
		box1_cukup.style.color = '#000000';
		box1_cukup.style.backgroundColor = '#5F9EA0';
		box1_baik.style.color = '#525252';
		box1_baik.style.backgroundColor = '#a7a7a7';
		box1_sangat_baik.style.color = '#525252';
		box1_sangat_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio1_baik.checked){
		select_nilai1_kurang.disabled = true;
		select_nilai1_cukup.disabled = true;
		select_nilai1_baik.disabled = false;
		select_nilai1_sangat_baik.disabled = true;
		select_nilai1_kurang.value = "";
		select_nilai1_cukup.value = "";
		select_nilai1_sangat_baik.value = "";
		box1_kurang.style.color = '#525252';
		box1_kurang.style.backgroundColor = '#a7a7a7';
		box1_cukup.style.color = '#525252';
		box1_cukup.style.backgroundColor = '#a7a7a7';
		box1_baik.style.color = '#000000';
		box1_baik.style.backgroundColor = '#5F9EA0';
		box1_sangat_baik.style.color = '#525252';
		box1_sangat_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio1_sangat_baik.checked){
		select_nilai1_kurang.disabled = true;
		select_nilai1_cukup.disabled = true;
		select_nilai1_baik.disabled = true;
		select_nilai1_sangat_baik.disabled = false;
		select_nilai1_kurang.value = "";
		select_nilai1_cukup.value = "";
		select_nilai1_baik.value = "";
		box1_kurang.style.color = '#525252';
		box1_kurang.style.backgroundColor = '#a7a7a7';
		box1_cukup.style.color = '#525252';
		box1_cukup.style.backgroundColor = '#a7a7a7';
		box1_baik.style.color = '#525252';
		box1_baik.style.backgroundColor = '#a7a7a7';
		box1_sangat_baik.style.color = '#000000';
		box1_sangat_baik.style.backgroundColor = '#5F9EA0';
	}else{
		select_nilai1_kurang.value = "";
		select_nilai1_cukup.value = "";
		select_nilai1_baik.value = "";
		select_nilai1_sangat_baik.value = "";
		box1_kurang.style.color = '#000000';
		box1_kurang.style.backgroundColor = '#5F9EA0';
		box1_cukup.style.color = '#000000';
		box1_cukup.style.backgroundColor = '#5F9EA0';
		box1_baik.style.color = '#000000';
		box1_baik.style.backgroundColor = '#5F9EA0';
		box1_sangat_baik.style.color = '#000000';
		box1_sangat_baik.style.backgroundColor = '#5F9EA0';
	}
}

function list2(){
	var radio2_kurang = document.getElementById('total_nilai2_kurang');
	var radio2_cukup = document.getElementById('total_nilai2_cukup');
	var radio2_baik = document.getElementById('total_nilai2_baik');
	var radio2_sangat_baik = document.getElementById('total_nilai2_sangat_baik');
	var box2_kurang = document.getElementById('nilai2_kurang');
	var box2_cukup = document.getElementById('nilai2_cukup');
	var box2_baik = document.getElementById('nilai2_baik');
	var box2_sangat_baik = document.getElementById('nilai2_sangat_baik');
	var select_nilai2_kurang = document.getElementById('select_nilai2_kurang');
	var select_nilai2_cukup = document.getElementById('select_nilai2_cukup');
	var select_nilai2_baik = document.getElementById('select_nilai2_baik');
	var select_nilai2_sangat_baik = document.getElementById('select_nilai2_sangat_baik');

	if(radio2_kurang.checked){
		select_nilai2_kurang.disabled = false;
		select_nilai2_cukup.disabled = true;
		select_nilai2_baik.disabled = true;
		select_nilai2_sangat_baik.disabled = true;
		select_nilai2_cukup.value = "";
		select_nilai2_baik.value = "";
		select_nilai2_sangat_baik.value = "";
		box2_kurang.style.color = '#000000';
		box2_kurang.style.backgroundColor = '#5F9EA0';
		box2_cukup.style.color = '#525252';
		box2_cukup.style.backgroundColor = '#a7a7a7';
		box2_baik.style.color = '#525252';
		box2_baik.style.backgroundColor = '#a7a7a7';
		box2_sangat_baik.style.color = '#525252';
		box2_sangat_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio2_cukup.checked){
		select_nilai2_kurang.disabled = true;
		select_nilai2_cukup.disabled = false;
		select_nilai2_baik.disabled = true;
		select_nilai2_sangat_baik.disabled = true;
		select_nilai2_kurang.value = "";
		select_nilai2_baik.value = "";
		select_nilai2_sangat_baik.value = "";
		box2_kurang.style.color = '#525252';
		box2_kurang.style.backgroundColor = '#a7a7a7';
		box2_cukup.style.color = '#000000';
		box2_cukup.style.backgroundColor = '#5F9EA0';
		box2_baik.style.color = '#525252';
		box2_baik.style.backgroundColor = '#a7a7a7';
		box2_sangat_baik.style.color = '#525252';
		box2_sangat_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio2_baik.checked){
		select_nilai2_kurang.disabled = true;
		select_nilai2_cukup.disabled = true;
		select_nilai2_baik.disabled = false;
		select_nilai2_sangat_baik.disabled = true;
		select_nilai2_kurang.value = "";
		select_nilai2_cukup.value = "";
		select_nilai2_sangat_baik.value = "";
		box2_kurang.style.color = '#525252';
		box2_kurang.style.backgroundColor = '#a7a7a7';
		box2_cukup.style.color = '#525252';
		box2_cukup.style.backgroundColor = '#a7a7a7';
		box2_baik.style.color = '#000000';
		box2_baik.style.backgroundColor = '#5F9EA0';
		box2_sangat_baik.style.color = '#525252';
		box2_sangat_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio2_sangat_baik.checked){
		select_nilai2_kurang.disabled = true;
		select_nilai2_cukup.disabled = true;
		select_nilai2_baik.disabled = true;
		select_nilai2_sangat_baik.disabled = false;
		select_nilai2_kurang.value = "";
		select_nilai2_cukup.value = "";
		select_nilai2_baik.value = "";
		box2_kurang.style.color = '#525252';
		box2_kurang.style.backgroundColor = '#a7a7a7';
		box2_cukup.style.color = '#525252';
		box2_cukup.style.backgroundColor = '#a7a7a7';
		box2_baik.style.color = '#525252';
		box2_baik.style.backgroundColor = '#a7a7a7';
		box2_sangat_baik.style.color = '#000000';
		box2_sangat_baik.style.backgroundColor = '#5F9EA0';
	}else{
		select_nilai2_kurang.value = "";
		select_nilai2_cukup.value = "";
		select_nilai2_baik.value = "";
		select_nilai2_sangat_baik.value = "";
		box2_kurang.style.color = '#000000';
		box2_kurang.style.backgroundColor = '#5F9EA0';
		box2_cukup.style.color = '#000000';
		box2_cukup.style.backgroundColor = '#5F9EA0';
		box2_baik.style.color = '#000000';
		box2_baik.style.backgroundColor = '#5F9EA0';
		box2_sangat_baik.style.color = '#000000';
		box2_sangat_baik.style.backgroundColor = '#5F9EA0';
	}
}

function list3(){
	var radio3_kurang = document.getElementById('total_nilai3_kurang');
	var radio3_cukup = document.getElementById('total_nilai3_cukup');
	var radio3_baik = document.getElementById('total_nilai3_baik');
	var radio3_sangat_baik = document.getElementById('total_nilai3_sangat_baik');
	var box3_kurang = document.getElementById('nilai3_kurang');
	var box3_cukup = document.getElementById('nilai3_cukup');
	var box3_baik = document.getElementById('nilai3_baik');
	var box3_sangat_baik = document.getElementById('nilai3_sangat_baik');
	var select_nilai3_kurang = document.getElementById('select_nilai3_kurang');
	var select_nilai3_cukup = document.getElementById('select_nilai3_cukup');
	var select_nilai3_baik = document.getElementById('select_nilai3_baik');
	var select_nilai3_sangat_baik = document.getElementById('select_nilai3_sangat_baik');

	if(radio3_kurang.checked){
		select_nilai3_kurang.disabled = false;
		select_nilai3_cukup.disabled = true;
		select_nilai3_baik.disabled = true;
		select_nilai3_sangat_baik.disabled = true;
		select_nilai3_cukup.value = "";
		select_nilai3_baik.value = "";
		select_nilai3_sangat_baik.value = "";
		box3_kurang.style.color = '#000000';
		box3_kurang.style.backgroundColor = '#5F9EA0';
		box3_cukup.style.color = '#525252';
		box3_cukup.style.backgroundColor = '#a7a7a7';
		box3_baik.style.color = '#525252';
		box3_baik.style.backgroundColor = '#a7a7a7';
		box3_sangat_baik.style.color = '#525252';
		box3_sangat_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio3_cukup.checked){
		select_nilai3_kurang.disabled = true;
		select_nilai3_cukup.disabled = false;
		select_nilai3_baik.disabled = true;
		select_nilai3_sangat_baik.disabled = true;
		select_nilai3_kurang.value = "";
		select_nilai3_baik.value = "";
		select_nilai3_sangat_baik.value = "";
		box3_kurang.style.color = '#525252';
		box3_kurang.style.backgroundColor = '#a7a7a7';
		box3_cukup.style.color = '#000000';
		box3_cukup.style.backgroundColor = '#5F9EA0';
		box3_baik.style.color = '#525252';
		box3_baik.style.backgroundColor = '#a7a7a7';
		box3_sangat_baik.style.color = '#525252';
		box3_sangat_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio3_baik.checked){
		select_nilai3_kurang.disabled = true;
		select_nilai3_cukup.disabled = true;
		select_nilai3_baik.disabled = false;
		select_nilai3_sangat_baik.disabled = true;
		select_nilai3_kurang.value = "";
		select_nilai3_cukup.value = "";
		select_nilai3_sangat_baik.value = "";
		box3_kurang.style.color = '#525252';
		box3_kurang.style.backgroundColor = '#a7a7a7';
		box3_cukup.style.color = '#525252';
		box3_cukup.style.backgroundColor = '#a7a7a7';
		box3_baik.style.color = '#000000';
		box3_baik.style.backgroundColor = '#5F9EA0';
		box3_sangat_baik.style.color = '#525252';
		box3_sangat_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio3_sangat_baik.checked){
		select_nilai3_kurang.disabled = true;
		select_nilai3_cukup.disabled = true;
		select_nilai3_baik.disabled = true;
		select_nilai3_sangat_baik.disabled = false;
		select_nilai3_kurang.value = "";
		select_nilai3_cukup.value = "";
		select_nilai3_baik.value = "";
		box3_kurang.style.color = '#525252';
		box3_kurang.style.backgroundColor = '#a7a7a7';
		box3_cukup.style.color = '#525252';
		box3_cukup.style.backgroundColor = '#a7a7a7';
		box3_baik.style.color = '#525252';
		box3_baik.style.backgroundColor = '#a7a7a7';
		box3_sangat_baik.style.color = '#000000';
		box3_sangat_baik.style.backgroundColor = '#5F9EA0';
	}else{
		select_nilai3_kurang.value = "";
		select_nilai3_cukup.value = "";
		select_nilai3_baik.value = "";
		select_nilai3_sangat_baik.value = "";
		box3_kurang.style.color = '#000000';
		box3_kurang.style.backgroundColor = '#5F9EA0';
		box3_cukup.style.color = '#000000';
		box3_cukup.style.backgroundColor = '#5F9EA0';
		box3_baik.style.color = '#000000';
		box3_baik.style.backgroundColor = '#5F9EA0';
		box3_sangat_baik.style.color = '#000000';
		box3_sangat_baik.style.backgroundColor = '#5F9EA0';
	}
}

function list4(){
	var radio4_kurang = document.getElementById('total_nilai4_kurang');
	var radio4_cukup = document.getElementById('total_nilai4_cukup');
	var radio4_baik = document.getElementById('total_nilai4_baik');
	var radio4_sangat_baik = document.getElementById('total_nilai4_sangat_baik');
	var box4_kurang = document.getElementById('nilai4_kurang');
	var box4_cukup = document.getElementById('nilai4_cukup');
	var box4_baik = document.getElementById('nilai4_baik');
	var box4_sangat_baik = document.getElementById('nilai4_sangat_baik');
	var select_nilai4_kurang = document.getElementById('select_nilai4_kurang');
	var select_nilai4_cukup = document.getElementById('select_nilai4_cukup');
	var select_nilai4_baik = document.getElementById('select_nilai4_baik');
	var select_nilai4_sangat_baik = document.getElementById('select_nilai4_sangat_baik');

	if(radio4_kurang.checked){
		select_nilai4_kurang.disabled = false;
		select_nilai4_cukup.disabled = true;
		select_nilai4_baik.disabled = true;
		select_nilai4_sangat_baik.disabled = true;
		select_nilai4_cukup.value = "";
		select_nilai4_baik.value = "";
		select_nilai4_sangat_baik.value = "";
		box4_kurang.style.color = '#000000';
		box4_kurang.style.backgroundColor = '#5F9EA0';
		box4_cukup.style.color = '#525252';
		box4_cukup.style.backgroundColor = '#a7a7a7';
		box4_baik.style.color = '#525252';
		box4_baik.style.backgroundColor = '#a7a7a7';
		box4_sangat_baik.style.color = '#525252';
		box4_sangat_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio4_cukup.checked){
		select_nilai4_kurang.disabled = true;
		select_nilai4_cukup.disabled = false;
		select_nilai4_baik.disabled = true;
		select_nilai4_sangat_baik.disabled = true;
		select_nilai4_kurang.value = "";
		select_nilai4_baik.value = "";
		select_nilai4_sangat_baik.value = "";
		box4_kurang.style.color = '#525252';
		box4_kurang.style.backgroundColor = '#a7a7a7';
		box4_cukup.style.color = '#000000';
		box4_cukup.style.backgroundColor = '#5F9EA0';
		box4_baik.style.color = '#525252';
		box4_baik.style.backgroundColor = '#a7a7a7';
		box4_sangat_baik.style.color = '#525252';
		box4_sangat_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio4_baik.checked){
		select_nilai4_kurang.disabled = true;
		select_nilai4_cukup.disabled = true;
		select_nilai4_baik.disabled = false;
		select_nilai4_sangat_baik.disabled = true;
		select_nilai4_kurang.value = "";
		select_nilai4_cukup.value = "";
		select_nilai4_sangat_baik.value = "";
		box4_kurang.style.color = '#525252';
		box4_kurang.style.backgroundColor = '#a7a7a7';
		box4_cukup.style.color = '#525252';
		box4_cukup.style.backgroundColor = '#a7a7a7';
		box4_baik.style.color = '#000000';
		box4_baik.style.backgroundColor = '#5F9EA0';
		box4_sangat_baik.style.color = '#525252';
		box4_sangat_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio4_sangat_baik.checked){
		select_nilai4_kurang.disabled = true;
		select_nilai4_cukup.disabled = true;
		select_nilai4_baik.disabled = true;
		select_nilai4_sangat_baik.disabled = false;
		select_nilai4_kurang.value = "";
		select_nilai4_cukup.value = "";
		select_nilai4_baik.value = "";
		box4_kurang.style.color = '#525252';
		box4_kurang.style.backgroundColor = '#a7a7a7';
		box4_cukup.style.color = '#525252';
		box4_cukup.style.backgroundColor = '#a7a7a7';
		box4_baik.style.color = '#525252';
		box4_baik.style.backgroundColor = '#a7a7a7';
		box4_sangat_baik.style.color = '#000000';
		box4_sangat_baik.style.backgroundColor = '#5F9EA0';
	}else{
		select_nilai4_kurang.value = "";
		select_nilai4_cukup.value = "";
		select_nilai4_baik.value = "";
		select_nilai4_sangat_baik.value = "";
		box4_kurang.style.color = '#000000';
		box4_kurang.style.backgroundColor = '#5F9EA0';
		box4_cukup.style.color = '#000000';
		box4_cukup.style.backgroundColor = '#5F9EA0';
		box4_baik.style.color = '#000000';
		box4_baik.style.backgroundColor = '#5F9EA0';
		box4_sangat_baik.style.color = '#000000';
		box4_sangat_baik.style.backgroundColor = '#5F9EA0';
	}
}

function list5(){
	var radio5_kurang = document.getElementById('total_nilai5_kurang');
	var radio5_cukup = document.getElementById('total_nilai5_cukup');
	var radio5_baik = document.getElementById('total_nilai5_baik');
	var box5_kurang = document.getElementById('nilai5_kurang');
	var box5_cukup = document.getElementById('nilai5_cukup');
	var box5_baik = document.getElementById('nilai5_baik');
	var select_nilai5_kurang = document.getElementById('select_nilai5_kurang');
	var select_nilai5_cukup = document.getElementById('select_nilai5_cukup');
	var select_nilai5_baik = document.getElementById('select_nilai5_baik');

	if(radio5_kurang.checked){
		select_nilai5_kurang.disabled = false;
		select_nilai5_cukup.disabled = true;
		select_nilai5_baik.disabled = true;
		select_nilai5_cukup.value = "";
		select_nilai5_baik.value = "";
		box5_kurang.style.color = '#000000';
		box5_kurang.style.backgroundColor = '#5F9EA0';
		box5_cukup.style.color = '#525252';
		box5_cukup.style.backgroundColor = '#a7a7a7';
		box5_baik.style.color = '#525252';
		box5_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio5_cukup.checked){
		select_nilai5_kurang.disabled = true;
		select_nilai5_cukup.disabled = false;
		select_nilai5_baik.disabled = true;
		select_nilai5_kurang.value = "";
		select_nilai5_baik.value = "";
		box5_kurang.style.color = '#525252';
		box5_kurang.style.backgroundColor = '#a7a7a7';
		box5_cukup.style.color = '#000000';
		box5_cukup.style.backgroundColor = '#5F9EA0';
		box5_baik.style.color = '#525252';
		box5_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio5_baik.checked){
		select_nilai5_kurang.disabled = true;
		select_nilai5_cukup.disabled = true;
		select_nilai5_baik.disabled = false;
		select_nilai5_kurang.value = "";
		select_nilai5_cukup.value = "";
		box5_kurang.style.color = '#525252';
		box5_kurang.style.backgroundColor = '#a7a7a7';
		box5_cukup.style.color = '#525252';
		box5_cukup.style.backgroundColor = '#a7a7a7';
		box5_baik.style.color = '#000000';
		box5_baik.style.backgroundColor = '#5F9EA0';
	}else{
		select_nilai5_kurang.value = "";
		select_nilai5_cukup.value = "";
		select_nilai5_baik.value = "";
		box5_kurang.style.color = '#000000';
		box5_kurang.style.backgroundColor = '#5F9EA0';
		box5_cukup.style.color = '#000000';
		box5_cukup.style.backgroundColor = '#5F9EA0';
		box5_baik.style.color = '#000000';
		box5_baik.style.backgroundColor = '#5F9EA0';
	}
}

function list6(){
	var radio6_kurang = document.getElementById('total_nilai6_kurang');
	var radio6_cukup = document.getElementById('total_nilai6_cukup');
	var box6_kurang = document.getElementById('nilai6_kurang');
	var box6_cukup = document.getElementById('nilai6_cukup');
	var select_nilai6_kurang = document.getElementById('select_nilai6_kurang');
	var select_nilai6_cukup = document.getElementById('select_nilai6_cukup');

	if(radio6_kurang.checked){
		select_nilai6_kurang.disabled = false;
		select_nilai6_cukup.disabled = true;
		select_nilai6_cukup.value = "";
		box6_kurang.style.color = '#000000';
		box6_kurang.style.backgroundColor = '#5F9EA0';
		box6_cukup.style.color = '#525252';
		box6_cukup.style.backgroundColor = '#a7a7a7';
	}else if(radio6_cukup.checked){
		select_nilai6_kurang.disabled = true;
		select_nilai6_cukup.disabled = false;
		select_nilai6_kurang.value = "";
		box6_kurang.style.color = '#525252';
		box6_kurang.style.backgroundColor = '#a7a7a7';
		box6_cukup.style.color = '#000000';
		box6_cukup.style.backgroundColor = '#5F9EA0';
	}else{
		select_nilai6_kurang.value = "";
		select_nilai6_cukup.value = "";
		box6_kurang.style.color = '#000000';
		box6_kurang.style.backgroundColor = '#5F9EA0';
		box6_cukup.style.color = '#000000';
		box6_cukup.style.backgroundColor = '#5F9EA0';
	}
}

function list7(){
	var radio7_kurang = document.getElementById('total_nilai7_kurang');
	var radio7_cukup = document.getElementById('total_nilai7_cukup');
	var radio7_baik = document.getElementById('total_nilai7_baik');
	var box7_kurang = document.getElementById('nilai7_kurang');
	var box7_cukup = document.getElementById('nilai7_cukup');
	var box7_baik = document.getElementById('nilai7_baik');
	var select_nilai7_kurang = document.getElementById('select_nilai7_kurang');
	var select_nilai7_cukup = document.getElementById('select_nilai7_cukup');
	var select_nilai7_baik = document.getElementById('select_nilai7_baik');

	if(radio7_kurang.checked){
		select_nilai7_kurang.disabled = false;
		select_nilai7_cukup.disabled = true;
		select_nilai7_baik.disabled = true;
		select_nilai7_cukup.value = "";
		select_nilai7_baik.value = "";
		box7_kurang.style.color = '#000000';
		box7_kurang.style.backgroundColor = '#5F9EA0';
		box7_cukup.style.color = '#525252';
		box7_cukup.style.backgroundColor = '#a7a7a7';
		box7_baik.style.color = '#525252';
		box7_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio7_cukup.checked){
		select_nilai7_kurang.disabled = true;
		select_nilai7_cukup.disabled = false;
		select_nilai7_baik.disabled = true;
		select_nilai7_kurang.value = "";
		select_nilai7_baik.value = "";
		box7_kurang.style.color = '#525252';
		box7_kurang.style.backgroundColor = '#a7a7a7';
		box7_cukup.style.color = '#000000';
		box7_cukup.style.backgroundColor = '#5F9EA0';
		box7_baik.style.color = '#525252';
		box7_baik.style.backgroundColor = '#a7a7a7';
	}else if(radio7_baik.checked){
		select_nilai7_kurang.disabled = true;
		select_nilai7_cukup.disabled = true;
		select_nilai7_baik.disabled = false;
		select_nilai7_kurang.value = "";
		select_nilai7_cukup.value = "";
		box7_kurang.style.color = '#525252';
		box7_kurang.style.backgroundColor = '#a7a7a7';
		box7_cukup.style.color = '#525252';
		box7_cukup.style.backgroundColor = '#a7a7a7';
		box7_baik.style.color = '#000000';
		box7_baik.style.backgroundColor = '#5F9EA0';
	}else{
		select_nilai7_kurang.value = "";
		select_nilai7_cukup.value = "";
		select_nilai7_baik.value = "";
		box7_kurang.style.color = '#000000';
		box7_kurang.style.backgroundColor = '#5F9EA0';
		box7_cukup.style.color = '#000000';
		box7_cukup.style.backgroundColor = '#5F9EA0';
		box7_baik.style.color = '#000000';
		box7_baik.style.backgroundColor = '#5F9EA0';
	}
}
