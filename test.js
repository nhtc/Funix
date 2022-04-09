// $(document).ready(function () {
//     let numOfStudent = $("#mark_table tr").length;
//     console.log("adasdSA",numOfStudent);
//     const testScore = {
//         name: "",
//         math: 0,
//         physical: 0,
//         chemistry: 0
//     };
//     $("#btn-input").click(function () {
//         insertInfo();
//     });
//     $("#btn-avg").click(function (){
//         calcAverage();
//     });
//     $("#btn-del").click(function(){
//         deleteRow();
//     });
//     $("#btn-classify").click(function(){
//         classification();
//     });
//     $("#btn").click(function(){
//         $("#mark_table tr:gt(0)").each(function(){
//             var currentRow=$(this);
//             console.log(currentRow.find("td:eq(2)").text(),
//             currentRow.next().find("td:eq(2)").text());
//         });
//     });
    
    
// function insertInfo() {
//     testScore.name = $("#name").val();
//     testScore.math = $("#maths").val();
//     testScore.physical = $("#physics").val();
//     testScore.chemistry = $("#chemistry").val();
//     if (testScore.name == "" || testScore.math == "" || testScore.physical == "" ||
//         testScore.chemistry == "") {
//         alert("Vui lòng nhập đủ các thông tin!");
//     } else if (!between(testScore.math, 0, 10) || !between(testScore.physical, 0, 10) ||
//         !between(testScore.chemistry, 0, 10)) {
//         alert("Điểm tối đa là 10!");

//     } else {
//         numOfStudent++;
//         insertTable();
//         $("#name").val("");
//         $("#maths").val("");
//         $("#physics").val("");
//         $("#chemistry").val("");
//     }
// }


// function insertTable() {
//     var table = $("#mark_table");
//     var row = $('<tr></tr>');
//     row.append($("<td></td>").text(numOfStudent));
//     row.append($("<td></td>").text(testScore.name));
//     row.append($("<td></td>").text(testScore.math));
//     row.append($("<td></td>").text(testScore.physical));
//     row.append($("<td></td>").text(testScore.chemistry));
//     row.append($("<td></td>").text("?"));
//     table.append(row);
// }


// function calcAverage() {
//     //các row có index greater than 0-- bỏ row header
//     $("#mark_table tr:gt(0)").each(function(){
//         var currentRow=$(this);
//         var avg = (parseFloat(currentRow.find("td:eq(2)").text()) +
//                  parseFloat(currentRow.find("td:eq(3)").text()) +
//                   parseFloat(currentRow.find("td:eq(4)").text())) / 3;
//         currentRow.find("td:eq(5)").text(avg.toFixed(1));
// });
// }

// function classification() {
//     var x = $("#mark_table tr:gt(0)").find("td:eq(5)").text();
//     if(x.indexOf("?") > -1){//kiểm tra xem đã tính hết điểm trung bình chưa
//         alert("Vui lòng tính điểm trung bình trước!");    
//     }
//     $("#mark_table tr:gt(0)").each(function(){
//         var currentRow=$(this);
//     if(parseFloat(currentRow.find("td:eq(5)").text())>=8){
//         // currentRow.css("background-color","red");
//         currentRow.addClass("red");
//     }
//     });
// }
// k
// function between(x, min, max) {
//     return x >= min && x <= max;
// }


// function deleteRow() {
//     n = parseInt($("#id-student").val());
//     $("#id-student").val("");
//     len_tb = $("#mark_table tr").length;
//     if (parseInt(n) < len_tb && parseInt(n) != 0) {
//         $("#mark_table tr:eq(" + n +")").remove();
//         numOfStudent--;
//         $("#mark_table tr:gt("+(n-1)+")").each(function(){
//             currentRow=$(this);
//             var st = parseInt(currentRow.find("td:eq(0)").text()) - 1;
//             console.log(st);
//             currentRow.find("td:eq(0)").text(st);
//         });
//     }
// }



// //Tham khảo nguồn từ W3School
// //  https://www.w3schools.com/howto/howto_js_sort_table.asp
// function sortTable(n) {
//     var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
//     table = document.getElementById("mark_table");
//     table1=$("#mark_tanle");
//     switching = true;
//     //Set the sorting direction to ascending:
//     dir = "asc"; 
//     /*Make a loop that will continue until
//     no switching has been done:*/
//     while (switching) {
//         //start by saying: no switching is done:
//         switching = false;
//         rows = table.rows;
//         /*Loop through all table rows (except the
//         first, which contains table headers):*/
//         for (i = 1; i < (rows.length - 1); i++) {
//             //start by saying there should be no switching:
//             shouldSwitch = false;
//             /*Get the two elements you want to compare,
//             one from current row and one from the next:*/
//             x = rows[i].getElementsByTagName("TD")[n];
//             y = rows[i + 1].getElementsByTagName("TD")[n];
//             /*check if the two rows should switch place,
//             based on the direction, asc or desc:*/
//             if(n==1){
//                 if (dir == "asc") {
//                     if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//                     //if so, mark as a switch and break the loop:
//                     shouldSwitch= true;
//                     break;
//                     }
//                 } else if (dir == "desc") {
//                     if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//                     //if so, mark as a switch and break the loop:
//                     shouldSwitch = true;
//                     break;
//                         }
//                     }
//             } else {
//                 if (dir == "asc") {
//                     if (parseFloat(x.innerHTML)> parseFloat(y.innerHTML)) {
//                     //if so, mark as a switch and break the loop:
//                     shouldSwitch= true;
//                     break;
//                     }
//                 } else if (dir == "desc") {
//                     if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML)) {
//                     //if so, mark as a switch and break the loop:
//                     shouldSwitch = true;
//                     break;
//                         }
//                     }
//             }
//         }
//         if (shouldSwitch) {
//         /*If a switch has been marked, make the switch
//         and mark that a switch has been done:*/
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         switching = true;
//         //Each time a switch is done, increase this count by 1:
//         switchcount ++;      
//         } else {
//         /*If no switching has been done AND the direction is "asc",
//         set the direction to "desc" and run the while loop again.*/
//         if (switchcount == 0 && dir == "asc") {
//             dir = "desc";
//             switching = true;
//         }  
//         }
//     }
//     }


// });



let numOfStudent = 0;
const testScore = { 
    name: "",
    math: 0,
    physical: 0,
    chemistry: 0
};

function insertInfo() {
    testScore.name=document.getElementById("name").value;
    testScore.math=document.getElementById("maths").value;
    testScore.physical=document.getElementById("physics").value;
    testScore.chemistry=document.getElementById("chemistry").value;

    if (testScore.name == "" || testScore.math == "" || testScore.physical =="" ||
        testScore.chemistry=="") {
            alert("Vui lòng nhập đủ các thông tin!");
    }else if(!between(testScore.math,0,10) || !between(testScore.physical,0,10) || 
        !between(testScore.chemistry,0,10)){
            alert("Điểm tối đa là 10!");

    }else {
        numOfStudent++;
        insertTable();
        document.getElementById("name").value="";
        document.getElementById("maths").value="";
        document.getElementById("physics").value="";
        document.getElementById("chemistry").value="";
    }
    
}


function insertTable() {
    var table = document.getElementById("mark_table");
    var row = table.insertRow(numOfStudent);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);  
    var cell6 = row.insertCell(5);
    cell1.innerHTML = numOfStudent; 
    cell2.innerHTML = testScore.name;
    cell3.innerHTML = testScore.math; 
    cell4.innerHTML = testScore.physical; 
    cell5.innerHTML = testScore.chemistry; 
    cell6.innerHTML = "?"; 
}


function calcAverage() {
    var table = document.getElementById("mark_table");
    var numOfRow = table.rows.length;
    for (var i=1; i < numOfRow; i++) {
        var cell_array = table.rows[i].cells;
        var avg = (parseFloat(cell_array[2].innerHTML)+parseFloat(cell_array[3].innerHTML)+parseFloat(cell_array[4].innerHTML))/3;
        cell_array[5].innerHTML=avg.toFixed(1);
        console.log(avg);
    }
}

function classification() {
    tableCells=document.getElementById("mark_table");
    if(tableCells.rows[1].cells[5].innerHTML == "?"){
        alert("Vui lòng tính điểm trung bình trước!")
    }else {
        var rowOfTable = tableCells.getElementsByTagName("tr");
        for (var i=1; i < rowOfTable.length; i++) {
            if(parseFloat(tableCells.rows[i].cells[5].innerHTML) > 8){
                console.log("da chay toi")
                rowOfTable[i].style.backgroundColor = "red";
            }
        }
    }
}

function between(x, min, max) {
    return x >= min && x <= max;
  }



//Tham khảo nguồn từ W3School
//  https://www.w3schools.com/howto/howto_js_sort_table.asp
function sortTable(n) {


var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
table = document.getElementById("mark_table");
switching = true;
//Set the sorting direction to ascending:
dir = "asc"; 
/*Make a loop that will continue until
no switching has been done:*/
while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if(n==1){
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch= true;
                break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
                    }
                }
        } else {
            if (dir == "asc") {
                if (parseFloat(x.innerHTML)> parseFloat(y.innerHTML)) {
                //if so, mark as a switch and break the loop:
                shouldSwitch= true;
                break;
                }
            } else if (dir == "desc") {
                if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML)) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
                    }
                }
        }
    }
    if (shouldSwitch) {
    /*If a switch has been marked, make the switch
    and mark that a switch has been done:*/
    console.log("row i ne ",rows[i]);
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    //Each time a switch is done, increase this count by 1:
    switchcount ++;      
    } else {
    /*If no switching has been done AND the direction is "asc",
    set the direction to "desc" and run the while loop again.*/
    if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
    }  
    }
}
}

function deleteRow() {
    n =document.getElementById("id-student").value;
    document.getElementById("id-student").value="";
    table=document.getElementById("mark_table");
    if(parseInt(n) < table.rows.length && parseInt(n)!=0){
        table.deleteRow(n);
        numOfStudent--;
        for (var i=n; i < table.rows.length;i++){
            table.rows[i].cells[0].innerHTML= parseInt(table.rows[i].cells[0].innerHTML) - 1;
        }
    }
}

