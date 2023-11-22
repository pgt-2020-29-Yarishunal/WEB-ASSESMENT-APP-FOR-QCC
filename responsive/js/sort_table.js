function sort_Table1() {
  var table, rows, switching, i, x, y, shouldSwitch, id_table,kolom;
  table = document.getElementById("isi_tabel4");
  option_list = document.getElementById("sort_nilai_lapangan");
  sort_value = document.getElementsByName('sort_nama1')[option_list.selectedIndex+1].value;
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TH")[1];
      y = rows[i + 1].getElementsByTagName("TH")[1];
      //check if the two rows should switch place:
      if(sort_value == 'adc'){
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
      }else if(sort_value == 'asc'){
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
      }
      
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;    

    }
  }
}

function sort_Table2() {
  var table, rows, switching, i, x, y, shouldSwitch, id_table,kolom;
  table = document.getElementById("isi_tabel4");
  option_list = document.getElementById("sort_nilai_presentasi");
  sort_value = document.getElementsByName('sort_nama2')[option_list.selectedIndex+1].value;
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TH")[2];
      y = rows[i + 1].getElementsByTagName("TH")[2];
      //check if the two rows should switch place:
      if(sort_value == 'adc'){
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
      }else if(sort_value == 'asc'){
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
      }
      
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;    

    }
  }
}

function sort_Table3() {
  var table, rows, switching, i, x, y, shouldSwitch, id_table,kolom;
  table = document.getElementById("isi_tabel4");
  option_list = document.getElementById("sort_nilai_total");
  sort_value = document.getElementsByName('sort_nama3')[option_list.selectedIndex+1].value;
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TH")[3];
      y = rows[i + 1].getElementsByTagName("TH")[3];
      //check if the two rows should switch place:
      if(sort_value == 'adc'){
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
      }else if(sort_value == 'asc'){
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
      }
      
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;    

    }
  }
}

