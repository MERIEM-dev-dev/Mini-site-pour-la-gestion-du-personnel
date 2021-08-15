// /////////////////////Ajouter//////////////////// //

document.getElementById("add").addEventListener('click', function () {
    document.getElementById("crud-form").style.display = "block";
});

// ////////////////////valider///////////////////// //

document.getElementById("valider").addEventListener('click', function () {

    var nom = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var addr = document.getElementById("address").value;
    var tele = document.getElementById("phone").value;


    var table = document.getElementById("myTable");
    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);


    cell1.innerHTML = ` <span class="custom-checkbox">
                    <input type="checkbox" id="checkbox1" name="options[]" value="1">
                    <label for="checkbox1"></label>
                </span>`
    cell2.innerHTML = nom;
    cell3.innerHTML = mail;
    cell4.innerHTML = addr;
    cell5.innerHTML = tele;
    cell6.innerHTML =  `<td>
                <a href="#" class="edit"><i class="material-icons" title="Edit">&#xE254;</i></a>
                <a href="#" class="delete"><i class="material-icons" title="Delete">&#xE872;</i></a>
            </td>`
        });

// ////////////////// Annuler///////////////////// // 

document.getElementById("Annuler").addEventListener('click', function () {

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("address").value="";
    document.getElementById("phone").value="";      
    
        
});

// ///////////////////// Selectioner tout/////////////////// //

document.getElementById("selectAll").addEventListener('click',function(){
var elements = document.getElementsByTagName("input");
for (var i=0; i < elements.length; i++) {
if (elements[i].type == "checkbox") {
if(document.getElementById('selectAll').checked)
{
    elements[i].checked = true;
}
else{
    elements[i].checked = false;
}

}

}
})

// /////////////Supprimer//////////// //

function ddelete (){
let rows=document.getElementById("myTable").getElementsByTagName("tr");
for (let i = 0; i < rows.length; i++) {
rows[i].onclick = function() {
   document.getElementById("myTable").deleteRow(this.rowIndex);
}
}
}

//  ////////////////Editer////////////////// //

function edit(element){
    let row = element.parentElement.parentElement;
    console.log(row);
    let nom = row.cells[1].innerHTML;
    let email = row.cells[2].innerHTML;
    let address = row.cells[3].innerHTML;
    let telephone = row.cells[4].innerHTML;


    document.getElementById("crud-form").style.display = "block";
    
    document.getElementById('name').value = nom;
    document.getElementById('email').value =email;
    document.getElementById('address').value = address;
    document.getElementById('phone').value = telephone;

}


// /////////////////Supprimer Tout///////////////// //

function deleteall(){
    var supp = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr')
    var i= supp.length
    while(i--){
      if(supp[i].getElementsByTagName('input')[0].checked){
        supp[i].parentNode.removeChild(supp[i])
      }
    }
  }

// //////////////////Filtrer//////////////////// //

$(document).ready(function(){
    $("#myInputt").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  
//  ///////////////////////Importer//////////////////////////// //

document.getElementById('import').addEventListener('click',function(){
  var xhr=new XMLHttpRequest();   //appel a ajax//
  xhr.open('GET','file.json',true);
  
  xhr.onload = function(){
  if(xhr.status == 200){
      var data = JSON.parse(xhr.responseText);
      for(var i=0;i<data.length;i++){
          $('#myTable').append("<tr><td><span class='custom-checkbox'><input type='checkbox' id='checkbox1' name='type' value='1'><label for='checkbox1'></label></span></td><td>"+data[i].name+"</td><td>"+data[i].email+"</td><td>"+data[i].address+"</td><td>"+data[i].phone+"</td><td><a href='#' class='edit' onclick='edit(this)'><i class='material-icons' title='Edit'>&#xE254;</i></a><a href='#' class='delete' onclick='ddelete(this)'><i class='material-icons' title='Delete'>&#xE872;</i></a></td></tr>")
          }
      }
  }
  xhr.send();
})

